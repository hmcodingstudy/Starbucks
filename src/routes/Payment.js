import {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPaymentDetails, clearCart } from "../data/store.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faChevronRight, faMobileScreenButton,faTicket } from '@fortawesome/free-solid-svg-icons'
import payment from './../css/payment.module.css';
import common from './../css/common.module.css';



function Payment(){
    let state = useSelector((state)=>{ return state })
    return (
    <>
    <div className={common.hiddenHeader}></div>
    <h3 className={payment.h3}>결제</h3>
    <div className={payment.orderCntWrap}>
        <section className={payment.orderSection}>
            <div className={payment.paymentMhd}>
                <span className={payment.subTitle}>결제 수단</span>
                <div>
                    <div className={payment.cardWrap}>
                        <div className={payment.cardImg}></div>
                        <div className={payment.cardText}>
                            <span>스타벅스 카드</span>
                            <span>51,000원</span>
                        </div>
                    </div>
                    <button><FontAwesomeIcon icon={faChevronRight} style={{fontSize:'20px', cursor:'pointer'}}/></button>
                </div>
            </div>
            <div className={payment.couponWrap}>
                <span className={payment.subTitle}>쿠폰 및 할인</span>
                <div className={payment.coupon}>
                    <FontAwesomeIcon icon={faTicket} className={payment.couponIcon}/>
                    <span>쿠폰</span>
                </div>
                <div className={payment.discount}>
                    <FontAwesomeIcon icon={faMobileScreenButton} className={payment.discountIcon}/>
                    
                    <span>통신사 제휴 할인</span>
                </div>
            </div>
            <div className={payment.receiptWrap}>
                <span className={payment.subTitle}>현금 영수증</span>
                <div className={payment.receiptCntPc}>
                    <div className={payment.radioWrap}>
                        <label>
                            <input type = "radio" name="receipt" defaultChecked></input><span>개인</span>
                        </label>
                        <label>
                            <input type = "radio" name="receipt"></input><span>사업자</span>
                        </label>
                    </div>
                    <div className={payment.numberWrap}>
                        <input type="number"></input>
                    </div>
                </div>
            </div>
        </section>
        <div className={payment.orderPdtWrap}>
            <span className={payment.subTitle}>주문 내역</span>
        {
            state.cart_.map((a, i) => {
                return(
                <div className={payment.orderPdt} key={i}>
                    <div className={payment.orderPdtImg} style={{background:`url(${state.cart_[i].img})`, backgroundSize: '70px'}}></div>
                    <div className={payment.orderPdtTextWrap}>
                        <div>
                            <span className={payment.kTitle}>{state.cart_[i].kTitle}</span>
                            <p><span className={payment.eTitle}>{state.cart_[i].eTitle}</span></p>
                        </div>
                        <div className={payment.options}>
                            <div>
                                <span>{state.cart_[i].size}</span>
                                <span>&nbsp;|&nbsp;</span>
                                <span>{state.cart_[i].cup}</span>
                                <span>&nbsp;|&nbsp;</span>
                                <span>{state.cart_[i].count}개</span>
                            </div>
                            <span>{(state.cart_[i].price * state.cart_[i].count).toLocaleString()}원</span>
                        </div>
                    </div>
                </div>
        )}
        )}
        </div>
    </div>
    <Footer/>
    </>
    )}

    function Footer(){
        let dispatch = useDispatch();
        let cart_ = useSelector((state)=>{ return state.cart_ })
        return(
            <div className={payment.orderBtnWrap}>
                <Link to="/complete"><button onClick={()=>{
                    let i = 0;
                    for(i = 0; i < cart_.length; i++){
                            dispatch(addPaymentDetails({
                                id: cart_[i].id, size:cart_[i].size, cup:cart_[i].cup, count: cart_[i].count , kTitle: cart_[i].kTitle, eTitle :cart_[i].eTitle, price : cart_[i].price, img : cart_[i].img
                            }))
                        }
                }}className={payment.orderBtn}>결제하기</button></Link>
            </div>
        )
        
    }


export default Payment;