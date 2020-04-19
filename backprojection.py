import numpy as np
from skimage.transform import radon
from scipy.fft import fft, ifft, fftshift

def get_single_projection(image, theta):
    """
    Get single projection at angle theta and return the projection (radon transform) at angle theta
    :param theta:
    :return:
    """
    theta_for_radon = np.zeros(1)
    theta_for_radon[0] = -theta
    sinogram = radon(image, theta=theta_for_radon)
    projection = sinogram.reshape(-1)
    return projection


def get_sinogram(image, min_angle_degrees, max_angle_degrees, n_points):
    theta = np.linspace(min_angle_degrees, max_angle_degrees, n_points, endpoint=True)
    sinogram = radon(image, theta=theta)
    return sinogram, theta


def fft_projection(projection):
    ft = fftshift(fft(projection))
    return ft


def ramp_filter_500():
    filt = np.linspace(0, 0.5, 250, endpoint=True)
    ramp = np.zeros(500)
    ramp[250::] = filt
    ramp[:250] = filt
    return ramp


def fftshift_ifft(fourier_transform):
    ft = fftshift(fourier_transform)
    real = ifft(ft)
    return real


def apply_ramp(projection):
    ft = fft_projection(projection)
    ramp = ramp_filter_500()
    ft_filt = ft * ramp
    proj_filtered = fftshift_ifft(ft_filt)
    return proj_filtered