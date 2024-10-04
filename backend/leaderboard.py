from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
CORS(app)

# Database configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'W7301@jqir#',
    'database': 'interlopers'
}

@app.route('/api/leaderboard', methods=['GET'])
def get_leaderboard():
    try:
        # Connect to the database
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        # Query the leaderboard data
        cursor.execute("SELECT id, name, player_points AS points FROM leaderboard ORDER BY player_points DESC")
        leaderboard_data = cursor.fetchall()

        # Close the cursor and connection
        cursor.close()
        conn.close()

        # Return the data as JSON
        return jsonify(leaderboard_data)

    except Error as e:
        print(f"Error: {e}")  # Log the exact error
        return jsonify({"error": "An error occurred while fetching the leaderboard data"}), 500

if __name__ == '__main__':
    app.run(debug=True)
