import { Box } from '@mui/material'

const Home = () => {
    return (
        <Box>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Day</th>
                        <th>Shift
                            <table>
                                <thead>
                                    <tr>
                                        <th>Shift A</th>
                                        <th>Shift B</th>
                                        <th>Shift C</th>
                                        <th>Shift D</th>
                                    </tr>
                                </thead>
                            </table>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A</td>
                        <td>A</td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Off</td>
                                        <td>Morning</td>
                                        <td>Night</td>
                                        <td>Off</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    )
}

export default Home
