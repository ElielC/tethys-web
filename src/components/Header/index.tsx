import Logo from '../Logo'
import Text from '../Text'
import { Container, Line } from './styles'

interface HeaderProps {
  page?: string
}

const Header: React.FC<HeaderProps> = ({ page }) => {
  return (
    <Container>
      <Logo size="title.lg" redirectPath="/home" />
      {!!page && <Line />}
      <Text size="title.sm">{page}</Text>
    </Container>
  )
}

export default Header
