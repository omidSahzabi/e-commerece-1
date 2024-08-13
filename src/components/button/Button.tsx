import { ComponentProps } from "react"

type TVariant = "primary" | "secondry" | "danger" | "warning" | "succes"

type TButton = ComponentProps<"button"> & {
    variant?: TVariant
}

function button({children, variant, style , ...rest } :TButton) {

  return <button {...rest} style={{borderRadius: "6px" ,
     padding: "4px 8px" ,...style,...checkVariant(variant)}}>{children}</button>
}

export default button

function checkVariant(variant?: TVariant){
    if(variant === "primary"){
        return{backgroundColor: "blue", color: "white"}
    }
    else if(variant === "secondry"){
        return {background: "gray" , color:"white"}
    }
    else if(variant === "danger"){
        return {background: "red" , color:"white"}
    }
    else if(variant === "warning"){
        return {background: "yeollow" , color:"white"}
    }
    else if(variant === "succes"){
        return {background: "green" , color:"white"}
    }
}