import React, { useEffect, useRef, useState } from 'react';
import InnerPage from './InnerPage';
import styled , {css} from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import github_icon from '../public/img/github_icon.png';
import site_icon from '../public/img/site_icon.png';

import img_92per1 from '../public/img/92per1.png';
import img_92per2 from '../public/img/92per2.png';
import img_92per3 from '../public/img/92per3.png';

import img_newblo1 from '../public/img/newblo1.png';
import img_newblo2 from '../public/img/newblo2.png';
import img_newblo3 from '../public/img/newblo3.png';

import img_proveit1 from '../public/img/proveit1.png';
import img_proveit2 from '../public/img/proveit2.png';

import img_search1 from '../public/img/search1.png';
import img_search2 from '../public/img/search2.png';

import htmlIcon from '../public/img/html.png';
import cssIcon from '../public/img/css.png';
import jsIcon from '../public/img/js.png';
import reactIcon from '../public/img/react.png';
import tsIcon from '../public/img/ts.png';
import nodejsIcon from '../public/img/nodejs.png';
import nextjsIcon from '../public/img/nextjs.png';
import reduxIcon from '../public/img/redux.png';

const ProjectCard = styled.div`
    height: 100%;
    padding:2rem;
    margin: 0 auto ;
    background-color: #fff ;
    border-radius: 20px ;
    margin-left: 1rem ;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

const ProjectCardImgBox = styled.div`
    width:40%;
    height: 100%;
    position:relative;
`

const ProjectCardImg = styled.div`
    width:100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    ${props=>props.img&& css`
        background-image: url(${props.img});
    `}
`

const ProjectCardTitle = styled.div`
    font-size: 1.25rem ;
    font-weight: bold ;
    padding: 0.5rem 1rem;
    display:inline-block ;
    background-color: #f1f1f1 ;
    margin-top: 8px ;
    border-radius: 8px ;
`

const ProjectCardContents = styled.div`
    font-size: 1rem ;
    min-height: 48px;
    font-weight: bold;
    margin-top: 8px ;
    padding-left: 8px;
    display: flex;
    align-items: center;

`

const ProjectCardTech=styled.div`
    width:48px;
    height: 48px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    ${props=>props.img&&css`
        background-image: url(${props.img});
    `}
`
const ProjectInner = styled.div`
    width:100%;
    height:100%;
    padding:8rem 7rem 8rem 8rem;
    @media only screen and (max-width: 768px) {
        padding:7rem 1rem;
  }
`

const ProjectRender =({item})=>{
    const [imgNum, setImgNum] = useState(0);
    return(
        <>
    <ProjectCard>
        <ProjectCardImgBox>
            <Slider 
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScrol={1}
               >
            {item.img.map((item,index)=>(<ProjectCardImg img={item} key={index}/>))}
            </Slider>
        </ProjectCardImgBox>
        <div style={{width:"100%",marginLeft:"30px",display:"flex",flexDirection:"column"}}>
            <ProjectCardTitle>프로젝트명</ProjectCardTitle>
            <ProjectCardContents>{item.name}</ProjectCardContents>
            <ProjectCardTitle>프로젝트 설명</ProjectCardTitle>
            <ProjectCardContents>{item.description}</ProjectCardContents>
            <ProjectCardTitle>프로젝트 역할</ProjectCardTitle>
            <ProjectCardContents>{item.roll}</ProjectCardContents>
            <ProjectCardTitle>기술 스택</ProjectCardTitle>
            <ProjectCardContents>
                {item.techStack.map((item,index)=>(<ProjectCardTech img={item} key={index}/>))}
            </ProjectCardContents>
            <ProjectCardTitle>아카이브</ProjectCardTitle>
            <ProjectCardContents>
                {item.archive.length>=1&&item.archive.map((item)=>item.kind=="git"?<a href={item.url} target="blank"><Icons img={github_icon}/></a>:
                    <a href={item.url} target="blank"><Icons img={site_icon}/></a>)}
            </ProjectCardContents>
        </div>
    </ProjectCard>
    </>
    )
}



function Project({pageNum,setSelectPage}){
    const mount = pageNum===3;
    const [innerWidth,setInnerWidth] = useState(0);
    const innerWidthGet = useRef(0);
    

    const projectList = [
        {
            id:1,
            name:"92PER",
            roll:"프론트엔드",
            description:"편집자가 없는 유튜버에게 간편하게 썸네일을 제작 할 수 있도록 현존하는 썸네일을 데이터화 하여 테두리, 글씨넣기, 이모티콘 등을 손쉽게 편집하고 이미지로 출력하는 서비스",
            img:[img_92per1,img_92per2,img_92per3],
            techStack:[reactIcon,reduxIcon],
            archive:[]
        },
        {
            id:2,
            name:"프로브잇",
            roll:"프론트엔드",
            description:"서비스 제작자에게 서비스 홍보 및 서비스 피드백을 통해 개선점을 찾고, 사용자는 서비스 초기 제작부터 피드백을 통해 자신이 사용하기 좀더 편안한 서비스를 함께 만들어 나가는 경험을 부여하는 서비스",
            img:[img_proveit1,img_proveit2],
            techStack:[reactIcon],
            archive:[
                {
                    id:0,
                    kind:"git",
                    url:"https://github.com/Mrzero-00/proveit"
                },
                {
                    id:0,
                    kind:"site",
                    url:"https://proveitf.netlify.app"
                },
            ]
        },
        {
            id:3,
            name:"뉴블로",
            roll:"풀스택",
            img:[img_newblo1,img_newblo2,img_newblo3],
            description:"기존의 블로그 서비스와 다른 수익구조를 통해 블로거에게는 수익을, 블로그 독자에게는 가독성을 증진 시켜 줄 수 있는 서비스",
            techStack:[reactIcon,nextjsIcon,nodejsIcon],
            archive:[
                {
                    id:0,
                    kind:"git",
                    url:"https://github.com/Mrzero-00/newblo"
                },
                {
                    id:0,
                    kind:"site",
                    url:"https://newblo.netlify.app"
                },
            ]
        },
        {
            id:4,
            name:"2022 대선 리서치",
            roll:"프론트엔드",
            description:"외주 업무로, 10가지의 질문에 대한 대선후보자들의 답변을 고르고 최후 자신에게 가장 알맞는 정책을 펼친 후보를 알려주는 서비스",
            img:[img_search1,img_search2],
            techStack:[reactIcon],
            archive:[
                {
                    id:0,
                    kind:"git",
                    url:"https://github.com/Mrzero-00/startupResearch"
                },
                {
                    id:0,
                    kind:"site",
                    url:"http://election2022.sbiz.news/"
                },
            ]
        }
    ]

    useEffect(()=>{
        setInnerWidth(innerWidthGet.current.clientWidth);
    },[])
    return(
        <InnerPage visible={mount} pageNum={3} setSelectPage={setSelectPage}  title="프로젝트">
            <ProjectInner ref={innerWidthGet}>
                <Slider 
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    style={{innerHeight:"100%"}}
                >
                    {projectList.map((item)=><ProjectRender item={item} key={item.id}/>)}
                </Slider>
            </ProjectInner>
        </InnerPage>
    )
}

export default Project;