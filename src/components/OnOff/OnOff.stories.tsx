import { OnOff } from './OnOff';

export default {
    title: '[controlled]/OnOff',
    componenet: OnOff
}

export const OnOffTurnedOn = () => <OnOff state={true}/>
export const OnOffTurnedOff = () => <OnOff state={false}/>
