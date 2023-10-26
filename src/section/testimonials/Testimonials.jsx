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
        <div className="mytitle1">
                    <Row>
                        <Col>
                        <h1>تیم مآ</h1>
                        </Col>
                    </Row>
                </div>
            <Row>
            <Col><Myteam image={myteam1} Name={"محمدرضا ابراهیمی"} Job={"مدیر گروه"}/></Col>
            <Col><Myteam image={myteam2} Name={"تینا قربانیان"} Job={"تدوینگر"}/></Col>
            <Col><Myteam image={myteam3} Name={"عباس بوعلی"} Job={"کارگردان"}/></Col>
            <Col><Myteam image={myteam4} Name={"امین ساران"} Job={"طراح"}/></Col>
                {/* Map over the array and pass each image as a prop
                {teamImages.map(image => (
                    <Col><Myteam image={image} Name={"محمدرضا ابراهیمی"} Job={"مدیر گروه"}/></Col>
                ))} */}
            </Row>
        </Container>
       </section>
    );
};

export default Testimonials;
