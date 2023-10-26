import './portfolio.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsFillCameraFill} from 'react-icons/bs';
import {MdLocalMovies} from 'react-icons/md';
import {AiFillPicture} from 'react-icons/ai';
import { AnimationOnScroll } from 'react-animation-on-scroll';




const Portfolio = () => {
    return (
        <section id='portfolio'>
            <Container fluid>
                <div className="mytitle">
                    <Row>
                        <Col>
                        <h1>خدمات من</h1>
                        </Col>
                    </Row>
                </div>
                <Row className='myportfolio'>
                    <Col xs={12}  md={4}>
                    <AnimationOnScroll animateIn="animate__slideInRight">
                        <div className='myparent'>
                    <div className='myform'>
                    <a href='#portfolio'><BsFillCameraFill className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>عکاس</h2>
                    <p>عکاسی از محصولات و خدمات شرکت ها، عکاسی از کارخانجات و خطوط تولید و غیره</p>
                    </div>
                    </div>
                    </AnimationOnScroll>
                    </Col>
                    <Col xs={12} md={4}>
                    <AnimationOnScroll animateIn="animate__slideInUp">
                        <div className="myparent">
                    <div className='myform'>
                    <a href='#portfolio'><MdLocalMovies className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>کارگردان</h2>
                    <p>ساخت تیزرهای تبلیغاتی و صنعتی از محصولات، خدمات و واحدهای صنعتی</p>
                    </div>
                    </div>
                    </AnimationOnScroll>
                    </Col>
                    <Col xs={12}  md={4}>
                    <AnimationOnScroll animateIn="animate__slideInLeft">
                        <div className="myparent">
                    <div className='myform'>
                    <a href='#portfolio'><AiFillPicture className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>تدوین گر</h2>
                    <p>طراحی و چاپ بسته بندی، لیبل محصولات، کاتالوگ، بروشور، پوستر، بیلبورد و غیره</p>
                    </div>
                    </div>
                    </AnimationOnScroll>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;
