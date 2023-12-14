import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import hero from "../Assets/Hero-img.png"
import EastIcon from '@mui/icons-material/East';
import useMobileCheck from '../Utils/useMobileCheck';

const Hero = () => {
    const mobile = useMobileCheck();
    return (
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Box display={"flex"} justifyContent={"space-between"} p={5} boxSizing={"border-box"} width={"1440px"} alignItems={"center"} sx={{ flexWrap: { xs: 'wrap' }, gap: { xs: '40px' } }}>
                <Stack gap={3}>
                    <Typography variant='h1' fontWeight={700} sx={{ fontSize: { xs: '30px', sm: '35px', md: '50px', lg: '70px' } }}>Get up to 30% off</Typography>
                    <Typography variant='h1' fontWeight={700} sx={{ fontSize: { xs: '30px', sm: '35px', md: '50px', lg: '70px' } }}>New Arrivals</Typography>
                    <Typography variant='body1'>Introducing our latest collection of products</Typography>
                    <Button disableElevation variant='contained' color='secondary' sx={{ textTransform: 'capitalize', borderRadius: '10px', padding: '15px 30px', fontSize: '15px', width: '250px' }} endIcon={<EastIcon />}>Place your order</Button>
                </Stack>

                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <img src={hero} alt="hero-img" style={{ height: mobile ? '300px' : '500px', width: mobile ? '300px' : "auto" }} draggable={false} />
                </Box>
            </Box>
        </Box>
    )
}

export default Hero