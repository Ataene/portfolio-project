import './App.css';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Heading from './Components/Heading';
import Title from './Components/Title';
import Services from './Components/Services';
import Carousel from './Components/Carousel';
import CustomCards from './Components/CustomCards';
import SignupForm from "./Components/SignupForm";
import AboutMe from './Components/AboutMe';

function App() {

  return (
    
    <div style={{backgroundColor: 'black'}}>
      <Heading />
      <Title />
      <AboutMe />
      <Cards />
      <Carousel />
      <Services />
      <CustomCards />
      <SignupForm />
      <Footer/>
    </div>
  );
}

export default App;
