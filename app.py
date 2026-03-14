from flask import Flask, request, render_template
import numpy as np
import pickle

# load trained model
model = pickle.load(open("diabetes_model.pkl", "rb"))

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/predict', methods=['POST'])
def predict():

    # get values from form
    features = [float(x) for x in request.form.values()]

    # convert to array
    final_features = [np.array(features)]

    # prediction
    prediction = model.predict(final_features)

    if prediction[0] == 1:
        result = "Patient is Diabetic"
    else:
        result = "Patient is Not Diabetic"

    return render_template("index.html", prediction_text=result)

if __name__ == "__main__":
    app.run(debug=True)
