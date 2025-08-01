from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def handle_submit():
    data = request.form
    return jsonify({"message": "Received", "data": data.to_dict()})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
