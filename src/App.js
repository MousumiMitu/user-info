import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Information from "./Components/Information/Information";

import userData from "./Data/data.json";

function App() {
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setUsers(userData);
    // console.log(userData);
  }, []);

  const handleAddUser = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
  };

  return (
    <div className="user">
      {/* <h2>user loaded:{userData.length}</h2> */}
      <div>
        {userData.map((user) => (
          <Information
            user={user}
            handleAddUser={handleAddUser}
            key={user.id}
          ></Information>
        ))}
      </div>
      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
