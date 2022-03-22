import React, { useEffect, useRef, useState } from 'react';
import InnerPage from './InnerPage';
import styled , {css} from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {AiOutlineLink,AiOutlineGithub} from 'react-icons/Ai';

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
    max-width: 460px;
    margin: 0 auto ;
    background-color: #fff ;
    border-radius: 20px ;
    margin-left: 1rem ;
`

const ProjectCardImgBox = styled.div`
    width:100%;
    height: 230px;
    position:relative;
    margin-bottom: 32px ;
`

const ProjectCardImg = styled.div`
    width:100%;
    height: 230px;
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
    position: relative;
    padding:8rem 7rem 8rem 8rem;
    @media only screen and (max-width: 768px) {
        padding:7rem 1rem;
  }
`

const ProjectRender =({item})=>{
    const [imgNum, setImgNum] = useState(0);
    console.log(item);
    return(
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
        <ProjectCardTitle>프로젝트명</ProjectCardTitle>
        <ProjectCardContents>{item.name}</ProjectCardContents>
        <ProjectCardTitle>프로젝트 역할</ProjectCardTitle>
        <ProjectCardContents>{item.roll}</ProjectCardContents>
        <ProjectCardTitle>기술 스택</ProjectCardTitle>
        <ProjectCardContents>
            {item.techStack.map((item,index)=>(<ProjectCardTech img={item} key={index}/>))}
        </ProjectCardContents>
        <ProjectCardTitle>아카이브</ProjectCardTitle>
        <ProjectCardContents>
            {item.archive.length>=1&&item.archive.map((item)=>item.kind=="git"?<a href={item.url}><AiOutlineGithub size={48}></AiOutlineGithub></a>:
                <a href={item.url}><AiOutlineLink size={48}></AiOutlineLink></a>)}
        </ProjectCardContents>
    </ProjectCard>
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
            img:[img_92per1,img_92per2,img_92per3],
            techStack:[reactIcon,reduxIcon],
            archive:[]
        },
        {
            id:2,
            name:"프로브잇",
            roll:"프론트엔드",
            img:[img_proveit1,img_proveit2],
            techStack:[reactIcon],
            archive:[
                {
                    id:0,
                    kind:"git",
                    url:""
                },
                {
                    id:0,
                    kind:"site",
                    url:""
                },
            ]
        },
        {
            id:3,
            name:"뉴블로",
            roll:"풀스택",
            img:[img_newblo1,img_newblo2,img_newblo3],
            techStack:[reactIcon,nextjsIcon,nodejsIcon],
            archive:[
                {
                    id:0,
                    kind:"git",
                    url:""
                },
                {
                    id:0,
                    kind:"site",
                    url:""
                },
            ]
        },
        {
            id:4,
            name:"2022 대선 리서치",
            roll:"프론트엔드",
            img:[img_search1,img_search2],
            techStack:[reactIcon],
            archive:[
                {
                    id:0,
                    kind:"git",
                    url:""
                },
                {
                    id:0,
                    kind:"site",
                    url:""
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
                    slidesToShow={innerWidth>=1100?2:1}
                    slidesToScroll={innerWidth>=1100?2:1}
                >
                    {projectList.map((item)=><ProjectRender item={item} key={item.id}/>)}
                </Slider>
            </ProjectInner>
        </InnerPage>
    )
}

export default Project;