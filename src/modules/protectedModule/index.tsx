/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useRouter } from 'next/router'

import useAuthContext from '@/hooks/useAuthContext'
import Login from '@/pages'

// this module returns the login component if the user is not logged in
const ProtectedModule = Component => {
  const { isSigned } = useAuthContext()

  const Auth = props => {
    if (isSigned === null) {
      return <></>
    } else if (!isSigned) {
      return <Login />
    }

    return <Component {...props} />
  }

  // alternatively you could redirect the user to a login route as follows
  // const Auth = props => {
  //   // checks whether we are on client / browser or server.
  //   if (typeof window !== 'undefined') {
  //     const router = useRouter()

  //     // If the user is not signed we redirect to "/" page.
  //     if (!isSigned) {
  //       router.replace('/')
  //       return null
  //     }

  //     // If the user is signed we just render the component that was passed with all its props
  //     return <Component {...props} />
  //   }

  //   // If we are on server, return null
  //   return null
  // }

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps
  }

  return Auth
}

export default ProtectedModule
