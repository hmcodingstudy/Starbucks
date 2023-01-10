import { useEffect, useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import 'bootstrap/dist/css/bootstrap.css'
import '../css/reset.css';
import '../App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import Router from './Router.js'
import Nav from './Nav.js'
import { authService } from "../myFirebase"

SwiperCore.use([Navigation]);

function App() {
    //로그인
    const [init,setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
    useEffect(()=>{
        authService.onAuthStateChanged((user) => {
            if(user){
                setIsLoggedIn(true);
            } else{
                setIsLoggedIn(false);
            }
            setInit(true);
          });
    })
    return (
        <>
        <div className="App">
        <Nav isLoggedIn={isLoggedIn}/>
        <Router isLoggedIn={isLoggedIn}/>
        </div>
        </>
    );
}


export default App;