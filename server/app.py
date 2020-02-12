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

# CORS allowance
from flask_cors import CORS

from load import *

# Initialize our Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

import base64

from keras.models import model_from_json
import tensorflow as tf
from keras import backend as K


# Decoding an image from base64 into raw representation
def convertImage(imgData):
    imgStr = re.search(r'base64,(.*)', str(imgData)).group(1)

    with open('output.png', 'wb') as output:
        output.write(base64.b64decode(imgStr))

session = K.get_session()
init = tf.compat.v1.global_variables_initializer()
session.run(init)

json_file = open('models/model.json', 'r')
loaded_model_json = json_file.read()
json_file.close()

loaded_model = model_from_json(loaded_model_json)

# Load weights into new model
loaded_model.load_weights("models/model.h5")
print("Loaded Model from disk")

# Compile and evaluate loaded model
loaded_model.compile(loss='categorical_crossentropy',
                     optimizer='adam',
                     metrics=['accuracy'])

loaded_model.summary()

graph = tf.compat.v1.get_default_graph()



@app.route('/')
def index():
    return 'Flask App'


@app.route('/predict', methods=['POST'])
def makePredict():
    # Whenever the predict method is called, we're going
    # to input the user drawn character as an image into the model
    # perform inference, and return the classification

    # Get the raw data format of the image
    imageUrl = request.get_data()

    # Encode it into a suitable format
    convertImage(imageUrl)

    # Read the image into memory
    im = Image.open('output.png').convert('L')
    # im = imread('output.png', mode='L')

    # Make it the right size
    im = Image.Image.resize(im, (28, 28))

    # im = imresize(im, (28, 28))

    # Convert to 4D tensor to feed into our model
    im = np.reshape(im, (1, 28, 28, 1))

    im = im / 255.0
    global session
    global graph
    # In our computation graph
    with graph.as_default():
        # Perform the prediction
        K.set_session(session)
        out = loaded_model.predict(im)

        print(out)
        print(np.argmax(out, axis=1))

        # Convert the response to a string
        response = np.argmax(out, axis=1)

        return str(response[0])


if __name__ == "__main__":
    # Run the app locally on the given port
    app.run(host='localhost', port=5000)
