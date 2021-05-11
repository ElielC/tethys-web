import { createContext, useEffect, useState } from 'react'

import { api } from '@/api'
import ApiStatus from '@/enums/ApiStatus'
import usePersistedState from '@/hooks/usePersistedState'

export interface AuthContextData {
  id: string
  isSigned: boolean | null
  token: string | null
  logIn(email: string, password: string): Promise<ApiStatus>
  register(name: string, email: string, password: string): void
  logOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthContextProvider: React.FC = ({ children }) => {
  const [isSigned, setIsSigned] = useState<boolean | null>(null)
  const [token, setToken] = usePersistedState<string | null>('@token', null)
  const [id, setId] = useState<string>('')

  useEffect(() => {
    async function validate() {
      try {
        const response = await api.post('user/verify/')

        if (response.status !== 200) {
          setIsSigned(false)
        } else {
          setIsSigned(true)
          setId(response.data.id)
        }
      } catch (err) {
        setIsSigned(false)
      }
    }

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`

      validate()
    } else {
      setIsSigned(false)
    }
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

      setIsSigned(true)

      return ApiStatus.HTTP_200_OK
    } catch (err) {
      return ApiStatus.ERROR
    }
  }

  async function register(name: string, email: string, password: string) {
    try {
      await api.post('user/create-find/', {
        name: name,
        email: email,
        password: password
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  function logOut() {
    setToken(null)
  }

  return (
    <AuthContext.Provider
      value={{ id, isSigned, token, logIn, register, logOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
