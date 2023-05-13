import React, { useState } from 'react';
import axios from 'axios';
import img from './circuit.jpg';
import './ece.css';

function Ece() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
  
    console.log('handleSubmit called'); // add this line
    console.log(file)
    if(file != null) setSuccess(true);
    else setSuccess(false);
    try {
        const response = await axios.post('http://127.0.0.1:5000/api/compare-images', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        setResult(response.data);
        setSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <div className="image-comparator">
        <div className="instruction">
            <p>Step 1: Generate the circuit on Tinkercad. Click the link below to go to the circuit editor:<br></br>
            <u><a href="https://www.tinkercad.com/">https://www.tinkercad.com/</a></u></p>
            <p>Step 2: Choose new and start making circuits. Note: use 9V Battery. Try Simulations</p>
            <p>Step 3: Once you have completed the circuit, download via schematic view(in top right corner) the file in the format of your choice (such as .STL, .OBJ, or .SVG).</p>
            <p>Step 4: Upload the downloaded file to the server by clicking the "Choose file" button below and selecting the file from your computer.</p>
            <img src={img} alt="Example circuit" />
        </div>
      <h2>Image Comparator</h2>
      <p>Upload an image to compare it to the reference image on the server.</p>
      <form onSubmit={handleSubmit}>
        <div className="file-input">
            <input id="file-upload" type="file" onChange={handleFileChange} />
            <label htmlFor="file-upload" className="custom-file-upload">
                <i className="fas fa-cloud-upload-alt"></i>
                <span>{file ? file.name : 'Choose file'}</span>
            </label>
            {file && <span className="file-name">{file.name}</span>}
        </div>
        <button className='buttono' type="submit">Compare Images</button>
      </form>
      {success ? (
        <div className="success">
            <p>Congratulations! You have done the right solution.</p>
        </div>
      ) : (
        <div className="error">
            <p>Oops! Wrong answer.</p>
        </div>
      )}
      {result && (
        <div className="result">
            <p>The images {result.isEqual ? 'are' : 'are not'} identical.</p>
        </div>
      )}
    </div>
  );
}

export default Ece;
