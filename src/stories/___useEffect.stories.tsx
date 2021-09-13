import React, {useEffect, useState} from 'react';
import {log} from 'util';


export default {
    title: 'useEffect/hook useEffect Demo',
//  component: Button,
}

export const SimpleExample = () => {
    console.log('SimpleExample')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    /*
        useEffect(() => {
            console.log('useEffect')

            document.title = counter.toString()

            // ...запрос на сервер...
            // ...setInterval...
            // ...запрос к БД...
            // ...document.getElementById...
            // ...document.title = '...User...' ...
        })
    */

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount - analog)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect FIRST render AND every Counter change')
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>Counter+</button>
            <button onClick={() => setFake(fake + 1)}>Fake+</button>
        </>
    )
}


export const SetTimeoutExample = () => {
    console.log('setTimeOutExample')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)

        return () => clearTimeout(timeoutId)
    }, [counter])

    // setTimeout(() => {
    //     console.log('setTimeout')
    //     document.title = counter.toString()
    // },1000)


    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>Counter+</button>
            <button onClick={() => setFake(fake + 1)}>Fake+</button>
        </>
    )
}


export const SetIntervalExample = () => {
    console.log('setTimeOutExample')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('setInterval tick: ' + counter)
            // setCounter(counter+1)
            setCounter(state => state + 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
            {/*<button onClick={() => setCounter(counter + 1)}>Counter+</button>*/}
            {/*<button onClick={() => setFake(fake + 1)}>Fake+</button>*/}
        </>
    )
}


const value = (n: number) => {
    if (n < 10) {
        return '0' + n
    } else {
        return n
    }
}

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            console.log(date.toString())
            setDate(new Date())
        }, 1000)

        return () => clearInterval(id)
    }, [])

    return (
        <>
            current Time: {`${value(date.getHours())}:${value(date.getMinutes())}:${value(date.getSeconds())}`}
        </>
    )
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(0)

    console.log('Component rendered with ' + counter)

    useEffect(() => {
        console.log('Effect occured ' + counter)

        return () => console.log('RESET EFFECT ' + counter)
    }, [counter])

    const increase = () => setCounter(counter + 1)

    return (
        <>
            Hello, counter: {counter}
            <button onClick={increase}>+</button>
        </>
    )
}


export const KeyTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
// 1
//          setText(state => state + e.key)

// 2
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => window.removeEventListener('keypress', handler)
// 1
//  }, [])

// 2
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}


export const SetTimeout2Example = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const timeoutId = setTimeout(()=>{
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        },3000)

        return () => clearInterval(timeoutId)
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}
