import React, { useEffect, useState } from 'react';
import InnerPage from './innerPage';
import styled,{css,keyframes} from 'styled-components';

function Study({pageNum,setSelectPage}){
    const mount = pageNum===2;
    const [hover,setHover] =useState(0);
    const [skillListState,setSkillListState] = useState(true);

    const hoverLogicOn = (e)=>{
        console.log(e.target.value);
    }

    const hoverLogicOff = ()=>{
        setHover("");
    }

    const skillListRenderLogic = ()=>{
        setSkillListState(pre=>!pre);
    }
    return(
        <InnerPage visible={mount} pageNum={4} setSelectPage={setSelectPage}  title="스터디">
            <div>
                redux (2022.03.02 ~ 2022.03.16)
                typeScript ( 2022.03.17 ~ 2022.03.31)
            </div>
        </InnerPage>
    )
}

export default Study;