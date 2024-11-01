import { createContext, ReactNode, useEffect, useState } from "react"
import { supabase } from "../../infra/supabase/config"
import { Session } from "@supabase/supabase-js"

interface IAuthContext {
    logout: () => Promise<void>
    session: Session | null
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined)


export const AuthProvider = ({ children } : { children: ReactNode }) => {

    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
      supabase.auth.getSession()
        .then(({ data: { session } }) => {
            setSession(session)
            console.log('getSession', session)
        })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        console.log('onAuthStateChange', session)
      })

      return () => subscription.unsubscribe()
    }, [])

    const logout = async () => {
        await supabase.auth.signOut()
    }

    return (
        <AuthContext.Provider value={{ session, logout }}>
            {children}
        </AuthContext.Provider>
    )
}