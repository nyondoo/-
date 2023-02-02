import React from 'react'
import { useEffect } from 'react'

export default function Login({ setGetTpken, setUserInfo }) {

    const { naver } = window;
    const NAVER_CLIENT_ID =  'bJC3yzEnH2Wypd9VoRVZ';
    //PY1oKfeGud
    const NAVER_CALLBACK_URL = 'http://localhost:8080/naverLogin';

    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            isPopup: false,
            loginButton: { color:'green', type:3, height: 58 },
            callbackHandle: true,
        });
        naverLogin.init();
    }
  return (
    
  )
}
