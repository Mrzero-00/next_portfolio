import React, { useEffect } from 'react';
import InnerPage from './InnerPage';

function Project({pageNum,setSelectPage}){
    const mount = pageNum===3;
    return(
        <InnerPage visible={mount} pageNum={3} setSelectPage={setSelectPage}  title="프로젝트">
            <div>프로젝트</div>
        </InnerPage>
    )
}

export default Project;