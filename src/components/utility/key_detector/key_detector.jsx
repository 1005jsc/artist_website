import React, { useEffect } from "react"

const KeyDetector = ({sendKeyValue}) => {

  const keyPress = (e) => {
    
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