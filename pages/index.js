import React, { useState, useEffect, useRef } from "react";
import ReactPageScroller from 'react-page-scroller';
import Contact from "../components/contact";
import HeaderData from "../components/headerdata";
import Intro from "../components/intro";
import Introduce from "../components/introduce";
import Project from "../components/project";
import SideGnb from "../components/sideGnb";
import Skills from "../components/skills";
import Study from "../components/study";

function Home() {
  const [pageNum,setPageNum] = useState(0);
  const [selectPage,setSelectPage] = useState(0);


  return (
    <div>
      <HeaderData></HeaderData>
      <ReactPageScroller
        animationTimer={700}
        animationTimerBuffer={500}
        pageOnChange={setPageNum}
        customPageNumber={selectPage}
        renderAllPagesOnFirstRender={false}
      >
        <Intro pageNum={pageNum}/>
        <Introduce pageNum={pageNum} setSelectPage={setSelectPage}/>
        <Skills pageNum={pageNum} setSelectPage={setSelectPage}/>
        <Project pageNum={pageNum} setSelectPage={setSelectPage}/>
        {/* <Study pageNum={pageNum} setSelectPage={setSelectPage}/> */}
      </ReactPageScroller>
      {pageNum!==0&&<Contact/>}
      <SideGnb setSelectPage={setSelectPage} pageNum={pageNum}></SideGnb>
    </div>
  )
}

export default Home;
