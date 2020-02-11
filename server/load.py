from keras.models import model_from_json
import tensorflow as tf


def init():
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
    graph = tf.Graph()

    return loaded_model, graph
