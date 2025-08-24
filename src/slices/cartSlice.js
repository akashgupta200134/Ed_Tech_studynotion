
import {createSlice} from "@reduxjs/toolkit"
import {toast} from "react-hot-toast"


const intialState = {
    totalItems : localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,

}

const cartSlice = createSlice({
    name: "cart",
    initialState : intialState,
    reducers :{

        setTotalitems(state , value){
            state.token = value.payload;
        },
    },
})

export const  {setsetTotalitems} = cartSlice.actions;
export default cartSlice.reducer;