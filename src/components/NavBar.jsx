import { Stack } from "@mui/system"
import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography'
import { useState } from "react"
import { Button, Collapse, List, ListItemButton } from "@mui/material"
import Modal from "./Modal"
import { ExpandLess, ExpandMore, } from "@mui/icons-material"
import About from "./About"

const NavBar = () => {

    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    const [modal, setmodal] = useState(true)
    const openModal = () => {
        setmodal(!modal);
    }

    const [about, setabout] = useState(true)
    const openAbout = () => {
        setabout(!about);
    }

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
            {/* <Button onClick={openModal}>

            </Button> */}
            <List
                sx={{
                    width: '100%', maxWidth: 100,
                    height: '40px', borderRadius: '20px',
                    bgcolor: '#caf0f8', padding: '0px'
                }}
                component="nav"
                aria-labelledby="subheader"
            >
                <ListItemButton onClick={handleClick}>
                    <Typography sx={{ p: 0 }} variant="body2" className='link' color="initial">More</Typography>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" >
                        <ListItemButton onClick={openModal} >
                            <Typography sx={{ p: 0 }} variant="body2" className='link' color="initial">Disclaimer</Typography>
                        </ListItemButton>
                        <ListItemButton onClick={openAbout} >
                            <Typography sx={{ p: 0 }} variant="body2" className='link' color="initial">About</Typography>
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>

            {modal ? <Modal display={modal} /> : ''}
            {about ? <About display={about} /> : ''}


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
