import numpy as np
from skimage.transform import resize
from skimage.io import imread


def grayscale(image):
    image = np.mean(image, 2)
    return image


def square(image):
    shape = image.shape[0:2]
    if shape[0] == shape[1]:
        return image

    min_length = np.amin(shape)
    max_length = np.amax(shape)
    max_dim = np.argmax(shape)
    midpoint_min_dim = round(min_length / 2)
    midpoint_max_dim = round(max_length / 2)

    start = int(midpoint_max_dim - midpoint_min_dim)
    end = int(midpoint_max_dim + midpoint_min_dim)


    if max_dim == 0:
        image = image[start:end, :]

    elif max_dim == 1:
        image = image[:, start:end]

    return image


def rescale(image):
    """
    rescale image to 500, 500, values in range 0-1
    :param image:
    :return:
    """
    image = resize(image, (500,500), anti_aliasing=True)
    image /= 255
    return image


def preprocess(filename):
    image = imread(filename)
    image = grayscale(image)
    image = square(image)
    image = rescale(image)
    return image


from backend.backprojection import ramp_filter_500

filt = ramp_filter_500()
