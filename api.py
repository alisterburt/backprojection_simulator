import flask
from flask import request, jsonify


from skimage.transform import rotate
from skimage.io import imread, imsave
from image import preprocess
from backprojection import get_single_projection

app = flask.Flask(__name__)
app.config['DEBUG'] = True

image = preprocess('./backprojection-simulator/src/assets/rabbit.png')


def jsonify_numpy(numpy_array):
    array_list = numpy_array.tolist()
    json = jsonify(array_list)
    return json


@app.route('/', methods=['GET'])
def home():
    return "<h1>Backprojection gimpulator</h1><p>This site is a prototype API for the simulation of backprojection of images</p>"


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
    filename = './backprojection-simulator/src/assets/image_rotated.png'
    imsave(filename, image_rotated)
    return jsonify(filename)



app.run()