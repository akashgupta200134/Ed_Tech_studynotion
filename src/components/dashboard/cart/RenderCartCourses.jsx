import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import ReactStars from "react-stars";
import { removeFromCart } from "../../../slices/cartSlice";

const RenderCartCourses = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
      <div>
        {cart.map((course, index) => {
          <div>
            <div key={index}>
              <img src={course?.thumbnail} alt="course Image" />

              <div>
                <p>{course.courseName}</p>
                <p> {course?.category?.name}</p>

                <div>
                  <span>4.8</span>
                  <ReactStars
                    count={5}
                    size={24}
                    color2={"#ffd700"}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<IoStarSharp />}
                    fullIcon={<IoStarSharp />}
                  />
                  <span>
                    {course?.ratingAndReviews?.length}
                    Ratings
                  </span>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  dispatch(removeFromCart(course._id));
                }}
              >
                <RiDeleteBin6Line />
                <span>Remove</span>
              </button>
              <p>Rs{course?.price}</p>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default RenderCartCourses;
