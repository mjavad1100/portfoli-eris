import './services.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import pici from '../../img/photo_13.jpg'
import picii from '../../img/photo_2.jpg'
import piciii from '../../img/photo_3.jpg'
import piciiii from '../../img/photo_4.jpg'
import piciiiiii from '../../img/photo_5.jpg'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Services = () => {
    return (
        <section>

            <Container>
            <div className="mytitle2">
                    <Row>
                        <Col>
                        <h1>نمونه کار ها</h1>
                        </Col>
                    </Row>
                </div>
               <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="عکاسی"  tabClassName='colortab'>
      <Row>
                    <Col xs={12} sm={4} md={8}>
                <div className="image-flip">
                                        <div className="mainflip">
                                            <div className="frontside">
                                            <img src={piciiii} alt="third"/>
                                            </div>
                                            <div className="backside hoverclass">
                                                    <div className="card card-body text-center p-5 mt-4">
                                                        <h5 className="card-title font-weight-bold text-white">لورم ایپسوم
                                                        </h5>
                                                        <p className="card-text text-white text-justify">لورم ایپسوم متن
                                                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                            طراحان گرافیک است،لورم ایپسوم ها کاربردهای</p>
                                                            <a href='#portfolio' className='bttn light'>...اطلاعات بیشتر</a>

                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                </Col>
                <Col xs={12} sm={4} md={4}>
                <div className="image-flip">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <img src={piciii} alt="third"/>
                                            </div>
                                            <div className="backside hoverclass">
                                                    <div className="card card-body text-center p-5 mt-4">
                                                        <h5 className="card-title font-weight-bold text-white">لورم ایپسوم
                                                        </h5>
                                                        <p className="card-text text-white text-justify">لورم ایپسوم متن
                                                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                            طراحان گرافیک است،لورم ایپسوم ها کاربردهای</p>
                                                            <a href='#portfolio' className='bttn light'>...اطلاعات بیشتر</a>

                                                    </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                </Col>
            
            </Row> 
      <Row>
      <Col xs={12} sm={4} md={4}>
                <div className="image-flip">
                                        <div className="mainflip">
                                            <div className="frontside">
                                            <img src={piciiiiii} alt="third"/>
                                            </div>
                                            <div className="backside hoverclass">
                                                    <div className="card card-body text-center p-5 mt-4">
                                                        <h5 className="card-title font-weight-bold text-white">لورم ایپسوم
                                                        </h5>
                                                        <p className="card-text text-white text-justify">لورم ایپسوم متن
                                                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                            طراحان گرافیک است،لورم ایپسوم ها کاربردهای</p>
                                                            <a href='#portfolio' className='bttn light'>...اطلاعات بیشتر</a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                </Col>
                <Col xs={12} sm={4} md={4}>
                <div className="image-flip">
                                        <div className="mainflip">
                                            <div className="frontside">
                                            <img src={picii} alt="third"/>
                                            </div>
                                            <div className="backside hoverclass">
                                                    <div className="card card-body text-center p-5 mt-4">
                                                        <h5 className="card-title font-weight-bold text-white">لورم ایپسوم
                                                        </h5>
                                                        <p className="card-text text-white text-justify">لورم ایپسوم متن
                                                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                            طراحان گرافیک است،لورم ایپسوم ها کاربردهای</p>
                                                            <a href='#portfolio' className='bttn light'>...اطلاعات بیشتر</a>

                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                </Col>
                <Col xs={12} sm={4} md={4}>
                <div className="image-flip">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <img src={pici} alt="third"/>
                                            </div>
                                            <div className="backside hoverclass">
                                                    <div className="card card-body text-center p-5 mt-4">
                                                        <h5 className="card-title font-weight-bold text-white">لورم ایپسوم
                                                        </h5>
                                                        <p className="card-text text-white text-justify">لورم ایپسوم متن
                                                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                            طراحان گرافیک است،لورم ایپسوم ها کاربردهای</p>
                                                            <a href='#portfolio' className='bttn light'>...اطلاعات بیشتر</a>

                                                    </div>       
                                            </div>
                                        </div>
                                    </div>
                </Col>
                <Col xs={12} sm={12} md={12}>
                <div className="image-flip">
                                        <div className="mainflip">
                                            <div className="frontside">
                                            <img src={piciii} alt="third"/>
                                            </div>
                                            <div  className="backside hoverclass">
                                                    <div className="card card-body text-center p-5 mt-4">
                                                        <h5 className="card-title font-weight-bold text-white">لورم ایپسوم
                                                        </h5>
                                                        <p className="card-text text-white text-justify">لورم ایپسوم متن
                                                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                            طراحان گرافیک است،لورم ایپسوم ها کاربردهای</p>
                                                            <a href='#portfolio' className='bttn light'>...اطلاعات بیشتر</a>

                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                </Col>
            </Row>   
               
                </Tab>
      <Tab eventKey="profile" title="تدوین" tabClassName='colortab'>
      <Row>
                <Col xs={12} sm={4} md={4}>
                <div className="image-flip">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <img src={pici} alt="third"/>
                                            </div>
                                            <div className="backside hoverclass">
                                                    <div className="card card-body text-center p-5 mt-4">
                                                        <h5 className="card-title font-weight-bold text-white">لورم ایپسوم
                                                        </h5>
                                                        <p className="card-text text-white text-justify">لورم ایپسوم متن
                                                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                            طراحان گرافیک است،لورم ایپسوم ها کاربردهای</p>
                                                            <a href='#portfolio' className='bttn light'>...اطلاعات بیشتر</a>

                                                    </div>       
                                            </div>
                                        </div>
                                    </div>
                </Col>
                <Col xs={12} sm={4} md={4}>
                <div className="image-flip">
                                        <div className="mainflip">
                                            <div className="frontside">
                                            <img src={picii} alt="third"/>
                                            </div>
                                            <div className="backside hoverclass">
                                                    <div className="card card-body text-center p-5 mt-4">
                                                        <h5 className="card-title font-weight-bold text-white">لورم ایپسوم
                                                        </h5>
                                                        <p className="card-text text-white text-justify">لورم ایپسوم متن
                                                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                            طراحان گرافیک است،لورم ایپسوم ها کاربردهای</p>
                                                            <a href='#portfolio' className='bttn light'>...اطلاعات بیشتر</a>

                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                </Col>
                <Col xs={12} sm={4} md={4}>
                <div className="image-flip">
                                        <div className="mainflip">
                                            <div className="frontside">
                                            <img src={piciiiiii} alt="third"/>
                                            </div>
                                            <div className="backside hoverclass">
                                                    <div className="card card-body text-center p-5 mt-4">
                                                        <h5 className="card-title font-weight-bold text-white">لورم ایپسوم
                                                        </h5>
                                                        <p className="card-text text-white text-justify">لورم ایپسوم متن
                                                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                            طراحان گرافیک است،لورم ایپسوم ها کاربردهای</p>
                                                            <a href='#portfolio' className='bttn light'>...اطلاعات بیشتر</a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                </Col>


            </Row>      </Tab>
      <Tab eventKey="longer-tab" title="کارگردانی" tabClassName='colortab'>
      <Row>
                <Col xs={12} sm={4} md={4}>
                <div className="image-flip">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <img src={pici} alt="third"/>
                                            </div>
                                            <div className="backside hoverclass">
                                                    <div className="card card-body text-center p-5 mt-4">
                                                        <h5 className="card-title font-weight-bold text-white">لورم ایپسوم
                                                        </h5>
                                                        <p className="card-text text-white text-justify">لورم ایپسوم متن
                                                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                            طراحان گرافیک است،لورم ایپسوم ها کاربردهای</p>
                                                            <a href='#portfolio' className='bttn light'>...اطلاعات بیشتر</a>

                                                    </div>       
                                            </div>
                                        </div>
                                    </div>
                </Col>
                <Col xs={12} sm={4} md={4}>
                <div className="image-flip">
                                        <div className="mainflip">
                                            <div className="frontside">
                                            <img src={picii} alt="third"/>
                                            </div>
                                            <div className="backside hoverclass">
                                                    <div className="card card-body text-center p-5 mt-4">
                                                        <h5 className="card-title font-weight-bold text-white">لورم ایپسوم
                                                        </h5>
                                                        <p className="card-text text-white text-justify">لورم ایپسوم متن
                                                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                            طراحان گرافیک است،لورم ایپسوم ها کاربردهای</p>
                                                            <a href='#portfolio' className='bttn light'>...اطلاعات بیشتر</a>

                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                </Col>
                <Col xs={12} sm={4} md={4}>
                <div className="image-flip">
                                        <div className="mainflip">
                                            <div className="frontside">
                                            <img src={piciiiiii} alt="third"/>
                                            </div>
                                            <div className="backside hoverclass">
                                                    <div className="card card-body text-center p-5 mt-4">
                                                        <h5 className="card-title font-weight-bold text-white">لورم ایپسوم
                                                        </h5>
                                                        <p className="card-text text-white text-justify">لورم ایپسوم متن
                                                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                            طراحان گرافیک است،لورم ایپسوم ها کاربردهای</p>
                                                            <a href='#portfolio' className='bttn light'>...اطلاعات بیشتر</a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                </Col>


            </Row>       </Tab>
    </Tabs>
 

            </Container>
            </section>

    );
};

export default Services;