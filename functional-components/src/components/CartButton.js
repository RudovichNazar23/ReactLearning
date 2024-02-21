import { useContext, createContext } from "react";
import Button from "../contexts/BorderContext";

function CartButton(){
    <BorderContext.Provider value={5}>
        <Button>Cart</Button>
    </BorderContext.Provider>
}

export default CartButton;

