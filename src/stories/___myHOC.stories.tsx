import React from 'react';


export default {
    title: 'TEST/test my HOC',
//  component: Button,
}

export const WithMyHOC = () => {
    const NewComponent = addDivAroundHOC(Component)
    const NewInput = addDivAroundHOC(Input)

    return (
        <>
            <Component text={'Test text'} color={'red'}/>
            <hr/>
            <NewComponent text={'withHOC test text'} color={'green'}/>
            <br/>
            <br/>
            <br/>
            <Input value={'simple input'}/>
            <hr/>
            <NewInput value={'simple Input with HOC'}/>
        </>
    )
}

//===========================================================================================================

type ComponentPropsType = {
    text: string
    color: string
}

const Component = (props: ComponentPropsType) => {
    return (
        <>
            <div style={{backgroundColor: props.color}}>
                {props.text}
            </div>
        </>
    )
}

//===========================================================================================================

type InputPropsType = {
    value: string
}

const Input = (props: InputPropsType) => {
    return <input value={props.value}/>
}

//===========================================================================================================
//===========================================================================================================
//===========================================================================================================


const addDivAroundHOC = (OldComponent: React.FunctionComponent<any>) => {
    return (props: any) => {
        return (
            <div style={{border: '1px solid blue', padding: '10px'}}>
                <OldComponent {...props}/>
            </div>
        )
    }
}