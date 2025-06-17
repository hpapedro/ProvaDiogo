'use client'

import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppBar, Box, Container, createTheme, CssBaseline, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";


const emotionCache = createCache({ key: "css", prepend: true});
const theme = createTheme();



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
          {/* Barra superior */}
          <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" align="center" component="div">
                PROVA A1
              </Typography>
            </Toolbar>
          </AppBar>
        {/*Conteúdo*/}
        <Box component="main" sx={{ minHeight: 'calc(100vh - 120px)', py: 4 }}>
          <Container>{children}</Container>
        </Box>
        {/*Rodapé*/}
        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 2 }}>
          <Container>
            <Typography variant="body1" align="center">
              Pedro Henrique Picanço Alves &copy; 2025
            </Typography>
          </Container>
        </Box>
          </ThemeProvider>
          </CacheProvider>
        
      </body>
    </html>
  );
}
