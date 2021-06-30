import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'HTML/Input/UNcontrolled',
//  component: Button,
}

export const UncontrolledInput = () => <input/>


export const UncontrolledInputWithValueTracking = () => {
    const [value, setValue] = useState('')

    const onChange = (event:ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)

    return (
        <>
            <input onChange={onChange}/>
            Value = [ {value} ]
        </>
    )
}


export const UncontrolledInputGetValueByButtonPressWithID = () => {
    const [value, setValue] = useState('')

    return (
        <>
            <input id={'inputId'}/>
            <button onClick={() => {
                const el = document.getElementById('inputId') as HTMLInputElement
                setValue(el.value)
            }}>Save
            </button>
            Value = [{value}]
        </>
    )
}


export const UncontrolledInputGetValueByButtonPressWithRef = () => {
    const [value, setValue] = useState('')
    const refInput = React.createRef<HTMLInputElement>()

    return (
        <>
            <input ref={refInput}/>
            <button onClick={() => setValue(refInput.current!.value)}>Press me</button>
            Value = [{value}]
        </>
    )
}


export const UncontrolledInputGetValueByButtonPressWithRefDimych = () => {
    const [value, setValue] = useState('')
    const refInput = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = refInput.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <>
            <input ref={refInput}/>
            <button onClick={save}>Save</button>
            Value = [{value}]
        </>
    )
}

// export const ControlledInputWithFixedValue = () =>
//     <input value={'Test text'}/>
