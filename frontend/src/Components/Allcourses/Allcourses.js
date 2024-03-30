import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function Allcourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/get/allcourses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div className="row">
      {courses.map(course => (
        <div className="col-md-4" key={course._id}>
          <Card course={course} />
        </div>
      ))}
    </div>
  );
}

export default Allcourses;
