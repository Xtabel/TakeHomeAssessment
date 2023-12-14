import { Avatar, Badge, Box, Button, IconButton, useTheme } from '@mui/material'
import React from 'react';
import { ReactComponent as Logo } from "../Assets/Logo.svg";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationBar from '../Components/NotificationBar';
import MenuIcon from '@mui/icons-material/Menu';
import useMobileCheck from '../Utils/useMobileCheck';
import { useDataLayerValue } from '../@app/ContextApi/DataLayer';

const Navbar = ({ count, user }) => {
    const theme = useTheme();
    const mobile = useMobileCheck();
    const [{ userLoggedIn }, dispatch] = useDataLayerValue();
    return (

        <Box sx={{ maxWidth: "100%", width: "100%", }}>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
                boxSizing={'border-box'}
                padding={'0px 30px'}
                flexWrap={'wrap'}
            >
                <Box display={"flex"} alignItems={"center"}>
                    <Box display={"flex"} alignItems={"center"}>
                        <Box>
                            <a href='/'> <Logo /></a>
                        </Box>
                        {!mobile &&
                            <Box>
                                <ul className='lists'>
                                    <li><a href='/'>Products</a></li>
                                    <li><a href='/'>About</a></li>
                                    <li><a href='/'>Contact</a></li>
                                    <li><a href='/'>FAQ</a></li>
                                </ul>
                            </Box>}
                    </Box>
                </Box>
                {!mobile && (<Box display={"flex"} alignItems={"center"} gap={3}>
                    <Box display={"flex"} alignItems={"center"} gap={3}>
                        <ul className='icons'>
                            <li><a href='/'><SearchIcon /></a></li>
                            <li><a href='/'><FavoriteBorderIcon /></a></li>
                            <li><a href='/'> <Badge badgeContent={count} color="secondary">
                                <ShoppingCartIcon />
                            </Badge></a></li>
                        </ul>
                        {user !== null ? (<>
                            <Avatar sx={{ bgcolor: theme.palette.secondary.main }}>{user?.username[0]}</Avatar>    <Button onClick={() => {
                                dispatch({
                                    type: "LOGOUT",
                                    userLoggedIn: userLoggedIn,
                                })
                            }} href="/login" variant='contained' disableElevation sx={{ bgcolor: theme.palette.primary.light, color: theme.palette.primary.main, fontWeight: 700, '&:hover': { bgcolor: theme.palette.primary.light, } }} >Log Out</Button>
                        </>) :
                            <Button href="/login" variant='contained' disableElevation sx={{ bgcolor: theme.palette.primary.light, color: theme.palette.primary.main, fontWeight: 700, '&:hover': { bgcolor: theme.palette.primary.light, } }} >Log In</Button>}
                    </Box>
                </Box>)}
                {mobile && <IconButton><MenuIcon /></IconButton>}
            </Box>
            <NotificationBar />
        </Box>

    )
}

export default Navbar