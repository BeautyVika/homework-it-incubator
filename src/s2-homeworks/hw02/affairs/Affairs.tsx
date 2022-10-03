import React from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType)=> void
    deleteAffairCallback: (_id: number)=> void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const setAll = (filter: FilterType) => {props.setFilter(filter)}
    const setHigh = (filter: FilterType) => {props.setFilter(filter)}
    const setMiddle = (filter: FilterType) => {props.setFilter(filter)}
    const setLow = (filter: FilterType) => {props.setFilter(filter)}


    const cnAll = s.button + ' ' + s.all + (props.filter === 'all' ? ' ' + s.active : '')
    const cnHigh = s.button + ' ' + s.high + (props.filter === 'high' ? ' ' + s.active : '')
    const cnMiddle = s.button + ' ' + s.middle + (props.filter === 'middle' ? ' ' + s.active : '')
    const cnLow = s.button + ' ' + s.low + (props.filter === 'low' ? ' ' + s.active : '')

    const mappedAffairs =  props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    return (
        <div>
            <div className={s.buttonContainer}>
                <button
                    id={'hw2-button-all'}
                    onClick={()=>setAll("all")}
                    className={cnAll}>
                    All
                </button>
                <button
                    id={'hw2-button-high'}
                    onClick={()=>setHigh('high')}
                    className={cnHigh}>
                    High
                </button>
                <button
                    id={'hw2-button-middle'}
                    onClick={()=>setMiddle('middle')}
                    className={cnMiddle}>
                    Middle
                </button>
                <button
                    id={'hw2-button-low'}
                    onClick={()=>setLow('low')}
                    className={cnLow}>
                    Low
                </button>
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs
