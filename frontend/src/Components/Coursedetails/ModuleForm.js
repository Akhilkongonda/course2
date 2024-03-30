import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for API requests

function ModuleForm({ show, handleClose, courseId, setvariable,variable}) {
  // State variables to store module form data
  const [moduleTitle, setModuleTitle] = useState('');
  const [moduleNo, setModuleNo] = useState('');
  const [moduleTotalScore, setModuleTotalScore] = useState('');

 

  // Function to handle module title change
  const handleModuleTitleChange = (e) => {
    setModuleTitle(e.target.value);
  };

  // Function to handle module number change
  const handleModuleNoChange = (e) => {
    setModuleNo(e.target.value);
  };

  // Function to handle module total score change
  const handleModuleTotalScoreChange = (e) => {
    setModuleTotalScore(e.target.value);
  };

  // Function to handle module creation
  const handleCreateModule = async () => {
    try {
      // Send POST request to create module
      const response = await axios.post('http://localhost:4000/add/module', {
        course_id: courseId,
        module_title: moduleTitle,
        module_no: moduleNo,
        module_total_score: moduleTotalScore,
        
      });
      setvariable(!variable);   
      // Log response data
      console.log(response.data);

      // Close the modal after module creation
      handleClose();
    } catch (error) {
      // Handle error
      console.error('Error creating module:', error);
    }
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Module</h5>
            <button type="button" className="close" onClick={handleClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* Module title input */}
            <div className="form-group">
              <label htmlFor="moduleTitle">Module Title</label>
              <input
                type="text"
                className="form-control"
                id="moduleTitle"
                value={moduleTitle}
                onChange={handleModuleTitleChange}
              />
            </div>
            {/* Module number input */}
            <div className="form-group">
              <label htmlFor="moduleNo">Module Number</label>
              <input
                type="text"
                className="form-control"
                id="moduleNo"
                value={moduleNo}
                onChange={handleModuleNoChange}
              />
            </div>
            {/* Module total score input */}
            <div className="form-group">
              <label htmlFor="moduleTotalScore">Module Total Score</label>
              <input
                type="text"
                className="form-control"
                id="moduleTotalScore"
                value={moduleTotalScore}
                onChange={handleModuleTotalScoreChange}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
            <button type="button" className="btn btn-primary" onClick={handleCreateModule}>Create Module</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModuleForm;
