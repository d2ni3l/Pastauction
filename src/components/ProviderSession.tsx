'use client'
import React from "react"
import { SessionProvider } from "next-auth/react"


interface ProviderSession {
    children : React.ReactNode
}
 const ProviderSession = ({children} : ProviderSession) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default ProviderSession

