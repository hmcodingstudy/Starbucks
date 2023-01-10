import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSquareMinus, faSquarePlus, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { deleteItem } from "../data/store.js"
import { cart_increment,cart_decrement,cart_initialCount,clearCart } from "../data/store.js"

import common from './../css/common.module.css';
import cart from './../css/cart.module.css';

function Cart(){
    let state = useSelector((state)=>{ return state })
    let dispatch = useDispatch()

    return (
        <>
        <div className={common.hiddenHeader}></div>
        <div className={cart.title}>
            <h3 className={cart.h3}>장바구니</h3>
            <select>
                <option value="">주문할 매장을 선택해 주세요</option>
                <option value="">국기원점</option>
                <option value="">강남역점</option>
            </select>
        </div>
        <div className={cart.cartPdtWrap}>
            <div className={cart.title2}>
                <div className={cart.title2TextWrap}>
                    <span>주문 메뉴</span>
                    <button onClick={()=>{dispatch(clearCart(state.cart_))}} className={cart.deleteAll}>
                        <FontAwesomeIcon icon={faCheck} style={{color:'tomato'}} /> 전체 삭제
                    </button>
                </div>
                {
                    state.cart_.length == 0 ? <span className={cart.zeroMsg}>장바구니가 비어있습니다.</span> : ''
                }
            </div>
            <div className={cart.cartItemContainer}>
                {
                    state.cart_.map((a, i) => {
                        return(
                            <div className={cart.cartPdt} key={i}>
                                <div className={cart.imgWrap}>
                                    <div className={cart.cartPdtImg} style={{backgroundImage:`url(${state.cart_[i].img})`, backgroundSize: '100px'}}></div>
                                </div>
                                <div className={cart.cartPdtTextWrap}>
                                    <button onClick={()=>{
                                        dispatch(deleteItem(state.cart_[i]))
                                    }}className={cart.deleteBtn}><FontAwesomeIcon icon={faCircleXmark} /></button>
                                    <div>
                                        <span className={cart.kTitle}>{state.cart_[i].kTitle}</span>
                                        <p><span className={cart.eTitle}>{state.cart_[i].eTitle}</span></p>
                                    </div>
                                    <div className={cart.options}>{state.cart_[i].size} | {state.cart_[i].cup}</div>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <div className={cart.quantityWrap}>
                                            <FontAwesomeIcon icon={faSquareMinus} onClick={()=>{
                                                state.cart_[i].count <= 1 ? dispatch(cart_initialCount()) : dispatch(cart_decrement(i));
                                            }} className={cart.minus}/>
                                            <span className={cart.quantity}>{state.cart_[i].count}</span>
                                            <FontAwesomeIcon icon={faSquarePlus} onClick={()=>{
                                                dispatch(cart_increment(i))
                                            }} className={cart.plus}/>
                                        </div>
                                        <span style={{fontWeight:'500'}}>{(state.cart_[i].price * state.cart_[i].count).toLocaleString()}
                                        원</span>
                                    </div>
                                </div>
                            </div>
                        )})
                }
            </div>
        </div>
        <Footer/>
    </>
    )
}



function Footer(){
    let state = useSelector((state)=>{ return state })
    let navigate = useNavigate();

    // 주문 총 합계 구하기
    let sum = 0;
    for(let i = 0; i < state.cart_.length; i++)  {
      sum += parseInt(state.cart_[i].price * state.cart_[i].count);
    }
    let sumToLocale = sum.toLocaleString();
    

    return(
        <div className={cart.orderBtnWrap}>
        <div className={cart.amount}>
            <span>합계</span>
            <div>
                <span className={cart.totalAmount}>{sumToLocale}</span>
                <span>원</span>
            </div>
        </div>
        <Link to="/payment" onClick={()=>{state.cart_.length == 0? navigate(0) : navigate('/payment')}}>
            <button className={cart.orderBtn}>주문하기</button>
        </Link>
    </div>
    )
}
export default Cart;