# Portfolio Gallery — Week 11 Homework

This project follows the **Week 11 Friday: React Components & Props** PDF homework on page 20.

## Requirements
- React project named `portfolio-gallery` (Create React App structure).
- Reusable `ProjectCard` displaying a title, description, tech stack, GitHub link, and live demo link.
- `ProjectList` rendering an array of at least 3 projects (this version has 4).
- `FilterBar` that filters project cards by technology using React state.
- A GitHub repository URL to submit on Cybercampus before the next class.

## Start locally
```bash
npm install
npm start
```

## Build
```bash
npm run build
```

This repository also includes a standalone GitHub Pages version at `live/index.html` for opening in a browser without running a development server.

- Live page: https://eric2626.github.io/Web-programming-live-site/week11/portfolio-gallery/live/
- Source: https://github.com/Eric2626/Web-programming-live-site/tree/main/week11/portfolio-gallery

## How filtering works
Click All, HTML, CSS, JavaScript or React. The `selectedTechnology` React state filters the array. The list updates automatically; each project keeps its stable ID as a React key.
