import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import Testimonial from './component/Testimonial';
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { increament, decreament, Surprise } from "./redux/slices/Profileslice";

const App = () => {
  const state = useSelector((state) => state.profile.response);
  const { index } = useSelector((state) => state.profile);

  console.log(index);
  const dispatch = useDispatch();  // Correctly invoking useDispatch here

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-200">
      <div className="w-7/12 h-4/5 flex flex-col items-center">
        <div className="text-4xl font-bold text-black flex justify-center">
          Our Testimonials
        </div>
        <div className="border border-solid border-blue-400 w-1/6 h-1 text-center mt-1 bg-blue-400"></div>

        <div className="mt-[45px] w-10/12 border-4 h-full bg-white">
          <Testimonial state={state[index]} />
          <div className="flex justify-center mt-[50px] gap-x-6">
            <FaAngleLeft size="30px" color="violet" onClick={() => dispatch(decreament())} />
            <FaChevronRight size="26px" color="violet" onClick={() => dispatch(increament())} />
          </div>
          <div className="flex justify-center mx-[200px] bg-violet-400 mt-4 py-2 rounded-lg text-white font-bold hover:bg-violet-500" onClick={() => dispatch(Surprise())} >Surprise Me</div>
        </div>
      </div>
    </div>
  );
};

export default App;
