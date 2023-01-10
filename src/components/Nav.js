import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import common from '../css/common.module.css';

function Nav(props){
    // 헤더 변경
    let [header, setHeader] = useState();
    function headerChange(){
        if(window.innerWidth < 769){
            setHeader('mobile')
        }
        else if(window.innerWidth >= 769) {
            setHeader('pc')
        }
    }
    window.addEventListener('load',()=>{
        headerChange()
    })
    window.addEventListener('resize',()=>{
        headerChange()
    })
    return(
        <>
        {
            props.isLoggedIn ? (header == 'mobile' ? <MobileHeader/> : <PcHeader/>) : null
        }
        </>
    )
}

function MobileHeader(){
    return(
        <div className={common.mobileHeader}>
            <Link to="/profile">
                <FontAwesomeIcon icon={faUser} className={common.arrowLeft} />
            </Link>
            <button className={common.logoWrap}>
                <Link to="/">
                    <div className={common.logo}></div>
                </Link>
            </button>
            <Link to="/cart" className={common.order}>
                <FontAwesomeIcon icon={faBasketShopping} className={common.headerCartBtn}/>
            </Link>
        </div>
    )
}

function PcHeader(){
    return(
        <div className={common.pcHeader}>
            <div className={common.logoWrap}>
                <Link to="/">
                    <h1 className={common.logo}>
                        로고
                    </h1>
                </Link>
                <div className={common.menu}>
                    <div>
                        <Link to="/order" className={common.order}>Order</Link>
                        <Link to="/profile" className={common.order}>My Starbucks</Link>
                    </div>
                    <Link to="/cart" className={common.order}>
                        <FontAwesomeIcon icon={faBasketShopping} className={common.pcHeaderCartBtn}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Nav;