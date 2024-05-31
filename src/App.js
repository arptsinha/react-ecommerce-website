import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import Orders from './Orders';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Shop from './Shop';
import IndividualProducts from './IndividualProducts';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import News from './News';
import About from './About';

const promise = loadStripe('pk_test_51OxDuCSDUiDhM3Z8eLAjrCkdrt2hBkrse1v3mix9HUSGbb4JHBCCJ3yhzq9P6F6O0K641UfPTn0qyFR9Z1QaqRCK00H0dQJlK5');

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        // will only run once when the app component loads
        auth.onAuthStateChanged(authUser => {
            console.log('THE USER IS >>> ', authUser);

            if(authUser) {
                //the user just logged in / the user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            }
            else{
                //the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])

    return (
        //BEM
        <Router>
        <div className="app">
            <Routes>
                <Route path="/shop" element={
                    <>
                        <Header />
                        <Shop />
                    </>
                } 
                />
                <Route path="/about" element={
                    <>
                        <Header />
                        <About />
                    </>
                } 
                />
                <Route path="/individualProduct" element={
                    <>
                        <Header />
                        <IndividualProducts />
                    </>
                } 
                />
                <Route path="/news" element={
                    <>
                        <Header />
                        <News />
                    </>
                } 
                />
                <Route path="/login" element={
                    <>
                        <Login />
                    </>
                } 
                />
                <Route path="/orders" element={
                    <>
                        <Header />
                        <Orders />
                    </>
                } 
                />
                <Route path="/checkout" element={
                    <>
                        <Header />
                        <Checkout />
                    </>
                } 
                />
                <Route path="/payment" element={
                    <>
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </>
                } 
                />
                <Route path="/" element={
                    <>
                        <Header />
                        <Home />
                    </>
                } 
                />
            </Routes>
        </div>
        </Router>
    );
}

export default App;