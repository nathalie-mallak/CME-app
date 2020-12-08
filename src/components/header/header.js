import React from 'react'
import './header.css'
import { AppBar, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
			<AppBar position='static' className={classes.bar}>
                <div className='linkDiv'>
                    <Link to ='/' className='link'>
                        Page1
                    </Link> 
                    
                    <Link to ='/Page2' className='link'>
                        Page2
                    </Link>
                </div>
            </AppBar>
		</div>
    )
}

export default Header


const useStyles = makeStyles((theme) => ({
	root: {
        flexGrow: 1,
	},

	bar: {
		marginBottom: '20px',
		padding: '15px 10px',
        backgroundColor: '#BF5E66',
    },
}))
