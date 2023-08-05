import React from 'react';
import "./sidebar.css";
const Sidebar = () => {
   
    const sideLinks = document.querySelectorAll('.sidebar .side-menu li a');

    sideLinks.forEach((item) => {
        const li = item.parentElement;
        item.addEventListener("click", () => {
          sideLinks.forEach((i) => {
            i.parentElement.classList.remove("active");
          });
          li.classList.add("active");
        });
      });
      
    return (
        
        <div className="sidebar">
       
        <ul className="side-menu">
            <li><a href="#services"><i className='bx bxs-dashboard'></i>تدوین</a></li>
            <li><a href="#se"><i className='bx bx-store-alt'></i>عکاسی</a></li>
            <li className="active"><a href="#services"><i className='bx bx-analyse'></i>کارگردانی</a></li>
        </ul>
    </div>
    );
    
};

export default Sidebar;