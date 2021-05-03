import { css } from 'styled-components'

export const ButtonPrimary = css`
  .btn.btn-outline-primary {
    color: ${({ theme }) => theme.colors['orange.100']};
    border-color: ${({ theme }) => theme.colors['orange.100']};
    &:hover {
      color: ${({ theme }) => theme.colors['white.300']};
      background-color: ${({ theme }) => theme.colors['orange.100']};
    }

    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors['orange.100']}77;
    }
  }

  .btn.btn-primary {
    color: ${({ theme }) => theme.colors['white.300']};
    background-color: ${({ theme }) => theme.colors['orange.100']};
    border-color: ${({ theme }) => theme.colors['orange.100']};

    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors['orange.100']}77;
    }
  }
`
