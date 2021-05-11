import styled from 'styled-components'

export const StyledDropZone = styled.div`
  height: 300px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;

  p {
    width: 100%;
    height: calc(100% - 40px);
    border-radius: 10px;
    border: 4px dashed ${({ theme }) => theme.colors.green};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.black};
  }

  p svg {
    color: ${({ theme }) => theme.colors.green};
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`
