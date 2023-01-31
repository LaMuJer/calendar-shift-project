import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import NotInterestedRoundedIcon from '@mui/icons-material/NotInterestedRounded';

export const shifts = [
    // { name: 'Home' },
    { name: 'ShiftA' },
    { name: 'ShiftB' },
    { name: 'ShiftC' },
    { name: 'ShiftD' },
    // { name: 'About' },
]

export const lists = [
    { shift: 'Morning Shift', duration: '07:00 to 15:00', icon: LightModeRoundedIcon, style: '#fb8500' },
    { shift: 'Night Shift', duration: '16:00 to 24:00', icon: NightlightRoundedIcon, style: '#023047' },
    { shift: 'Off', duration: '', icon: NotInterestedRoundedIcon, style: '#e63946' },
]