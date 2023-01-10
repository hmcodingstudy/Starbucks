import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "firebase/database"
import { authService, db } from "../myFirebase"; 
import join from './../css/join.module.css';


function Join(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState("");

    let navigate = useNavigate();
    
    const onChange = event => {
        const {
            target: { name, value },
        } = event;
        if(name ==='email'){
            setEmail(value);
        } else if(name === 'password'){
            setPassword(value);
        } else if(name === 'name'){
            setName(value);
        }
    }

    // 회원가입
    const onSubmit = async (e) => {
        e.preventDefault();
        authService.createUserWithEmailAndPassword(email, password).then((result)=>{
            console.log(result.user);
            result.user.updateProfile( {displayName : name} )
            var userInfo = { name : name, email : email, password: password }
            db.collection('user').doc(result.user.uid).set(userInfo)
            navigate('/')
        })
        .catch ((error)=>{
        console.log(error);
        });
        
    }

  return (
    <>
    <form onSubmit={onSubmit} className="" name="joinForm" action="" method="" >
        <fieldset>
            <h1 className={join.logo}>로고</h1>
            <legend>회원가입</legend>
            <div className={join.contentsWrap}>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>이름</Form.Label>
                    <Form.Control onChange={onChange} name="name" placeholder="Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control onChange={onChange} name="email" type="email" placeholder="Email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control onChange={onChange} name="password" type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="개인정보 수집 동의 (필수)" required/>
                </Form.Group>
                <Button variant="primary" type="submit" className={join.joinBtn}>
                    가입하기
                </Button>
                {error}
            </div>
        </fieldset>
    </form>
    </>
  );
}

export default Join;