import './testimonials.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Myteam from '../../components/myteam/Myteam';
import myteam1 from '../../img/eris.jpg'
import myteam2 from '../../img/team2.jpg'
import myteam3 from '../../img/team3.jpg'
import myteam4 from '../../img/team1.jpg'

const Testimonials = () => {
    // Create an array of image imports
    const teamImages = [myteam1, myteam2, myteam3, myteam4];

    return (
       <section id='testimonials'>
        <Container>
            <Row>
                {/* Map over the array and pass each image as a prop */}
                {teamImages.map(image => (
                    <Col><Myteam image={image}/></Col>
                ))}
            </Row>
        </Container>
       </section>
    );
};

export default Testimonials;
