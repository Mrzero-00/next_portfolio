import React, { useState, useEffect, useRef } from "react";
import ReactPageScroller from 'react-page-scroller';
import Contact from "../components/Contact";
import HeaderData from "../components/Headerdata";
import Intro from "../components/Intro";
import Introduce from "../components/Introduce";
import Project from "../components/Project";
import SideGnb from "../components/SideGnb";
import Skills from "../components/Skills";
import Study from "../components/Study";

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
