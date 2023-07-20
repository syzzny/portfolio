import styled from 'styled-components'
import { Icon } from '@iconify/react';



export const Wrap = styled.div`
    max-width: 860px;
    /* background-color: #f5f5f5; */
    height: 100vh;
    margin: 0 auto;
    margin-top: 150px;
    padding: 0 20px;
`
export const ProfileWrap = styled.div`
    text-align: initial;
    max-width: 680px;
    margin: 0 auto;
`
export const Name = styled.p`
    font-size: 30px;
    margin: 12px 0;
    font-weight: 500;
    margin-bottom: 0px;
`
export const Info = styled.p`
    margin: 14px 0;
    font-size: 20px;
    color: #4E4E4E;
    margin-top: 7px;
`
export const Availavle = styled.div`
    display: flex;
    align-items: center;
    height: 29px;
`
export const Circle = styled.div`
    width: 9px;
    height: 9px;
    background-color: #60C150;
    border-radius: 10px;
`
export const AvaText = styled.p`
    margin-left: 10px;
    color: #4E4E4E;
`
export const MyInfo = styled.div`
    margin-top: 40px;
    background-color: #FAFAFA;
    border-radius: 20px;
    padding: 10px 30px;
`
export const MyInfoText = styled.p`
    font-size: 20px;
    line-height: 28px;
    word-break:keep-all;
    font-family: 'Pretendard';
`
export const WorksWrap = styled.div`
    margin-top: 90px;
    text-align: initial;
    padding: 50px 0;
    max-width: 860px;
`
export const WorksH = styled.div`
    display: flex;
    align-items: center;
    max-width: 680px;
    margin: 0 auto;
`
export const IconStyle = styled(Icon)`
    font-size: 22px;
    color: #737373;
    margin-right: 10px;
`
export const IconText = styled.p`
    font-size: 18px;
    color: #737373;
`
export const ProjectList = styled.div`  
    margin-top: 10px;
    margin-bottom: 100px;
`
export const ProjectWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    max-width: 680px;
    margin: 0 auto;
`
export const ListImg = styled.div`
    width: 44px;
    height: 44px;
    /* background-color: #F8F8F8; */
    border-radius: 10px;
    text-align: center;
    line-height: 50px;
    border: 1px solid #E9E9E9;
`
export const WorkTitle = styled.p`
    font-size: 24px;
    font-weight: 600;
`
export const WorkInfo = styled.p`
    font-size: 24px;
    line-height: 33px;
    margin-top: 10px;
    max-width: 680px;
    margin: 0 auto;
`
export const Badge = styled.div`
    width: 84px;
    height: 30px;
    border: 1px solid #E6E6E6;
    text-align: center;
    line-height: 30px;
    border-radius: 20px;
    color: #676767;
    font-weight: 500;
    margin-top: 28px;
`
export const WorkImg = styled.div`
    display: flex;
    /* max-width: 860px; */
    /* height: 644px; */
    padding: 60px 0;
    margin-top: 50px;
    /* background-color: #fdfdfd; */
    border-radius: 22px;
    border: 1px solid #E9E9E9;
    box-shadow: rgba(0, 0, 0, 0.106) 0px 0.362052px 0.289641px -1px, 
                rgba(0, 0, 0, 0.15) 0px 3px 2.4px -2px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    width: 100%;
    

    img {
        /* max-width: 100%; */
        /* width: 100%; */
        /* object-fit: contain; */
    }
    
`