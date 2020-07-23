import React, {useState, useEffect} from 'react'
import './layout.css'

const InputLayout = () => {
  const [txt, setTxt] = useState('')
  const [uppercased, setUppercased] = useState('')
  const [altUppercase, setAltUppercase] = useState('')
  const [disabled, setDisabled] = useState(false)

  const handleChange = async (e) => {
    await setTxt(e.target.value)
  }

  useEffect(() => {
    if (!(/^[a-zA-Z ]+$/.test(txt))) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [txt])

  const handleSubmit = () => {
    setUppercased(txt.toUpperCase())
    const altUp = altUppercaser(txt)
    setAltUppercase(altUp)
  }

  const altUppercaser = (t) => {
    let arr = t.split(" ")
    let res = ""

    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        if (j !== 0 && j % 2 !== 0) {
          res += arr[i].charAt(j).toUpperCase()
        } else {
          res += arr[i].charAt(j)
        }
      }
      arr[i] = res
      res = ""
    }

    return arr.join(" ")
  }

  return (
    <>
    <div class={'form'}>
      <div class={'buttonContainer'}>
        <input onChange={handleChange} class={'input'} type={'text'} />
      </div>
      <div class={'buttonContainer'}>
        <button disabled={disabled} onClick={handleSubmit} class={'button'}> Submit </button>
      </div>
    </div>
    <div>
      <p>Uppercase : {uppercased} </p>
      <p>Alternative Uppercase : {altUppercase} </p>
    </div>
    </>
  );
}

export default InputLayout
