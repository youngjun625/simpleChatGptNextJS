import {useState} from 'react'

export default function Home() {

  const [prompt, setPrompt] = useState("")

  const submit = () => {
    console.log('Submitted')
    //axios
  }

  //state


  return (
    <>
      <div>hello world</div>
      <input type="text" onChange={e => setPrompt(e.target.value)}/>
      <button onClick={e => submit()}>send</button>
    </>
  )
}
