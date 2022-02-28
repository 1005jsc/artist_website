import React, { useEffect, useState } from "react"

const KeyDetector = ({sendKeyValue}) => {

  // const [keyPressWord, setKeyPressWord] = useState(null)
  const keyPress = (e) => {
    
    // setKeyPressWord(e.key)
    sendKeyValue(e.key)
  }

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  });

  return <>

</>

}
export default KeyDetector;