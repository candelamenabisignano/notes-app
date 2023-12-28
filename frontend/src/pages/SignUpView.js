import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Navigate } from "react-router-dom";
import { handleRegister } from "../services/Services";
const SignUpView = () => {
  const [user, setUser] = useState({});
  const [goToLogin, setGoToLogin] = useState(false);
  if(goToLogin) return <Navigate to={'/login'}/>;
  return (
    <>
      <main className="flex justify-center items-center h-[100vh] gap[200px] ">
        <section>
          <div>
            <form
              id="register"
              className="flex flex-col mr-[70px] shadow-lg h-[500px] w-[550px] items-center pt-[100px] gap-[60px] rounded-[5px]"
            >
              <div className="flex relative right-[40px] bottom-[40px]">
                <div>
                  <label className="relative left-[70px] bottom-[30px]">
                    first name
                  </label>
                  <input
                    name="first_name"
                    type="text"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.currentTarget.name]: e.currentTarget.value,
                      });
                    }}
                    className="border-solid border-b-[2px] outline-none bg-transparent border-black rounded-[2px] w-[172.891px] focus-visible:border-blue-500 focus-visible:text-blue-500"
                  />
                </div>
                <div>
                  <label className="relative left-[70px] bottom-[30px]">
                    last name
                  </label>
                  <input
                    name="last_name"
                    type="text"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.currentTarget.name]: e.currentTarget.value,
                      });
                    }}
                    className="border-solid border-b-[2px] outline-none bg-transparent border-black rounded-[2px] w-[172.891px]  focus-visible:border-blue-500 focus-visible:text-blue-500"
                  />
                </div>
              </div>
              <div className="flex relative right-[23px] bottom-[40px]">
                <div>
                  <label className="relative left-[40px] bottom-[30px]">
                    email
                  </label>
                  <input
                    name="email"
                    type="email"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.currentTarget.name]: e.currentTarget.value,
                      });
                    }}
                    className="border-solid border-b-[2px] outline-none bg-transparent border-black rounded-[2px] w-[172.891px]  focus-visible:border-blue-500 focus-visible:text-blue-500"
                  />
                </div>
                <div>
                  <label className="relative left-[69px] bottom-[30px]">
                    username
                  </label>
                  <input
                    name="username"
                    type="text"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.currentTarget.name]: e.currentTarget.value,
                      });
                    }}
                    className="border-solid border-b-[2px] outline-none bg-transparent border-black rounded-[2px] w-[172.891px]  focus-visible:border-blue-500 focus-visible:text-blue-500"
                  />
                </div>
              </div>
              <div className="flex relative right-[15px] bottom-[40px] gap-[20px]">
                <div>
                  <label className="relative left-[25px] bottom-[30px]">
                    age
                  </label>
                  <input
                    name="age"
                    type="number"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.currentTarget.name]: e.currentTarget.value,
                      });
                    }}
                    className="border-solid border-b-[2px] outline-none bg-transparent border-black rounded-[2px] w-[172.891px]  focus-visible:border-blue-500 focus-visible:text-blue-500"
                  />
                </div>
                <div className="ml-[5px]">
                  <label className="relative left-[45px] bottom-[30px]">
                    phone
                  </label>
                  <input
                    name="phone"
                    type="text"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.currentTarget.name]: e.currentTarget.value,
                      });
                    }}
                    className="border-solid border-b-[2px] outline-none bg-transparent border-black rounded-[2px] w-[172.891px]  focus-visible:border-blue-500 focus-visible:text-blue-500"
                  />
                </div>
              </div>
              <div className="flex relative right-[155px] bottom-[40px]">
                <div>
                  <label className="relative left-[68px] bottom-[30px]">
                    password
                  </label>
                  <input
                    name="password"
                    type="password"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.currentTarget.name]: e.currentTarget.value,
                      });
                    }}
                    className="border-solid border-b-[2px] outline-none bg-transparent border-black rounded-[2px] w-[172.891px]  focus-visible:border-blue-500 focus-visible:text-blue-500"
                  />
                </div>
              </div>
              <div className="flex relative right-[15px] bottom-[40px]">
              <Button
                title={"enviar"}
                onClick={(e) => handleRegister(e, user, setGoToLogin)}
                styles={
                  "relative py-2 px-8  text-base font-bold rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
                }
              />
              </div>
            </form>
          </div>
        </section>
        <section className="flex flex-col">
          <h1 className="text-[45px] uppercase font-bold">sign up</h1>
          <h2 className="text-[20px]">
            already have an account?{" "}
            <a href="/login">
              <strong className="text-blue-500">login here!</strong>
            </a>
          </h2>
        </section>
      </main>
    </>
  );
};

export default SignUpView;
