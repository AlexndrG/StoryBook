import React, {useState} from 'react';
import {UncontrolledOnOffDimych} from './UncontrolledOnOffDimych';

export default {
    title: '[UN-controlled]/OnOffDimych',
    component: UncontrolledOnOffDimych
}

export const OnOffTurnedOn = () => <UncontrolledOnOffDimych defaultOn={true} onChange={x => x}/>
export const OnOffTurnedOff = () => <UncontrolledOnOffDimych defaultOn={false} onChange={x => x}/>

const UncontrolledOnOffDimychMemo = React.memo(UncontrolledOnOffDimych)

export const OnOffDimychChangeable = () => {
    const [onOff, setOnOff] = useState<boolean>(false)

    return (
        <>
            <UncontrolledOnOffDimychMemo defaultOn={false} onChange={setOnOff}/>
            <p/>
            Current OnOff state: <b>{onOff.toString()}</b>
        </>
    )
}
