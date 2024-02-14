import { Home } from "../pages/home/home";
import { Pages } from "../pages/pages/pages";
import { Products } from "../pages/products/products";
import { Blog } from "../pages/blog/blog";
import { Shop } from "../pages/shop/shop";
import { Contact } from "../pages/contact/contact";

export const main_pages = [
  {
    component: <Home />,
  },
  {
    component: <Pages />,
    path: "pages",
  },
  {
    component: <Products />,
    path: "products",
  },
  {
    component: <Blog />,
    path: "blog",
  },
  {
    component: <Shop />,
    path: "shop",
  },
  {
    component: <Contact />,
    path: "contact",
  },
];
