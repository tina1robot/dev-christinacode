# Portfolio Pages Setup

## Font Setup
Add these to your `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora&family=DM+Mono&display=swap" rel="stylesheet">
```

## Files
- `Navbar.jsx` — Fixed top nav with active link highlighting
- `Home.jsx` — Hero section + stats strip
- `About.jsx` — Bio, skills grid, personal note
- `Resume.jsx` — Full resume layout

## Adding to your React App
If using React Router:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
```

Install React Router if needed:
```bash
npm install react-router-dom
```

## Color Palette
- Dark green: `#2d3a2e`
- Sage green: `#86b98b`
- Peachy pink: `#f0c1a8`
- Cream background: `#f9f0eb`
- Light green background: `#edf4ee`
