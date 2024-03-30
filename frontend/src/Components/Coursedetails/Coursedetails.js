import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ModuleForm from './ModuleForm';

function Coursedetails() {
  const { courseid } = useParams();
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [showAddModuleModal, setShowAddModuleModal] = useState(false);
  const [variable, setVariable] = useState(false);

  const fetchModules = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/get/allmodules/${courseid}`);
      setModules(response.data);
    } catch (error) {
      console.error('Error fetching modules:', error);
    }
  };

  useEffect(() => {
    fetchModules();
  }, [variable]);

  const selectModule = (moduleId) => {
    setSelectedModule(moduleId);
  };

  const renderLessons = () => {
    if (selectedModule === null) return null;

    const selectedModuleData = modules.find((module) => module._id === selectedModule);
    if (!selectedModuleData || !selectedModuleData.lessons || selectedModuleData.lessons.length === 0) return null;

    return selectedModuleData.lessons.map((lesson, index) => (
      <div key={index} className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Lesson {index + 1}</h5>
          <p className="card-text">{lesson}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h2 className="mb-4">Modules</h2>
          <div className="list-group">
            {modules?.map((module) => (
              <button
                key={module._id}
                className={`list-group-item list-group-item-action ${selectedModule === module._id ? 'active' : ''}`}
                onClick={() => selectModule(module._id)}
              >
                {module.module_title}
              </button>
            ))}
          </div>
          <button className="btn btn-primary mt-3" onClick={() => setShowAddModuleModal(true)}>Add Module</button>
        </div>

        <div className="col-md-9">
          {renderLessons()}
        </div>
      </div>

      <ModuleForm
        show={showAddModuleModal}
        handleClose={() => setShowAddModuleModal(false)}
        courseId={courseid}
        fetchModules={fetchModules} 
        setVariable={setVariable}
        variable={variable}
      />
    </div>
  );
}

export default Coursedetails;
