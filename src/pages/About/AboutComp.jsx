import React from 'react'
import Nav from '../../layout/Nav'
import {
    Wrap, Circle, ProfileWrap, Hello, Available, AvailWrap, MyInfo, Title, Text, Pstyle
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
                                디자인과 창의성에 대한 나의 열정은
                                그래픽 디자인과 브랜딩에서 제품
                                디자인과 사용자 경험에 이르기까지
                                다양한 분야에서 일하도록 이끌었습니다.
                            </Pstyle>
                        </Text>
                    </MyInfo>
                    <MyInfo>
                        <Title>
                            <Pstyle>Experience</Pstyle>
                        </Title>
                        <Text>
                            <Pstyle>
                                다양한 산업 분야의 클라이언트를 위해
                                시각적으로 매력적이고 사용자 친화적인
                                웹 사이트를 만드는 데 중점을 둔 웹
                                디자인 분야에서 5년 이상의 경력. 강력한
                                프로젝트 관리 기술, 교차 기능 팀과
                                효과적으로 의사 소통하는 능력, 세부
                                사항에 대한 예리한 안목. 50개 이상의
                                프로젝트를 성공적으로 제공하여 온라인
                                트래픽과 고객 만족도를 높였습니다.
                                업계 동향을 최신 상태로 유지하고 고객의
                                요구를 충족하기 위해 혁신적인 디자인
                                솔루션을 통합한 실적을 기록합니다.
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
                        </Text>
                    </MyInfo>
                </div>
            </Wrap>
        </div>
    )
}
