# TailSon 🚀  
A Lightweight Utility-First CSS Engine using JavaScript

# Live Link:- 
https://tailson-css-engine.netlify.app/

## 📌 Overview

TailSon is a simple utility-first CSS engine built using Vanilla JavaScript.

Instead of writing traditional CSS, you can use custom utility classes prefixed with `son-`, and the script dynamically converts them into inline styles.

Example:

- `son-p-2` → padding: 2px  
- `son-bg-red` → background-color: red  
- `son-text-center` → text-align: center  

---

## 🧠 How It Works

1. Traverse all elements in the DOM  
2. Detect class names starting with `son-`  
3. Split class names into tokens  
4. Map utility type to corresponding style  
5. Apply styles dynamically using JavaScript  
6. Remove processed classes for a cleaner DOM  

---

## ✨ Features

- Utility-first class system  
- Dynamic DOM parsing  
- Supports spacing, colors, typography, borders  
- Clean refactored logic using handler mapping  
- Lightweight and easy to extend  

---

## 🧩 Example Usage

```html
<div class="son-bg-cyan son-p-20 son-rd-10 son-shadow">
  <h2 class="son-fsize-20 son-fw-bold">Card Title</h2>
  <p class="son-text-center">Styled using TailSon</p>
</div>
