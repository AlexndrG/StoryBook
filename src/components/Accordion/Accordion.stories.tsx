import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';

const GetCategoryObj = (categoryName: 'Colors' | 'Events' | 'Main') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: '[controlled]/Accordion',
    component: Accordion,
    argTypes: {
        color: {...GetCategoryObj('Colors')},
        onChange: {...GetCategoryObj('Events')},
        titleValue: {...GetCategoryObj('Main')},
        value: {...GetCategoryObj('Main')},
        items: {...GetCategoryObj('Main')},
        onClick: {...GetCategoryObj('Main')},
    }
}

const callback = action('Collapse event produced')

const onClickItemCallback = action(`Clicked item with value`)


//==========================================================================================
// new version = StoryBook 6
//==========================================================================================

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

const someProps = {
    onChange: callback
}

export const NEWAccordionCollapsed = Template.bind({})
NEWAccordionCollapsed.args = {
    ...someProps,
    titleValue: 'Menu',
    value: true,
    color: 'black',
    items: [],
    onClick: onClickItemCallback
}

export const NEWAccordionUncollapsed = Template.bind({})
NEWAccordionUncollapsed.args = {
    ...someProps,
    titleValue: 'User',
    value: false,
    color: 'black',
    items: [
        {title: 'Dimych', value: '1'},
        {title: 'Valera', value: '2'},
        {title: 'Nick', value: '3'},
        {title: 'Sasha', value: '4'},
    ],
    onClick: onClickItemCallback
}


export const NEWAccordionChangeable: Story<AccordionPropsType> = (args) => {
    const [collapse, setCollapse] = useState<boolean>(true)

    return <Accordion {...args} value={collapse} onChange={() => setCollapse(!collapse)}/>
}
NEWAccordionChangeable.args = {
    titleValue: 'Test',
    color: 'black',
    items: [
        {title: 'Dimych', value: '1'},
        {title: 'Valera', value: '2'},
        {title: 'Nick', value: '3'},
        {title: 'Sasha', value: '4'},
    ],
    onClick: (value) => alert(`Hello user with ID=${value}`)
}

//==========================================================================================
// old version = StoryBook 5
//==========================================================================================

export const AccordionCollapsed = () => <Accordion
    titleValue={'Menu'}
    value={true}
    onChange={callback}
    items={[]}
    onClick={onClickItemCallback}
/>


export const AccordionUncollapsed = () => <Accordion
    titleValue={'User'}
    value={false}
    onChange={callback}
    items={[
        {title: 'Dimych', value: '1'},
        {title: 'Valera', value: '2'},
        {title: 'Nick', value: '3'},
        {title: 'Sasha', value: '4'},
    ]}
    onClick={onClickItemCallback}
/>

export const AccordionChangeable = () => {
    const [collapse, setCollapse] = useState<boolean>(true)

    return <Accordion
        titleValue={'Test'}
        value={collapse}
        onChange={() => setCollapse(!collapse)}
        items={[
            {title: 'Dimych', value: '1'},
            {title: 'Valera', value: '2'},
            {title: 'Nick', value: '3'},
            {title: 'Sasha', value: '4'},
        ]}
        onClick={(value) => alert(`Hello user with ID=${value}`)}
    />
}
