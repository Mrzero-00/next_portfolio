import React, { useEffect } from 'react';
import InnerPage from './InnerPage';

function Project({pageNum}){
    const mount = pageNum===2;
    return(
        <InnerPage visible={mount} title="프로젝트">
            <div>프로젝트</div>
        </InnerPage>
    )
}

export default Project;