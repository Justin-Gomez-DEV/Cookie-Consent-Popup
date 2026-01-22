# Cookie-Consent-Popup

A simple cookie consent project that displays a small banner asking users to accept or decline cookies and **remembers their choice**, so it isn’t shown again on future visits.

This project is built with basic HTML, CSS, and JavaScript and demonstrates a user-friendly way to handle cookie consent.

You can also view this project on [roadmap.sh](https://roadmap.sh/projects/cookie-consent).

---

## Features

- **Responsive banner**: Stays fixed at the bottom of the page.  
- **Cookie icon & message**: Shows a cookie icon alongside a clear consent message.  
- **Accept & Close buttons**: Users can either accept cookies or dismiss the banner.  
- **Persistent choice**: User selections are saved in `localStorage` so the banner **remembers their choice** and does not show again on page reload.  
- **Banner hiding**: Automatically hides once a choice is made.  
- **Reset functionality**: For development, the user’s choice can be reset by clearing `localStorage` to show the banner again.  
- **BEM CSS structure**: Clean, maintainable styling following BEM methodology.  
- **Customizable styling**: Easily change colors, sizes, and positioning in CSS.  

---

## How It Works

1. On page load, the script checks if a `cookieAccepted` value exists in `localStorage`.  
2. If the value exists, the banner is hidden because the user has already made a choice.  
3. When the user clicks **Accept** or **Close**, the choice is stored in `localStorage` and the banner is hidden immediately.  
4. The banner **remembers the user’s choice** for future visits until `localStorage` is cleared.  

---

## How to Run the Project

### Without Live Server

1. Download or clone the project files.  
2. Open the project folder.  
3. Double-click `index.html` or open it in any modern web browser.  
4. The cookie consent banner will appear on first load and **remember your choice** on reload.  

### With Live Server (VSCode)

1. Download or clone the project files.  
2. Open the folder in VSCode.  
3. Right-click the `index.html` file → select **Open with Live Server**.  
4. The cookie consent banner will appear on first load and **remember your choice** on reload.  

---

## Resetting Your Choice (For Testing)

To show the banner again after accepting or closing, open the browser console and run:

localStorage.removeItem("cookieAccepted");
