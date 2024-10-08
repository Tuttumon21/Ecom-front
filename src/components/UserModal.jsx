import React from 'react'
import { useState } from 'react'
const UserModal = () => {

  const [data, setData] = useState({
    username: "",
    password: "",
  })
  const handleLogin = async (e) =>{
    e.preventDefault()
    console.log(data)
    try {
      // const res = await fetch("/user/signup",{method: "POST", body:data})
      // console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          log in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              USERNAME
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                onChange={(e) => setData(prevData => ({ ...prevData, username: e.target.value }))}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) => setData(prevData => ({ ...prevData, password: e.target.value }))}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              log in
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default UserModal
