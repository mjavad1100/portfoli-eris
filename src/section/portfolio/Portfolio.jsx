import './portfolio.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsFillCameraFill} from 'react-icons/bs'



const Portfolio = () => {
    return (
        <section id='portfolio'>
            <Container>
                <Row className='myportfolio'>
                    <Col>
                    <div className='myform'>
                    <a><BsFillCameraFill className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>تدوین</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
                    </div>
                    
                    </Col>
                    <Col>
                    <div className='myform'>
                    <a><BsFillCameraFill className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>تدوین</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
                    </div>
                    </Col>
                    <Col>
                    <div className='myform'>
                    <a><BsFillCameraFill className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>تدوین</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;