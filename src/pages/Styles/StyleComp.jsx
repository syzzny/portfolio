import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Wrap = styled.div`
    max-width: 690px;
    /* background-color: #f5f5f5; */
    height: 100vh;
    margin: 0 auto;
    margin-top: 150px;
    padding: 0 20px;
    padding-bottom: 150px;
`

export const ProfileWrap = styled.div`
    text-align: left;
    margin-bottom: 40px;
`
export const Hello = styled.h2`
    font-size: 30px;
    color: #171717;
    font-weight: 600;
    margin-top: 28px;
`
export const AvailWrap = styled.div`
    display: flex;
    align-items: center;
`
export const Available = styled.div`
    display: flex;
    align-items: center;
    background-color: #E8F8E7;
    width: 120px;
    min-width: 100px;
    height: 30px;
    text-align: center;
    border: 1px solid #60C150;
    border-radius: 20px;
    justify-content: center;
    gap: 7px;
    margin-left: 17px;
`
export const Circle = styled.div`
    width: 9px;
    height: 9px;
    background-color: #60C150;
    border-radius: 10px;
`
export const MyInfo = styled.div`
    text-align: left;
    display: grid;
    gap: 10px;
    align-items: start;
    grid-template-columns: 1fr 2.5fr;
`
export const Title = styled.div`
    color: #171717;
    font-weight: 600;
    margin: 0;
    font-size: 17px
`
export const Text = styled.div`
    font-size: 22px;
    margin: 0;
    font-family: 'Pretendard';
    line-height: 31px;
    word-break: keep-all;
    color: #171717;
    letter-spacing: 0.5px;
`
export const Pstyle = styled.p`
    margin: 0;

    &:nth-child(3){
        margin-top: 20px;
    }
`
export const Pdate = styled.p`
    margin: 0;
    font-size: 16px;
`

export const WorkWrap = styled.div`
    width: auto;
    /* background-color: #f5f5f5; */
    height: 100vh;
    margin: 0 auto;
    margin-top: 150px;
    padding: 0 20px;
    padding-bottom: 150px;
    display :grid;
    gap :120px;
    justify-content: center;
    grid-template-rows: 1fr 11fr;
`
export const Info = styled.div`
    /* background-color: aliceblue; */
    width: 680px;
    text-align: left;
    display: grid;
    gap: 15px;
    margin: 0 auto;
    justify-content: start;
`
export const WorkList = styled.div`
    /* background-color: #f5f5f5; */
    display: grid;
    flex: 0 0 auto;
    gap: 24px;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-template-rows: repeat(2, min-content);
    column-gap: 35px;
    row-gap: 85px;
    height: min-content;
    justify-content: center;
    padding: 0px;
    position: relative;
    width: 100%;
`
export const LinkStyle = styled(Link)`
    color: #2E2E2E;
    text-decoration: none;
    font-size: 18px;
`
export const WorkTitle = styled.h3`
    font-size: 35px;
    margin: 0;
`
export const WorkInfo =styled.div`
    
`
export const ImgWrap = styled.div`
    overflow: hidden;
    border: 1px solid #E9E9E9;
    width: 100%;
    border-radius: 20px;
`
export const WorkName = styled.div`
    margin-top: 20px;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
`

export const ProjectWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    /* max-width: 680px; */
    width: 100%;
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
export const InfoWorkTitle = styled.p`
    font-size: 24px;
    font-weight: 600;
`
export const InfoText = styled.div`
    font-size: 23px;
    font-weight: 300;
    letter-spacing: 0.3px;
    line-height: 32px;
    font-family: 'Pretendard';
    word-break: keep-all;
`
export const LivePrev = styled.button`
    width: 152px;
    height: 30px;
    font-size: 16px;
    border: 1px solid #E6E6E6;
    background-color: #fff;
    border-radius: 20px;
    color: #676767;
    line-height: 28px;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        color: #000;
        background-color: #f5f5f5;
        
    }
`
export const Work = styled.div`
    border: 1px solid #E9E9E9;
    border-radius: 30px;
    overflow: hidden;
    padding: 20px 0;
    box-shadow: rgba(0, 0, 0, 0.106) 0px 0.362052px 0.289641px -1px, 
                rgba(0, 0, 0, 0.15) 0px 3px 2.4px -2px;
`
export const WorkInfoWrap = styled.div`
    display: grid;
    gap: 80px;
    padding-bottom: 50px;
`
export const WorkText = styled.p`
    font-size: 22px;
    font-family: 'Pretendard';
    text-align: left;
    letter-spacing: 0.3px;
    line-height: 28px;
    font-weight: 300;
`



// export const Circle = styled.div`
//     background-color: pink;
//     width: 250px;
//     height: 250px;
//     border-radius: 50% 80% 80% 50% / 50% 50% 80% 80% 
// `