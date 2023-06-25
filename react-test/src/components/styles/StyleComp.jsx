import styled from 'styled-components';
import { Input } from 'antd';


export const Text = styled.p`
    font-size: 20px;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Inter' : 'Pretendard')};
    font-weight: 500;
`
export const ButtonWrap = styled.div`
    background-color: #E8F4FF;
    padding: 15px 0 30px 0;
    border-radius: 10px;
    margin-bottom: 20px;
    width: 100%;
`
export const InputBar = styled(Input)`
    width: 500px;
    height: 40px;
`