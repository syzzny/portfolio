import React from 'react'
import {getArea} from '../js/TestScript.js'

export default function Test() {
    const area = getArea(10,5); 
    return (
        <div>
            <p>{area}</p>
        </div>
    )
}
