import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "./setup/app/store";
import { getUser } from "./features/auth/authSlice";
import { selectCurrentTheme, darkTheme, lightTheme } from "~/features/theme";
import GlobalStyle from "~/common/styles/global.styles";
import { tokenService } from "./common/utils";

const queryClient = new QueryClient();

function App() {
  const themeColor = useSelector(selectCurrentTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = tokenService.getToken();
    if (token?.access) {
      dispatch(getUser());
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeColor === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
