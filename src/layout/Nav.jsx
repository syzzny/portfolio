import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HeaderStyle, InnerStyle, MenuStyle, LinkStyle } from './NavStylecomp';
import {Link} from 'react-router-dom'
// 미디어 쿼리 추가
const smallScreenQuery = '(max-width: 870px)';

export default function Nav() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(smallScreenQuery);
        setIsSmallScreen(mediaQuery.matches);

        const handleScreenChange = (event) => {
            setIsSmallScreen(event.matches);
        };

        mediaQuery.addEventListener('change', handleScreenChange);

        return () => {
            mediaQuery.removeEventListener('change', handleScreenChange);
        };
    }, []);

    return (
        <HeaderStyle smallScreen={isSmallScreen}>
            <InnerStyle>
                <div>
                    <img src="../assets/img/logo.png" alt="" />
                </div>
                <MenuStyle>
                    <LinkStyle to={'./about'}>About</LinkStyle>
                    <LinkStyle to={'./works'}>Works</LinkStyle>
                </MenuStyle>
            </InnerStyle>
        </HeaderStyle>
    );
}