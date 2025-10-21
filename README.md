# Frontend Wizards - Profile Card & Multi-Page Application

A responsive, accessible multi-page web application built with HTML, CSS, and vanilla JavaScript for the HNG Internship Frontend Stage 0 & Stage 1 tasks.

## 🚀 Live Demo

- **Live URL:** 
- GitHub Repository: https://github.com/sammyogv/HNGstage1

##

## 🎯 Project Overview

This project is a multi-page web application that includes:
1. **Profile Card** (Stage 0) - A responsive profile card with real-time timestamp and interactive features
2. **Contact Us Page** (Stage 1) - A fully validated contact form with accessibility features
3. **About Me Page** (Stage 1) - A reflective page sharing personal journey and goals

## ✨ Features

### Stage 0 - Profile Card
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Semantic HTML with proper accessibility
- ✅ Real-time millisecond timestamp
- ✅ Avatar image with upload support
- ✅ Expandable bio with "Read More" button
- ✅ Social media links (Twitter, GitHub, LinkedIn)
- ✅ Hobbies and dislikes lists
- ✅ Keyboard navigation support
- ✅ Smooth animations with reduced-motion support

### Stage 1 - Contact Us Page
- ✅ Complete form validation (client-side)
- ✅ Real-time error messages
- ✅ Email format validation
- ✅ Minimum character requirements
- ✅ Success message on valid submission
- ✅ Fully keyboard accessible
- ✅ ARIA labels and error associations
- ✅ Focus management for accessibility

### Stage 1 - About Me Page
- ✅ Personal bio and introduction
- ✅ Program goals and aspirations
- ✅ Areas of growth and learning
- ✅ Note to future self
- ✅ Additional thoughts and reflections
- ✅ Semantic HTML structure
- ✅ Responsive layout

## 📁 Project Structure

```
frontend-wizards-project/
├── index.html                  # Profile Card (Stage 0)
├── contact.html                # Contact Us Page (Stage 1)
├── about.html                  # About Me Page (Stage 1)
├── styles.css                  # Global styles for all pages
├── script.js                   # Profile card functionality
├── contact.js                  # Contact form validation
├── tests/
│   ├── profile-card.test.js   # Profile card tests
│   ├── contact.test.js        # Contact page tests
│ 
└── README.md                   # This file
```

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Custom Properties, Animations
- **Vanilla JavaScript** - No frameworks or libraries
- **Git** - Version control
- **Netlify** - Deployment and hosting

## 💻 How to Run Locally

### Option 1: Direct File Opening

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/frontend-wizards-project.git
   cd frontend-wizards-project
   ```

2. **Open in browser:**
   - Double-click `index.html` to open in your default browser
   - Or drag and drop the file into your browser

### Option 2: Using a Local Server (Recommended)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/frontend-wizards-project.git
   cd frontend-wizards-project
   ```

2. **Start a local server:**
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (with http-server):**
   ```bash
   npx http-server -p 8000
   ```
   
   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **Visit in browser:**
   ```
   http://localhost:8000
   ```

4. **Navigate between pages:**
   - Profile Card: `http://localhost:8000/index.html`
   - Contact Us: `http://localhost:8000/contact.html`
   - About Me: `http://localhost:8000/about.html`

## 📄 Pages

### 1. Profile Card (`index.html`)
The main profile card displaying:
- Full name
- Professional bio
- Avatar image with upload capability
- Current time in milliseconds (auto-updating)
- Social media links
- Hobbies and dislikes

**Key Features:**
- Expandable bio with "Read More" functionality
- Avatar upload using FileReader API
- Real-time timestamp updates

### 2. Contact Us (`contact.html`)
A fully validated contact form with:
- Full Name field (required, min 2 characters)
- Email field (required, valid email format)
- Subject field (required, min 3 characters)
- Message field (required, min 10 characters)
- Real-time validation
- Success message on valid submission

**Validation Rules:**
- All fields are required
- Email must match pattern: `name@example.com`
- Message must be at least 10 characters
- Errors display in real-time with proper ARIA associations

### 3. About Me (`about.html`)
A personal reflection page containing:
- Bio and introduction
- Goals in the HNG program
- Areas where confidence needs building
- Note to future self
- Additional thoughts and inspirations

## 🧪 Testing

### Running Tests

Tests are included in the `tests/` folder.

**Method 1: Browser Console**
1. Open any page in your browser
2. Press `F12` to open DevTools
3. Go to the **Console** tab
4. Copy the contents of the test file (e.g., `tests/profile-card.test.js`)
5. Paste into the console and press Enter
6. View test results

