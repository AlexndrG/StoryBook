import React, {ChangeEvent, MouseEventHandler, useState} from 'react';

export default {
    title: 'HTML/Input/Controlled',
//  component: Button,
}

export const ControlledInputWithFixedValue = () => <input value={'Test text'}/>


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return (
        <>
            <input type={'checkbox'} checked={parentValue} onChange={onChange}/> Click me
        </>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | 'none'>('none')

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        // console.log(parentValue)
        setParentValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiev</option>
        </select>
    )
}
