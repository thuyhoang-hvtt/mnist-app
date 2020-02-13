from flask import Flask, render_template, request
from PIL import Image
import numpy as np
import re
from flask_cors import CORS
import base64
from keras.models import model_from_json
import tensorflow as tf
from keras import backend as K
import json

# Initialize our Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


# Decoding an image from base64 into raw representation
def convertImage(imgData):
    imgStr = re.search(r'base64,(.*)', str(imgData)).group(1)

    with open('output.png', 'wb') as output:
        output.write(base64.b64decode(imgStr))


def loadModel():
    session = K.get_session()
    initializer = tf.compat.v1.global_variables_initializer()
    session.run(initializer)

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

    return loaded_model, graph, session


loaded_model, graph, session = loadModel()


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
        out = np.round(loaded_model.predict(im), 3)
        print(out)
        print(np.argmax(out, axis=1))

        # Convert the response to a string
        response = np.argmax(out, axis=1)

        return json.dumps({"statistic": out.tolist()[0], "result": str(np.argmax(out, axis=1)[0])})


if __name__ == "__main__":
    # Run the app locally on the given port
    app.run(host='localhost', port=5000)
