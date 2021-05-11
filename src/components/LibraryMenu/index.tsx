import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container, ButtonGroup, MenuButton, Spacer } from './styles'

interface LibraryMenuProps {
  item: 'saved' | 'my'
  onSavedWorks: () => void
  onMyWorks: () => void
  onMoreWorks: () => void
}

const LibraryMenu: React.FC<LibraryMenuProps> = ({
  item,
  onMyWorks,
  onSavedWorks,
  onMoreWorks
}) => {
  return (
    <Container>
      <ButtonGroup>
        <MenuButton isActive={item === 'saved'} onClick={onSavedWorks}>
          Saved Works <FontAwesomeIcon icon={faArrowRight} />
        </MenuButton>
        <MenuButton isActive={item === 'my'} onClick={onMyWorks}>
          My Works <FontAwesomeIcon icon={faArrowRight} />
        </MenuButton>
      </ButtonGroup>
      <Spacer />
      <MenuButton onClick={onMoreWorks}>
        <FontAwesomeIcon icon={faPlus} />
        Add Work
      </MenuButton>
    </Container>
  )
}

export default LibraryMenu
