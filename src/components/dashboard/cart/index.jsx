import { useSelector } from "react-redux"
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmout from "./RenderTotalAmout";


export default function Cart() {
    
    const {total , totalItems} = useSelector((state) => state.auth);



    return(
          
        <div className="text-white">     
          <h1>Your Cart</h1>
          <p>
            {totalItems} Course in Cart
          </p>

          {
            total > 0 ? (
                <div>
                    <RenderCartCourses></RenderCartCourses>
                    <RenderTotalAmout></RenderTotalAmout>
                    </div>
            ): (<p> Your cart is Empty</p>)
          }



        </div>



    )





}