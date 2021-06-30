import {useState} from 'react';
import {RatingValueType, UncontrolledRating} from './UncontrolledRating';
import { action } from '@storybook/addon-actions';

export default {
    title: '[UN-controlled]/Rating',
    componenet: UncontrolledRating
}

const callback = action('Rating star clicked')

export const RatingChangeableWithoutDefault = () => <UncontrolledRating onChange={callback}/>

export const RatingChangeable0 = () => <UncontrolledRating defaultValue={0} onChange={callback}/>
export const RatingChangeable1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>
export const RatingChangeable2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>
export const RatingChangeable3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>
export const RatingChangeable4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>
export const RatingChangeable5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>

export const RatingChangeableInfo = () => {
    const [value, setValue] = useState<RatingValueType>(3)

    return (
        <div>
            <UncontrolledRating defaultValue={3} onChange={setValue}/>
            <p/>
            Current state is: <b>{value}</b>
        </div>
    )
}

export const UncontrolledRatingLikeControlled = () => {
    const [value, setValue] = useState<RatingValueType>(3)

    return (
        <div>
            <UncontrolledRating defaultValue={value} onChange={setValue}/>
            <p/>
            Current state is: <b>{value}</b>
        </div>
    )
}
