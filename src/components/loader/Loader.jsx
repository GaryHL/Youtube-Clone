import { Box, Stack } from '@mui/material'
import React from 'react'
import './loader.css'

function Loader() {
    return (
        <Box className='main'>
            <div className="container_text">
                <h2>YOUTUBE CLONE</h2>
                <div className="container_bar">
                    <span className='bar'></span>
                </div>
            </div>

        </Box>
    )
}

export default Loader