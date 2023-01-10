import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { authService } from '../myFirebase';
import './../css/effect.css';
import my from './../css/my.module.css';
import common from './../css/common.module.css';

function My(){
    const navigate = useNavigate();

    let state = useSelector((state)=>{ return state })
    const orderStateText = useRef(null);
    const step1 = useRef(null);
    const step2 = useRef(null);
    const step3 = useRef(null);
    let [now, setNow] = useState(0);

    //로그아웃
    const onLogOutClick = () =>{
        authService.signOut();
        navigate('/');
    }

    //주문 상태 변경시 텍스트 변경
    if(now == 1){
        step1.current.className += ' now';
        orderStateText.current.innerHTML = '주문하신 메뉴가 접수되었습니다.' ;
    }else if(now == 2){
        step1.current.classList.remove('now');
        step2.current.className += ' now';
        orderStateText.current.innerHTML = '주문하신 메뉴를 만들고 있습니다.' ;
    } else if(now == 3){
        step2.current.classList.remove('now');
        step3.current.className += ' now';
        orderStateText.current.innerHTML = '제조가 완료되었습니다.  픽업대에서 수령해 주세요.'
    }

    useEffect(()=>{
        if(state.user.length > 0){
            setTimeout(()=>{
                setNow(1)
            },300)
            setTimeout(()=>{
                setNow(2)
            },3000)
            setTimeout(()=>{
                setNow(3)
            },6000)
        }
    },[])

    return(
        <>
        <div className={common.hiddenHeader}></div>
        <div className={my.orderState}>
            <div>
                <div className='step1' ref={step1}>1</div>
                <span>주문 접수</span>
            </div>
            <div>
                <div className='step2' ref={step2}>2</div>
                <span>제조중</span>
            </div>
            <div>
                <div className='step3' ref={step3}>3</div>
                <span>제조 완료</span>
            </div>
        </div>
        <div className='orderStateText' ref={orderStateText}>주문 내역이 없습니다.</div>
        <div className={my.orderPdtWrap}>
            <span className={my.title2}>주문 메뉴</span>
        {
            state.user.map((a, i) => {
                return(
                <div className={my.orderPdt1} key={i}>
                    <div className={my.orderPdtImg} style={{background:`url(${state.user[i].img})`, backgroundSize: '100px'}}></div>
                    <div className={my.orderPdtTextWrap}>
                        <div>
                            <span className={my.kTitle}>{state.user[i].kTitle}</span>
                            <p><span className={my.eTitle}>{state.user[i].eTitle}</span></p>
                        </div>
                        <div className={my.options}>
                            <span>{state.user[i].size}</span>
                            <span>&nbsp;|&nbsp;</span>
                            <span>{state.user[i].cup}</span>
                        </div>
                        <div className={my.quantityWrap}>
                            <span className={my.quantity}>수량 : {state.user[i].count}개</span>
                            <span className={my.price}>{(state.user[i].price * state.user[i].count).toLocaleString()}원</span>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
        </>
    )
}


export default My;