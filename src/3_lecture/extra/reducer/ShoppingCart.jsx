import React, { useReducer } from 'react';
import { FaShoppingCart, FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { ACTIONS, initialState, shopReducer } from './ShoppingReducer';

const products = [
    { id: 1, name: 'Laptop', price: 9990.99, image: '💻' },
    { id: 2, name: 'Smartphone', price: 6990.99, image: '📱' },
    { id: 3, name: 'Headphones', price: 1990.99, image: '🎧' },
    { id: 4, name: 'Mouse', price: 490.99, image: '🖱️' }
];

function ShoppingCart() {
    const [state, dispatch] = useReducer(shopReducer, initialState);

    const handleAddToCart = (product) => {
        dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
    };

    const handleUpdateQuantity = (id, newQuantity) => {
        dispatch({
            type: ACTIONS.UPDATE_QUANTITY,
            payload: { id, quantity: newQuantity }
        });
    };

    const handleRemoveItem = (id) => {
        dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: id });
    };

    const handleApplyDiscount = (event) => {
        event.preventDefault();
        const code = event.target.code.value.toUpperCase();
        const discounts = {
            'SAVE10': 10,
            'SAVE20': 20
        };

        if (discounts[code]) {
            dispatch({
                type: ACTIONS.APPLY_DISCOUNT,
                payload: { code, percentage: discounts[code] }
            });
        }
        event.target.reset();
    };

    return (
        <div className="container my-5">
            <div className="row">
                {/* Products List */}
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Products</h5>
                            <span className="badge bg-primary">
                                <FaShoppingCart /> {state.cart.reduce((acc, item) => acc + item.quantity, 0)}
                            </span>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {products.map(product => (
                                    <div key={product.id} className="col-md-6 mb-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5>{product.image} {product.name}</h5>
                                                <p className="text-muted">{product.price} kr</p>
                                                <button
                                                    className="btn btn-primary w-100"
                                                    onClick={() => handleAddToCart(product)}
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cart Summary */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">Cart</h5>
                        </div>
                        <div className="card-body">
                            {state.cart.map(item => (
                                <div key={item.id} className="mb-3 border-bottom pb-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6>{item.image} {item.name}</h6>
                                            <small className="text-muted">{item.price} kr</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <button
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                            >
                                                <FaMinus />
                                            </button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                            >
                                                <FaPlus />
                                            </button>
                                            <button
                                                className="btn btn-sm btn-outline-danger ms-2"
                                                onClick={() => handleRemoveItem(item.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <form onSubmit={handleApplyDiscount} className="mb-3">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="code"
                                        className="form-control"
                                        placeholder="Discount code"
                                    />
                                    <button type="submit" className="btn btn-outline-secondary">
                                        Apply
                                    </button>
                                </div>
                            </form>

                            <div className="border-top pt-3">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Subtotal:</span>
                                    <span>{state.total.toFixed(2)} kr</span>
                                </div>
                                {state.discount > 0 && (
                                    <div className="d-flex justify-content-between mb-2 text-success">
                                        <span>Discount ({state.discountCode}):</span>
                                        <span>-{state.discount.toFixed(2)} kr</span>
                                    </div>
                                )}
                                <div className="d-flex justify-content-between fw-bold">
                                    <span>Total:</span>
                                    <span>{(state.total - state.discount).toFixed(2)} kr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;