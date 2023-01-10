import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { useEffect } from 'react';
import { clearCart } from "../data/store.js"
import complete from './../css/complete.module.css';
import common from './../css/common.module.css';


function Complete(){
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(clearCart())
    })

    return(
        <>
            <div className={common.hiddenHeader}></div>
            <img src="https://www.starbucks.co.kr/common/img/common/logo.png"/>
            <span className={complete.title}>결제가 완료되었습니다.</span>
            <p>
                <span className={complete.text1}>주문하신 메뉴가 준비되면 알람으로 알려드리겠습니다.</span>
            </p>
            <p>
                <span className={complete.text2}>주문현황은 마이페이지에서 확인 가능합니다.</span>
            </p>
            <div className={complete.btnWrap}>
                <Link to="/"><button className={complete.goToHome}>홈으로 돌아가기</button></Link>
                <Link to="/my"><button className={complete.goToMyorder}>주문 현황</button></Link>
            </div>
        </>
    )
}

export default Complete;