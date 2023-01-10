import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../myFirebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './../css/effect.css';
import profile from './../css/profile.module.css';
import common from './../css/common.module.css';
import Button from 'react-bootstrap/Button';
import "firebase/database"

function Profile(){
    const navigate = useNavigate();
    const [userName,setUserName] = useState();

    //로그아웃
    const onLogOutClick = () =>{
        authService.signOut();
        navigate('/');
    }

    //firestore 데이터 가져오기
    authService.onAuthStateChanged((user)=>{
        if (user) {
            setUserName(user.displayName)
        }
        console.log(user.displayName);
    })

    return(
        <>
            <div className={common.hiddenHeader}></div>
            <div className={profile.welcomeTextWrap}>
                <div className={profile.welcomeName}>
                    <span style={{color:'green', fontWeight:'500', lineHeight:'25px'}}>{userName}</span>
                    <span>님</span>
                </div>
                <span>환영합니다!🙌</span>
            </div>
            <div className={profile.menuWrap}>
                <Link to="/my">
                    <div className={profile.menu}>주문 현황
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:'19px', cursor:'pointer'}}/>
                    </div>
                </Link>
                <div className={profile.menu}>스타벅스 카드
                    <FontAwesomeIcon icon={faChevronRight} style={{fontSize:'19px', cursor:'pointer'}}/>
                </div>
                <div className={profile.menu}>찜한 메뉴
                    <FontAwesomeIcon icon={faChevronRight} style={{fontSize:'19px', cursor:'pointer'}}/>
                </div>
                <div className={profile.menuLast}>닉네임 변경
                    <FontAwesomeIcon icon={faChevronRight} style={{fontSize:'19px', cursor:'pointer'}}/>
                </div>
            </div>
            <Button variant="success" onClick={onLogOutClick} className={profile.logOutBtn}>로그아웃</Button>
        </>
    )
}


export default Profile;