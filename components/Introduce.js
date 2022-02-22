import React, { useEffect } from 'react';
import InnerPage from './InnerPage';
import Typist from 'react-text-typist';
import styled,{keyframes} from 'styled-components';

const StyledTypist =styled(Typist)`
    font-size: 1.5rem;
    color: #323232;
    font-weight:bold;
`;

function Introduce({pageNum,setSelectPage,setBlockState}){
    const mount = pageNum===1;
    return(
        <InnerPage visible={mount} pageNum={1} setSelectPage={setSelectPage} title="소개">
            <div>
            {pageNum===1&&<StyledTypist
                showCursor={false}
                typingSpeed={50}
                sentences={['사용자 관점에서 서비스를 만드는 개발자가 되자!']} loop={false} />}
            </div>
        </InnerPage>
    )
}

export default Introduce;