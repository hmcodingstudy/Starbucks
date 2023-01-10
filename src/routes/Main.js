import './../css/reset.css';
import './../App.css';
import common from './../css/common.module.css';
import Index from './../css/Index.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

function Main() {
    let [changeSlide, setChangeSlide] = useState(0);
    const screen1Ref = useRef();
    const screen2Ref = useRef();

    useEffect(()=>{
        if(changeSlide == 2){
            screen1Ref.current.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/14/16/20/snowflake-1823942_1280.jpg')";
            screen1Ref.current.style.transition = '0.8s';
        } else if(changeSlide == 3){
            screen1Ref.current.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/10/20/01/06/north-star-2869817_1280.jpg')";
        }else if(changeSlide == 4){
            screen1Ref.current.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/29/13/37/christmas-1869902_1280.jpg')";
        }else if(changeSlide == 1){
            screen1Ref.current.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/02/12/10/29/christmas-2059698_1280.jpg')";
        }else if(changeSlide == 5){
            setChangeSlide(1)
        }
    },[changeSlide])

    // 휠 이벤트
    let [scroll, setScroll] = useState(0);

    useEffect(()=>{
        if (scroll == 2) {
        screen2Ref.current.scrollIntoView({ behavior: "smooth" });
        } else if(scroll == 1){
        screen1Ref.current.scrollIntoView({ behavior: "smooth" });
        }
    },[scroll]);

    useEffect(()=>{
        const indexMain = document.getElementById('indexMain')
        indexMain.addEventListener('wheel', event => {
        event.preventDefault();
        var y = event.deltaY
        if(y > 0) {
            setScroll(2);
        } else if(y < 0) {
            setScroll(1);
        }
        event.stopPropagation();
    },{passive:false})
})
        

    return (
        <>
        <main id='indexMain'>
            <div ref={screen1Ref} className={Index.screen1} >
                <Screen1 changeSlide={changeSlide} setChangeSlide={setChangeSlide}/>
            </div>
            <div ref={screen2Ref} className={Index.screen2}>
                <Screen2/>
            </div>
        </main>
        </>
    );
}

function Screen1(props){
    return(
        <>
            <div className={common.hiddenHeader}></div>
            <section className={Index.content}>
                <div className={Index.flowBar1}>
                    <FlowText/>
                </div>
                <div className={Index.contentsWrap}>
                    <div className={Index.detailWrap}>
                        <div className={Index.holidayLogo}>홀리데이로고</div>
                        <div className={Index.textWrap}>
                            <span className={Index.text}>
                                우리의 크리스마스,<br />
                                스타벅스와 함께 더욱 반짝이게
                            </span>
                            <Link to="/order">
                                <button style={{display:'block'}}className={Index.text_button}>Order now →</button>
                            </Link>
                        </div>
                    </div>
                    <Swiper
                    modules={[Navigation]}
                    slidesPerView={"auto"}
                    spaceBetween={70}
                    autoHeight={true}
                    centeredSlides={true}
                    loop={true}
                    navigation
                    onSlideChange={() => {
                        props.setChangeSlide(props.changeSlide + 1);
                    }}
                    className={Index.swiper} style={{display:'flex'}}>
                        <SwiperSlide className={Index.h_drink1}>
                            <div className={Index.h_drink1Img}></div>
                        </SwiperSlide>
                        <SwiperSlide className={Index.h_drink2}>
                            <div className={Index.h_drink2Img}></div>
                        </SwiperSlide>
                        <SwiperSlide className={Index.h_drink3}>
                            <div className={Index.h_drink3Img}></div>
                        </SwiperSlide>
                        <SwiperSlide className={Index.h_drink4}>
                            <div className={Index.h_drink4Img}></div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={Index.flowBar2}>
                    <FlowText/>
                </div>
            </section>
        </>
    )
}


function Screen2(){
    return(
        <>
        <div className={Index.screen2}>
        <section className={Index.content2}>
            <div className={Index.holidayLogo2_wrap}>
                <div className={Index.holidayLogo2}>JOYFUL CHRISTMAS</div>
                <span className={Index.text2}>특별한 겨울을 만들어 줄 크리스마스를 준비하세요!</span>
            </div>
            <div className={Index.container}>
                <div className={Index.pdt_wrap}>
                    <div className={Index.pdt1}></div>
                    <div className={Index.pdt2}></div>
                    <div className={Index.pdt3}></div>
                    <div className={Index.pdt4}></div>
                    <div className={Index.pdt5}></div>
                    <div className={Index.pdt6}></div>
                    <div className={Index.pdt7}></div>
                    <div className={Index.pdt8}></div>
                </div>
            </div>
        </section>
    </div>
    </>
    )
};

function FlowText(){
    return(
        <div className={Index.flowtext}>
            &nbsp;&nbsp;🎄2022 Happy Holiday with Starbucks✨&nbsp;&nbsp;
            &nbsp;&nbsp;🎄2022 Happy Holiday with Starbucks✨&nbsp;&nbsp;
            &nbsp;&nbsp;🎄2022 Happy Holiday with Starbucks✨&nbsp;&nbsp;
            &nbsp;&nbsp;🎄2022 Happy Holiday with Starbucks✨&nbsp;&nbsp;
            &nbsp;&nbsp;🎄2022 Happy Holiday with Starbucks✨&nbsp;&nbsp;
            &nbsp;&nbsp;🎄2022 Happy Holiday with Starbucks✨&nbsp;&nbsp;
            &nbsp;&nbsp;🎄2022 Happy Holiday with Starbucks✨&nbsp;&nbsp;
        </div>
    )
}


export default Main;