import './portfolio.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsFillCameraFill} from 'react-icons/bs';
import {MdLocalMovies} from 'react-icons/md';
import {AiFillPicture} from 'react-icons/ai';



const Portfolio = () => {
    return (
        <section id='portfolio'>
            <Container fluid>
                <Row className='myportfolio'>
                    <Col xs={12}  md={4}>
                        <div className='myparent'>
                    <div className='myform'>
                    <a href='#portfolio'><BsFillCameraFill className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>عکاس</h2>
                    <p>لورم ایپسوم متن  مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
                    </div>
                    </div>
                    
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="myparent">
                    <div className='myform'>
                    <a href='#portfolio'><MdLocalMovies className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>کارگردان</h2>
                    <p>لورم ایپسوم متن  مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
                    </div>
                    </div>
                    </Col>
                    <Col xs={12}  md={4}>
                        <div className="myparent">
                    <div className='myform'>
                    <a href='#portfolio'><AiFillPicture className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>تدوین گر</h2>
                    <p>لورم ایپسوم متن  مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
                    </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;