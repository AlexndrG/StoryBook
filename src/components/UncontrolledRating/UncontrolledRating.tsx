import React, {useState} from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type PropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: PropsType) {
    console.log('Rating rendering');

    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1); props.onChange(1)}}/>
            <Star selected={value > 1} setValue={() => {setValue(2); props.onChange(2)}}/>
            <Star selected={value > 2} setValue={() => {setValue(3); props.onChange(3)}}/>
            <Star selected={value > 3} setValue={() => {setValue(4); props.onChange(4)}}/>
            <Star selected={value > 4} setValue={() => {setValue(5); props.onChange(5)}}/>
        </div>
    )
}

type StartPropsType = {
    selected: boolean;
    setValue: () => void
}

function Star(props: StartPropsType) {
    return (
        <span
            onClick={() => props.setValue()}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )
}

////////////////////////////////////////////////////////////////////////////////

/*

import React, {useState} from 'react';

export function UncontrolledRating() {
    console.log('Rating rendering');

    const [value, setValue] = useState(0)

    return (
        <div>
            {<Star selected={value > 0} value={1} setValue={setValue}/>}
            {<Star selected={value > 1} value={2} setValue={setValue}/>}
            {<Star selected={value > 2} value={3} setValue={setValue}/>}
            {<Star selected={value > 3} value={4} setValue={setValue}/>}
            {<Star selected={value > 4} value={5} setValue={setValue}/>}
        </div>
    )
}

type StartPropsType = {
    selected: boolean;
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StartPropsType) {
    console.log('Star rendering');

    const onStarClick = () => {
        props.setValue(props.value)
    }

    return (
        <span onClick={onStarClick}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )
}


*/