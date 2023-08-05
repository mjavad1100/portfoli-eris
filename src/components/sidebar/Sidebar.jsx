import React, { useEffect, useRef } from 'react';
import "./sidebar.css";
const Sidebar = () => {
   
    const sideLinksRef = useRef(); // create a ref to access the side links

    useEffect(() => {
      // get all the links inside the ref
      const sideLinks = sideLinksRef.current.querySelectorAll('.sidebar .side-menu li a');
      // add event listeners to each link
      sideLinks.forEach((item) => {
        const li = item.parentElement;
        item.addEventListener("click", () => {
          sideLinks.forEach((i) => {
            i.parentElement.classList.remove("active");
          });
          li.classList.add("active");
        });
      });
      // return a cleanup function to remove the event listeners
      return () => {
        sideLinks.forEach((item) => {
          item.removeEventListener("click");
        });
      };
    }, []); // pass an empty array as dependency to run only once
      
    return (
        
        <div className="sidebar" ref={sideLinksRef}>
       
        <ul className="side-menu">
            <li><a href="#services"><i className='bx bxs-dashboard'></i>تدوین</a></li>
            <li><a href="#se"><i className='bx bx-store-alt'></i>عکاسی</a></li>
            <li className="active"><a href="#services"><i className='bx bx-analyse'></i>کارگردانی</a></li>
        </ul>
    </div>
    );
    
};

export default Sidebar;
