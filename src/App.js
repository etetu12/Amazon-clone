import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chackout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe(
 "pk_test_51KEYFrE91msA9kMF1NnJw5bpNJVXQr6tkTFJuQnEtw4EBomqk9XDbHjHsdDvw4TYcK49EGWJaQu4HgcFs1Pz3n4m00gevoSlaN"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
          <Route path="/Orders" element= { <Orders/>}/>

          <Route path="/login"element= { <Login />}/>
          
          
          <Route path="/Payment"element={ <Elements stripe={promise}>
          { <Payment />}
          </Elements>}/>
            
          
          <Route path="/Chackout"element= { <Chackout />}/>
        
          
         
          <Route path="/"element= {  <Home />}/>
          
         
         
          </Routes>
      
      </div>
    </Router>
  );
}

export default App;
