import React from 'react'
import { useAppContext } from '../context/AppContext'

const Login = () => {
    const { setShowUserLogin, setUser } = useAppContext();
    const [state, setState] = React.useState("login")
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const onSubmitHandler = async(event)=>{
        event.preventDefault();
        setUser({
            name: "Tomatoes",
            email: "test@tomatoes.dev",
        })
        setShowUserLogin(false)

    }

    

    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50" onClick={() => setShowUserLogin(false)}>
        <form 
          className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white" 
          onClick={(e) => e.stopPropagation()}
          onSubmit={onSubmitHandler}
        >
          <p className="text-2xl font-medium m-auto"> 
              <span className="text-orange-500 font-bold">User </span>
              {state === "login" ? "Login" : "Register"}
          </p>
          {/* Name Field (for registration only) */}
          {state === "register" && (
              <div className="w-full">
                  <p>Name</p>
                  <input 
                    className="border border-gray-200 rounded w-full p-2 mt-1 outline-orange-500" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name} 
                    placeholder="Type your name" 
                    required 
                    type="text" 
                  />
              </div>
          )}
          {/* Email Field */}
          <div className="w-full">
              <p>Email</p>
              <input 
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-orange-500" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                placeholder="Type your email" 
                type="email" 
                required 
              />
          </div>
          {/* Password Field */}
          <div className="w-full">
              <p>Password</p>
              <input 
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-orange-500" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password} 
                type="password" 
                placeholder="Type your password" 
                required 
              />
          </div>
          {/* Toggle Between Login and Register */}
          {state === "register" ? (
              <p>
                  Already have an account?
                  <span onClick={() => setState("login")} className="text-orange-500 cursor-pointer"> Click here</span>
              </p>
          ) : (
              <p>
                  Create an account?
                  <span onClick={() => setState("register")} className="text-orange-500 cursor-pointer"> Click here</span>
              </p>
          )}
          {/* Submit Button */}
          <button 
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 transition-all text-white w-full py-2 rounded-md cursor-pointer"
          >
              {state === "register" ? "Create Account" : "Login"}
          </button>
        </form>
      </div>
    )
  }

export default Login

