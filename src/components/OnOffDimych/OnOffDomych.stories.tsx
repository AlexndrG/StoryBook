import {OnOffDimych} from './OnOffDimych';
import React, {useState} from 'react';

export default {
    title: '[controlled]/OnOffDimych',
    componenet: OnOffDimych
}

export const OnOffDimychTurnedOn = () => <OnOffDimych on={true} onChange={x=>x}/>
export const OnOffDimychTurnedOff = () => <OnOffDimych on={false} onChange={x=>x}/>


const OnOffDimychMemo = React.memo(OnOffDimych)

export const OnOffDimychChangeable = () => {
    const [on, setOn] = useState<boolean>(false)

    return <OnOffDimychMemo on={on} onChange={setOn}/>
}
