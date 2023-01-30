import { Stack } from "@mui/system"
import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography'
import { useState } from "react"

const NavBar = () => {

    const [category, setCategory] = useState('Home')

    return (
        <Stack direction={'row'} sx={{            
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '30px'
        }}>
            <Link to={'/'} style={{ textDecoration: 'none' }} className='active'>
                <Typography variant="body2" className='link' color="initial">Home</Typography>
            </Link>
            <Link to={'/shift/A'} style={{ textDecoration: 'none' }} >
                <Typography variant="body2" className='link' color="initial">Shift A</Typography>
            </Link>        
            <Link to={'/shift/B'} style={{ textDecoration: 'none' }} >
                <Typography variant="body2" className='link' color="initial">Shift B</Typography>
            </Link>
            <Link to={'/shift/C'} style={{ textDecoration: 'none' }} >
                <Typography variant="body2" className='link' color="initial">Shift C</Typography>
            </Link>
            <Link to={'/shift/D'} style={{ textDecoration: 'none' }} >
                <Typography variant="body2" className='link' color="initial">Shift D</Typography>
            </Link>
            <Typography variant="body2" className='link' color="initial">About</Typography>

            {/* {shifts.map(({ name }, index) => {
                <Link to={`/shift/${name}`} style={{ textDecoration: 'none' }} key={index} >
                    {console.log(name)            }
                    <Typography variant="body2" className='link' color="initial">{name}</Typography>
                </Link>
            })} */}
        </Stack>
    )
}

export default NavBar
