import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {SelectDimych, SelectType} from './SelectDimych';
import {action} from '@storybook/addon-actions';

export default {
    title: '[controlled]/SelectDimych',
    component: SelectDimych
}

//==========================================================================================
// new version = StoryBook 6
//==========================================================================================

const callback = action('Value changed')

const Template: Story<SelectType> = (args) => <SelectDimych {...args} />

export const SelectDimychWithoutAll = Template.bind({})
SelectDimychWithoutAll.args = {
    items: [],
    onChange: () => callback(),
}

const SelectDimychMemo = React.memo(SelectDimych)

export const SelectDimychValue3: Story<SelectType> = (args) => {
    const [value, setValue] = useState(args.items[2].value)

    return (
        <div>
            Example - standard "Select": <br/>
            <select>
                <option value="1">Dimych</option>
                <option value="2">Valera</option>
                <option value="3">Nick</option>
                <option value="4">Sasha</option>
            </select>

            <hr/>

            <SelectDimychMemo {...args} value={value} onChange={setValue}/>
        </div>
    )
}
SelectDimychValue3.args = {
    items: [
        {title: 'Dimych', value: '1'},
        {title: 'Valera', value: '2'},
        {title: 'Nick', value: '3'},
        {title: 'Sasha', value: '4'},
    ],
}



export const SelectDimychWithoutValue: Story<SelectType> = (args) => {
    const [value, setValue] = useState(null)

    return (
        <div>
            Example - standard "Select": <br/>
            <select>
                <option value="1">Dimych</option>
                <option value="2">Valera</option>
                <option value="3">Nick</option>
                <option value="4">Sasha</option>
            </select>

            <hr/>

            <SelectDimychMemo {...args} value={value} onChange={setValue}/>
        </div>
    )
}
SelectDimychWithoutValue.args = {
    items: [
        {title: 'Dimych', value: '1'},
        {title: 'Valera', value: '2'},
        {title: 'Nick', value: '3'},
        {title: 'Sasha', value: '4'},
    ],
}