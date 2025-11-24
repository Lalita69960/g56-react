export const ACTIONS = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    UPDATE_QUANTITY: 'UPDATE_QUANTITY',
    CLEAR_CART: 'CLEAR_CART',
    APPLY_DISCOUNT: 'APPLY_DISCOUNT'
};

export const initialState = {
    cart: [],
    total: 0,
    discount: 0,
    discountCode: null
};

export const shopReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TO_CART: {
            const existingItem = state.cart.find(item => item.id === action.payload.id);

            if (existingItem) {
                const updatedCart = state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                return {
                    ...state,
                    cart: updatedCart,
                    total: state.total + action.payload.price
                };
            }

            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }],
                total: state.total + action.payload.price
            };
        }

        case ACTIONS.REMOVE_FROM_CART: {
            const itemToRemove = state.cart.find(item => item.id === action.payload);
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
                total: state.total - (itemToRemove.price * itemToRemove.quantity)
            };
        }

        case ACTIONS.UPDATE_QUANTITY: {
            const { id, quantity } = action.payload;
            const item = state.cart.find(item => item.id === id);
            const quantityDiff = quantity - item.quantity;

            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === id ? { ...item, quantity } : item
                ).filter(item => item.quantity > 0),
                total: state.total + (item.price * quantityDiff)
            };
        }

        case ACTIONS.CLEAR_CART:
            return initialState;

        case ACTIONS.APPLY_DISCOUNT: {
            const { code, percentage } = action.payload;
            const discountAmount = (state.total * percentage) / 100;
            return {
                ...state,
                discount: discountAmount,
                discountCode: code
            };
        }

        default:
            return state;
    }
};