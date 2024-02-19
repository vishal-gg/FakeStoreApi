"use client"

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

type Type = {
    triggerHighlight: boolean;
    setTriggerHighlight: Dispatch<SetStateAction<boolean>>
}
const TriggerContext = createContext<Type | undefined>(undefined)

export const HighlightContext = ({children} : {children: React.ReactNode}) => {
  const [triggerHighlight, setTriggerHighlight] = useState(false) 

  return (
    <TriggerContext.Provider value={{triggerHighlight, setTriggerHighlight}}>
        {children}
    </TriggerContext.Provider>
  )
}

export const useTiggerHightlight = () => {
    const trigger = useContext(TriggerContext)
    if (trigger === undefined) {
        throw new Error("useContext must be used within provider")
    }
    return trigger;
}