**Method 2: Include in HTML (Development Only)**

Add this line before the closing `</body>` tag:
```html
<script src="tests/profile-card.test.js"></script>
```

Then open the page and check the browser console for results.

### Test Coverage

- ✅ Profile card elements exist
- ✅ All required data-testid attributes present
- ✅ Form validation works correctly
- ✅ Error messages display properly
- ✅ Success message appears on valid submission
- ✅ About page sections exist with correct structure

## ♿ Accessibility Features

### Semantic HTML
- Proper use of `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<figure>`
- Heading hierarchy (`<h1>` through `<h3>`)
- Lists (`<ul>`, `<ol>`) for structured content

### ARIA Support
- `aria-describedby` linking inputs to error messages
- `aria-expanded` for expandable content
- `aria-invalid` for form validation states
- `aria-label` for screen reader context
- `role="alert"` for error messages

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Visible focus states on all links and buttons
- Logical tab order throughout
- Enter/Space key support for buttons

### Visual Accessibility
- High contrast text and backgrounds
- Readable font sizes (minimum 16px)
- Clear visual focus indicators
- `prefers-reduced-motion` support for animations

### Form Accessibility
- All inputs have associated `<label>` elements
- Labels use `for` attribute to link to inputs
- Error messages announce to screen readers
- Success messages are focusable

## 🌐 Browser Support

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ✅ Requirements Met

### Stage 0 Requirements
- [x] Profile card container with `data-testid="test-profile-card"`
- [x] User name element with `data-testid="test-user-name"`
- [x] Bio paragraph with `data-testid="test-user-bio"`
- [x] Current time in milliseconds with `data-testid="test-user-time"`
- [x] Avatar image with `data-testid="test-user-avatar"` and alt text
- [x] Social media links with `data-testid="test-user-social-links"`
- [x] Hobbies list with `data-testid="test-user-hobbies"`
- [x] Dislikes list with `data-testid="test-user-dislikes"`
- [x] Responsive layout (mobile, tablet, desktop)
- [x] Keyboard accessible
- [x] Avatar upload support (FileReader API)
- [x] Expandable bio with "Read More" button
- [x] Word-wrap and content overflow handling

### Stage 1 Requirements - Contact Page
- [x] Name input with `data-testid="test-contact-name"`
- [x] Email input with `data-testid="test-contact-email"`
- [x] Subject input with `data-testid="test-contact-subject"`
- [x] Message textarea with `data-testid="test-contact-message"`
- [x] Submit button with `data-testid="test-contact-submit"`
- [x] Error messages with `data-testid="test-contact-error-<field>"`
- [x] Success message with `data-testid="test-contact-success"`
- [x] All fields required with proper validation
- [x] Email format validation
- [x] Message minimum 10 characters
- [x] Labels linked with `for` attribute
- [x] Error messages tied with `aria-describedby`
- [x] Keyboard accessible form

### Stage 1 Requirements - About Page
- [x] Main wrapper with `data-testid="test-about-page"`
- [x] Bio section with `data-testid="test-about-bio"`
- [x] Goals section with `data-testid="test-about-goals"`
- [x] Confidence section with `data-testid="test-about-confidence"`
- [x] Future note section with `data-testid="test-about-future-note"`
- [x] Extra thoughts section with `data-testid="test-about-extra"`
- [x] Semantic HTML structure
- [x] Proper heading hierarchy
- [x] Responsive layout

## 👨‍💻 Author

**Samuel Chiemerie Ogbu**

- GitHub: [@sammyogv](https://github.com/sammyogv)
- Twitter: [@Analyst887](https://twitter.com/Analyst887)
- LinkedIn: [Samuel Ogbu](https://www.linkedin.com/in/analyst-ogbusamuel/)

## 📝 Development Notes

### What I Learned
- Importance of semantic HTML for accessibility
- Client-side form validation with JavaScript
- Real-time error handling and user feedback
- ARIA attributes for screen reader support
- Responsive design with CSS Grid and Flexbox
- FileReader API for image uploads
- Managing multi-page navigation

### Challenges Overcome
- Implementing real-time form validation without libraries
- Ensuring keyboard accessibility across all pages
- Managing focus states for better UX
- Creating expandable content with smooth animations
- Handling different viewport sizes gracefully

### Future Improvements
- Add backend integration for contact form
- Implement form data persistence
- Add more interactive animations
- Create a dark mode toggle
- Add internationalization (i18n) support

## 📜 License

This project is open source and available for educational purposes.

---

**Built with ❤️ for HNG Internship - Frontend Stage 0 & Stage 1**

Last Updated: October 2025