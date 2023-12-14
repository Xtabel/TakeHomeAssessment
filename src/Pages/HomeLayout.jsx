import React, { useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import { Outlet } from 'react-router-dom'
import { getUserCart } from '../@app/service/api/productsApi'
import { useDataLayerValue } from '../@app/ContextApi/DataLayer'
import Preloader from '../Components/PreLoader/Preloader'

const HomeLayout = () => {
    const [{ products, updateCartCount, userLoggedIn }, dispatch] = useDataLayerValue();

    useEffect(() => {
        getUserCart(dispatch, 5)
    }, [])
    return (
        <>
            {products?.length !== 0 ? <>
                <Navbar count={updateCartCount} user={userLoggedIn} />
                <Outlet />
            </> : <Preloader />}
        </>
    )
}

export default HomeLayout