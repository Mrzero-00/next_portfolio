import React, { useState, useEffect, useRef } from "react";
import ReactPageScroller from 'react-page-scroller';
import styled from "styled-components";
import Contact from "../components/Contact";
import InnerPage from "../components/InnerPage";
import Intro from "../components/Intro";
import Introduce from "../components/Introduce";
import Project from "../components/Project";


function Home() {
  const [pageNum,setPageNum] = useState(0);
  return (
    <ReactPageScroller
      animationTimer={500}
      animationTimerBuffer={600}
      pageOnChange={setPageNum}
      renderAllPagesOnFirstRender={false}
    >
      <Intro pageNum={pageNum}/>
      <Introduce pageNum={pageNum}/>
      <Project pageNum={pageNum}/>
      <Contact pageNum={pageNum}/>
    </ReactPageScroller>
  )
}

export default Home;
