import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import Router from './router'
import theme from './theme'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
