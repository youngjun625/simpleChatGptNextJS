import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")

    return <div>
        <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
        <input type="text" value={pw} onChange={e=> setEmail(e.target.value)}/>
    </div>
}

export default Login