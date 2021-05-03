/* eslint-disable multiline-ternary */
import { Image } from 'react-bootstrap'
import { useTheme } from 'styled-components'

import Text from '../Text'
import { Container } from './styles'

interface HomeWorkProps {
  id: string
  title: string
  author: string
  description: string
}

const HomeWork: React.FC<HomeWorkProps> = ({ title, author, description }) => {
  return (
    <Container>
      <Image src="/assets/bookCover.png" height="150" />
      <div
        style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Text size="title.md">{title}</Text>
          <Text size="text.md">{author}</Text>
        </div>

        {description.length > 140 ? (
          <div style={{ wordBreak: 'break-all' }}>
            {`${description.substring(0, 140)}...`}
            <a style={{ color: `${useTheme().colors.darkGreen}` }}>
              {' '}
              Read more
            </a>
          </div>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </Container>
  )
}

export default HomeWork
