from flask import Flask, render_template, request, redirect, flash, url_for
import sqlite3

app = Flask(__name__)
app.secret_key = "your_restaurant_secret_key"  # Replace with a secure key


# Helper function to connect to the restaurant database
def get_db_connection():
    conn = sqlite3.connect('restaurant.db')
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/restaurant', methods=['GET', 'POST'])
def restaurant():
    if request.method == 'POST':
        # Retrieve form data from the restaurant reservation form
        primary_member = request.form.get('primary-member')
        guests = request.form.get('guests')

        # Insert the data into the new table
        conn = get_db_connection()
        query = """
            INSERT INTO restaurant_reservations (primary_member, guests)
            VALUES (?, ?)
        """
        conn.execute(query, (primary_member, guests))
        conn.commit()
        conn.close()

        flash('Reservation successful! Your reservation has been recorded.')
        return redirect(url_for('restaurant'))

    return render_template('restaurant.html')


if __name__ == '__main__':
    app.run(debug=True)