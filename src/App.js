
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import Navbar from './components/navbar/Navbar';
import LandingPage from './pages/landing-page/LandingPage';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import Home from './pages/home/Home';
import PageNotFound from './pages/PageNotFound';
import StallProfilePage from './pages/StallProfilePage/StallProfilePage';
import Cookies from 'universal-cookie';
import ViewStalls from './pages/view-clicked-stall/ViewStalls';
import ReactNotifications from 'react-notifications-component';

const cookies = new Cookies();

let signedInUser = cookies.get('user')


function App() {
  return (
  
      <div className="App">
        <ReactNotifications />
        <Router>
          <AnimatePresence  exitBeforeEnter>
            <Switch>
              <Route path="/signup" exact component={SignUp}/>  
              <Route path="/signin" exact component={SignIn}/>  
              <Route path="/"  exact component={LandingPage}/>
              
              
              <div className="routes-with-navbar">
                <Navbar />
                <Route path="/home" exact component={Home}/>
                <Route path="/my-stalls/{id}" exact component={StallProfilePage}/>
                <Route path="/home/:sectionTitle" exact component={Home}/>
                <Route path="/stalls/:id" exact component={ViewStalls}/>
                             
                
              </div> 
            </Switch>
          </AnimatePresence>
        </Router>
       
      </div>
      
    
  );
}

export default App;
