import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOffDimych} from './components/OnOffDimych/OnOffDimych';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOffDimych} from './components/UncontrolledOnOffDimych/UncontrolledOnOffDimych';
import { Accordion } from './components/Accordion/Accordion';


function hello() {
    debugger
    alert('Hello');
}

// hello();


function App(props: any) {
    console.log('App rendering');

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(true)

    return (
        <div className={'App'}>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            Article 2
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            <p/>
            <OnOff state={true}/>
            <OnOff state={false}/>
            <OnOff state={true}/>

            <p/>
            Dimych OnOff:
            {/*
            <OnOffDimych on={true}/>
            <OnOffDimych on={false}/>
            <OnOffDimych on={true}/>
            */}

            <p/>
            <hr/>
            Controlled:
            <OnOffDimych on={switchOn} onChange={setSwitchOn}/>
            <OnOffDimych on={switchOn} onChange={(on) => setSwitchOn(on)}/>
            <hr/>
            UNcontrolled:
            <UncontrolledOnOffDimych onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledOnOffDimych onChange={setSwitchOn}/> {switchOn.toString()}


            <p/>
            <hr/>
            Controlled:
            {/*<Accordion titleValue={'Menu'} value={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>*/}
            {/*<Accordion titleValue={'Menu'} value={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>*/}
            <Accordion
                titleValue={'User'}
                value={false}
                onChange={()=>alert('Accordion clicked')}
                items={[
                    {title: 'Dimych', value: '1'},
                    {title: 'Valera', value: '2'},
                    {title: 'Nick', value: '3'},
                    {title: 'Sasha', value: '4'},
                ]}
                onClick={(value) => alert(`Hello user with ID=${value}`)}
            />

            <hr/>
            UNcontrolled:
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>

            <p/>
            <hr/>
            Controlled:
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <hr/>
            UNcontrolled:
            <UncontrolledRating onChange={x=>x}/>
            <UncontrolledRating onChange={x=>x}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering');
    return <h1>{props.title}</h1>
}

export default App;
