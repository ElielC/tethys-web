/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRef, useState } from 'react'
import { Modal } from 'react-bootstrap'
import * as Yup from 'yup'

import { api } from '@/api'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import DropZone from '../DropZone'
import Input from '../Input'
import TextArea from '../TextArea'
import { CancelButton, OkButton } from './styles'

const titleValidation = Yup.string()
  .required('Informe o Título')
  .min(3, 'O título deve ter no mínimo 3 letras')

const descriptionValidation = Yup.string()
  .required('Informe a descrição')
  .min(20, 'A descrição deve ter no mínimo 20 letras')

interface CreateWorkDialogProps {
  open: boolean
  onCancel: () => void
}

const CreateWorkDialog: React.FC<CreateWorkDialogProps> = ({
  onCancel,
  open
}) => {
  const formRef = useRef<FormHandles>(null)

  const [hasSubmited, setHasSubmited] = useState(false)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [selectedFile, setSelectedFile] = useState<File>()

  async function handleSubmit() {
    setHasSubmited(true)
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        title: titleValidation,
        description: descriptionValidation
      })

      await schema.validate({ title, description }, { abortEarly: false })

      const data = new FormData()

      data.append('title', title)
      data.append('description', description)

      if (selectedFile) {
        data.append('file', selectedFile)
      }

      await api.post('work/create/', data)

      setHasSubmited(false)
      onCancel()
    } catch (error) {
      setHasSubmited(false)
      const validationErrors = {}

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(error => {
          validationErrors[error.path!] = error.message
        })

        formRef.current?.setErrors(validationErrors)
      } else {
        console.log(error.response.data)
      }
    }
  }

  return (
    <Modal show={open} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Upload a Work here</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Modal.Body>
          <Input
            name="title"
            label="Title:"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextArea
            name="description"
            label="Description:"
            rows={3}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <DropZone label="Work:" onFileUploaded={setSelectedFile} />
        </Modal.Body>
        <Modal.Footer>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <OkButton type="submit" disabled={hasSubmited}>
            Create
          </OkButton>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CreateWorkDialog
