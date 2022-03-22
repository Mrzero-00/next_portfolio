import React, { useEffect, useState } from 'react';
import InnerPage from './InnerPage';
import styled,{css,keyframes} from 'styled-components';
import htmlIcon from '../public/img/html.png';
import cssIcon from '../public/img/css.png';
import jsIcon from '../public/img/js.png';
import reactIcon from '../public/img/react.png';
import tsIcon from '../public/img/ts.png';
import nodejsIcon from '../public/img/nodejs.png';
import nextjsIcon from '../public/img/nextjs.png';
import reactNativeIcon from '../public/img/react-native.png';
import styledComponentsIcon from '../public/img/styled-components.png';

const bound = keyframes`
    from{
        transform:translateY(5px);
    }
    to{
        transform:translateY(0px);
    }
`

const fadeUpIn = keyframes`
    from{
        opacity:0;
        transform:translateY(30px);
    }to{
        opacity:1;
        transform:translateY(0px);       
    }
`

const Skillinner = styled.div`
    width:100%;
    height:100%;
    padding:8rem 7rem 6rem 6rem;
    @media only screen and (max-width: 768px) {
        padding:7rem 1rem;
    }
    animation-name: ${fadeUpIn} ;
    animation-fill-mode: forwards;
    animation-duration : 500ms;
    animation-timing-function: ease-out;
`

const SkillsList = styled.div`
display:flex;
flex-wrap:wrap ;
margin-bottom: 10px ;
`;

const SkillIconBox = styled.div`
    padding:10px;
    background-color:#fff ;
    border-radius: 20px ;
    min-height: 120px ;
    margin-top:16px ;
    margin-bottom: 16px ;
    .title{
        font-size:1.25rem ;
        font-weight: bold ;
    }
    .contents{
        margin-top:8px ;
        margin-bottom: 8px ;
        font-size:1.1rem ;
    }
`

const SkillTitle = styled.span`
    font-size: 1.5rem;
    font-weight:bold;
    border-bottom: 4px solid #5F60F5 ;
    
    &+&{
    }
    ${props=>props.bottom&&css`
        margin-top:10px ;
    `}
`
const SkillsIcon = styled.button`

        ${props=>props.name ==="javascript"&&css`
            background:url(${jsIcon});
        `}
        ${props=>props.name ==="html"&&css`
            background:url(${htmlIcon});
        `}
        ${props=>props.name ==="css"&&css`
            background:url(${cssIcon});
        `}
        ${props=>props.name ==="react"&&css`
            background:url(${reactIcon});
        `}
        ${props=>props.name ==="nodejs"&&css`
            background:url(${nodejsIcon});
        `}
        ${props=>props.name ==="nextjs"&&css`
            background:url(${nextjsIcon});
        `}
        ${props=>props.name ==="styled-components"&&css`
            background:url(${styledComponentsIcon});
        `}
        ${props=>props.name ==="typescript"&&css`
            background:url(${tsIcon});
        `}
        ${props=>props.name ==="reactNative"&&css`
            background:url(${reactNativeIcon});
        `}
        border:none;
        ${props=>props.selectState&& css`
            border:3px solid #f00;
        `}

        width:96px;
        height:96px;
        @media only screen and (max-width: 768px) {
            width:64px;
            height:64px;
        }
        border-radius:50%;
        transform:translateY(5px);
        /* margin-top:10px; */
        background-size:cover;
        background-position:center;
        cursor:pointer;
        box-sizing:border-box ;
        margin-right:8px ;

        &:hover{
            animation-duration : 300ms;
            animation-timing-function: ease-out;
            animation-name:${bound};
            animation-fill-mode:forwards;
        }
`

