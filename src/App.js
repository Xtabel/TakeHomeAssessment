
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Styles/Palette";
import AppRoutes from "./Routes/AppRoutes";
import { useEffect } from "react";
import { useDataLayerValue } from "./@app/ContextApi/DataLayer";
import api from "./@app/service/rootApi";

function App() {
  const [{},dispatch] = useDataLayerValue();

  const fetchProducts = async () => {
    try {
      const res = await api.get('products');
      dispatch({ type: 'GET_ALL_PRODUCTS', products: res });
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;


