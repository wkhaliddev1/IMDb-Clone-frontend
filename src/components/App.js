import {Navbar} from "../components/navbar/components/Navbar"
import Navbar2 from "../components/navbar/components/Navbar2"
import MayRender from "../components/navbar/components/Navbar"
import CarouselPart from "../components/carousel/components/Carousel"
import FeatureToday from "../components/featureToday/components/FeatureToday";
import Login from "../components/login/components/Login.js"
import Footer from "../components/footer/components/Footer"
import MovieDetailApp from "../components/movieDetail/MovieDetailApp";
import SignInForm from "../components/login/components/SignInFrom" 
import SignUp from "./login/components/SignUp";
// import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
// import WhatToWatch from "./whatToWatch/components/whatToWatch";
import WhatToWatchCheck from "./whatToWatch/components/WhatToWatchCheck";
import UserDetailApp from "./userDetail/components/UserDetailApp";

// For session
//import Cookies from 'react-cookie'
// import { CookiesProvider } from 'react-cookie';


function App() {
  return (
    <div>
        {window.location!= "https://localhost:3000/signin" && <Navbar2 />}
        <BrowserRouter>
          <Switch>
            {/* </Switch> */}
            {/* <Switch> */}
            <Route path="/login" >
              <Login />
            </Route>
            <Route path="/signin">
              <SignInForm />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path ="/movieId/" >
              <MovieDetailApp />
            </Route>
            <Route path ="/userID/" >
              <UserDetailApp />
            </Route>
            <Route >
              <CarouselPart />
              <FeatureToday />
              <WhatToWatchCheck />
              
            </Route>
          </Switch>
        </BrowserRouter>
        {window.location!= "https://localhost:3000/signin" && <Footer />}
    </div>


  
  );
}

export default App;
