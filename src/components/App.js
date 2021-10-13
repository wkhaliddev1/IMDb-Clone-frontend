import {Navbar} from "../components/navbar/components/Navbar"
import CarouselPart from "../components/carousel/components/Carousel"
import FeatureToday from "../components/featureToday/components/FeatureToday";
// import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <CarouselPart />
            <FeatureToday />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
