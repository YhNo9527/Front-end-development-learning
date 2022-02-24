import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { createDecrementAction, 
         createIncrementAction,
         createAsyncIncrementAction } from '../../redux/actions/count'

class Count extends Component {

    selectRef = createRef()

    increment = () => {
        const { value } = this.selectRef.current
        this.props.Incre( parseInt(value) )
    }

    decrement = () => {
        const { value } = this.selectRef.current
        this.props.Decre( parseInt(value) )
    }

    incrementIfOdd = () => {
        const { value } = this.selectRef.current
        if( this.props.count % 2 !== 0 ){
            this.props.Incre( parseInt(value) )
        }
    }

    incrementAsync = () => {
        const { value } = this.selectRef.current
        this.props.AysncIncre( parseInt(value), 500 )
    }

    render() {
        return (
            <div>
                <h1>Count组件</h1>
                <h2>计算结果: { this.props.count }  下方组件人数: { this.props.people }</h2>
                <select ref= { this.selectRef }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick= { this.increment } >+</button>
                <button onClick= { this.decrement } >-</button>
                <button onClick= { this.incrementIfOdd } >结果为奇数时 加</button>
                <button onClick= { this.incrementAsync } >异步 加</button>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return({
            count: state.count,
            people: state.person.length
        })
    },
    {
        Incre: createIncrementAction,
        Decre: createDecrementAction,
        AysncIncre: createAsyncIncrementAction
    }
)(Count)