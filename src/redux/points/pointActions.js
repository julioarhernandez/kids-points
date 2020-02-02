import { ADD_POINT, DEC_POINT, REDEEM_POINT } from "./pointTypes";

export const addPointActions = () => ({
    type: ADD_POINT
});

export const decrementPointActions = () => ({
    type: DEC_POINT
});

export const redeemPointActions = () => ({
    type: REDEEM_POINT
});