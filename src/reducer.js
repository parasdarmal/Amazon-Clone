export const initialState = {
    basket: [ ],
    user: null,
};

//selector
export const getBasketTotal = (basket) => 
   basket?.reduce((amount, item) => item.price + amount, 0);

   const reducer = (state, action) =>{
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case "ADD_TO_BASKET":
            //Logic for adding items in basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            //Logic from removing item in basket

            //we cloned the basket
            let newBasket = [...state.basket];

            //we check to see if products exist 
            const index = state.basket.findIndex((basketItem => basketItem.id === action.id));

            if(index >= 0) {
                // item exists in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(`can remove product (id: ${action.id}) as it` );
            }


            return { ...state, basket: newBasket };
        default:
            return state;
        
        }
}

export default reducer;