function Skills({pageNum,setSelectPage}){
    const mount = pageNum===2;
    const [hover,setHover] =useState(0);
    const [skillListState,setSkillListState] = useState(true);
    const [detailNum,setDetailNum] = useState(0);
    const [renderState,setRenderState] = useState(false);
    const skillDetail = [
        {
            skillLevel:70,
            text:"아이콘을 클릭하여 해당 기술 스택의 세부 사항을 확인해 주세요!!"
        },        
        {
            skillLevel:70,
            text:"React를 활용하기 위한 es6 문법 및 각종 array내장 함수(map,filter 등등)은 충분히 습득 하였으나, promise및 캡슐화와 같은 특정 이해도가 부족함"
        },
        {
            skillLevel:70,
            text:"각종 서비스의 프론트엔드를 react로 개발하며, react 내장 hook을 활용한 상태 관리 및 리랜더링 최적화는 많이 경험해보았으나, react를 활용하여 ssr 및 seo등의 세부 설정하는 것의 대한 능력 부족"
        },
        {
            skillLevel:70,
            text:"React를 주로 사용하여 개발을 진행하며, html만을 사용하는 상황이 많이 줄어들며 기본적으로 사용되는 메타 태그 및 시멘틱 태그 이외의 새롭게 나온 태그들의 대한 지식이 부족함."
        },
        {
            skillLevel:70,
            text:"미디어 쿼리를 활용하여 프론트엔드 반응형까지는 작업이 가능하나, styled-components를 활용하여 개발을 진행해 가며, calc와 같은 css내부 함수같은 지식이 부족함"
        },
        {
            skillLevel:50,
            text:"React의 SEO 이슈를 보완하기 위하여 프로젝트의 도입하며 학습을 하게되었으며, 이후 Dynamic route 등의 매력을 느껴 지속적으로 학습중임, 최근 nextjs의 api를 활용하여 mongoDB와 연결하여 서버리스로 작업까지 가능함. 하지만, ssr의 라이브러리 설정등의 지식이 부족함."
        },
        {
            skillLevel:70,
            text:"React를 활용하며, Inline Style CSS 를 자주 사용하는 안좋은 습관을 고치기 위하여 처음에 학습을 결정하고 시작하였으며, 이후 props를 통해 css를 통제 할 수 있는 점에서 매력을 느껴 지속적으로 학습중임."
        },
        {
            skillLevel:40,
            text:"차후 협업 및 오류를 최소화 하기 위하여 학습중에 있으며, 인터페이스 등을 활용하여 props를 지정하는 부분 까지는 습득하였으나, 원할한 사용은 추가적인 학습이 필요함"
        },
        {
            skillLevel:40,
            text:"프로젝트를 진행하며, 백엔드 개발자의 이탈로인한 풀스택이 필요한 상황이 생겨 학습을 시작하였으며, mongoDB와 MYSQL을 통해 db를 설정하고 express로 접근하여, 열람,삭제,수정,저장까지만 가능함. "
        },
        {
            skillLevel:30,
            text:"개인 프로젝트를 위해 학습하였으며, 기본적인 레이아웃(View,scrollviw 등등)을 통해 expo로 개발을 해보았으나, 배포 및 세부적인 지식 부족 "
        },
    ]

    const hoverLogicOn = (e)=>{
        console.log(e.target.value);
    }

    const hoverLogicOff = ()=>{
        setHover("");
    }

    const skillListRenderLogic = ()=>{
        setSkillListState(pre=>!pre);
    }
    useEffect(()=>{
        setDetailNum(0);
        if(pageNum===2){
            setTimeout(() => {
                setRenderState(true);
            }, 0);

        }else{
            setRenderState(false);
        }
    },[pageNum])
    return(
        <InnerPage visible={mount} pageNum={2} setSelectPage={setSelectPage}  title="보유역량">
            {renderState&&<Skillinner>
                <SkillTitle>기술 스택</SkillTitle>
                <SkillIconBox>
                    <SkillsList>
                            <SkillsIcon 
                                name="javascript" 
                                value="js" 
                                onMouseOver={hoverLogicOn} 
                                onMouseLeave={hoverLogicOff}
                                selectState={detailNum===1?true:false}
                                onClick={()=>{setDetailNum(1)}}
                                hoverState={hover==="js"?true:false}
                                ></SkillsIcon>
                            <SkillsIcon 
                                name="react"  
                                value="react" 
                                onMouseEnter={hoverLogicOn} 
                                onMouseLeave={hoverLogicOff}
                                selectState={detailNum===2?true:false}
                                onClick={()=>{setDetailNum(2)}}
                                hoverState={hover==="react"}
                                ></SkillsIcon>
                            <SkillsIcon 
                                name="html"  
                                value="html" 
                                onMouseEnter={hoverLogicOn} 
                                onMouseLeave={hoverLogicOff}
                                selectState={detailNum===3?true:false}
                                onClick={()=>{setDetailNum(3)}}
                                hoverState={hover==="html"}
                                ></SkillsIcon>
                            <SkillsIcon 
                                name="css"  
                                value="css" 
                                onMouseEnter={hoverLogicOn} 
                                onMouseLeave={hoverLogicOff}
                                selectState={detailNum===4?true:false}
                                onClick={()=>{setDetailNum(4)}}
                                hoverState={hover==="css"}
                                ></SkillsIcon>
                                <SkillsIcon 
                            name="nextjs"
                            value="nextjs"
                            onMouseEnter={hoverLogicOn}
                            onMouseLeave={hoverLogicOff}
                            selectState={detailNum===5?true:false}
                            onClick={()=>{setDetailNum(5)}}
                            hoverState={hover==="nextjs"}
                            ></SkillsIcon>
                        <SkillsIcon 
                            name="styled-components" 
                            value="styled-components"
                            onMouseEnter={hoverLogicOn} 
                            onMouseLeave={hoverLogicOff}
                            selectState={detailNum===6?true:false}
                            onClick={()=>{setDetailNum(6)}}
                            hoverState={hover==="styled-components"}></SkillsIcon>
                        <SkillsIcon 
                            name="typescript"
                            value="typescript"
                            onMouseEnter={hoverLogicOn}
                            onMouseLeave={hoverLogicOff}
                            selectState={detailNum===7?true:false}
                            onClick={()=>{setDetailNum(7)}}
                            hoverState={hover==="typescript"}
                            > </SkillsIcon>
                        <SkillsIcon 
                            name="nodejs"
                            value="nodejs"
                            onMouseEnter={hoverLogicOn} 
                            onMouseLeave={hoverLogicOff}
                            selectState={detailNum===8?true:false}
                            onClick={()=>{setDetailNum(8)}}
                            hoverState={hover==="nodejs"}
                            ></SkillsIcon>
                        <SkillsIcon 
                            name="reactNative"
                            value="reactNative"
                            onMouseEnter={hoverLogicOn} 
                            onMouseLeave={hoverLogicOff}
                            selectState={detailNum===9?true:false}
                            onClick={()=>{setDetailNum(9)}}
                            hoverState={hover==="reactNative"}
                        ></SkillsIcon>
                    </SkillsList>
                    {/* <SkillsList>
                        <SkillsIcon 
                            name="nextjs"
                            value="nextjs"
                            onMouseEnter={hoverLogicOn}
                            onMouseLeave={hoverLogicOff}

                            onClick={()=>{setDetailNum(5)}}
                            hoverState={hover==="nextjs"}
                            ></SkillsIcon>
                        <SkillsIcon 
                            name="styled-components" 
                            value="styled-components"
                            onMouseEnter={hoverLogicOn} 
                            onMouseLeave={hoverLogicOff}
                            onClick={()=>{setDetailNum(6)}}
                            hoverState={hover==="styled-components"}></SkillsIcon>
                        <SkillsIcon 
                            name="typescript"
                            value="typescript"
                            onMouseEnter={hoverLogicOn}
                            onMouseLeave={hoverLogicOff}
                            onClick={()=>{setDetailNum(7)}}
                            hoverState={hover==="typescript"}
                            > </SkillsIcon>
                        <SkillsIcon 
                            name="nodejs"
                            value="nodejs"
                            onMouseEnter={hoverLogicOn} 
                            onMouseLeave={hoverLogicOff}
                            onClick={()=>{setDetailNum(8)}}
                            hoverState={hover==="nodejs"}
                            ></SkillsIcon>
                    </SkillsList> */}
                </SkillIconBox>
                <SkillTitle bottom>세부사항</SkillTitle>
                <SkillIconBox>
                    {detailNum!==0&&<div className="title">기술 숙련도</div>}
                    {detailNum!==0&&<div className='contents'>-{skillDetail[detailNum].skillLevel}%</div>}
                    {detailNum!==0&&<div className='title'>세부 숙련도</div>}
                    <div className='contents'>{skillDetail[detailNum].text}</div>
                </SkillIconBox>
            </Skillinner>}
        </InnerPage>
    )
}

export default Skills;