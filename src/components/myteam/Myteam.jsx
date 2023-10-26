import React from 'react';
import "../myteam/myteam.css";


const Myteam = (props) => {
    return (
        
        <div className="our-team">
            <div className="picture">
            <img src={props.image} alt='Team member' />
            </div>
            <div className="team-content">
                <h3 className="name">{props.Name}</h3>
                <h4 className="title">{props.Job}</h4>
            </div>
            <ul className="social">
                <li>
                    <a href="https://codepen.io/collection/XdWJOQ/"
                        aria-hidden="true"><i  className="bx bxl-twitter"></i></a>
                </li>
                <li>
                    <a href="https://codepen.io/collection/XdWJOQ/"
                        aria-hidden="true"><i  className="bx bxl-instagram-alt"></i></a>
                </li>
                <li>
                    <a href="https://codepen.io/collection/XdWJOQ/"
                        aria-hidden="true"><i className='bx bxl-facebook-circle'></i></a>
                </li>
            </ul>
        </div>
    );
};

export default Myteam;