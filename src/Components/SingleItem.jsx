import { Box, Skeleton, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDataLayerValue } from '../@app/ContextApi/DataLayer';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../@app/service/api/productsApi';

const SingleItem = () => {
    const [{ singleProduct }, dispatch] = useDataLayerValue();
    const [product, setProduct] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetchSingleProduct(dispatch, id);
        setProduct([])
    }, [])
    useEffect(() => {
        if (singleProduct?.length !== 0) {
            setProduct(singleProduct)
        } else {
            setProduct([])
        }
    }, [singleProduct])
    return (
        <Box width={"100%"} display={"flex"} justifyContent={"center"} >
            <Box p={5} width={"1440px"} alignItems={"center"} sx={{ display: 'grid', placeItems: 'center' }}>
                <Stack direction={"row"} gap={3} alignItems={"center"} justifyContent={"center"}>
                    <Stack>
                        {product?.length !== 0 ? <img src={product?.image} alt={product?.title} style={{ height: '400px', width: '400px', objectFit: 'contain' }} /> : <Skeleton variant="rectangular" width={"400px"} height={"500px"} />}
                    </Stack>
                    <Stack flex={1}>
                        <h2>{product?.title}</h2><br />
                        <p><b>Price: </b> ${product?.price ?? <Skeleton variant="text" />}</p><br />
                        <p><b>Category:</b> {product?.category ?? <Skeleton variant="text" />}</p><br />
                        <p><b>Rating: </b> {product?.rating?.rate}({product?.rating?.rate}reviews)</p><br />
                        <h5>Description</h5>
                        <p style={{ maxWidth: '600px' }}>{product?.description ?? <Skeleton variant="text" />}</p><br />
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}



export default SingleItem