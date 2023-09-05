import "../styles/floatinglabel.css"
import React, { useState } from "react"
import Image from 'next/image';

function ToogleIcon(props) {

  const [icon, setIcon] = useState(false)

  return (
    <div className="icon-toggle-btn" onClick={props.onClick}>
      <Image
        src={icon ? props.beforeClick : props.afterClick}
        onClick={() => {setIcon(!icon)}}
        style={
          {
            height: "20px",
            width: "20px"
          }
        }
        alt="Icon"
      />
    </div>
    )
    
}

export default ToogleIcon