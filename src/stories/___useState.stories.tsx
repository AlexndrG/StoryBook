import React, {useMemo, useState} from 'react';


export default {
    title: 'useState/hook useState Demo',
//  component: Button,
}

function genetareData() {
    console.log('genetareData')

    //difficult counting
    // return 3874562983652
    return 1
}


export const Example1 = () => {
    console.log('Example1')

    // _3_
    //const initValue = useMemo(genetareData, [])

    // _1_
    // const [counter, setCounter] = useState(0)
    // _2_
    // const [counter, setCounter] = useState(initValue)
    const [counter, setCounter] = useState(genetareData)

    return (
        <>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    )
}


export const Example2 = () => {
    console.log('Example1')

    const [counter, setCounter] = useState(0)

    // _1_
    // const changer = (state: number) => {
    //     return state = state + 1
    // }

    return (
        <>
            {counter}
            {/*_1_*/}
            {/*<button onClick={() => setCounter(changer)}>+</button>*/}
            <button onClick={() => setCounter(state => state + 1)}>+</button>
        </>
    )
}
