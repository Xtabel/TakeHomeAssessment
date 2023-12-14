import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import Cards from './Cards';
import { useDataLayerValue } from '../@app/ContextApi/DataLayer';
import generalFunc from '../Utils/generalFunc';

export default function FeaturedProjects() {
    const [{ products }] = useDataLayerValue();
    const firstInstances = generalFunc.findCategories(products?.data);

    return (
        <Box width={"100%"} display={"flex"} justifyContent={"center"} >
            <Box p={5} width={"1440px"} alignItems={"center"}>
                <Typography variant='h5' fontWeight={600}>Featured Projects</Typography>
                <Stack direction="row" spacing={1} mt={3} flexWrap={"wrap"} sx={{ gap: { xs: '5px' } }}>
                    {firstInstances?.map(item => (
                        <Chip variant={item?.id === 1 ? "contained" : "outlined"} key={item?.id} label={item?.category} color='primary' />
                    ))}
                </Stack>
                <Cards products={products} />
            </Box>
        </Box>
    );
}
