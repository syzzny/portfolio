import styled from 'styled-components'

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
`
export const Info = styled.div`
    background-color: aliceblue;
    width: 680px;
`
export const WorkList = styled.div`
    background-color: #f5f5f5;
`




// export const Circle = styled.div`
//     background-color: pink;
//     width: 250px;
//     height: 250px;
//     border-radius: 50% 80% 80% 50% / 50% 50% 80% 80% 
// `