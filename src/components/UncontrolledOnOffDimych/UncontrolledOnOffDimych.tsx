import React, {useState} from 'react';

type PropsType = {
    defaultOn?: boolean
    onChange: (on: boolean) => void
}

export const UncontrolledOnOffDimych = (props: PropsType) => {
    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    // задаем стили через объекты
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px', // пишем CamelCase вместо дефисов в настояших CSS-свойствах [ margin-left ]
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px', // пишем CamelCase вместо дефисов в настояших CSS-свойствах [ border-radius ]
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px', // пишем CamelCase вместо дефисов в настояших CSS-свойствах [ margin-left ]
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


/*
type PropsType = {
    on: boolean
}

export const OnOffDimych = (props: PropsType) => {

    // задаем стили через объекты
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px', // пишем CamelCase вместо дефисов в настояших CSS-свойствах [ margin-left ]
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px', // пишем CamelCase вместо дефисов в настояших CSS-свойствах [ border-radius ]
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px', // пишем CamelCase вместо дефисов в настояших CSS-свойствах [ margin-left ]
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
*/
