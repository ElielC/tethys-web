import { createContext, useEffect, useState } from 'react'

import { api } from '@/api'
import ApiStatus from '@/enums/ApiStatus'
import usePersistedState from '@/hooks/usePersistedState'

export interface AuthContextData {
  isSigned: boolean | null
  token: string | null
  logIn(email: string, password: string): Promise<ApiStatus>
  logOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthContextProvider: React.FC = ({ children }) => {
  const [isSigned, setIsSigned] = useState<boolean | null>(null)
  const [token, setToken] = usePersistedState<string | null>('@token', null)

  useEffect(() => {
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`
    }

    async function validate() {
      try {
        const response = await api.post('user/verify/')

        if (response.status !== 200) {
          setIsSigned(false)
        } else {
          setIsSigned(true)
        }
      } catch (err) {
        setIsSigned(false)
      }
    }
    validate()
  }, [token])

  async function logIn(email: string, password: string): Promise<ApiStatus> {
    try {
      const response = await api.post('token/', {
        email: email,
        password: password
      })

      if (response.status !== 200) {
        return ApiStatus.HTTP_400_BAD_REQUEST
      }

      setToken(response.data.access)

      api.defaults.headers.Authorization = `Bearer ${response.data.access}`

      return ApiStatus.HTTP_200_OK
    } catch (err) {
      return ApiStatus.ERROR
    }
  }

  function logOut() {
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ isSigned, token, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
