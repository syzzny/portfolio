import React from 'react'
import {HeaderStyle, InnerStyle, MenuStyle} from './NavStylecomp'

export default function Nav() {
    return (
        <HeaderStyle>
            <InnerStyle>
                <div>
                    <img src="../assets/img/logo.png" alt="" />
                </div>
                <MenuStyle>
                    <li>About</li>
                    <li>Works</li>
                </MenuStyle>
            </InnerStyle>
        </HeaderStyle>
    )
}
