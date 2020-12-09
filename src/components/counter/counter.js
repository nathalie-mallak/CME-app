import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { useSelector, useDispatch } from 'react-redux'
import { DECREMENT_COUNTER , INCREMENT_COUNTER } from '../../actions/type'
import './counter.css'
import { Grid } from '@material-ui/core'

const Counter = () => {

    // it replaces mapStateToProps 
    const counter = useSelector((state) => state.counter)
    
    // it replaces maping to dispatch
    const dispatch = useDispatch()
    
    const decrement = () => {
        dispatch({type: DECREMENT_COUNTER})
    } 
    
    const increment = () => {
        console.log(counter);
        dispatch({type: INCREMENT_COUNTER})
    }

    return (
        <>
            <div className='mainDiv'>
                <Grid container justify='space-evenly' alignItems='center'>
                    <Grid item xs={3} sm={3}>
                <button onClick={decrement} className='buttons'> <RemoveIcon /> </button>
                </Grid>
                <Grid item xs={6} sm={4}>
                <p className='result'> {counter} </p>
                </Grid>
                <Grid item xs={3} sm={3}>
                <button onClick={increment} className='buttons'> <AddIcon /> </button>
                </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Counter 
