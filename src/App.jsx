import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import All from './pages/All.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import { Layout } from './layout/Layout.jsx';
import { MediaLinks } from './pages/MediaLinks.jsx';
import { ThemeProvider } from './context/theme.js';
import { useEffect, useState } from 'react';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<All />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/media' element={<MediaLinks />} />
    </Route>
  )
)

function App() {
  const [themeMode, setThemeMode] = useState('dark');
  const darkTheme = () => {
    setThemeMode('dark')
    document.body.style.backgroundColor = "#021526";
  }

  const lightTheme = () => {
    setThemeMode('light')
    document.body.style.backgroundColor = "#f7f7f7";
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
    console.log(themeMode);
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{
        darkTheme, lightTheme
        , themeMode
      }}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
