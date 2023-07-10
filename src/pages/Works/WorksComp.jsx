import React from 'react'
import Nav from '../../layout/Nav'
import {Link} from 'react-router-dom'

import {
    Wrap, Info, WorkList, WorkWrap, LinkStyle, WorkTitle, WorkInfo, ImgWrap, WorkName
} from "../Styles/StyleComp";


export default function WorksComp() {
    return (
        <div>
            <Nav/>
            <WorkWrap>
                <Info>
                    <div className='linklist'>
                        <LinkStyle to= '/' style={{color:"#737373"}}>Home /</LinkStyle>
                        <LinkStyle to = '/works'> Works</LinkStyle>
                    </div>
                    <WorkTitle>Works</WorkTitle>
                </Info>
                <WorkList>
                    <WorkInfo>
                        <ImgWrap>
                            <img src="../assets/img/workinfo01.png" />
                        </ImgWrap>
                        <WorkName>
                            <span>ARTWORK</span>
                        </WorkName>
                    </WorkInfo>
                    <WorkInfo>
                        <ImgWrap>
                            <img src="../assets/img/workinfo02.png"/>
                        </ImgWrap>
                        <WorkName>
                            <span>MUNG & MORE</span>
                        </WorkName>
                    </WorkInfo>
                </WorkList>
            </WorkWrap>
        </div>
    )
}
