import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GlobalStyle from '~/common/styles/global.styles'
import { selectCurrentTheme, darkTheme, lightTheme } from '~/features/theme'

const queryClient = new QueryClient()

function App() {
  const themeColor = useSelector(selectCurrentTheme)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeColor === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
