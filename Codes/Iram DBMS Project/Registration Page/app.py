from flask import Flask, render_template, request, redirect, flash, url_for
import sqlite3

app = Flask(__name__)
app.secret_key = "your_secret_key_here"  # Replace with a secure key for production


# Helper function to connect to the SQLite database
def get_db_connection():
    conn = sqlite3.connect('database_registration.db')
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Retrieve form data from the POST request
        first_name = request.form.get('first-name')
        middle_name = request.form.get('middle-name')
        last_name = request.form.get('last-name')
        email = request.form.get('email')
        id_proof = request.form.get('id-proof')
        dob = request.form.get('dob')
        members = request.form.get('members')

        # Insert into the SQLite database
        conn = get_db_connection()
        query = """
            INSERT INTO users (first_name, middle_name, last_name, email, id_proof, dob, members)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """
        conn.execute(query, (first_name, middle_name, last_name, email, id_proof, dob, members))
        conn.commit()
        conn.close()

        flash('Registration successful! Your details have been recorded.')
        return redirect(url_for('register'))

    # Render the registration form on GET request
    return render_template('registration.html')


if __name__ == '__main__':
    app.run(debug=True)