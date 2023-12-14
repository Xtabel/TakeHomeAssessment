import { Box, Grid, IconButton, Stack, Tooltip, Typography, useTheme } from '@mui/material'
import React from 'react'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { useDataLayerValue } from '../@app/ContextApi/DataLayer';
import { addToCart, getUserCart } from '../@app/service/api/productsApi';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import generalFunc from '../Utils/generalFunc';

const Cards = ({ products }) => {
    const navigate = useNavigate();
    const [{ singleProduct, userLoggedIn }, dispatch] = useDataLayerValue();
    const theme = useTheme();
    const handleNavigateToPage = (id) => {
        navigate(`/products/${id}`)
        dispatch({
            type: 'RESTORE_SINGLE_PRODUCT',
            singleProduct,
        })
    }

    const handleCartUpdate = (item) => {
        if (userLoggedIn) {
            addToCart(dispatch, {
                userId: 5,
                date: "2020-02-03",
                products: [{ productId: item?.id, quantity: 1 }]
            })
            dispatch({ type: 'ADD_TO_CART' })
            getUserCart(dispatch, 5)
            toast.success(`Added ${item?.title} to cart`)
        } else {
            navigate("/login")
        }
    }

    return (
        <Grid container spacing={3} mt={1}>
            {products?.data?.map(item => (
                <Grid item xs={12} sm={6} md={3} key={item?.id}>
                    <Box sx={{
                        border: '1px solid #c6c6c6', borderRadius: '20px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.3s ease-in-out', transform: 'translateY(0%) scale(1)', '&:hover': {
                            transform: 'translateY(-3%) scale(1.05)', border: `1px solid ${theme.palette.secondary.main}`
                        }
                    }}>
                        <Box sx={{ overflow: 'hidden', height: '330px', }}>
                            <Stack direction="row" justifyContent="flex-end" padding={1}>
                                <Box>
                                    <span>
                                        <IconButton sx={{ backgroundColor: '#F7F7F7', '&:hover': { backgroundColor: '#81c784', color: 'white' } }} onClick={() => handleCartUpdate(item)}>
                                            <AddShoppingCartIcon />
                                        </IconButton>
                                    </span>
                                </Box>
                            </Stack>
                            <Stack height="250px" onClick={() => handleNavigateToPage(item?.id)} >
                                <img src={item?.image} alt="" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                            </Stack>
                        </Box>
                        <Stack gap={1} sx={{
                            bgcolor: '#F7F7F7', overflow: 'hidden', padding: '10px', height: '90px', borderRadius: '0px 0px 20px 20px', borderWidth: '0px 0px 1px 1px',
                            borderColor: 'gray'
                        }}>
                            <Tooltip title={item?.title}>
                                <Typography variant="body1" style={{ fontWeight: 600, fontSize: '16px' }}>
                                    {generalFunc.truncateText(item?.title, 25)}
                                </Typography>
                            </Tooltip>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" onClick={() => handleNavigateToPage(item?.id)} >
                                <span style={{ fontWeight: 800 }}>${item?.price}</span>
                                <Stack direction={"row"} alignItems={"center"} fontSize={"12px"}><StarIcon fontSize='14px' color='secondary' /><span>{item?.rating?.rate}({item?.rating?.count} reviews)</span></Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Grid>
            ))}
            <ToastContainer theme='dark' />
        </Grid>




    )
}

export default Cards



