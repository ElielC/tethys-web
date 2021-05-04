import { Ref, useEffect, useRef } from 'react'

import { useField } from '@unform/core'

import Text from '../Text'
import { Container, StyledInput } from './styles'

interface OwnProps {
  name: string
  label: string
  handleIcon?: () => void
  disabledIcon?: boolean
  ref?: Ref<HTMLInputElement>
  icon?: never
}

type InputProps = OwnProps & JSX.IntrinsicElements['input']

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    if (inputRef.current) {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value'
      })
    }
  }, [fieldName, registerField])

  return (
    <Container>
      {label && (
        <Text style={{ marginBottom: '0.1rem' }} fontWeight={700}>
          {label}
        </Text>
      )}

      <StyledInput
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span style={{ color: 'red' }}>{error}</span>}
    </Container>
  )
}

export default Input
