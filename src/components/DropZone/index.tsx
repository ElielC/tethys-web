import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Text from '../Text'
import { StyledDropZone } from './styles'

interface Props {
  label?: string
  onFileUploaded: (file: File) => void
}

const DropZone: React.FC<Props> = ({ label, onFileUploaded }) => {
  const [selectedFileName, setSelectedFileName] = useState('')

  const onDrop = useCallback(
    acceptedFiles => {
      const file: File = acceptedFiles[0]

      onFileUploaded(file)
      setSelectedFileName(file?.name)
    },
    [onFileUploaded]
  )
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf'
  })

  return (
    <>
      {label && (
        <Text style={{ marginBottom: '0.1rem' }} fontWeight={700}>
          {label}
        </Text>
      )}{' '}
      {selectedFileName && (
        <Text style={{ marginBottom: '0.1rem' }} fontWeight={500}>
          {selectedFileName}
        </Text>
      )}
      <StyledDropZone {...getRootProps()}>
        <input {...getInputProps()} accept=".pdf" />

        <p>
          <FontAwesomeIcon icon={faUpload} /> Drag n drop your work here, or
          click to select files
        </p>
      </StyledDropZone>
    </>
  )
}

export default DropZone
