import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './context/theme.js';
import { Layout } from './layout/Layout.jsx';
import About from './pages/About.jsx';
import Home from './pages/All.jsx';
import { Discussdev } from './pages/Discussdev.jsx';
import { MediaLinks } from './pages/MediaLinks.jsx';
import Projects from './pages/Projects.jsx';
import Redirect from './pages/Redirect.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/blog' element={<Discussdev />} />
      <Route path='/media' element={<MediaLinks />} />
      <Route path='/*' element={<Redirect />} />
    </Route>
  )
)

function App() {
  const [themeMode, setThemeMode] = useState('dark');

  const darkTheme = () => {
    setThemeMode('dark');
    localStorage.setItem("theme", 'dark');
  }

  const lightTheme = () => {
    setThemeMode('light');
    localStorage.setItem("theme", 'light');
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
    if (themeMode === 'dark') document.body.style.backgroundColor = "#021526";
    else document.body.style.backgroundColor = "#f7f7f7";
  }, [themeMode])

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === null) {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeMode(isDarkMode ? 'dark' : 'light');
    } else {
      setThemeMode(localTheme);
    }
  }, []);

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
