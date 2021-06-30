import React from 'react';

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    /**
     * titleValue - name of the accordion
     */
    titleValue: string
    /**
     * value - collapsed/uncollapsed accordion
     */
    value: boolean
    /**
     * onChange - click on accordion name callback
     */
    onChange: () => void

    /**
     * color - optional head color
     */
    color?: string

    /**
     * items - array of items
     */
    items: ItemType[]

    /**
     * onClick - click on Item callback
     * @param value - return value
     */
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
                color={props.color}
            />

            {!props.value && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3 style={{color: props.color ? props.color : 'red'}}
            onClick={(e) => props.onChange()}>
            -- {props.title} --
        </h3>
    )
}


type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {
    console.log('AccordionBody rendering');
    return (
        <ul>
            {props.items.map((item, index) =>
                <li
                    key={index}
                    onClick={() => props.onClick(item.value)}
                >
                    {item.title}
                </li>)}
        </ul>
    )
}