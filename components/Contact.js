import React, { useEffect } from 'react';
import styled from 'styled-components';
import {ImMobile} from 'react-icons/im';
import {MdMail} from "react-icons/md";
import {BsGithub} from 'react-icons/bs';

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


function Contact(){
    return(
        <Footer>
            <div className="footerBox">
                <a className="github" href="">
                    <BsGithub size={28}/>
                </a>
                <a className="blog" href=""></a>
                <a className="mail" href="mailto:mrzero885@gmail.com">
                    <MdMail size={28}/>
                </a>
            </div>
        </Footer>
    )
}

export default Contact;