# Request are objects that flask handles (GET PUT POST DELETE)
from flask import Flask, render_template, request

# Scientific computing library for saving, reading, and resizing images
from PIL import Image

# Matrix math
import numpy as np

# For regular expressions
import re

# System level operation (like loading file etc.)
import sys

# For reading operating system data
import os

from load import *

# Initialize our Flask app
app = Flask(__name__)

# Global vars for easy reusable
global model, graph

# Initialize these variables
model, graph = init()

import base64

# Decoding an image from base64 into raw representation
def convertImage(imgData):
    imgStr = re.search(r'base64,(.*)', str(imgData)).group(1)

    with open('output.png', 'wb') as output:
        output.write(base64.b64decode(imgStr))

@app.route('/')
def index():
    return 'Flask App'

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    # Whenever the predict method is called, we're going
    # to input the user drawn character as an image into the model
    # perform inference, and return the classification

    # Get the raw data format of the image
    imageUrl = request.get_data()

    # Ecode it into a suitable format
    convertImage(imageUrl)

    # Read the image into memory
    im = Image.open('output.png', mode='L')

    # Make it the right size
    im = Image.Image.resize(im, (28, 28))

    # For debug,
    im.save('saved.jpg')

    # Convert to 4D tensor to feed into our model
    im = Image.Image.resize(im, (1, 28, 28, 1))

    # In our computation graph
    with graph.as_default():
        # Perform the prediction
        out = model.predict(x)

        print(out)
        print(np.argmax(out, axis=1))

        # Convert the response to a string
        response = np.argmax(out, axis=1)

        return str(response[0])

if __name__ == "__main__":
    # Run the app locally on the given port
    app.run(host='0.0.0.0', port=7070)


