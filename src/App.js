import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

const App = () => {
  const [displayCart, setDisplayCart] = useState(false);
  const showCartHandler = () => {
    setDisplayCart(true);
  };
  const hideCartHandler = () => {
    setDisplayCart(false);
  };
  return (
    <>
      {displayCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
