from flask import Flask, render_template, request, redirect, url_for, jsonify, send_file
from flask_cors import CORS
from werkzeug.utils import secure_filename
from random import randint
import os
import io
import json
UPLOAD_FOLDER ='downloads'

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['TEMPLATES_AUTO_RELOAD'] = True
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'pptx', 'docx'}

files={}
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/upload', methods = ['POST'])
def upload_file():
    print(request.files)
    file = request.files['file']
    # If the user does not select a file, the browser submits an
    # empty file without a filename.
    if file.filename == '':
        flash('No selected file')
        value={
            "error": "No File Provided"
        }
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        code=randint(1000,9999)
        value={'code': code}
        files[code] = filename
    else:
        value={
            "error": "File format not valid"
        }
        value=jsonify(value)
        value.headers.add('Access-Control-Allow-Origin', '*')
    return value

@app.route('/recieve', methods = ['GET'])
def recieve_file():
    code = request.args.get('code')
    filename = files.get(int(code))
    fpath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    return send_file(fpath, download_name=filename, as_attachment=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081)
