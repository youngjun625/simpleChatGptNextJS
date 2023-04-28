import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")

    return <div>
        <Head>
          <title>Narrator</title>
          <meta property="og:title" content={ `LOG IN` }></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:image" content={'https://dotzkorea.s3.ap-northeast-2.amazonaws.com/narrator/asset/narrator_logo.png'}></meta>
            <meta property="og:description" content={ 'LOG IN PAGE' }></meta>
        </Head>
        <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
        <input type="text" value={pw} onChange={e=> setEmail(e.target.value)}/>
    </div>
}

export default Login