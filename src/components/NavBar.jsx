import { Stack } from "@mui/system"
import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography'
import { useState } from "react"
import { shifts } from '../utils/constant'

const NavBar = () => {

    const [category, setCategory] = useState('Home')

    return (
        <Stack direction={'row'} sx={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '20px'
        }}>
            <Link to={'/'} style={{ textDecoration: 'none' }} >
                <Typography variant="body2" className='link' color="initial">Home</Typography>
            </Link>
            {shifts.map(({ name }, index) => {
                <Link to={`/shift/${name}`} style={{ textDecoration: 'none' }} key={index} >
                    {console.log(name)            }
                    <Typography variant="body2" className='link' color="initial">{name}</Typography>
                </Link>
            })}
            <Typography variant="body2" className='link' color="initial">About</Typography>
        </Stack>
    )
}

export default NavBar
