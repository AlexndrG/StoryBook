import React from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    titleValue: string
    value: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Select(props: SelectPropsType) {
    return (
        <div>
            <SelectTitle
                title={props.titleValue}
                onChange={props.onChange}
            />
            {!props.value && <SelectBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


type SelectTitlePropsType = {
    title: string
    onChange: () => void
}

function SelectTitle(props: SelectTitlePropsType) {
    return (
        <div className={s.borderHead} onClick={(e) => props.onChange()}>
            -- {props.title} --
        </div>
    )
}


type SelectBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function SelectBody(props: SelectBodyType) {
    return (
        <div>
            <div className={s.borderBody}>
                <ul>
                    {props.items.map((item, index) =>
                        <li
                            key={index}
                            onClick={() => props.onClick(item.title)}
                        >
                            {item.title}
                        </li>)}
                </ul>
            </div>
        </div>
    )
}