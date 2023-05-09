# E-commerce Landing Page

This is an e-commerce landing page built using Next.js, a popular React-based web framework. The landing page features a responsive design, interactive animations, and a product showcase section.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.

The landing page should now be accessible at http://localhost:3000.

## Project Structure

The project is structured as follows:

```
├── pages/
│   ├── _app.js
│   ├── index.js
│   └── products.js
├── public/
│   ├── images/
│   └── styles/
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── Product.js
│   ├── ProductList.js
│   └── ...
├── utils/
│   ├── api.js
│   └── ...
└── README.md
```

- `pages/` contains the Next.js pages that make up the landing page. `index.js` is the main landing page, `products.js` is a secondary page that displays product details, and `_app.js` is a custom Next.js component that wraps all pages to provide a consistent layout and global styles.
- `public/` contains static assets such as images and stylesheets.
- `components/` contains reusable React components that are used to build the landing page. These include the `Header`, `Hero`, `Product`, and `ProductList` components, among others.
- `utils/` contains utility functions and other code that is not specific to any one component.

## Technologies Used

- Next.js
- React
- Framer Motion
- Tailwind CSS

## Credits

This project was inspired by a design created by [Aditya Sharma](https://adityanext.vercel.com). 

