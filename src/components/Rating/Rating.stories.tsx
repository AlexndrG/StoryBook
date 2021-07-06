import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';
import {action} from '@storybook/addon-actions';

export default {
    title: '[controlled]/Rating',
    component: Rating
}

const callback = action('star was clicked')

export const RatingEmpty = () => <Rating value={0} onClick={x => x}/>
export const Rating1 = () => <Rating value={1} onClick={action('star was clicked')}/>
export const Rating2 = () => <Rating value={2} onClick={callback}/>
export const Rating3 = () => <Rating value={3} onClick={callback}/>
export const Rating4 = () => <Rating value={4} onClick={callback}/>
export const Rating5 = () => <Rating value={5} onClick={callback}/>

const RatingMemo = React.memo(Rating)

export const RatingChangeable = () => {
    const [value, setValue] = useState<RatingValueType>(3)

    return <RatingMemo value={value} onClick={setValue}/>
}
