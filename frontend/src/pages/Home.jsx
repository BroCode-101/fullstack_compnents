import { useEffect, useState } from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const [user, setUser] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    api.get("/home", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    }).then(res => setUser(res.data.user))
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome {user}</h2>
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
          onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  )
}
