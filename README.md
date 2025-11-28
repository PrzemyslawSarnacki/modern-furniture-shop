# Modern Furniture Shop

A modern, responsive furniture e-commerce frontend built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first design that works on all devices
- **Shopping Cart**: Persistent cart with Zustand state management
- **Product Catalog**: Browse and search products with category filters
- **Product Details**: Detailed product pages with image galleries
- **Beautiful UI**: Clean, modern design with smooth animations

## 📁 Project Structure

```
modern-furniture-shop/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── products/          # Products pages
│   └── cart/              # Shopping cart page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx        # Site header/navigation
│   ├── Footer.tsx        # Site footer
│   └── ProductCard.tsx   # Product card component
├── store/                # Zustand state management
│   └── cart-store.ts     # Shopping cart store
├── types/                # TypeScript type definitions
├── data/                 # Mock data (replace with API calls)
│   └── products.ts       # Product data
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
└── public/               # Static assets
    └── assets/
        └── images/       # Product and category images
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod (ready for implementation)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🖼️ Adding Images

1. Copy your product images from the old project to:
   ```
   public/assets/images/products/
   ```

2. Copy your category images to:
   ```
   public/assets/images/categories/
   ```

3. Update product data in `data/products.ts` with your actual product information and image paths.

## 📝 Migrating Data from Old Project

1. **Product Data**: Update `data/products.ts` with your actual products from the old project
2. **Images**: Copy all images from the old project's public/images directory to `public/assets/images/`
3. **Styling**: The project uses Tailwind CSS, so you may need to adjust component styles if needed
4. **Content**: Update text content, company name, and branding throughout the components

## 🎨 Customization

### Colors
Update Tailwind classes throughout components or configure custom colors in `tailwind.config.ts`

### Fonts
Update fonts in `app/layout.tsx`

### Company Info
Update company name, logo, and contact information in:
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/layout.tsx` (metadata)

## 🔧 Next Steps

1. **Backend Integration**: Connect to your Django backend API
2. **Authentication**: Add user authentication
3. **Payment**: Integrate payment gateway (Stripe, etc.)
4. **Search**: Implement advanced search functionality
5. **Filters**: Add more filtering options (price range, material, etc.)
6. **Reviews**: Add product review functionality
7. **Wishlist**: Add wishlist/favorites feature
8. **User Account**: Add user account pages

## 📄 License

Private project

## 👤 Author

Created as a modernization of the FurnitureService project.
