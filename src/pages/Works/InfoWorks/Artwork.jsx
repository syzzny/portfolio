import React from 'react'
import {
    Wrap, Info, WorkWrap, LinkStyle, WorkTitle, ProjectWrap, ListImg, InfoWorkTitle, InfoText, LivePrev, Work
    ,WorkInfoWrap, WorkText
} from "../../Styles/StyleComp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRight } from '@fortawesome/free-solid-svg-icons';


import Nav from '../../../layout/Nav';

export default function Artwork() {
    return (
        <div>
            <Nav />
            <WorkWrap>
                <Info>
                    <div className='linklist'>
                        <LinkStyle to='/' style={{ color: "#737373" }}>Home /</LinkStyle>
                        <LinkStyle to='/works' style={{ color: "#737373" }}> Works /</LinkStyle>
                        <LinkStyle to='/artwork'>ARTWORK</LinkStyle>
                    </div>
                    <ProjectWrap>
                        <ListImg>
                            <img src="../assets/img/WorkTitle1.png" alt="" />
                        </ListImg>
                        <InfoWorkTitle>ArtWork</InfoWorkTitle>
                    </ProjectWrap>
                    <InfoText>
                        <p>
                            ARTWORK는 다양하고 새로운 전시회를 쉽고 편리하게 접할 수 있으며 원하는 전시회를 
                            개별 홈페이지에서 확인해야 하는 번거로움을 해결했습니다. 관심 있는 전시회를 찾아보세요!
                        </p>
                    </InfoText>
                    <div className='LivePrev'>
                        <a href="https://syzzny.github.io/react-web-project/">
                        <LivePrev>
                            Live Preview
                        </LivePrev>
                        </a>
                    </div>
                </Info>

                <WorkInfoWrap>
                    <Work>
                        <img src="../assets/img/work01.png" alt="" />
                    </Work>
                    <Work>
                        <img src="../assets/img/work02.png" alt="" />
                    </Work>
                    <Work>
                        <img src="../assets/img/work03.png" alt="" />
                    </Work>
                    <Work style={{padding:'0', border: 'none', boxShadow: 'none'}}>
                        <img src="../assets/img/work04.png" style={{borderRadius: '30px'}} />
                    </Work>
                    <Work>
                        <img src="../assets/img/work05.png" alt="" />
                    </Work>
                    <Work>
                        <img src="../assets/img/work06.png" alt="" />
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
