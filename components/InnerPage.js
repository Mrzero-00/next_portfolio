import React, { useEffect } from 'react';
import styled, {css, keyframes} from "styled-components";
import SideGnb from './SideGnb';

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
  transition:300ms;
  ${props=>props.pageNum===1 && css`
        background-color: #f1f1f1;
    `}
    ${props=>props.pageNum===2 && css`
        background-color: #a5a5a5;
    `}
    ${props=>props.pageNum===3 && css`
        background-color:#f15ae1;
    `}
`

const TitleDiv = styled.h2`
    position:absolute;
    left:1rem;
    top:1rem;
    font-size:2rem;
`

const InlineContents = styled.div`
    padding:1rem;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    animation-duration : 300ms;
    animation-timing-function: ease-out;
    animation-name:${fadein};
    animation-fill-mode:forwards;
`
function InnerPage({children,visible,title,pageNum,setSelectPage}){
    return(
        <OutLine pageNum={pageNum}>
            <TitleDiv>{title}</TitleDiv>
            <InlineContents visible={!visible}>
                {children}
            </InlineContents>
        </OutLine>
    )
}

export default InnerPage;