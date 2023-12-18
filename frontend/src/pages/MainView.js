import React from "react";
import Button from "../components/Button";
const MainView = () => {
  return (
    <div className="flex justify-center items-center m-[250px]">
    <section className="flex gap-[200px]">
      <section>
        <h1 className="text-[45px] uppercase font-bold">my notes app</h1>
        <h2 className="tetx-[32px] font-bold">start taking notes <strong className="text-blue-400">now!</strong></h2>
      </section>
      <section className="flex flex-col justify-between gap-[20px]">
        <Button title={'signup'} linkTo={'/signup'} styles={"relative py-2 px-8  text-base font-bold rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"}/>
        <Button title={'login'} linkTo={'/login'} styles={"relative py-2 px-8  text-base font-bold rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"}/>
      </section>
      </section>
    </div>
  );
};

export default MainView;
