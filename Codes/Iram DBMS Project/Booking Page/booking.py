from flask import Flask, render_template, request, redirect, flash, url_for
import sqlite3

app = Flask(__name__)
app.secret_key = "your_secret_key_here"  # Replace with a secure key for production

# Helper function to connect to the SQLite database
def get_db_connection():
    conn = sqlite3.connect('database_bookings.db')
    conn.row_factory = sqlite3.Row
    return conn

# Route for the booking page (handles GET and POST requests)
@app.route('/booking', methods=['GET', 'POST'])
def booking():
    if request.method == 'POST':
        # Retrieve form data from the booking form
        primary_guest = request.form.get('primary-guest')
        guests       = request.form.get('guests')
        check_in     = request.form.get('check-in')
        check_out    = request.form.get('check-out')
        nights       = request.form.get('nights')

        conn = get_db_connection()
        query = """
            INSERT INTO bookings (primary_guest, guests, check_in, check_out, nights)
            VALUES (?, ?, ?, ?, ?)
        """
        conn.execute(query, (primary_guest, guests, check_in, check_out, nights))
        conn.commit()
        conn.close()

        flash('Booking successful! Your booking has been recorded.')
        return redirect(url_for('booking'))

    # Render the booking form on GET request
    return render_template('booking.html')

if __name__ == '__main__':
    app.run(debug=True)