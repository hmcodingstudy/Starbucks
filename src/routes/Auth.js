import { useState } from 'react';
import { Link } from 'react-router-dom';
import { authService } from "../myFirebase"
import firebase from 'firebase/app';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import auth from './../css/auth.module.css';

function Auth(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [error, setError] = useState("");

    const onChange = event => {
        const {
            target: { name, value },
        } = event;
        if(name ==='email'){
            setEmail(value);
        } else if(name === 'password'){
            setPassword(value);
        }
    }

    // 로그인
    const onSubmit = async(event) => {
        event.preventDefault();
        try{
            await firebase.auth().signInWithEmailAndPassword( email, password);
        } catch(error) {
            setError(error.message);
            if(error.message == "Firebase: Error (auth/user-not-found)."||"There is no user record corresponding to this identifier. The user may have been deleted."){
                setError("일치하는 계정이 없습니다.")
            }
        }
        
    }

    // 구글 로그인
    const onSocialClick = async(event) => {
        const {
            target : { name },
        } = event;
        if(name === "google"){
            var provider = new firebase.auth.GoogleAuthProvider();
        }
        await authService.signInWithPopup(provider);
    }
    return(
        <>
            <h1 className={auth.logo}>로고</h1>
            <form onSubmit={onSubmit} className={auth.loginForm}>
                <Form.Group>
                    <Form.Control onChange={onChange} name="email" type="email" placeholder="Email" required value={email} className={auth.inputEmail}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control onChange={onChange} name="password" type="password" placeholder="Password" required value={password} className={auth.inputPwd}/>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="success" type="submit" value="로그인" className={auth.btn1}>로그인</Button>
                    <Link to="/join">
                        <Button variant="outline-success" type="submit" style={{width:'100%'}}>회원가입</Button>
                    </Link>
                    <button onClick={onSocialClick} name="google" className={auth.google} style={{backgroundSize:200}}>Google로 로그인하기</button>
                </div>
                <span className={auth.error}>{error}</span>
            </form>
        </>
    )
}


export default Auth;