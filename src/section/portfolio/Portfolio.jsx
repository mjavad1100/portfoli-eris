import './portfolio.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsFillCameraFill} from 'react-icons/bs'
import {MdLocalMovies} from 'react-icons/md'
import {AiFillPicture} from 'react-icons/ai'



const Portfolio = () => {
    return (
        <section id='portfolio'>
                <Row className='myportfolio'>
                    <Col>
                    <div className='myform'>
                    <a href='#'><BsFillCameraFill className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>عکاس</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
                    </div>
                    
                    </Col>
                    <Col>
                    <div className='myform'>
                    <a href='#'><MdLocalMovies className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>کارگردان</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
                    </div>
                    </Col>
                    <Col>
                    <div className='myform'>
                    <a href='#'><AiFillPicture className='myicon'/></a> 
                    </div>
                    <div className='capsion'>
                    <h2>تدوین گر</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
                    </div>
                    </Col>
                </Row>
        </section>
    );
};

export default Portfolio;