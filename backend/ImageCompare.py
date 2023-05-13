import cv2
from flask import Flask, request, jsonify
import numpy as np
import os

app = Flask(__name__)

# Load reference image
  # specify the full path to the image file here
ref_img = cv2.imread('backend\passport.jpg')
# ref_img = cv2.imread(ref_image_path)

@app.route('/api/compare-images', methods=['POST'])
def compare_images():
    # Get uploaded image
    uploaded_file = request.files['file']
    uploaded_img = cv2.imdecode(np.frombuffer(uploaded_file.read(), np.uint8), cv2.IMREAD_UNCHANGED)
    
    # Compare images
    diff = cv2.absdiff(ref_img, uploaded_img)
    isEqual = (diff.sum() == 0)
    
    # Return result
    return jsonify({'isEqual': isEqual})

if __name__ == '__main__':
    app.run()