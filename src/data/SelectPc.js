import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import detail from './../css/detail.module.css';
import { Tall, Grande, Venti, StoreCup, PersonalCup, DisposableCup } from "../data/store.js"

function SelectPc(){
    let dispatch = useDispatch()
    let state = useSelector((state)=>{ return state });
    return(
    <div className={detail.selectPc}>
        <div className={detail.optionListPc}>
            <div className={detail.optionListTitle}>
                <span>퍼스널 옵션</span>
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
        <div className={detail.sizeWrapPc}>
            <div className={detail.size}>
                <span>사이즈</span>
                <div className={detail.sizeWrap}>
                    <div onClick={()=>{dispatch(Tall()); console.log(state.option)}} style={{background : state.option.size == 'Tall'? 'green' : 'none'}} className={`${detail.tall} ${detail.size_}`}>
                        <div className={detail.image}></div>
                        <span>Tall</span>
                        <span>355ml</span>
                    </div>
                    <div onClick={()=>{dispatch(Grande()); console.log(state.option)}} style={{background : state.option.size == 'Grande'? 'green' : 'none'}} className={`${detail.grande} ${detail.size_}`}>
                        <div className={detail.image}></div>
                        <span>Grande</span>
                        <span>473ml</span>
                    </div>
                    <div onClick={()=>{dispatch(Venti()); console.log(state.option)}} style={{background : state.option.size == 'Venti'? 'green' : 'none'}} className={`${detail.venti} ${detail.size_}`}>
                        <div className={detail.image}></div>
                        <span>Venti</span>
                        <span>591ml</span>
                    </div>
                </div>
            </div>
            <div className={detail.cup}>
                <span>컵 선택</span>
                <div className={detail.cupOption}>
                    <div className={detail.cup1} onClick={()=>{dispatch(StoreCup()); console.log(state.option.cup);}} style={{background : state.option.cup == '매장컵'? 'green' : 'none'}}>매장컵</div>
                    <div className={detail.cup2} onClick={()=>{dispatch(PersonalCup()); console.log(state.option.cup);}} style={{background : state.option.cup == '개인컵'? 'green' : 'none'}}>개인컵</div>
                    <div className={detail.cup3} onClick={()=>{dispatch(DisposableCup()); console.log(state.option.cup);}} style={{background : state.option.cup == '일회용컵'? 'green' : 'none'}}>일회용컵</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SelectPc;


