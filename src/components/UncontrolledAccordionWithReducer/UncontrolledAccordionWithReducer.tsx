import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './reducer';

type AccordionPropsType = {
    titleValue: string
}

////////////////////////////////////////////////////////////////////
//
// state - переделаем в объект
//

export function UncontrolledAccordionWithReducer(props: AccordionPropsType) {
    // const [collapsed, setCollapsed] = useState(true)
    const [state, dispatch] = useReducer(reducer, {collapsed:false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}


////////////////////////////////////////////////////////////////////
//
// state - boolean-примитв
//
// export function UncontrolledAccordionWithReducer(props: AccordionPropsType) {
//     // const [collapsed, setCollapsed] = useState(true)
//     const [collapsed, dispatch] = useReducer(reducer, false)
//
//     return (
//         <div>
//             {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
//             <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_CONSTANT})}/>
//             {!collapsed && <AccordionBody/>}
//         </div>
//     )
// }

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3 onClick={() => props.onClick()}>-- {props.title} --</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
}