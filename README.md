# Runchables-Assessment

Dual implementation of the Adiuz website:

1. Static HTML prototype  
2. Production-ready Next.js (React) application  


## Project Overview

This repository contains two versions of the same website:

- **HTML-Page** → Static prototype (HTML, CSS, JS, Bootstrap)
- **React-Page** → Scalable Next.js application


## Project Structure

```
Runchables/
├── html-page/
│   ├── home.html
│   ├── careers.html
│   ├── contact.html
│   ├── demo.html
│   ├── pricing.html
│   ├── style.css
│   ├── modal.js
│   └── assets/
│
└── react-page/
    ├── src/
    │   ├── app/
    │   ├── context/
    │   └── components/
    ├── public/
    ├── package.json
    └── next.config.mjs
```


## Technology Stack

### HTML Version
- HTML5
- CSS3
- JavaScript

### React Version
- React  
- Next.js
- Bootstrap 


## Setup Instructions

### Run HTML Version

```
cd html-page
python -m http.server 8000
```

Open in browser:  
http://localhost:8000


### Run React Version

```
cd react-page
npm install
npm run dev
```

Open in browser:  
http://localhost:3000


Production Build:

```
npm run build
npm start
```


## Available Pages

- `/` → Home  
- `/careers` → Careers  
- `/contact` → Contact  
- `/demo` → Demo  
- `/pricing` → Pricing  


## Key Differences

| Feature | HTML Version | React Version |
|----------|--------------|--------------|
| Build Process | Not Required | Required |
| Styling | CSS + Bootstrap | Component-based |
| Scalability | Limited | High |
| Production Ready | Prototype | Yes |


## Requirements

### HTML
- Modern browser

### React
- Node.js
- npm


## Conclusion

Use the HTML version for rapid prototyping.  
Use the React version for scalable production deployment.


---

Last Updated: February 22, 2026  
Repository: https://github.com/Nithesh612/Runchables-Assessment
