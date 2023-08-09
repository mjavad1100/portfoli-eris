import React from 'react';
import "../myteam/myteam.css";


const Myteam = (props) => {
    return (
        <div className="">
        <div className="our-team border">
            <div className="picture">
            <img src={props.image} alt='Team member' />
            </div>
            <div className="team-content">
                <h3 className="name">لورم ایپسوم</h3>
                <h4 className="title">متن از پیش ساخته</h4>
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
                <li>
                    <a href="https://codepen.io/collection/XdWJOQ/"
                        aria-hidden="true"><i className='bx bxl-github'></i></a>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default Myteam;