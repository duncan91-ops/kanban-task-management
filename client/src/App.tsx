import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "./setup/app/store";
import { getUser } from "./features/auth/authSlice";
import { Token } from "./features/auth/auth.types";
import { selectCurrentTheme, darkTheme, lightTheme } from "~/features/theme";
import GlobalStyle from "~/common/styles/global.styles";

const queryClient = new QueryClient();

function App() {
  const themeColor = useSelector(selectCurrentTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token") || "{}") as Token;
    if (token.access?.length > 0) {
      dispatch(getUser(token));
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
