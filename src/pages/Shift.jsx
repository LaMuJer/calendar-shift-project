import React, { useState } from "react"
import Calendar from "react-calendar"
import '../App.css'
import { Box, Button, Stack, Typography } from "@mui/material"
import { lists } from "../utils/constant"

const Shift = () => {

    const [value, setValue] = useState(new Date())

    return (

        <Stack sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'center'
            }} >
                <Button variant="outlined" color="info" style={{ marginTop: '30px' }} >
                    <p style={{ fontSize: '10px' }}>Go to</p>
                </Button>
                <Calendar onChange={setValue} value={value} />
                <Stack direction={'row'} sx={{
                    width: '100vw',
                    height: '20vh',
                    bgcolor: 'yellow',
                    mt: '30px'
                }}>
                    {lists.map(({ shift, duration, icon }, index) => {
                        <div key={index}>
                            <Typography variant="subtitle2" color='success'>{shift}</Typography>
                            <Typography variant="subtitle2" color='success'>{duration}</Typography>
                            <Typography variant="subtitle2" color='success'>{React.createElement(icon)}</Typography>
                        </div>
                    })}
                </Stack>
            </Box>
        </Stack>
    )
}

export default Shift
