import React, { createContext, useState, useEffect } from "react";
import { FakeData } from "./fakeData";
import {
    addToDatabaseCart,
    getDatabaseCart
} from "./utilities/databaseManager";

const MenuContext = createContext();
const MenuProvider = props => {
    // const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

    const [menu, setMenu] = useState([]);
    const [filterd, setFiltered] = useState([]);
    const [details, setDetails] = useState([]);
    const [cartItem, setCartItems] = useState([]);

    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cartItem));
    // }, [cartItem]);

    const getMenu = () => {
        const men = [...menu];
        return men;
    };

    const setMenuItem = () => {
        let tempMenu = [];
        FakeData.map(item => {
            const singleItem = { ...item };
            tempMenu = [...tempMenu, singleItem];
        });
        setMenu(tempMenu);
    };

    useEffect(() => {
        setMenuItem();
    }, []);

    // setting up default menu lunch
    useEffect(() => {
        let temp = [];
        temp = FakeData.filter(item => item.category === "lunch");
        setFiltered(temp);
    }, []);

    // get cart from localStorage
    // useEffect(() => {
    //     const savedCart = getDatabaseCart();
    //     const menuKeys = Object.keys(savedCart);
    //     const cart = [];
    //     const count = menuKeys.map(key => {
    //         let menus = menu.find(item => item.key === key);
    //         // menus.count = savedCart[count];
    //         console.log(menus);

    //         return [...cart, menus];
    //     });
    //     setCartItems(count);
    // }, []);

    const handleCategory = category => {
        let temp = [];
        temp = FakeData.filter(item => item.category === category);
        setFiltered(temp);
    };

    const handleDetails = key => {
        let temp = [];
        temp = menu.find(item => item.key === key);
        setDetails(temp);
    };

    const handleCart = (key, count) => {
        let tempMenu = getMenu();
        let tempCart = tempMenu.find(item => item.key === key);
        const index = tempMenu.indexOf(tempCart);
        const menu = tempMenu[index];
        menu.count = count;
        menu.inCart = true;
        let price = menu.price;
        menu.total = menu.count * price;
        let Cart = [...cartItem, menu];
        setCartItems(Cart);
        setMenu(tempMenu);

        //addToDatabaseCart(key, count);
    };

    const handleIncrement = key => {
        const cart = [...cartItem];
        const selected = cart.find(item => item.key === key);
        const index = cart.indexOf(selected);
        const product = cart[index];
        console.log(product);
        //let counts = product.count;
        //counts = counts + 1;
        setCartItems(product);
    };

    // const addTotal = () => {
    //     let subTotal = 0;
    //     cartItem.map(item => (subTotal += item.total));
    //     const tempTax = subTotal * 0.1;
    //     const tax = parseFloat(tempTax.toFixed(2));
    //     const total = subTotal + tax;
    //     setCartSubTotal(subTotal);
    //     setCartTax(tax);
    //     setCartTotal(total);
    // };

    return (
        <MenuContext.Provider
            value={{
                Menu: menu,
                filterd: filterd,
                details: details,
                cart: cartItem,
                handleCategory: handleCategory,
                handleDetails: handleDetails,
                handleCart: handleCart,
                handleIncrement: handleIncrement
            }}
        >
            {props.children}
        </MenuContext.Provider>
    );
};

const MenuConsumer = MenuContext.Consumer;
export { MenuProvider, MenuConsumer, MenuContext };
