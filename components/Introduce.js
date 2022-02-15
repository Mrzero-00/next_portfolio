import React, { useEffect } from 'react';
import InnerPage from './InnerPage';

function Introduce({pageNum}){
    const mount = pageNum===1;
    return(
        <InnerPage visible={mount}  title="소개">
            <div>소개합니다</div>
        </InnerPage>
    )
}

export default Introduce;