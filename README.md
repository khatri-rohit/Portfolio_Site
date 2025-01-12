# Rohit Khatri's Portfolio

## Live Demo

[https://rohitkhatri.vercel.app/](https://rohitkhatri.vercel.app/)

## Overview

This repository houses the code for my personal portfolio website. Built with React, this site showcases my skills, projects, and passions in an interactive and engaging way.  It's designed to give potential employers and collaborators a clear picture of my abilities and experience.

## Features

- **Modern & Interactive Design:**  I've used GSAP for smooth animations, creating a visually appealing and engaging user experience that stands out.
- **Responsive Across Devices:**  The portfolio is built with a mobile-first approach using Tailwind CSS, ensuring that it looks great and functions perfectly on screens of all sizes. 
- **Theme Switching:** Users can switch between light and dark modes for a personalized viewing experience.
- **Integrated Mapping:**  A Leaflet map provides a visual representation of my location.
- **Project Showcases:** Dedicated sections highlight key projects with detailed descriptions and links to live demos or repositories.
- **Social Media Integration:**  Links to my LinkedIn, GitHub, Twitter, and Instagram profiles are easily accessible.

## Tech Stack

- **Frontend:** React, Tailwind CSS, React Router
- **Mapping:** Leaflet
- **Animations:** GSAP
- **Hosting:** Vercel

## Code Structure and Explanation

The project is structured using a component-based architecture common to React applications. This enhances maintainability, reusability, and readability.

- **Components:**
    - **DisplayMap.jsx:** Handles the interactive map display, leveraging the Leaflet library. 
    - **Footer.jsx:**  Displays the footer with copyright information and basic contact details. 
    - **Github.jsx, Instagram.jsx, LinkedIn.jsx, Twitter.jsx:** Reusable components to consistently display social media links.
    - **ImageSlider.jsx:**  (Potentially unused) This component was likely designed for an image slider feature.
    - **Navigation.jsx:**  Provides navigation links, allowing users to easily move between sections, and includes the theme toggling functionality.
    - **Profile.jsx:** Displays my profile picture and a brief introduction, giving visitors a quick overview of my background and goals.
    - **Projects/Blog.jsx:**  This showcases the "DevDiscuss" project, a full-stack blog application built with React and Supabase.
    - **Skills.jsx:** Visually represents my skillset using a dynamic, scrolling display. 
    - **Spotify.jsx:**  These components are designed to display information about recently played music from Spotify.

- **Context:**
    - **theme.js:**  Manages the light/dark theme preference across the application using React Context. This allows for a consistent and easy way to switch themes.

- **Pages:**
    - **All.jsx:**  Serves as the landing page, presenting an overview of my portfolio. 
    - **About.jsx:**  Contains the main "About Me" page content. 
    - **Discussdev.jsx:**  Provides detailed information about the "DevDiscuss" blog project, including its features and technologies.
    - **MediaLinks.jsx:**  A dedicated page to prominently display social media links. 
    - **Projects.jsx:**  Likely an overview or listing of other notable projects I've worked on. 
    - **Redirect.jsx:**  Handles redirection for invalid routes, ensuring a smooth user experience even when encountering errors. 

## Future Improvements

- Integrate a blog section to share my thoughts and experiences on web development.
- Add more projects to showcase the breadth of my skills and experience.
- Implement a contact form for easy communication. 

## Contact

- Email: rohitkhatri.dev@gmail.com
- LinkedIn: [https://www.linkedin.com/in/rohitkhatri302](https://www.linkedin.com/in/rohitkhatri302)
