import styled, {css, keyframes} from "styled-components";
import React, { useState } from 'react';
import arrow_icon from '../public/img/arrow_icon.png';

const SideGnbBar = styled.div`
    position:fixed;
    display:flex;
    align-items:center;
    height:100vh;
    width:130px;
    bottom:56px;
    right:0px;
    transition:300ms;
    ${props=>!props.gnbState&&css`
        transform:translateX(100px);
    `}

    @media only screen and (max-width: 768px) {
        display:none;
    }
`

const Icons = styled.div`
    width: 48px;
    height: 48px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    ${props=>props.img&&css`
        background-image: url(${props.img});
    `}
    ${props=>props.state&&css`
        transform: rotate(180deg);
    `}
`

const SideGnbStateBtn =styled.div`
    width:30px;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    font-weight:700;
    transition:300ms;
    opacity:0.1;
    ${props=>props.gnbBtnHover&&css`
        opacity:1;
    `}
`

const SideGnbBox = styled.div`
    height:100%;
    width:100px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:rgba(255,255,255,0.3);
`;

const SideGnbBtn = styled.div`
    transition:300ms;
    cursor:pointer;
    width:100%;
    display:flex;
    padding:20px 0px;
    justify-content:center;
    align-items:center;
    ${props=>props.setState && css`
        font-size:1.5rem;
        color:#000;
        font-weight:700;
        //border-left:3px solid #000;
    `}
    ${props=>(props.setHover&&!props.setState) && css`
        color:#00f;
    `}

`

function SideGnb ({setSelectPage,pageNum}) {
    const [hover,setHover] = useState(0);
    const [gnbState,setGnbState] = useState(true);
    const [gnbBtnHover,setGnbBtnHover] =useState(false);
    return (
        <SideGnbBar gnbState={gnbState}>
            <SideGnbStateBtn
                gnbBtnHover={gnbBtnHover}
                onMouseEnter={()=>{setGnbBtnHover(true)}}
                onMouseLeave={()=>{setGnbBtnHover(false)}}
                onClick={()=>{setGnbState(pre=>!pre)}}>
                    {gnbState?<Icons img={arrow_icon}></Icons>:<Icons state={true} img={arrow_icon}></Icons>}</SideGnbStateBtn>
            <SideGnbBox>
                <SideGnbBtn 
                    setState={pageNum===1} 
                    setHover={hover===1}
                    onClick={()=>{setSelectPage(1)}}
                    onMouseEnter={()=>{setHover(1)}}
                    onMouseLeave={()=>{setHover(0)}}
                >소개</SideGnbBtn>
                <SideGnbBtn 
                    setState={pageNum===2} 
                    setHover={hover===2}
                    onClick={()=>{setSelectPage(2)}}
                    onMouseEnter={()=>{setHover(2)}}
                    onMouseLeave={()=>{setHover(0)}}
                >보유역량</SideGnbBtn>
                <SideGnbBtn 
                    setState={pageNum===3} 
                    setHover={hover===3}
                    onClick={()=>{setSelectPage(3)}}
                    onMouseEnter={()=>{setHover(3)}}
                    onMouseLeave={()=>{setHover(0)}}
                >프로젝트</SideGnbBtn>
                {/* <SideGnbBtn 
                    setState={pageNum===4} 
                    setHover={hover===4}
                    onClick={()=>{setSelectPage(4)}}
                    onMouseEnter={()=>{setHover(4)}}
                    onMouseLeave={()=>{setHover(0)}}
                >스터디</SideGnbBtn> */}
            </SideGnbBox>
        </SideGnbBar>
    );
}

export default SideGnb;    