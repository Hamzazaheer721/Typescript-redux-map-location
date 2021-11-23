import {
  useState,
  useCallback,
  ChangeEvent,
  MouseEvent,
  useEffect
} from 'react'
import { notification } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
import { IInputFormInitialValue, validateInputForm } from './helper'
import { IInputFormType, IInputformErrorsType } from './types'
import { RootState } from '../../../redux/store'
import { updateBankInfo } from '../../../redux/features/updateBankInfo/apiActions'
import { isObjectEmpty } from '../../../general/helper'
import { openModal } from '../../../redux/features/modalSlice'
import { ArgsProps } from '../../../types/notification/types'

const useBankForm = () => {
  const [inputData, setInputData] = useState<IInputFormType>(
    IInputFormInitialValue
  )
  const [errors, setErrors] = useState<IInputformErrorsType>({})

  const bankInfoState = useSelector((state: RootState) => state.updateBankInfo)
  const { message: bankInfoStateMessage, success: bankInfoStateSuccess } =
    bankInfoState
  const dispatch = useDispatch()

  const openNotification = useCallback(() => {
    const config: ArgsProps = {
      message: 'Error',
      description: bankInfoStateMessage
    }
    notification.error(config)
  }, [])

  useEffect(() => {
    if (bankInfoStateSuccess && bankInfoStateMessage) {
      dispatch(
        openModal({
          modalType: 'success',
          description: bankInfoStateMessage
        })
      )
    }
    if (!bankInfoStateSuccess && bankInfoStateMessage) {
      openNotification()
    }
  }, [bankInfoStateSuccess, bankInfoStateMessage])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
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
      if (str && `+${_val}` !== inputData.acc_holder_mobile_number) {
        setInputData({ ...inputData, acc_holder_mobile_number: `+${_val}` })
      }
    },
    [inputData.acc_holder_mobile_number]
  )

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setErrors({})
      const validateErrors = validateInputForm(inputData)
      setErrors(validateErrors)
      isObjectEmpty(validateErrors) && dispatch(updateBankInfo(inputData))
    },
    [inputData]
  )

  return { handleChange, handlePhoneChange, handleSubmit, inputData, errors }
}

export default useBankForm
