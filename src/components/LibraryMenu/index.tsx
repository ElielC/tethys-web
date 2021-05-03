import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container, ButtonGroup, MenuButton, Spacer } from './styles'

interface HeaderProps {
  page?: string
}

const LibraryMenu: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <ButtonGroup>
        <MenuButton>
          Saved Works <FontAwesomeIcon icon={faArrowRight} />
        </MenuButton>
        <MenuButton>
          My Works <FontAwesomeIcon icon={faArrowRight} />
        </MenuButton>
      </ButtonGroup>
      <Spacer />
      <MenuButton>
        <FontAwesomeIcon icon={faPlus} />
        Add Work
      </MenuButton>
    </Container>
  )
}

export default LibraryMenu
