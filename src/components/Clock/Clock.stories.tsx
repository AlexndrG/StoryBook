import React from 'react';
import {Clock} from './Clock';
import {Clock2} from './Clock2';


export default {
    title: '[UN-controlled]/Clock',
    component: Clock,
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
