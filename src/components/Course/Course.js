import React from 'react';
import './Course.css';

const Course = (props) => {
  const {name, price} = props.course;
  const handleEnrollNow = props.handleEnrollNow;
  return (
    <div className='course-style'>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={()=>handleEnrollNow(props.course)} className='main-btn'>Enroll Now</button>
    </div>
  );
};

export default Course;