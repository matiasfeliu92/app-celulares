from flask import jsonify, Flask, render_template, request, redirect, url_for
from utils.scrap import celulares

app = Flask(__name__)

@app.route("/")
def hello():
    return jsonify('hello world')

@app.route("/celulares")
def mostrarcelulares():
    return jsonify(celulares)

if __name__ == "__main__":
    app.run(debug=True, port=4000)