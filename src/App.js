import "./App.css";
import Visions from "./Components/Visions/Visions";
import Mission from "./Components/Mission/Mission";
import Audience from "./Components/Audience/Audience";
import Founders from "./Components/Founders/Founders";
import Events from "./Components/Events/Events";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Values from "./Components/Values/Values";
import Teams from "./Components/Teams/Teams";
import Footer from "./Components/Footer/Footer";
import News from "./Components/News/News";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Visions />
      <Mission />
      <Founders />
      <Values />
      <Events />
      {/* <Teams/> */}
      <News/>
      <Audience />
      <Footer/>
    </>
  );
}

export default App;
