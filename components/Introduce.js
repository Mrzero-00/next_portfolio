import React, { useEffect, useState } from 'react';
import InnerPage from './InnerPage';
import Typist from 'react-text-typist';
import styled,{keyframes,css} from 'styled-components';
import person_icon from '../public/img/person_icon.png';
import mail_icon from '../public/img/mail_icon.png';
import phone_icon from '../public/img/phone_icon.png';
import certificate_icon from '../public/img/certificate_icon.png';
import career_icon from '../public/img/career_icon.png';
const fadeUpIn = keyframes`
    from{
        opacity:0;
        transform:translateY(30px);
    }to{
        opacity:1;
        transform:translateY(0px);       
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

const StyledTypist =styled(Typist)`
    font-size: 2rem;
    color: #323232;
    font-weight:bold;
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
  }
`;

const IntroInner = styled.div`
    width:100%;
    height:100%;
    padding:8rem 7rem 8rem 8rem;
    @media only screen and (max-width: 768px) {
        padding:7rem 1rem;
  }
`

const IntroInnerInfo = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    margin-top:5rem;
    animation-duration : 1000ms;
    animation-timing-function: ease-out;
    animation-name:${fadeUpIn};
    animation-fill-mode:forwards;
    @media only screen and (max-width: 768px) {
        margin-top:2rem;
    }
`

const IntroInnerInfoItem = styled.div`
    width:50%;
    display:flex;
    @media only screen and (max-width: 768px) {
           flex-direction:column;
        }
    .infoTitle{
        min-width:50px ;
        width:20%;
        height:48px;
        display:flex;
        font-weight: bold;
        align-items:center;
        font-size:1.25rem;
        margin-left:16px;
        @media only screen and (max-width: 768px) {

            margin-left:0px;
            width:100%;
            font-size:0.8rem;
        }
    }

    .infoValue{
        min-height: 48px;
        font-size:1.25rem;
        color:#555;
        line-height:2rem;
        @media only screen and (max-width: 768px) { 
            font-size:0.8rem;
        }
    }
    &+&+&{
        margin-top: 3rem;
    }
`;

function Introduce({pageNum,setSelectPage,setBlockState}){
    const mount = pageNum===1;
    const [mountState,setMountState] =useState(false);
    useEffect(()=>{
        if(pageNum===1){
            setTimeout(() => {
                setMountState(true);
            }, 1500);
        }else{
            setMountState(false);
        }
    },[pageNum])
    return(
        <InnerPage visible={mount} pageNum={1} setSelectPage={setSelectPage} title="소개">
            <IntroInner>
                {pageNum===1&&<StyledTypist
                    showCursor={false}
                    typingSpeed={50}
                    mountState={mountState}
                    sentences={['사용자 관점에서 서비스를 만드는 개발자가 되자!']} loop={false} />}
                    {mountState&&<IntroInnerInfo>
                        <IntroInnerInfoItem>
                            <Icons img={person_icon}></Icons>
                            <div className="infoTitle">이름</div>
                            <div className="infoValue">손상일</div>
                        </IntroInnerInfoItem>
                        <IntroInnerInfoItem>
                            <Icons img={phone_icon}></Icons>
                            <div className="infoTitle">연락처</div>
                            <div className="infoValue">010-8237-1502</div>
                        </IntroInnerInfoItem>
                        <IntroInnerInfoItem>
                            <Icons img={mail_icon}></Icons>
                            <div className="infoTitle">메일</div>
                            <a className="infoValue" href="mailto:mrzero885@gmail.com">mrzero885@gmail.com</a>
                        </IntroInnerInfoItem>
                        <IntroInnerInfoItem>
                            <Icons img={certificate_icon}></Icons>
                            <div className="infoTitle">자격증</div>
                            <div className="infoValue">정보처리기사</div>
                        </IntroInnerInfoItem>
                        <IntroInnerInfoItem>
                            <Icons img={career_icon}></Icons>
                            <div className="infoTitle">경력</div>
                            <div className="infoValue">
                                1년 6개월
                                <li>(주)일일공(1년 6개월)</li>
                            </div>
                        </IntroInnerInfoItem>
                    </IntroInnerInfo>}
           </IntroInner>
        </InnerPage>
    )
}

export default Introduce;