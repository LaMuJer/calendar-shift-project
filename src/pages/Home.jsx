import { Box } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'
import { useState } from 'react'

const Home = () => {

    const [show, setshow] = useState()

    // const handleshow = () {

    // }

    return (

        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '30px'
        }}>            
            <table className="shiftSheet">
                <thead>
                    <tr >
                        <th>Date</th>
                        <th>Day</th>
                        <th>Shift A</th>
                        <th>Shift B</th>
                        <th>Shift C</th>
                        <th>Shift D</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>30/1/23</td>
                        <td>Monday</td>
                        <td>Off</td>
                        <td>Off</td>
                        <td>Morning</td>
                        <td>Morning</td>
                    </tr>
                    <tr className='highlight'>
                        <td>1/2/23</td>
                        <td>Tuesday</td>
                        <td>Night</td>
                        <td>Night</td>
                        <td>Off</td>
                        <td>Off</td>
                    </tr>
                    <tr>
                        <td>2/2/23</td>
                        <td>Wednesday</td>
                        <td>Off</td>
                        <td>Off</td>
                        <td>Morning</td>
                        <td>Morning</td>
                    </tr>
                </tbody>
            </table >
        </Box>
    )
}

export default Home
