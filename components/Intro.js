import React, { useEffect } from 'react';
import InnerPage from './InnerPage';
import Typist from 'react-text-typist';
import styled,{keyframes} from 'styled-components';
import {IoMdArrowDropdown} from 'react-icons/io';


const StyledTypist =styled(Typist)`
    font-size: 4rem;
    color: #323232;
    font-weight:bold;
    @media only screen and (max-width: 768px) {
        font-size: 2rem;
  }
`;

const IntroPage = styled.div`
    padding:1rem;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

const upDown = keyframes`
    from{
        transform: translate(-50%,0px);
    }to{
        transform: translate(-50%,10px);
    }
`

const UnderText = styled.div`
    font-size:1.5rem;
    color: #323232;
    position: absolute;
    bottom:60px;
    left: 50%;
    transform: translateX(-50%);
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

const UnderIcon = styled.div`
    position: absolute;
    bottom:10px;
    left: 50%;
    transform: translate(-50%,0px);
    animation-duration : 900ms;
    animation-timing-function: ease-out;
    animation-name:${upDown};
    animation-iteration-count:infinite;
    `
function Intro({pageNum}){
    const mount = pageNum===0;

    return(
        <IntroPage visible={mount} pageNum={0}>
            <StyledTypist
                showCursor={false}
                typingSpeed={50}
                sentences={['포기를 모르는', '오뚜기 같은 개발자', '손상일입니다.']} loop={false} />
            <UnderText>더보러 가기</UnderText>
            <UnderIcon><IoMdArrowDropdown size={36}/></UnderIcon>
        </IntroPage>
    )
}

export default Intro;