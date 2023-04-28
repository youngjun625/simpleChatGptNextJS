import {useEffect, useState} from 'react'
import axios from 'axios'
import Head from 'next/head';

export default function Home() {

  const [prompt, setPrompt] = useState("")
  const [result, setresult] = useState("")
  const [arr, setArr] = useState([])

  //array
  //
    useEffect(() => {
      console.log('arrr changing...')
      console.log(arr)
    }, [arr] )


  const submit = async () => {
    const endPoint = "/api/hello" 
    const res = await axios.post(endPoint, {
      prompt: prompt // ==p prompt , if key and value is same, just sending one is convention
    })
    console.log(res)

    const el = {
      prompt: prompt,
      result: res.data.result
    }

    setresult(res.result)
    setPrompt("")
    setArr(prev => [...prev, el])
      // setresult(res.data.choices[0].text)
      // setPrompt("")

      // const el = {
      //   prompt: prompt,
      //   result: res.data.choices[0].text
      // }

      // setArr(prev => [...prev, el])

    
  }
  return (
    <>
      <Head>
          <title>Narrator</title>
          <meta property="og:title" content={ `Narrator` }></meta>

      </Head>
      <Head>
          <meta property="og:title" content={ `Narrator` }></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:image" content={'https://dotzkorea.s3.ap-northeast-2.amazonaws.com/narrator/asset/narrator_logo.png'}></meta>
          <meta property="og:description" content={ '인공지능으로 만든 나만의 이야기' }></meta>
      </Head>
      <div>hello world</div>
      <input value={prompt} onChange={e => setPrompt(e.target.value)}/>
      <button onClick={e => submit()}>send</button>
      <br />
      {result}
      <br />
      <br />

      {
        arr.map((el,index) => {
          return <div>
            <div>{el.prompt}</div>
            <div>{el.result}</div>
            <br />
          </div>
        })
      }
      
    </>
  )
}
