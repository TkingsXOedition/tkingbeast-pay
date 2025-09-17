import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Disable keyboard shortcuts for copying and dev tools
document.addEventListener('keydown', (e) => {
  // Disable Ctrl+A (Select All), Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+S (Save)
  if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 's', 'x'].includes(e.key)) {
    e.preventDefault();
    return false;
  }
  // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U (Developer Tools)
  if (e.key === 'F12' || 
      (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) ||
      (e.ctrlKey && ['u', 'U'].includes(e.key))) {
    e.preventDefault();
    return false;
  }
});

// Disable right-click context menu
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  return false;
});

// Disable drag and drop
document.addEventListener('dragstart', (e) => {
  e.preventDefault();
  return false;
});

// Disable text selection on mouse events
document.addEventListener('selectstart', (e) => {
  e.preventDefault();
  return false;
});

createRoot(document.getElementById("root")!).render(<App />);
