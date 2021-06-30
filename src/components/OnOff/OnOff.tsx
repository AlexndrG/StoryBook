import React from 'react';
import s from './OnOff.module.css';

type OnOffPropsType = {
    state: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div>
            <div className={`${s.rectangle} ${props.state && s.green}`}>On</div>
            <div className={`${s.rectangle} ${!props.state && s.red}`}>Off</div>
            <div className={`${s.circle} ${props.state && s.green} ${!props.state && s.red}`}></div>
        </div>
    )
}