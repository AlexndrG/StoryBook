import React, {useEffect, useState} from 'react';
import s from './Clock2.module.css'

type ClockType = 'digital' | 'analog'

type PropsType = {
    type: ClockType
}

const X0 = 100
const Y0 = 100
const S_RADIUS = 100
const M_RADIUS = 90
const H_RADIUS = 80


const get2digitsString = (num: number) => num < 10 ? '0' + num : num


const points = () => {
    const n = 60
    const r = 100

    const result = Array.from(Array(n).keys()).map(i => {
            let ang = 2 * Math.PI / n * i
            let x1 = X0 + r * Math.cos(ang)
            let y1 = Y0 + r * Math.sin(ang)
            let x2 = X0 + (r - 5) * Math.cos(ang)
            let y2 = Y0 + (r - 5) * Math.sin(ang)

            let w = 1
            if (i % 5 === 0) w = 3

            return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke='grey' strokeWidth={w}/>
        }
    )
    // console.log(result)
    return result
}


export const Clock2: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    const pnts = points()

    const sAngle = date.getSeconds() * (2 * Math.PI / 60) - Math.PI / 2
    const xs = X0 + S_RADIUS * Math.cos(sAngle)
    const ys = Y0 + S_RADIUS * Math.sin(sAngle)

    const mAngle = (date.getMinutes() + date.getSeconds() / 60) * (2 * Math.PI / 60) - Math.PI / 2
    const xm = X0 + M_RADIUS * Math.cos(mAngle)
    const ym = Y0 + M_RADIUS * Math.sin(mAngle)

    const hAngle = (date.getHours() + date.getMinutes() / 60) * (2 * Math.PI / 12) - Math.PI / 2
    const xh = X0 + H_RADIUS * Math.cos(hAngle)
    const yh = Y0 + H_RADIUS * Math.sin(hAngle)

    return (
        <div>
            {props.type === 'digital' &&
            <div style={{display: 'inline-block', padding: '10px', border: '1px solid red'}}>
                <span>{get2digitsString(date.getHours())}</span>
                : <span>{get2digitsString(date.getMinutes())}</span>
                : <span>{get2digitsString(date.getSeconds())}</span>
            </div>}


            {/*
 Рисование

 SVG
    https://qastack.ru/programming/23402542/embedding-svg-into-reactjs
    https://developer.mozilla.org/ru/docs/Web/SVG/Element/circle
    https://svg-art.ru/?page_id=1097
    https://qna.habr.com/q/565852

                <svg viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="100" fill="white" stroke="red"/>
                    <line x1="100" y1="100" x2="200" y2="100" stroke="green" stroke-width="10px"/>
                </svg>

 CANVAS
    https://qna.habr.com/q/1009743
    https://habr.com/ru/post/276585/

*/}

            {props.type === 'analog' &&
            <div style={{width: '200px', height: '200px'}}>
                <svg viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="100" fill="white" stroke="grey"/>

                    {pnts}

                    <line x1="100" y1="100" x2={xh} y2={yh} stroke="red" strokeWidth="5px"/>
                    <line x1="100" y1="100" x2={xm} y2={ym} stroke="blue" strokeWidth="2px"/>
                    <line x1="100" y1="100" x2={xs} y2={ys} stroke="green" strokeWidth="1px"/>
                </svg>
            </div>}


        </div>
    )
}