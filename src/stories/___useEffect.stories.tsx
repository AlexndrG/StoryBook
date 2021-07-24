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
    },[])

    useEffect(() => {
        console.log('useEffect FIRST render AND every Counter change')
        document.title = counter.toString()
    },[counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>Counter+</button>
            <button onClick={() => setFake(fake + 1)}>Fake+</button>
        </>
    )
}
