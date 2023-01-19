import React from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { Toolbar, AppBar, Typography, Box, InputBase } from '@mui/material';
import SearchIcon from '@emotion/styled';
import useStyles from './styles'
const Header = () => {
    const classes = useStyles()
    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>Travel Advisor</Typography>
                <Box display='flex'>
                    <Typography variant='h6' className={classes.title}>Explore new places</Typography>
                    <Autocomplete>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder='Search Here...' classes={{root:classes.inputRoot, input:classes.inputInput}}/>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header