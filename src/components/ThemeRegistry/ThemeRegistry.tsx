'use client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { JSX, ReactNode } from 'react'
import NextAppDirEmotionCacheProvider from './EmotionCache'
import theme from './theme'

export default function ThemeRegistry (props: { children: ReactNode }): JSX.Element {
  const { children } = props
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
