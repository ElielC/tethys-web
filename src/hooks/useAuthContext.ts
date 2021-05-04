import { useContext } from 'react'

import { AuthContext, AuthContextData } from '@/contexts/AuthContext'

function useAuthContext(): AuthContextData {
  const context = useContext(AuthContext)

  return context
}

export default useAuthContext
