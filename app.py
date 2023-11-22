from flask import Flask, render_template, request

import executa


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
@app.route("/lista",methods=['GET','POST'])
def printe():
    if request.method == 'POST':
        data = request.form['txt']
    else:
        data= ""
    aux = executa.get_lista(str(data))

    return aux

if __name__ == "__main__":
    app.run(
        host = "127.0.0.1",
        port = 5001,
        debug=True
    )