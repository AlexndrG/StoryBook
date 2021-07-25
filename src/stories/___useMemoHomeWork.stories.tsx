import React, {useMemo, useState} from 'react';
import {Select} from '../components/Select/Select';

export default {
    title: 'MEMO/hook useMemo Home Work',
//  component: Button,
}

type SelectItemsType = {
    title: string
    value: string
    countryId: number
    population: number
}

export const useMemoHomeWork = () => {
    console.log('useMemoHomeWork')
    const [counter, setCounter] = useState<number>(0)

    const [collapse1, setCollapse1] = useState<boolean>(true)
    const [collapse2, setCollapse2] = useState<boolean>(true)
    const [collapse3, setCollapse3] = useState<boolean>(true)

    const [selectItems, setSelectItems] = useState<Array<SelectItemsType>>([
        {title: 'Moscow', value: '1', countryId: 1, population: 1000},
        {title: 'Minsk', value: '2', countryId: 2, population: 1500},
        {title: 'Kiev', value: '3', countryId: 3, population: 2000},
        {title: 'Perm', value: '4', countryId: 1, population: 1000},
        {title: 'Omsk', value: '5', countryId: 1, population: 900},
        {title: 'Lvov', value: '6', countryId: 3, population: 1700},
        {title: 'Vitebsk', value: '7', countryId: 2, population: 10000},
        {title: 'Gomel', value: '8', countryId: 2, population: 7000},
        {title: 'Poltava', value: '9', countryId: 3, population: 100},
    ])

    // const selectItemsFunc1 = () => {
    //     console.log('Select 1')
    //     return selectItems.filter(s => s.title.toLowerCase().indexOf('m') > -1)
    // }
    // const selectItemsFunc2 = () => {
    //     console.log('Select 2')
    //     return selectItems.filter(s => s.countryId === 2)
    // }
    // const selectItemsFunc3 = () => {
    //     console.log('Select 3')
    //     return selectItems.filter(s => s.population < 1000)
    // }
    //
    // const selectItems1 = selectItemsFunc1()
    // const selectItems2 = selectItemsFunc2()
    // const selectItems3 = selectItemsFunc3()

    const selectItems1 = useMemo(() => {
        console.log('Select 1')
        return selectItems.filter(s =>
            s.title.toLowerCase().indexOf('m') > -1 ||
            s.title.toLowerCase().indexOf('3') > -1)
    }, [selectItems])
    const selectItems2 = useMemo(() => {
        console.log('Select 2')
        return selectItems.filter(s => s.countryId === 2)
    }, [selectItems])
    const selectItems3 = useMemo(() => {
        console.log('Select 3')
        return selectItems.filter(s => s.population < 1000)
    }, [selectItems])

    const [title1, setTitle1] = useState<string>(selectItems1[0].title)
    const [title2, setTitle2] = useState<string>(selectItems2[0].title)
    const [title3, setTitle3] = useState<string>(selectItems3[0].title)

    const onClickItem1 = (value: string) => {
        setCollapse1(true)
        setTitle1(value)
    }
    const onClickItem2 = (value: string) => {
        setCollapse2(true)
        setTitle2(value)
    }
    const onClickItem3 = (value: string) => {
        setCollapse3(true)
        setTitle3(value)
    }

    const addCity = () => {
        const newCity = {
            title: 'City ' + Math.trunc(Math.random() * 1000),
            value: '10',
            countryId: Math.trunc(Math.random() * 3) + 1,
            population: Math.random() * 1000
        }

        setSelectItems([...selectItems, newCity])
    }

    return (
        <>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <p/>

            <button onClick={addCity}>Add city</button>
            <p/>

            <div style={{display: 'inline-block', verticalAlign: 'top', width: '150px'}}>
                <Select
                    items={selectItems1}
                    titleValue={title1}
                    value={collapse1}
                    onChange={() => setCollapse1(!collapse1)}
                    onClick={onClickItem1}
                />
            </div>

            <div style={{display: 'inline-block', verticalAlign: 'top', width: '150px'}}>
                <Select
                    items={selectItems2}
                    titleValue={title2}
                    value={collapse2}
                    onChange={() => setCollapse2(!collapse2)}
                    onClick={onClickItem2}
                />
            </div>

            <div style={{display: 'inline-block', verticalAlign: 'top', width: '150px'}}>
                <Select
                    items={selectItems3}
                    titleValue={title3}
                    value={collapse3}
                    onChange={() => setCollapse3(!collapse3)}
                    onClick={onClickItem3}
                />
            </div>
        </>
    )
}