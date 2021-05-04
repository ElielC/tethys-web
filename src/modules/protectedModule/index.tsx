import useAuthContext from '@/hooks/useAuthContext'
import Login from '@/pages'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ProtectedModule = Component => {
  const Auth = props => {
    const { isSigned } = useAuthContext()

    if (isSigned === null) {
      return <></>
    } else if (!isSigned) {
      return <Login />
    }

    return <Component {...props} />
  }

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps
  }

  return Auth
}

export default ProtectedModule
