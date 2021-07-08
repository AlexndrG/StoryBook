import React, {useMemo, useState} from 'react';

export default {
    title: 'MEMO/hook useMemo demo',
//  component: Button,
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(2)
    const [b, setB] = useState<number>(3)

    // let resultA = 1
    let resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResultA *= i
        }

        return tempResultA
    }, [a])


    let resultB = 1
    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <>
            {/* приведение строки к числу через Number() */}
            <input value={a} onChange={e => setA(Number(e.currentTarget.value))}/>

            {/* приведение строки к числу через математический знак '+' */}
            <input value={b} onChange={e => setB(+e.currentTarget.value)}/>

            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

//=============================================================================

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS SECRET')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)


export const HelpsForReactMemoExample = () => {
    console.log('HelpsForReactMemoExample')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])

    const newArray = useMemo(()=> {
        console.log('useMemo')
        const tempNewArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return tempNewArray
    }, [users])

    const addUser =() => {
        const newUsers = [
            ...users,
            'Sveta ' + new Date().getTime()
        ]
        setUsers(newUsers)
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <button onClick={() => addUser()}>add user</button>
            <Users users={newArray}/>
        </>
    )
}
