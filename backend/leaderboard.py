from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
CORS(app)

# Database configuration
db_config = {
    'host': 'sql12.freesqldatabase.com',
    'user': 'sql12735401',
    'password': 'RDh4zLdkk2',
    'database': 'sql12735401'
}

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    
    if not email or not password:
        return jsonify({"error": "Email and password are required."}), 400

    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Insert user into the user_db table
        cursor.execute("INSERT INTO user_db (name, email, password) VALUES (%s, %s, %s)", (name, email, password))
        conn.commit()

        cursor.close()
        conn.close()

        return jsonify({"message": "User registered successfully!"}), 201

    except Error as e:
        print(f"Database error: {e}")
        return jsonify({"error": "Internal Server Error"}), 500


@app.route('/api/leaderboard', methods=['GET'])
def get_leaderboard():
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        cursor.execute("""
            SELECT 
                id, 
                name, 
                player_points AS points, 
                time_factor AS time, 
                efficiency_factor AS efficiency 
            FROM leaderboard 
            ORDER BY time_factor ASC, efficiency_factor DESC, player_points DESC
        """)
        leaderboard_data = cursor.fetchall()

        cursor.close()
        conn.close()

        return jsonify(leaderboard_data)

    except Error as e:
        print(f"Database error: {e}")
        return jsonify({"error": "Internal Server Error"}), 500
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Perform your authentication logic here
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        # Query to check if the user exists and validate the password
        cursor.execute("SELECT * FROM user_db WHERE email = %s AND password = %s", (email, password))
        user = cursor.fetchone()

        cursor.close()
        conn.close()

        if user:
            return jsonify({"message": "Login successful!", "user": user}), 200
        else:
            return jsonify({"error": "Invalid email or password."}), 401

    except Error as e:
        print(f"Database error: {e}")
        return jsonify({"error": "Internal Server Error"}), 500


if __name__ == '__main__':
    app.run(debug=True)