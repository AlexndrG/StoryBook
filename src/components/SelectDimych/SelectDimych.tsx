import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './SelectDimych.module.css'

type ItemType = {
    title: string
    value: any
}

export type SelectType = {
    value?: any
    items: ItemType[]
    onChange: (value: any) => void
}

export const SelectDimych = (props: SelectType) => {
    const [active, setActive] = useState(false)
    const toggleItems = () => setActive(!active)

    const selectedItem = props.items.find(item => item.value === props.value)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

//===================================================================================
//
// Моя версия обработчика
//
    /*
        const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
            let indexCurrentItem = props.items.findIndex(i => i.value === props.value)
            if (active) {
                indexCurrentItem = props.items.findIndex(i => i.value === hoveredElementValue)
            }

            if (e.key === 'ArrowUp') {
                if (indexCurrentItem > 0) {
                    const newValue = props.items[indexCurrentItem - 1].value
                    setHoveredElementValue(newValue)
                    props.onChange(newValue)
                }
            } else if (e.key === 'ArrowDown') {
                if (indexCurrentItem < props.items.length - 1) {
                    const newValue = props.items[indexCurrentItem + 1].value
                    setHoveredElementValue(newValue)
                    props.onChange(newValue)
                }
            } else if (e.key === 'Escape' || 'Enter') {
                setActive(false)
            }
        }
    */
//===================================================================================


//===================================================================================
//
// Версия Димыча
//
    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ?
                        props.items[i + 1] : props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }
//===================================================================================

    return (
        <div
            className={s.select + ' '}
            tabIndex={0}
            onKeyUp={onKeyUp}
        >
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>

            {active &&
            <div
                className={s.items}
            >
                {props.items.map((item, index) =>
                    <div
                        className={item.value === hoveredElementValue ? s.selected : ''}
                        key={index}
                        onClick={() => onItemClick(item.value)}
                        onMouseEnter={() => setHoveredElementValue(item.value)}
                    >
                        {item.title}
                    </div>)}
            </div>
            }
        </div>
    )
}
