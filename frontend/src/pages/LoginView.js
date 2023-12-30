import React, { useState } from "react";
import Button from "../components/Button";
import { Navigate} from "react-router-dom";
import { handleLogin } from "../services/Services";

const LoginView = () => {
  const [user, setUser]=useState({});
  const[goToProfile,setGoToProfile]=useState(false);
  const [token, setToken]=useState('')
  const handleNavigate=async()=>{
    new Promise(() => {
      setTimeout(()=>{
        console.log(token)
        setGoToProfile(true);
      },2000);
    })
  }
  if(goToProfile) return <Navigate to={'/profile/current'}/>;

  return (
    <main className="flex justify-center items-center h-[100vh] gap-[100px] ">
      <section className="flex flex-col">
        <h1 className="text-[45px] uppercase font-bold">login</h1>
        <h2 className="text-[20px]">
          you don't have an account?{" "}
          <a href="/signup">
            <strong className="text-blue-500">sign up here!</strong>
          </a>
        </h2>
      </section>
      <section>
        <div>
          <form className="flex flex-col shadow-lg h-[400px] w-[350px] items-center pt-[100px] gap-[80px] rounded-[5px]">
            <div className="relative right-[20px]">
              <label className="relative left-[50px] bottom-[30px]">
                email
              </label>
              <input
                name="email"
                type="email"
                className="border-solid border-b-[2px] outline-none bg-transparent border-black rounded-[2px] w-[241px]"
                onChange={(e) => {
                  setUser({...user, [e.currentTarget.name]:e.currentTarget.value})
                }}
              />
            </div>
            <div className="relative right-[30px]">
              <label className="relative left-[70px] bottom-[30px]">
                password
              </label>
              <input
                name="password"
                type="password"
                className="border-solid border-b-[2px] outline-none bg-transparent border-black rounded-[2px] w-[241px]"
                onChange={(e) => {
                  setUser({...user, [e.currentTarget.name]:e.currentTarget.value})
                }}
              />
            </div>
            <Button
              title={"enviar"}
              styles={
                "relative bottom-[25px] py-2 px-8  text-base font-bold rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
              }
              onClick={(e)=>{
                handleLogin(e,user, setToken)
                handleNavigate()}}
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginView;
