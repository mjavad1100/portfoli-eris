import React from 'react';
import Erisv from '../../video/eris-1.mp4'
import '../myvideo/myvideo.css';
import Container from 'react-bootstrap/Container';


const Myvideo = () => {
    return (
        <Container>
        <video autoPlay loop muted className="bg-vid"><source src={Erisv} type="video/mp4" /> </video>
        </Container>
    );
};

export default Myvideo;