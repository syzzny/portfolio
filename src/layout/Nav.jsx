import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HeaderStyle, InnerStyle, MenuStyle } from './NavStylecomp';

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
                    <img src="../assets/img/logo4.png" alt="" />
                </div>
                <MenuStyle>
                    <li>About</li>
                    <li>Works</li>
                </MenuStyle>
            </InnerStyle>
        </HeaderStyle>
    );
}