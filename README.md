# SportsQuad – Sports Stadium Booking Platform

SportsQuad is a responsive sports stadium booking landing page built using React and Tailwind CSS.  
The project demonstrates frontend architecture, state management, UI/UX principles, and interactive application behavior.

This is not just a static landing page — it includes dynamic booking management with rescheduling and persistent storage.

---

## 🚀 Live Features

### 1. Responsive Landing Page
- Hero section with call-to-action
- Statistics section with animated counters
- Feature highlights
- Testimonials section
- Booking form
- Footer with navigation and contact info

### 2. Booking System (Interactive)
- Create new bookings
- Edit / reschedule existing bookings
- Delete bookings
- Booking history dashboard
- Data persistence using localStorage

### 3. Form Enhancements
- Input validation
- Past date restriction
- Inline error messages
- Loading state simulation
- Accessible labels and aria attributes

### 4. UI Enhancements
- Dark Mode toggle with persistence
- Smooth scroll navigation
- Active link highlight on scroll
- Micro-interactions and hover effects
- Subtle section animations
- Consistent card design system

---

## 🧠 Technical Stack

- React (Functional Components + Hooks)
- Tailwind CSS (Utility-first styling)
- LocalStorage (Data persistence)
- IntersectionObserver (Scroll detection)
- Vite (Build tool)

---

## 🏗 Architecture Approach

The booking system follows a clean separation of concerns:

- `BookingSection`  
  Manages state and persistence.

- `BookingForm`  
  Handles validation, submission, and loading states.

- `BookingDashboard`  
  Displays booking history and supports edit/delete actions.

State is lifted to ensure predictable updates and maintain data integrity during rescheduling.

LocalStorage is initialized lazily for better performance and to avoid unnecessary effects.

---

## 🌙 Dark Mode Implementation

- Class-based Tailwind dark mode
- Theme stored in localStorage
- Toggle implemented in Navbar
- Persistent across reloads

---

## 🎯 Key Learning Outcomes

This project demonstrates:

- Controlled components in React
- Conditional rendering
- State lifting
- CRUD-like behavior in frontend
- Accessibility considerations
- UX feedback patterns
- Performance-aware scroll handling

---

## 📦 Installation

```bash
npm install
npm run dev
