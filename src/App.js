import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import Navbar from './components/navbar/Navbar';
import LandingPage from './pages/landing-page/LandingPage';
import SignIn from './pages/sign-in-page/SignInPage';
import SignUp from './pages/sign-up-page/SignUpPage';
import Home from './pages/home/Home';
import PageNotFound from './pages/PageNotFound';
import StallProfilePage from './pages/my-stall/StallProfilePage';
import Cookies from 'universal-cookie';
import ViewStalls from './pages/view-clicked-stall/ViewStalls';
import ReactNotifications from 'react-notifications-component';
import Basket from './components/Basket/ViewBasket';
import sectionIsNotInLocalStorage from './helpers/sectionIsNotInLocalStorage';
import stallIsNotInLocalStorage from './helpers/stallIsNotInLocalStorage';
import productIsNotInLocalStorage from './helpers/productIsNotInLocalStorage';
import setSectionsToStorage from './setToStorage/setSectionsToStorage';
import setStallsToStorage from './setToStorage/setStallsToStorage';
import setProductsToStorage from './setToStorage/setProductsToStorage';


const cookies = new Cookies();
const signedInUser = cookies.get('user') || ''

if (sectionIsNotInLocalStorage()) {
  setSectionsToStorage()
}

if (stallIsNotInLocalStorage()) {
  setStallsToStorage()
}

if (productIsNotInLocalStorage()) {
  setProductsToStorage()
}

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
                <Route path="/mystall" exact component={StallProfilePage}/>
                <Route path="/home/:sectionTitle" exact component={Home}/>
                <Route path="/stalls/:id" exact component={ViewStalls}/>
                <Route path={`/basket/${signedInUser._id}`} exact component={Basket}/>
                
              </div> 
            </Switch>
          </AnimatePresence>
        </Router>

        <> 
          
        </>
       
      </div>
      
    
  );
}

export default App;
