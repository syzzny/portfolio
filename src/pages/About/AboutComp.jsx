import React from 'react'
import Nav from '../../layout/Nav'
import {
    Wrap, Circle, ProfileWrap, Hello, Available, AvailWrap, MyInfo, Title, Text, Pstyle, Pdate
} from "../Styles/StyleComp";

export default function AboutComp() {
    return (
        <div>
            <Nav />
            <Wrap>
                <ProfileWrap>
                    <img src="../assets/img/AboutImg.png" alt="" />
                    <AvailWrap>
                        <Hello>Hi, I'm Yejin</Hello>
                        <Available>
                            <Circle />
                            <p>Available</p>
                        </Available>
                    </AvailWrap>
                </ProfileWrap>
                <div style={{ display: 'flex', flexFlow: 'column nowrap', gap: '40px' }}>
                    <MyInfo>
                        <Title>
                            <Pstyle>My Mission</Pstyle>
                        </Title>
                        <Text>
                            <Pstyle>
                                UX를 향상시키고 좋은 UI를 구축하는 프론트엔드 개발자로서,
                                디자인과 창의성에 대한 열정을 바탕으로 사용자들에게 흥미있는 웹 사이트와
                                앱을 제공합니다.
                            </Pstyle>
                        </Text>
                    </MyInfo>
                    <MyInfo>
                        <Title>
                            <Pstyle>Experience</Pstyle>
                        </Title>
                        <Text>
                            <Pstyle>
                                웹/앱 기획의 경험으로 업무를 통해 프로젝트 목표와 클라이언트 요구사항을 분석하는
                                능력을 갖추었으며, 이를 토대로 프로젝트의 방향성을 정확하게 이해하고 효율적인 결과물
                                을 제공할 수 있습니다. 또한, 팀원들과의 원활한 협업과 클라이언트의 요구를 충족시키는
                                역할을 수행할 수 있으며, 프로젝트 완료 후에도 클라이언트와 지속적으로 협업하여 더 나은
                                결과물을 제공할 수 있습니다. 이러한 경험을 통해 프론트엔드 개발자로서의 역할 수행과 클라이언트
                                의 요구를 충족시키는데 큰 도움이 될 것입니다.
                            </Pstyle>
                        </Text>
                    </MyInfo>
                    <MyInfo>
                        <Title>
                            <Pstyle>Work History</Pstyle>
                        </Title>
                        <Text>
                            <Pstyle>
                                Web/App Product Manager
                            </Pstyle>
                            <Pdate>
                                July 2021 - January 2023
                            </Pdate>
                        </Text>
                    </MyInfo>
                    <MyInfo>
                        <Title>
                            <Pstyle>Education</Pstyle>
                        </Title>
                        <Text>
                            <Pstyle>
                                신라대학교 컴퓨터공학 전공
                            </Pstyle>
                            <Pdate>
                                March 2016 - February 2020
                            </Pdate>
                            <Pstyle>
                                그린 컴퓨터 아카데미<br />[React 활용 프론트엔드 개발자 양성과정]
                            </Pstyle>
                            <Pdate>
                                February 2023 - July 2023
                            </Pdate>
                        </Text>
                    </MyInfo>
                </div>
            </Wrap>
        </div>
    )
}
