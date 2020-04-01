import React, { useContext, useState, useEffect } from "react";
import { MenuConsumer, MenuContext } from "../../Context";
import CartItem from "./CartItem";

const Cart = () => {
    const [subTotal, setSubTotal] = useState();
    const [tax, setTax] = useState(2);
    const [total, setTotal] = useState();
    const [totalAmount, setTotalAmount] = useState();

    const Menu = useContext(MenuContext);
    console.log(Menu.cart);

    const handleTotal = () => {
        let total = 0;
        let subTotal = 0;
        Menu.cart.map(item => (total += item.total));
        Menu.cart.map(item => (subTotal += item.count));
        setTotal(total.toFixed(2));
        setSubTotal(subTotal);
        const totalAmount = total + tax;
        setTotalAmount(totalAmount);
    };
    useEffect(() => {
        handleTotal();
    }, []);
    return (
        <div>
            <p>
                From <strong>Gulshan Plaza Restaurnt GPR</strong>
            </p>
            <p>Arriving in 20-30 min</p>
            <MenuConsumer>
                {value =>
                    value.cart.map(item => (
                        <CartItem key={item.key} cart={item} />
                    ))
                }
            </MenuConsumer>
            <>
                <div className="clearfix">
                    <div className="pl-2 float-left">
                        <p>Sub Total Item {subTotal} </p>
                        <p>Tax</p>
                        <p>Total</p>
                    </div>
                    <div className="pr-2 float-right">
                        <p> {total} </p>
                        <p> {tax} </p>
                        <p> {totalAmount} </p>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Cart;
