import HeaderImage from '../../img/eris13.jpg'
import './about.css'
import data from './data';
const About = () => {
    return (
      <section>

      
      <header id='about' className='header'>
        <div className="container header__container">
        <div className="header__profile">
      <img src={HeaderImage} alt='portfolio__image'/>
        </div>
        <h3 className='text-center'>محمد رضا ابراهیمی لویه</h3>
        <p>باغبان باید پنج روز در مورد گل صحبت کند.
          بر یافای خاردار هجران، صبر بلبل باید باشد.
          درد دل شما از پریشانی روحی.
          مرغ زیرک چون به دام افتاده باید تحملش کنی
          دنیا را با مصلحت روشن کنید
        </p>
            <div className="header__cta">
              <a href='#services' className='bttn primary'>خدمات</a>
              <a href='#contact' className='bttn light'>رزومه من</a>
            </div>
            <div className="header__socials">
              {
                data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a> )
              }
            </div>
        </div>
      </header>
      </section>
      

    );
};

export default About;