import Link from 'next/link'

import useAuthContext from '@/hooks/useAuthContext'
import { faBook, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from '../Logo'
import Text from '../Text'
import { Container, Line, Spacer, IconButton } from './styles'

interface HeaderProps {
  page?: string
}

const Header: React.FC<HeaderProps> = ({ page }) => {
  const { id, isSigned, logOut } = useAuthContext()

  return (
    <Container>
      <Logo size="title.lg" redirectPath="/home" />
      {!!page && <Line />}
      <Text size="title.sm">{page}</Text>
      <Spacer />
      {isSigned && (
        <>
          <Link href={`/library/${id}`}>
            <IconButton>
              <FontAwesomeIcon icon={faBook} style={{ marginRight: '2px' }} />
              Library
            </IconButton>
          </Link>

          <IconButton onClick={logOut}>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{ marginRight: '2px' }}
            />
            Exit
          </IconButton>
        </>
      )}
    </Container>
  )
}

export default Header
