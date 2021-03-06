import {
  useState,
  useCallback,
  ChangeEvent,
  MouseEvent,
  useEffect
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

import { IInputFormInitialValue, validateInputForm } from './helper'
import { IInputFormType } from './types'
import { updateBasicInfo } from '../../../../redux/features/updateBasicInfoSlice/apiActions'
import { IStoreProfileErrorType } from '../../../../types/businessProfileStore'
import { isObjectEmpty } from '../../../../general/helper'
import { RootState } from '../../../../redux/store'
import { openModal } from '../../../../redux/features/modalSlice'

const useStoreForm = () => {
  const dispatch = useDispatch()

  const [inputData, setInputData] = useState<IInputFormType>(
    IInputFormInitialValue
  )
  const [errors, setErrors] = useState<IStoreProfileErrorType>({})
  const basicInfoState = useSelector(
    (state: RootState) => state.updateBasicInfo
  )
  const { message: basicInfoStateMessage, success: basicInfoStateSuccess } =
    basicInfoState

  useEffect(() => {
    basicInfoStateMessage &&
      basicInfoStateSuccess &&
      dispatch(
        openModal({
          modalType: 'success',
          description: basicInfoStateMessage
        })
      )
  }, [basicInfoState])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setInputData({ ...inputData, [name]: value })
    },
    [inputData]
  )

  const handleTextAreaChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setInputData({ ...inputData, [name]: value })
    },
    [inputData]
  )

  const handlePhoneChange = useCallback(
    (_val, _data) => {
      const { dialCode } = _data
      let str: any = _val
      if (str.includes(dialCode)) {
        str = str.replace(dialCode, '')
        str = str.trim()
      }
      if (!_val) {
        setInputData({ ...inputData, whatsapp: '' })
      }
      if (str && `+${_val}` !== inputData.whatsapp) {
        setInputData({ ...inputData, whatsapp: `+${_val}` })
      }
    },
    [inputData.whatsapp]
  )

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setErrors({})
      const validateErrors = validateInputForm(inputData)
      setErrors(validateErrors)
      isObjectEmpty(validateErrors)
      dispatch(updateBasicInfo(inputData))
    },
    [inputData]
  )

  const handleCheckChange = useCallback(
    (e: CheckboxChangeEvent) => {
      e.stopPropagation()
      const { name, checked } = e.target
      setInputData({ ...inputData, [name as string]: checked })
    },
    [inputData]
  )

  return {
    handleChange,
    inputData,
    errors,
    handlePhoneChange,
    handleSubmit,
    handleTextAreaChange,
    handleCheckChange
  }
}

export default useStoreForm
