# Varkey's Homes (Luxury Architecture & Construction)

A premium, high-end web application built for a luxury architectural and turnkey construction firm. The platform features an Apple-inspired design language, focusing on ultra-smooth animations, fluid typography, and pixel-perfect responsiveness across all devices.

## 🎨 UI/UX Design System & Features

This project underwent a comprehensive UI/UX responsive audit to ensure a flawless experience from mobile devices (320px) up to ultra-wide desktop monitors (1920px).

### 1. Dynamic Navigation & Header
- **Intelligent Scrolling**: The navigation bar is completely transparent at the top of the Home page to allow the stunning architectural imagery to shine through. Upon scrolling, it smoothly transitions to a solid white background.
- **Smart Contrast**: The navigation text, icons, and buttons dynamically invert their colors (white to black) based on the header's background state, ensuring perfect contrast at all times.
- **Original Branding**: The company logo is prominently displayed in its original golden colors, avoiding invasive CSS filters.

### 2. Immersive Hero Section
- **Cross-fade Image Slider**: Removed heavy video backgrounds in favor of a lightweight, high-performance image slider. It automatically cross-fades through premium architectural photography every 5 seconds, creating a dynamic, engaging first impression.
- **Clean Aesthetic**: Removed unnecessary gradient shadows and overlays to let the natural brightness and quality of the images stand out.

### 3. Premium Project Carousels (Apple-style)
- **Embla Carousel Integration**: Custom-built using Shadcn UI's Embla Carousel foundation. 
- **Desktop Navigation**: Features elegant circular "Next" and "Previous" buttons in the section header for desktop users.
- **Mobile Swipe**: Perfectly constrained cards (taking up 85% of mobile screens) allow for a native, app-like horizontal swipe experience on phones and tablets.
- **Interactive Hover States**: Cards feature a `rounded-2xl` styling with drop shadows. On hover, a dark gradient deepens, and project details elegantly slide up to reveal interactive call-to-action links.

### 4. Fluid Typography & Spacing
- Replaced rigid, static padding with fluid CSS padding (`px-4 sm:px-6 md:px-10 xl:px-20`) to ensure content never feels squeezed on small screens or lost on ultra-wides.
- Headings and body text scale seamlessly based on viewport width, eliminating overflow and horizontal scrolling issues on mobile devices.

### 5. Micro-Interactions
- **Magnetic Buttons**: Call-to-action buttons feature a custom magnetic pull effect on hover, creating a highly tactile and premium feel.
- **Smooth Animations**: Sections smoothly fade and slide into view as the user scrolls down the page, guiding their attention naturally.

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: TanStack Router (File-based routing)
- **Styling**: Tailwind CSS (with arbitrary value support and fluid utilities)
- **Animations**: Framer Motion & GSAP
- **Components**: Shadcn UI (Radix Primitives)
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository and navigate to the project folder:
   ```bash
   git clone <repository-url>
   cd elevated-spaces
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to view the application.
