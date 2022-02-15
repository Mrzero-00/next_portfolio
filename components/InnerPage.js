import React, { useEffect } from 'react';
import styled, {css, keyframes} from "styled-components";

const fadein = keyframes`
    from{
        opacity : 0;
    }
    to{
        opacity: 1;
    }
`

const OutLine = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  position:relative;
  justify-content: center;
  align-items:center;

`

const TitleDiv = styled.h2`
    position:absolute;
    left:1rem;
    top:1rem;
    font-size:2rem;
`

const InlineContents = styled.div`
    padding:1rem;
    color:#000;
    font-size:3rem;
    animation-duration : 1000ms;
    animation-timing-function: ease-out;
    animation-name:${fadein};
    animation-fill-mode:forwards;
    ${props=>props.visible && css`
        display: none;
    `}
`
function InnerPage({children,visible,title}){
    return(
        <OutLine>
            <TitleDiv>{title}</TitleDiv>
            <InlineContents visible={!visible}>
                {children}
            </InlineContents>
        </OutLine>
    )
}

export default InnerPage;