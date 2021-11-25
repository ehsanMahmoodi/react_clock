import {createContext, useState} from "react";
import {showTime} from "../utils/time";

export const PublicContext = createContext({
    timer:'',setTimer:()=>{

    }
})
export const PublicCtx=({children})=>{
    let x =showTime()
    const [timer,setTimer]=useState(x)
    return(
        <PublicContext.Provider value={{
            timer,setTimer
        }}>
            {children}
        </PublicContext.Provider>
    )
}