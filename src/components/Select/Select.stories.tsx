import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Select, SelectPropsType} from './Select';


export default {
    title: '[controlled]/Select',
    component: Select,
}

export const SelectSB6: Story<SelectPropsType> = (args) => {
    const [collapse, setCollapse] = useState<boolean>(true)

    const selectItems = [
        {title: 'Dimych', value: '1'},
        {title: 'Valera', value: '2'},
        {title: 'Nick', value: '3'},
        {title: 'Sasha', value: '4'},
    ]

    const [title, setTitle] = useState<string>(selectItems[0].title)

    const onClickItem = (value:string) => {
        setCollapse(true)
        setTitle(value)
    }

    return <Select
        items={selectItems}
        titleValue={title}
        value={collapse}
        onChange={() => setCollapse(!collapse)}
        onClick={onClickItem}
    />
}

//==========================================================================================
// old version = StoryBook 5
//==========================================================================================

export const SelectSB5 = () => {
    const [collapse, setCollapse] = useState<boolean>(true)

    const selectItems = [
        {title: 'Dimych', value: '1'},
        {title: 'Valera', value: '2'},
        {title: 'Nick', value: '3'},
        {title: 'Sasha', value: '4'},
    ]

    const [title, setTitle] = useState<string>(selectItems[0].title)

    const onClickItem = (value:string) => {
        setCollapse(true)
        setTitle(value)
    }

    return <Select
        items={selectItems}
        titleValue={title}
        value={collapse}
        onChange={() => setCollapse(!collapse)}
        onClick={onClickItem}
    />
}
