import React from 'react';
import { useState } from 'react';
import courseData from '../../fakeData/courseData.json';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Shop.css';

const Shop = () => {
  const [courses, setCourses] = useState(courseData);
  const [cart, setCart] = useState([]);
  
  const handleEnrollNow = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };

  return (
    <div className='shop-container'>
      <div className='course-container'>
        {
          courses.map(course => <Course course={course} handleEnrollNow={handleEnrollNow}></Course>)
        }
      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;