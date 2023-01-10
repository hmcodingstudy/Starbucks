import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { Tall, Grande, Venti, StoreCup, PersonalCup, DisposableCup, initialAllOptions } from "../data/store.js"
import detail from './../css/detail.module.css';
import './../css/effect.css';

function SelectMobile(props){
    let {id} = useParams();
    let state = useSelector((state)=>{ return state });
    const dispatch = useDispatch();
    const found = state.item.find(function(x){
        return x.id == id
    });

    return(
        <>
        <div className={detail.closeBtnWrap}>
            <span className={detail.name}>{found.kTitle}</span>
            <button onClick={()=>{props.setSlide(false); props.setOrderBtnSlide(false)}} className={detail.closeBtn}><FontAwesomeIcon icon={faCircleXmark} /></button>
        </div>
        <div className={detail.size}>
            <span>사이즈</span>
            <div className={detail.sizeWrap}>
                <div onClick={()=> {dispatch(Tall()); console.log(state.option.size);}} className={`${detail.tall} ${detail.size_} `}
                style={{background : state.option.size == 'Tall'? 'green' : 'none'}}>
                    <div className={detail.image}></div>
                    <span>Tall</span>
                    <span>355ml</span>
                </div>
                <div onClick={()=>{dispatch(Grande()); console.log(state.option.size);}} className={`${detail.grande} ${detail.size_}`}
                style={{background : state.option.size == 'Grande'? 'green' : 'none'}}>
                    <div className={detail.image}></div>
                    <span>Grande</span>
                    <span>473ml</span>
                </div>
                <div onClick={()=>{dispatch(Venti()); console.log(state.option.size);}} className={`${detail.venti} ${detail.size_}`}
                style={{background : state.option.size == 'Venti'? 'green' : 'none'}}>
                    <div className={detail.image}></div>
                    <span>Venti</span>
                    <span>591ml</span>
                </div>
            </div>
        </div>
        <div className={detail.cup}>
            <span>컵 선택</span>
            <div className={detail.cupOption}>
                <div onClick={()=>{dispatch(StoreCup()); console.log(state.option.cup);}} className={detail.cup1}
                style={{background : state.option.cup == '매장컵'? 'green' : 'none'}}>매장컵</div>
                <div onClick={()=>{dispatch(PersonalCup()); console.log(state.option.cup);}} className={detail.cup2}
                style={{background : state.option.cup == '개인컵'? 'green' : 'none'}}>개인컵</div>
                <div onClick={()=>{dispatch(DisposableCup()); console.log(state.option.cup);}} className={detail.cup3}
                style={{background : state.option.cup == '일회용컵'? 'green' : 'none'}}>일회용컵</div>
            </div>
        </div>
        <PersonalOption/>
    </>
)}

function PersonalOption(){
    const optionListMobile = useRef(null);
    let [personal,setPersonal] = useState(false)
    useEffect(()=>{
        personal ? optionListMobile.current.classList.replace('optionListMobile','active2') : optionListMobile.current.classList.replace('active2','optionListMobile')
    },[personal]);

    return(
        <>
        <div className={detail.option}>
            <div className={detail.optionTitle}>
                <span>퍼스널 옵션</span>
                <button onClick={()=>{setPersonal(true);}} className={detail.optionBtn}><FontAwesomeIcon icon={faChevronDown} /></button>
            </div>
        </div>
        <div className="optionListMobile" ref={optionListMobile}>
            <div className={detail.optionListTitle}>
                <span>퍼스널 옵션</span>
                <button onClick={()=>{setPersonal(false);}} className={detail.backBtn}><FontAwesomeIcon icon={faChevronDown} /></button>
            </div>
            <div className={detail.opt1}>
                <div className={detail.opt_wrap}>
                    <span>커피</span>
                    <span>드립 커피</span>
                </div>
                <button><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <div className={detail.opt2}>
                <div className={detail.opt_wrap}>
                    <span>시럽</span>
                    <span>바닐라 시럽 1</span>
                </div>
                <button><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <div className={detail.opt3}>
                <div className={detail.opt_wrap}>
                    <span>베이스</span>
                    <span>바닐라크림베이스</span>
                </div>
                <button><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <div className={detail.opt4}>
                <div className={detail.opt_wrap}>
                    <span>얼음</span>
                    <span>얼음</span>
                </div>
                <button><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <div className={detail.opt5}>
                <div className={detail.opt_wrap}>
                    <span>휘핑 크림</span>
                </div>
                <button><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <div className={detail.opt6}>
                <div className={detail.opt_wrap}>
                    <span>드리즐</span>
                </div>
                <button><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <div className={detail.opt7}>
                <div className={detail.opt_wrap}>
                    <span>컵&리드 옵션</span>
                </div>
                <button><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
        </div>
        </>
    )
}

export default SelectMobile;