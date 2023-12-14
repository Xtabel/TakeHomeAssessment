import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const NotificationBar = () => {
    const theme = useTheme();
    return (
        <Box bgcolor={theme.palette.primary.main} p={2} textAlign={'center'} color={'white'} width={"100%"}>
            <Typography variant='body1' fontSize={'15px'}>
                🚚 Instant Delivery is now available from December 13th 2023 - December 14th 2023
            </Typography>
        </Box>
    )
}

export default NotificationBar