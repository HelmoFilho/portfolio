'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'

interface Props {
  children: React.ReactNode
}

const MyThemeProvider = ({children} : Props) => {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class' themes = {['light', 'dark']} enableSystem = {true}>
      {children}
    </ThemeProvider>
  )
}

export default MyThemeProvider
