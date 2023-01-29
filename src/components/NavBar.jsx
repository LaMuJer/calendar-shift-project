import { Stack } from "@mui/system"
import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography'

const NavBar = () => {

    return (
        <Stack direction={'row'} p='2' alignItems={'center'}
            sx={{
                position: 'sticky',
                bgcolor: '#fff',
                top: '0',
                justifyContent: 'center',
            }}
        >
            <Link to={'/'} style={{ textDecoration: 'none' }} >
                <Typography variant="body2" className='link' color="initial">Home</Typography>
            </Link>
            <Link to={'/shift/:id'} style={{ textDecoration: 'none', margin: '0px 20px' }}   >
                <Typography variant="body2" className='link' color="initial">Shift</Typography>
            </Link>
            <Typography variant="body2" className='link' color="initial">About</Typography>

        </Stack>    
    )
}

export default NavBar
