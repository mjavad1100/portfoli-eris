import React from 'react';
import './mybrand.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {CiClock1} from 'react-icons/ci';
import {CiImport} from 'react-icons/ci';
import { Container } from 'react-bootstrap';

const Mybrand = () => {
    return (
           <div className='mybackground'>
             <Row>
                <Container className='myparent'>
                <Col className=''>
                <div className='parentchild'>
                <div className='parentchildi'>
                <p className='fonttittle'>: روز های کاری</p>
                <p>همه روزه </p>
                </div>
                <a className='btttn'><CiClock1/></a>
                <div className='parentchildi'>
                <p className='fonttittle'>: با من تماس بگیرید</p>
                <p>09381456313</p>
                </div>
                <a className='btttn'><CiImport/></a>
                </div>
                </Col>
                <Col className='logo'>
                <p><span>EriS</span>Picture</p>
                </Col>
                </Container>
            </Row>
           </div>
    );
};

export default Mybrand;