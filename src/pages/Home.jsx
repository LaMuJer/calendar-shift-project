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
            mt: '20px'
        }}>            
            <table className="shiftSheet">
                <thead>
                    <tr>
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
                        <td>cell1_1</td>
                        <td>cell2_1</td>
                        <td>cell3_1</td>
                        <td>cell4_1</td>
                        <td>cell5_1</td>
                        <td>cell6_1</td>
                    </tr>

                </tbody>
            </table >
        </Box>
    )
}

export default Home
