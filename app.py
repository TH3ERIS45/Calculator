from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')  

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    expression = data.get('expression') 

    try:
        result = eval(expression)
        return jsonify({'result': result})
    except Exception:
        return jsonify({'error': 'Invalid Expression'})

if __name__ == '__main__':
    app.run(debug=True)
