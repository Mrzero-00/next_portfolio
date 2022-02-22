import React, { useEffect } from 'react';
import InnerPage from './InnerPage';



function Contact({pageNum,setSelectPage}){
    const mount = pageNum===4;
    return(
        <InnerPage visible={mount} pageNum={4} setSelectPage={setSelectPage}  title="연락">
            <div>연락</div>
        </InnerPage>
    )
}

export default Contact;