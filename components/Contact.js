import React, { useEffect } from 'react';
import InnerPage from './InnerPage';



function Contact({pageNum}){
    const mount = pageNum===3;
    return(
        <InnerPage visible={mount}  title="연락">
            <div>연락</div>
        </InnerPage>
    )
}

export default Contact;