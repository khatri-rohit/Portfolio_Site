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
import Redirect from './pages/Redirect.jsx';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<All />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/media' element={<MediaLinks />} />
      <Route path='/*' element={<Redirect />} />
    </Route>
  )
)

function App() {
  const [themeMode, setThemeMode] = useState('system');

  const darkTheme = () => {
    setThemeMode('dark');
    localStorage.setItem("theme", 'dark');
  }

  const lightTheme = () => {
    setThemeMode('light');
    localStorage.setItem("theme", 'light');
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === null) {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeMode(isDarkMode ? 'dark' : 'light');
    } else {
      setThemeMode(localTheme);
    }
  }, []);

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
    if (themeMode === 'dark') document.body.style.backgroundColor = "#021526";
    else document.body.style.backgroundColor = "#f7f7f7";
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
