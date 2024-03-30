import React from 'react';
import { useNavigate } from 'react-router-dom';


function Card({ course }) {
const navigate = useNavigate();


const moveto = (courseid) => {
    
    navigate(`/allcourses/${courseid}`);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{course?.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">ID: {course?.courseid}</h6>
        <p className="card-text">{course?.description}</p>
        
    
        {/* Add buttons or links for actions like editing or viewing details */}
        <button onClick={() => moveto(course.courseid)}>Continue Creation</button>

      </div>
    </div>
  );
}

export default Card;
