import io
import os

import flask
from PIL import Image
from flask import request, jsonify
from flask import send_file
from matplotlib.pyplot import savefig

from skimage.transform import rotate
from skimage.io import imsave

from backend.backprojection import get_single_projection
from backend.image import preprocess

app = flask.Flask(__name__)
app.config['DEBUG'] = True

resource_path = os.path.join(app.root_path, 'static')
image = preprocess(resource_path + '/rabbit.png')



def jsonify_numpy(numpy_array):
    array_list = numpy_array.tolist()
    json = jsonify(array_list)
    return json


<<<<<<< HEAD:backend/api.py
books = [
    {'id': 0,
     'title': 'A Fire Upon the Deep',
     'author': 'Vernor Vinge',
     'first_sentence': 'The coldsleep itself was dreamless.',
     'year_published': '1992'},
    {'id': 1,
     'title': 'The Ones Who Walk Away From Omelas',
     'author': 'Ursula K. Le Guin',
     'first_sentence': 'With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.',
     'published': '1973'},
    {'id': 2,
     'title': 'Dhalgren',
     'author': 'Samuel R. Delany',
     'first_sentence': 'to wound the autumnal city.',
     'published': '1975'}
]


=======
>>>>>>> master:api.py
@app.route('/', methods=['GET'])
def home():
    return "<h1>Backprojection gimpulator</h1><p>This site is a prototype API for the simulation of backprojection of images</p>"


@app.route('/rotated.png', methods=["GET"])
def get_image():
    return send_file(resource_path + "/image_rotated.png", attachment_filename='logo.png', mimetype='image/png')


@app.route('/api/get_projection', methods=['GET'])
def api_get_projection():
    global image
    if 'theta' in request.args:
        theta = float(request.args['theta'])
    else:
        return "Error: no theta field provided, please specify the projection angle"

    projection = get_single_projection(image, theta=theta)
    return jsonify_numpy(projection)


@app.route('/api/rotate_image', methods=['GET'])
def api_rotate_image():
    global image
    if 'theta' in request.args:
        theta = float(request.args['theta'])
    else:
        return "Error: no theta field provided, please specify the rotation angle"

    image_rotated = rotate(image, theta)
    filename = resource_path + '/image_rotated.png'
    imsave(filename, image_rotated)
    return jsonify(filename)


app.run()
