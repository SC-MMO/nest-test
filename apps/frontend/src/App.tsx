import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@toolpad/core/AppProvider";
import "./App.css";

import { Navbar } from "./Navbar.tsx";
import { Menu } from "./Menu.tsx";
import { Home } from "./Home.tsx";
import { Test } from "./Test.tsx";
import { Posts } from "./Posts.tsx";
import { Products, CarProducts, BikeProducts } from "./Products.tsx";
import { SignIn } from "./Sign-In.tsx";
import { SignUp } from "./Sign-Up.tsx";
import { FAQ } from "./FAQ.tsx";
import { About } from "./About.tsx";
import { Contact } from "./Contact.tsx";
import { PrivateRoutes } from "./Helpers.tsx";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/posts" element={<Posts />} />
            <Route path="/test" element={<Test />} />
            <Route path="/products" element={<Products />}>
              <Route path="car" element={<CarProducts />} />
              <Route path="bike" element={<BikeProducts />} />
            </Route>
          </Route>
        </Routes>

        <Menu />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
