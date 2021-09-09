import React from 'react';
import {Clock} from './Clock';
import {Clock2} from './Clock2';
import {ClockDimych} from './ClockDimych';


export default {
    title: '[UN-controlled]/Clock',
}

export const BaseExample = () => {
    return (
        <div>
            <Clock/>
        </div>
    )
}

export const HomeworkExample = () => {
    return (
        <div>
            <Clock2 type={'digital'}/>
            <br/>
            <Clock2 type={'analog'}/>
        </div>
    )
}


export const BaseDigitalExample = () => {
    return (
        <div>
            <ClockDimych mode={'digital'}/>
        </div>
    )
}

export const BaseAnalogExample = () => {
    return (
        <div>
            <ClockDimych mode={'analog'}/>
        </div>
    )
}
