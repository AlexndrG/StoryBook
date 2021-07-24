import React, {useEffect, useState} from 'react';


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


export const SetTimeOutExample = () => {
    console.log('setTimeOutExample')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)
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
        setInterval(() => {
            console.log('setInterval tick: ' + counter)
            // setCounter(counter+1)
            setCounter(state => state + 1)
        }, 1000)
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
    if (n<10) {
        return '0'+n
    } else {
        return n
    }
}

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            console.log(date.toString())
            setDate(new Date())
        }, 1000)
    }, [])

    return (
        <>
            current Time: {`${value(date.getHours())}:${value(date.getMinutes())}:${value(date.getSeconds())}`}
        </>
    )
}