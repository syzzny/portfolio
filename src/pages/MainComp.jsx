import React from "react";
import Nav from "../layout/Nav";
// import { faLayerGroup} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';


import {
    Wrap,
    ProfileWrap,
    Name,
    Info,
    Availavle,
    Circle,
    AvaText,
    MyInfo, Badge,
    MyInfoText,
    WorksWrap, WorkTitle, WorkInfo,
    IconStyle, WorksH, IconText, ProjectList, ListImg, ProjectWrap,WorkImg
} from "./MainStylecomp";

export default function MainComp() {
    return (
        <div>
            <Nav />
            <Wrap>
                <ProfileWrap>
                    <img src="../assets/img/profile.png" alt="" />
                    <Name>Son Yejin</Name>
                    <Info>Front-End Developer</Info>
                    <Availavle>
                        <Circle></Circle>
                        <AvaText>Available</AvaText>
                    </Availavle>
                    <MyInfo>
                        <MyInfoText>
                            안녕하세요! 😀 <br></br>저는 프론트엔드 개발자 손예진 입니다. 제가 좋아하는
                            일은 사람들에게 새로운 경험을 제공하는 것이고, 경험을 토대로 UX를
                            개선시키는대에 열정적입니다.
                        </MyInfoText>
                    </MyInfo>
                </ProfileWrap>
                <WorksWrap>
                    <WorksH>
                        <IconStyle icon="bx:layer" />
                        <IconText>Latest Works</IconText>
                    </WorksH>
                    <ProjectList>
                        <ProjectWrap>
                            <ListImg>
                                <img src="../assets/img/WorkTitle1.png" alt="" />
                            </ListImg>
                            <WorkTitle>ArtWork</WorkTitle>
                        </ProjectWrap>
                        <WorkInfo>
                            A space that writes a brief description of the
                            about my project,A space that writes a brief description of the
                            about my project
                        </WorkInfo>
                        <div style={{ maxWidth:'680px',margin:"0 auto"}}>
                            <Badge>React</Badge>
                        </div>
                        <WorkImg>
                            <img src="../assets/img/workImg01.png" />
                        </WorkImg>
                    </ProjectList>
                    <ProjectList>
                        <ProjectWrap>
                            <ListImg>
                                <img src="../assets/img/WorkTitle2.png" alt="" />
                            </ListImg>
                            <WorkTitle>Mung&More</WorkTitle>
                        </ProjectWrap>
                        <WorkInfo>
                            A space that writes a brief description of the
                            about my project,A space that writes a brief description of the
                            about my project
                        </WorkInfo>
                        <div style={{maxWidth:'680px', margin:"0 auto"}}>
                            <Badge>React</Badge>
                        </div>
                        <WorkImg>
                            <img src="../assets/img/workImg02.png" />
                        </WorkImg>
                    </ProjectList>
                </WorksWrap>
            </Wrap>
        </div>
    );
}
