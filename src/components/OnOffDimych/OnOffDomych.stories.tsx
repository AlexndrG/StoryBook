import {OnOffDimych} from './OnOffDimych';
import {useState} from 'react';

export default {
    title: '[controlled]/OnOffDimych',
    componenet: OnOffDimych
}

export const OnOffDimychTurnedOn = () => <OnOffDimych on={true} onChange={x=>x}/>
export const OnOffDimychTurnedOff = () => <OnOffDimych on={false} onChange={x=>x}/>

export const OnOffDimychChangeable = () => {
    const [on, setOn] = useState<boolean>(false)

    return <OnOffDimych on={on} onChange={setOn}/>
}
