from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/images/<path:filename>')
def serve_general_image(filename):
    return send_from_directory('static/images', filename) # type: ignore

@app.route('/images/logos_clientes/<path:filename>')
def serve_client_logo(filename):
    return send_from_directory('static/images/logos_clientes', filename) # type: ignore

@app.route('/' )
def index():
    return render_template('index.html')

@app.route('/contacto.html')
def contacto():
    return render_template('contacto.html')

@app.route('/clientes.html')
def clientes():
    return render_template('clientes.html')

@app.route('/servicios.html')
def sobre():
    return render_template('servicios.html')

@app.route('/nosotros.html')
def nosotros():
    return render_template('nosotros.html')

if __name__ == '__main__':
    app.run(debug=True)
    
