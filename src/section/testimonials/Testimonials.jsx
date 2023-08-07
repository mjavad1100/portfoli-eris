import './testimonials.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Myteam from '../../components/myteam/Myteam';


const Testimonials = () => {
    return (
       <section id='testimonials'>
        <Container>
            <Row>
                <Col><Myteam/></Col>
                <Col><Myteam/></Col>
                <Col><Myteam/></Col>
                <Col><Myteam/></Col>
            </Row>
        </Container>
       </section>
    );
};

export default Testimonials;