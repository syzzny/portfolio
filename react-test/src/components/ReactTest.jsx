import React, { useEffect, useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Space } from 'antd';
import { ButtonWrap, Text, InputBar } from './styles/StyleComp'
import { Input } from 'antd';

export default function ReactTest() {
    // 사이즈 지정할때 사용. default 값은 'medium'
    const [size, setSize] = useState('large');
    const [count, setCount] = useState(0);

    function handleClick(e) {
        alert(e.target.name);
    }

    // +1 버튼을 누를때마다 1씩 증가
    const addCount = () => {
        setCount(count + 1);
    }

    // input 안에 입력한 내용 출력
    const [text, setText] = useState('');
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    //input 태그로 날짜 입력하기
    const [date, setDate] = useState('');
    const handleOnChangeDate = (e) => {
        setDate(e.target.value);
    }

    return (
        <div>
            <ButtonWrap>
                <Text isEnglish={true}>Press a button, the information of that button appears in the alert.</Text>
                <Space direction="vertical">
                    <Space wrap>
                        <Button name='A button' type="primary" size={size} onClick={handleClick}>
                            A
                        </Button>
                        <Button name='B button' size={size} onClick={handleClick}>B</Button>
                        <Button name='C button' type="dashed" size={size} onClick={handleClick}>
                            C
                        </Button>
                    </Space>
                </Space>
            </ButtonWrap>

            <ButtonWrap>
                <Text isEnglish={false}>
                    +1 버튼을 누를때마다 1씩 증가
                </Text>
                <Space wrap style={{ display: 'block' }}>
                    <h2>{count}</h2>
                    <Button type="primary" onClick={addCount}>
                        +1
                    </Button>
                </Space>
            </ButtonWrap>

            <div style={{display:'flex', gap: '20px'}}>
                <ButtonWrap>
                    <Text isEnglish={false}>
                        입력한 input 내용 출력하기
                    </Text>
                    <Space wrap style={{ display: 'block' }}>
                        <h2>{text}</h2>
                        <InputBar placeholder="Basic usage" value={text} onChange={handleOnChange} />
                    </Space>
                </ButtonWrap>
                <ButtonWrap>
                    <Text isEnglish={false}>
                        input 태그로 날짜 입력하기
                    </Text>
                    <Space wrap style={{ display: 'block' }}>
                        <h2>{date}</h2>
                        <InputBar placeholder="Basic usage" type='date' value={date} onChange={handleOnChangeDate} />
                    </Space>
                </ButtonWrap>
            </div>
        </div>
    )
}
