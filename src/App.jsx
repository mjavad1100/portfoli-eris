import About from './section/about/About';
import Faqs from './section/faqs/FAQs';
import FloatingNav from './section/floating-nav/FloatingNav';
import Footer from './section/footer/Footer';
import Portfolio from './section/portfolio/Portfolio';
import Servises from './section/services/Services';
import Testimonials from './section/testimonials/Testimonials';
import Contact from './section/contact/Contact';
import Burger from './section/navbar/Burger';
import 'bootstrap/dist/css/bootstrap-grid.css';
import Headertop from './section/headr-top/Headertop';
import UncontrolledExample from './section/headr-top/UncontrolledExample';
// import Myvideo from './components/myvideo/Myvideo';

const App = () => {
    return (
        <div>
            <main>
                <Headertop/>
                {/* <Myvideo/> */}
                <UncontrolledExample/>
                <Burger/>
                <About/>
                <Portfolio/>
                <Servises/>
                <Testimonials/>
               <Contact/>
                <Faqs/>
                <FloatingNav/>
                <Footer/>
            </main>
        </div>
    );
};

export default App;