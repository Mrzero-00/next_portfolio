import React, { useEffect } from 'react';
import InnerPage from './InnerPage';

function Skills({pageNum,setSelectPage}){
    const mount = pageNum===2;
    return(
        <InnerPage visible={mount} pageNum={2} setSelectPage={setSelectPage}  title="보유역량">
            <div>
                <div>메인 스킬</div>
                <div>javascript</div>
                <div>react</div>
                <div>html5</div>
                <div>css3</div>
                <div>서브 스킬</div>
                <div>next.js</div>
                <div>redux</div>
                <div>styled-component</div>
                <div>typescript</div>
                <div>node.js</div>
            </div>
        </InnerPage>
    )
}

export default Skills;