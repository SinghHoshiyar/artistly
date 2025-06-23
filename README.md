# 🎤 Artistly – A Performing Artist Booking Platform

**Live Demo:** [https://artistly-cyan-two.vercel.app/](https://artistly-cyan-two.vercel.app/)

Artistly is a fictional SaaS demo built for Eventful India's internship assignment. It allows event planners to discover and book artists, while artist managers can onboard talent and review submissions.

---

## Features

### Public Features
- **Home Page** with category cards and CTAs
- **Artist Listing** with filters by category, location, and price range
- **Shortlisting (❤️)** with localStorage persistence
- **Request Booking Modal** with form validation
- **Animated Page Transitions** using Framer Motion

### Artist Onboarding
- Complex form with validation using `react-hook-form` and `yup`
- Multi-select dropdowns for categories & languages

### Dashboard (Manager View)
- View submitted artist profiles
- Preview full profile in modal format

### Extras
- Fully responsive on mobile and desktop
- SEO meta tags and image alt attributes added
- Next.js `<Image />` for LCP optimization
- Smooth route transitions using Framer Motion

---

## 🛠Tech Stack

- **Frontend Framework:** Next.js 13 App Router
- **UI Styling:** Tailwind CSS + ShadCN components
- **Forms:** `react-hook-form` + `yup`
- **State Handling:** `useState`, `useEffect`
- **Routing Animations:** Framer Motion
- **Type Safety:** TypeScript (no `any` used)
- **Deployment:** [Vercel](https://vercel.com)

---

## Project Structure

```
app/
  page.tsx                → Homepage
  artists/page.tsx        → Artist listing & filter
  onboarding/page.tsx     → Artist form onboarding
  dashboard/page.tsx      → Manager dashboard
components/
  ArtistCard.tsx
  ViewArtistModal.tsx
  RequestBookingModal.tsx
  FilterBlock.tsx
  Navbar.tsx / Footer.tsx
  PageTransitionWrapper.tsx
public/
  assets/
    singer.jpg, dancer.jpg, dj.jpg...
data/
  artists.json
  submissions.json
  categories.json
```

---

## Setup Instructions (Local Development)

```bash
# 1. Clone the repository
https://github.com/YOUR_USERNAME/artistly.git

# 2. Navigate into the project
cd artistly

# 3. Install dependencies
npm install

# 4. Run locally
npm run dev

# Project will be live at http://localhost:3000
```

---

## 📬 Contact / Submission

This project was developed by **Hoshiyar Singh** as part of the internship assignment for **Eventful India**. For any queries or feedback, please contact via Internshala or email.

---

## ✅ Assignment Goals Covered

| Requirement                      | Status       |
|----------------------------------|--------------|
| Modular code structure           | ✅ Completed |
| Artist listing + filters         | ✅ Completed |
| Onboarding form with validation  | ✅ Completed |
| Shortlist + booking simulation   | ✅ Completed |
| Page transitions & animation     | ✅ Completed |
| SEO, responsiveness              | ✅ Completed |
| Deployment on Vercel             | ✅ Completed |
