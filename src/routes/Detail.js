import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark,faChevronRight,faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { addItem, decrement, increment, initialCount, initialAllOptions } from "../data/store.js"
import SelectPc from './../data/SelectPc.js';
import SelectMobile from './../data/SelectMobile.js';
import './../css/effect.css';
import './../App.css';
import common from './../css/common.module.css';
import detail from './../css/detail.module.css';


function Detail(){
    const optionSlide = useRef(null);
    const orderBtnWrap = useRef(null);
    const cartCompleteMsg = useRef(null);

    let [content, setContent] = useState();
    let [cartComplete, setCartComplete] = useState(false);
    let state = useSelector((state)=>{ return state.item })

    //슬라이드 이벤트
    let [slide, setSlide] = useState(false);
    let [orderBtnSlide, setOrderBtnSlide] = useState(false);
    

    //반응형 pc moboile 내용 변경
    function contentChange(){
        if(window.innerWidth >= 769) {
            setContent('pc')
            setSlide(false)
            setOrderBtnSlide(true)
        }
        else if(window.innerWidth < 769){
            setContent('mobile')
            setOrderBtnSlide(false)
        }
    }
    useEffect(()=>{
        slide ? optionSlide.current.classList.replace('selectMobile','active') : optionSlide.current.classList.replace('active','selectMobile')
    },[slide]);
    useEffect(()=>{
        orderBtnSlide ? orderBtnWrap.current.classList.replace('orderBtnWrap2','active3') : orderBtnWrap.current.classList.replace('active3','orderBtnWrap2')
    },[orderBtnSlide]);

    window.addEventListener('resize',()=>{
        contentChange()
    })

    // 장바구니 담기 완료 메세지 슬라이드
    useEffect(()=>{
        if(cartComplete == true){
            cartCompleteMsg.current.classList.replace('cartMessage','complete')
        } else if(cartComplete == false) {
            cartCompleteMsg.current.classList.replace('complete','cartMessage')
        }
    },[cartComplete]);

    return(
        <>
        <div className={common.hiddenHeader}></div>
        <div className="detailContainer" >
            <MainContent/>
            <SelectPc/>
            <div className="selectMobile" ref={optionSlide}>
                <SelectMobile setSlide={setSlide} setOrderBtnSlide={setOrderBtnSlide}/>
            </div>
            <div className={detail.orderBtnWrap1}>
                <button onClick={()=>{
                    setSlide(true); setOrderBtnSlide(true)}} className={detail.orderBtn1}>주문하기</button>
            </div>
            <div className='active3' ref={orderBtnWrap}>
                <div className={detail.btnContainer}>
                    <OrderBtnWrap setCartComplete={setCartComplete} setSlide={setSlide} setOrderBtnSlide={setOrderBtnSlide} state={state}/>
                </div>
            </div>
            {/* 장바구니 완료 메세지 */}
            <div className='cartMessage' ref={cartCompleteMsg}>
                <div className={detail.cartMessageCnt}>
                    <div className={detail.messageWrap}>
                        <span>장바구니에 담겼습니다.</span>
                        <button><FontAwesomeIcon onClick={()=>setCartComplete(false)}icon={faCircleXmark} /></button>
                    </div>
                    <p className={detail.cartMessageBtns}>
                        <Link to="/cart" className={detail.goToCart}><button>장바구니 가기</button></Link>
                        <Link to="/order" className={detail.goToMenu}><button>다른 메뉴 더보기</button></Link>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

function MainContent(){
    let state = useSelector((state)=>{ return state.item });
    let {id} = useParams();
    const found = state.find(function(x){
        return x.id == id
    });

    // 이미지 배경색 변경
    const drinkBg = useRef();
    let [imgBg, setimgBg] = useState('green');
    function bgChange() {
        if(found.cate == "new"){
            setimgBg('blue')            
        } 
        else {
            setimgBg('green')
        }
    }
    useEffect(()=>{
        bgChange()
    })
    window.addEventListener('resize',()=>{
        bgChange()
    });
    
    return(
    <>
    <div className= {`${detail.drink1} ${imgBg == 'blue'? 'changeBgBlue' :  'changeBgGreen'}`} ref={drinkBg}>
            <div className={detail.drink1ImgWrap}>
                <div style ={ {backgroundImage: "url("+ found.img +")"}} className={detail.drink1Img}>slide1_img</div>
            </div>
            <div className={detail.drink1TextWrap}>
                <div className={detail.drink1Text}>
                    <span className={detail.kTitle}>{found.kTitle}</span>
                    <span className={detail.eTitle}>{found.eTitle}</span>
                    <span className={detail.price}>{found.price.toLocaleString()}원</span>
                    <span className={detail.detail}>{found.content}</span>
                    <div className={detail.nutrInfoPc}>
                        <span>제품 영양 정보</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

function OrderBtnWrap(props){
    let dispatch = useDispatch()
    let {id} = useParams();
    let cart_ = useSelector((state)=>{ return state.cart_ })
    let state = useSelector((state)=>{ return state })

    const found = props.state.find(function(x){
        return x.id == id
    });
    return(
        <>
            <div className={detail.priceWrap}>
                <div className={detail.quantityWrap}>
                    <FontAwesomeIcon icon={faSquareMinus} onClick={()=>{
                        state.counter.value <= 1 ? dispatch(initialCount()) : dispatch(decrement())
                    }} className={detail.minus}/>
                    <span className={detail.quantity}>{state.counter.value}</span>
                    <FontAwesomeIcon icon={faSquarePlus} onClick={()=>{
                        dispatch(increment())
                    }}className={detail.plus}/>
                </div>
                <div className={detail.amount}>
                    <span className={detail.totalAmount}>{(found.price * state.counter.value).toLocaleString()}원</span>
                </div>
            </div>
            <div className={detail.orderBtn2Wrap}>
                <button onClick={(e)=>{
                    // e.preventDefault();
                    dispatch(addItem({id: found.id, size:state.option.size, cup:state.option.cup, count: state.counter.value , kTitle: found.kTitle, eTitle :found.eTitle, price : found.price, img : found.img}));
                    dispatch(initialCount())
                    dispatch(initialAllOptions())
                    props.setCartComplete(true);
                    props.setSlide(false);
                    props.setOrderBtnSlide(false);
                }}        
                className={detail.cartBtn}>장바구니에 담기</button>
            </div>
        </>
    )}

export default Detail;