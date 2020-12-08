import React, { useState, useRef } from 'react'
import { InputBase, makeStyles, fade } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import './search.css'

/* TODO:
responsive search button */ 

const Search = props => {

    const classes = useStyles()
    	
	const inputRef = useRef()

    const [ inputValue, setInputValue] = useState('')
    
    const searchHandler = e => {
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        props.searchVideo(inputValue)
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder='Video Search…'
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={searchHandler}
                value={inputValue}
                ref={inputRef}
            />
            <button className='button' type='submit' onClick={handleSubmit}> Search </button>
        </div>
    )
}

export default Search

const useStyles = makeStyles((theme) => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		marginLeft: 0,
		width: '70%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: '10px 30px',
		position: 'absolute',
        pointerEs: 'none',
		display: 'flex',
		alignItems: 'center',
    },
    inputRoot: {
		border: '1px solid #ced4da',
        borderRadius: '15px',
        marginLeft: '20px',
		height: '40px',
        color: 'inherit',
        width: '85%',
        backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade('#BF5E66', 0.25),
		},
    },
    inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`
    }
}))