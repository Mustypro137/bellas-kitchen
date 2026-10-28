# Bella's Little Kitchen

A one-page website for a small family restaurant. Built with plain HTML, CSS and JavaScript (`index.html`, `style.css`, `script.js`). No backend.

Visual reference: `design.webp` — we borrow its **layout** (big serif headline beside a round food photo, round dish photos sitting on top of menu cards, pill-shaped buttons) but use **our own colours** below instead of its black and red.

---

## Sections

The page scrolls top to bottom through four sections. Each has an `id` so the navigation can link to it.

| Section | `id` | What it shows |
|---|---|---|
| Home | `#home` | Welcome headline, short intro, large food photo, "View Our Menu" button |
| Menu | `#menu` | Six dishes as cards: photo, name, description, price |
| About | `#about` | A short story about the family restaurant, with a photo |
| Contact | `#contact` | Address, phone, opening hours, and a contact form |

---

## Must have

1. **Navigation bar** with links: Home, Menu, About, Contact. It stays at the top while scrolling and highlights the current section. On mobile it collapses into a menu button.
2. **Menu of six dishes** shown as attractive cards.
3. **Contact form** with Name, Email and Message fields. JavaScript checks the fields before showing a success message:
   - Name: not empty
   - Email: not empty and a valid email format
   - Message: not empty (at least 10 characters)
   - Show each error in text **under its field** (not only red colour). Show the success message only when every field is valid, then clear the form.
4. **Responsive layout** that works on mobile and desktop.
5. **"View Our Menu" button** in the Home section that smoothly scrolls to the Menu section.

---

## Style

### Colours

| Role | Colour | Hex | Use for |
|---|---|---|---|
| Background | Cream | `#F7F0E3` | Page and section backgrounds |
| Primary | Terracotta | `#A84B33` | Buttons, prices, links, highlights |
| Secondary | Forest green | `#2F5233` | Headings accents, About section, success message |
| Text / dark | Charcoal | `#2B2B2B` | Body text, Home section background, footer |

- Home section uses a **charcoal background with cream text** (our version of the dark hero in `design.webp`). Other sections use cream.
- Use a slightly lighter cream (`#FFFBF4`) for cards so they stand out from the background.
- Text must stay easy to read: dark text on cream, cream text on charcoal or green. Don't put small terracotta text on charcoal.

### Fonts (Google Fonts)

- Headings: **Playfair Display** (serif, like the headline in the design)
- Body text and buttons: **Poppins**
- Body text at least 16px, line height about 1.6.

### Look and feel

- Rounded, friendly shapes: pill buttons, cards with rounded corners and a soft shadow.
- Dish photos are round and slightly overlap the top of their card, like in `design.webp`.
- Buttons and cards react on hover (slight lift or colour change) and show a clear focus outline for keyboard users.
- Keep animations small and gentle; turn them off for users who prefer reduced motion.

### Layout

- **Desktop:** Home = text on the left, round photo on the right. Menu = 3 cards per row. About = text and photo side by side. Contact = details on the left, form on the right.
- **Tablet:** Menu = 2 cards per row.
- **Mobile:** everything in one column; photo below the Home text; 1 card per row.
- No sideways scrolling on any screen size.

---

## Text and images

### Home

- **Title:** Good Food. Happy Hearts.
- **Text:** Welcome to Bella's Little Kitchen, where every meal is made with love. Join us for fresh ingredients, homemade favorites, and the kind of food that brings people together.
- **Button:** View Our Menu
- **Image:** `img/salad.jpg` (shown round, like the bowl in `design.webp`)

### Our Menu

| Dish | Description | Price | Image |
|---|---|---|---|
| Creamy Chicken Pasta | Tender chicken in a creamy garlic sauce. | $12.50 | `img/creamy-pasta.jpg` |
| Classic Beef Burger | Grilled beef, fresh lettuce, tomato, and our house sauce. | $10.00 | `img/burger.jpg` |
| Margherita Pizza | Tomato, mozzarella, fresh basil, and a crispy crust. | $11.50 | `img/pizza.jpg` |
| Grilled Chicken Bowl | Grilled chicken, seasoned rice, and fresh vegetables. | $13.00 | `img/chicken-bowl.jpg` |
| Garden Fresh Salad | Crisp greens, cucumber, tomato, and lemon dressing. | $8.50 | `img/salad.jpg` |
| Chocolate Lava Cake | Warm chocolate cake with a soft, rich center. | $6.00 | `img/lava-cake.jpg` |

### About Us

- **Text:** Bella's Little Kitchen started with one simple idea: good food brings people together. Our family restaurant serves comforting favorites made with care, fresh ingredients, and a little extra love in every dish.
- **Image:** `img/table-dinner.jpg`

### Contact

- **Address:** 24 Garden Street, Riverside
- **Phone:** (555) 014-2836
- **Opening hours:**
  - Monday–Friday: 11:00 AM–9:00 PM
  - Saturday–Sunday: 10:00 AM–10:00 PM
- **Form:** Name, Email, Message, and a "Send Message" button

### Footer

© Bella's Little Kitchen — with the address and phone repeated.

---

## Images

Images live in `img/`. Every image needs a short `alt` text describing the food.

- All seven photos are in place: `creamy-pasta.jpg`, `burger.jpg`, `pizza.jpg`, `chicken-bowl.jpg`, `salad.jpg`, `lava-cake.jpg`, `table-dinner.jpg`.
- Keep photos around 1200px wide so the page loads fast. Full-size originals are kept in `img/originals/`.
