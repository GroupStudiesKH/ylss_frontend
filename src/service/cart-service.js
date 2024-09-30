const addCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let index = cart.findIndex((item) => item.product.id === product.product.id);
    if (index === -1) {
        cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};

const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

const checkItemExist = (productID) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let index = cart.findIndex((item) => item.product.id == productID);
    return index !== -1;
}

const removeCart = (productID) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let index = cart.findIndex((item) => item.product.id == productID);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

export default {
    addCart,
    getCart,
    removeCart,
    checkItemExist
};
