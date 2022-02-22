import React, { useState, useEffect, useRef } from "react";
import ReactPageScroller from 'react-page-scroller';
import { createFalse } from "typescript";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Introduce from "../components/Introduce";
import Project from "../components/Project";
import SideGnb from "../components/SideGnb";
import Skills from "../components/Skills";

function Home() {
  const [pageNum,setPageNum] = useState(0);
  const [selectPage,setSelectPage] = useState(0);


  return (
    <div>
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
        <Contact pageNum={pageNum} setSelectPage={setSelectPage}/>
      </ReactPageScroller>
      <SideGnb setSelectPage={setSelectPage} pageNum={pageNum}></SideGnb>
    </div>
  )
}

export default Home;
