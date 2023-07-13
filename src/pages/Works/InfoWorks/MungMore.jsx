import React from 'react'
import Nav from '../../../layout/Nav';

import {
    Wrap, Info, WorkWrap, LinkStyle, WorkTitle, ProjectWrap, ListImg, InfoWorkTitle, InfoText, LivePrev, Work
    ,WorkInfoWrap, WorkText
} from "../../Styles/StyleComp";

export default function MungMore() {
    return (
        <div>
            <Nav />
            <WorkWrap>
                <Info>
                    <div className='linklist'>
                        <LinkStyle to='/' style={{ color: "#737373" }}>Home /</LinkStyle>
                        <LinkStyle to='/works' style={{ color: "#737373" }}> Works /</LinkStyle>
                        <LinkStyle to='/mungmore'> MUNG&MORE</LinkStyle>
                    </div>
                    <ProjectWrap>
                        <ListImg>
                            <img src="../assets/img/WorkTitle2.png" alt="" />
                        </ListImg>
                        <InfoWorkTitle>MUNG&MORE</InfoWorkTitle>
                    </ProjectWrap>
                    <InfoText>
                        <p>
                            MUNG&MORE는 강아지 용품부터 함께 할 수 있는 공간정보, 보호자들을 위한 커뮤니티까지
                            강아지에게 필요한 모든 것을 제공합니다!
                        </p>
                    </InfoText>
                    <div className='LivePrev'>
                        <a href="https://team-project-factory.github.io/Mung-and-More-Project/">
                        <LivePrev>
                            Live Preview
                        </LivePrev>
                        </a>
                    </div>
                </Info>

                <WorkInfoWrap>
                    <Work>
                        <img src="../assets/img/mork01.png" alt="" />
                    </Work>
                    <Work style={{padding : 0, border: 'none', boxShadow: 'none'}}>
                        <img src="../assets/img/mork02.png" style={{borderRadius: '30px'}}/>
                    </Work>
                    <Work style={{padding : 0, border: 'none', boxShadow: 'none'}}>
                        <img src="../assets/img/mork05.png" style={{borderRadius: '30px'}} />
                    </Work>
                    <Work>
                        <img src="../assets/img/mork03.png" alt="" />
                    </Work>
                    <Work>
                        <img src="../assets/img/mork04.png" alt="" />
                    </Work>
                    
                    <Work style={{padding : 0, border: 'none', boxShadow: 'none'}}>
                        <img src="../assets/img/mork06.png" style={{borderRadius: '30px'}} />
                    </Work>
                    {/* <WorkText>
                        다중 필터 기능을 적용하여 원하는 전시를 쉽게 검색할 수 있게 구현하였습니다.<br></br>
                        사용자의 편의성을 높이고, 원하는 전시를 보다 효율적으로 탐색할 수 있도록 도와줍니다.
                    </WorkText> */}
                </WorkInfoWrap>
            </WorkWrap>
        </div>
    )
}
