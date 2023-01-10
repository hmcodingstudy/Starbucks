import { useRef, useState } from 'react';
import { useSelector } from "react-redux"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import SwiperCore, { Navigation } from 'swiper';
import common from './../css/common.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import order from './../css/order.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";


function Order(){
    let [contents, setContents] = useState('Best');
    const BestDrinkTab = useRef(null);
    const NewBestDrinkTab = useRef(null);

    // 탭 메뉴 색상 변경
    const onBestBestDrinkTab = () => {
        BestDrinkTab.current.style.backgroundColor = 'rgb(14, 126, 42)';
        NewBestDrinkTab.current.style.backgroundColor = 'rgb(226, 226, 226)';
        setContents('Best')
    }
    const onNewBestDrinkTab = () => {
        BestDrinkTab.current.style.backgroundColor = 'rgb(226, 226, 226)';
        NewBestDrinkTab.current.style.backgroundColor = 'rgb(14, 126, 42)';
        setContents('New')
    }

    return(
        <>
        <div className={common.hiddenHeader}></div>
        <div className={order.tab}>
            <button onClick={()=>{ onBestBestDrinkTab()}} className={order.drink} ref={BestDrinkTab}>Best</button>
            <button onClick={()=>{ onNewBestDrinkTab()}} className={order.food} ref={NewBestDrinkTab}>New</button>
        </div>
        {
            contents == 'New'? <NewDrink/> : <BestDrink/>
        }
        </>
    )
}

function BestDrink(){
    let navigate = useNavigate()
    let BestDrinkStore = useSelector((state)=>{ return state.BestDrinkStore })
    return <Swiper
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={10}
        autoHeight={true}
        centeredSlides={true}
        loop={true}
        direction={"horizontal"}
        navigation
        className={order.swiper}>
            {
            BestDrinkStore.map((a, i) => {
                return(
                    <SwiperSlide className={order.swiperSlide} key={i} onClick={()=>{ navigate(`/detail/${BestDrinkStore[i].id}`) }}>
                        <div className={order.slideImgWrap} style={{position:'relative'}}>
                            <div style ={ {position:'relative',backgroundImage: "url("+ BestDrinkStore[i].img +")"}} className={order.slideImg}></div>
                            <FontAwesomeIcon className={order.heartBtn} icon={faHeart} />
                        </div>
                        <div className={order.line}></div>
                        <span className={order.kTitle}>{BestDrinkStore[i].kTitle}</span>
                        <span className={order.eTitle}>{BestDrinkStore[i].eTitle}</span>
                    </SwiperSlide>
                )
            })}
    </Swiper>
}

function NewDrink(){
    let navigate = useNavigate()
    let NewDrinkStore = useSelector((state)=>{ return state.NewDrinkStore })
    return <Swiper
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={10}
        autoHeight={true}
        centeredSlides={true}
        loop={true}
        direction={"horizontal"}
        navigation
        className={order.swiper}>
            {
            NewDrinkStore.map((a, i) => {
                return(
                    <SwiperSlide className={order.swiperSlide} key={i} onClick={()=>{ navigate(`/detail/${NewDrinkStore[i].id}/`) }}>
                        <div className={order.slideImgWrap} style={{position:'relative'}}>
                            <div style ={ {backgroundImage: "url("+ NewDrinkStore[i].img +")"}} className={order.slideImg}></div>
                            <FontAwesomeIcon className={order.heartBtn} icon={faHeart} />
                        </div>
                        <div className={order.line}></div>
                        <span className={order.kTitle}>{NewDrinkStore[i].kTitle}</span>
                        <span className={order.eTitle}>{NewDrinkStore[i].eTitle}</span>
                    </SwiperSlide>
                )
            })}
    </Swiper>
}

export default Order;