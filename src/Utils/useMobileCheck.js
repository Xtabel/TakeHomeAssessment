import { useMediaQuery, useTheme } from "@mui/material";

const useMobileCheck = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return isMobile;
};

export default useMobileCheck;
