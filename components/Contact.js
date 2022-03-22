import React, { useEffect } from 'react';
import styled,{css}from 'styled-components';
import mail_icon from '../public/img/mail_icon.png';
import github_icon from '../public/img/github_icon.png';

const Footer = styled.div`
    position:fixed;
    width:100vw;
    bottom:0px;
    left:0px;
    height:56px;
    background-color:rgba(255,255,255,0.7);
    z-index:999;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:0.8rem;
    a{
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .footerBox{
        width:60%;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`
const Icons = styled.div`
    width: 48px;
    height: 48px;
    background-size: contain;
    background-position: center;
    ${props=>props.img&&css`
        background-image: url(${props.img});
    `}
`

function Contact(){
    return(
        <Footer>
            <div className="footerBox">
                <a className="github" target="blank" href="https://github.com/Mrzero-00">
                    <Icons img={github_icon}></Icons>
                </a>
                <a className="mail" href="mailto:mrzero885@gmail.com">
                    <Icons img={mail_icon}></Icons>
                </a>
            </div>
        </Footer>
    )
}

export default Contact;