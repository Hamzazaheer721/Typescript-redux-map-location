import {
  isEmpty,
  validateName,
  validateCompany,
  validatePhoneNumber,
  // validatePassword,
  isEmail
} from '../../../../../general/validations';

import { IRegisterErrors, IRegisterType } from '../../../../../types/signup'

export const initialState: IRegisterType = {
  name: '',
  phone: '',
  country_code: '',
  user_type: 'visitor',
  store_name: '',
  checkbox: false,
  email: '',
  password: ''
}

export const errorChecks = (
  registerData: IRegisterType,
  isCustomer: 'visitor' | 'company'
) => {
  const errors: Partial<IRegisterErrors> = {}
  const { name, phone, store_name, email, password, checkbox } = registerData

  if (isEmpty(name)) {
    errors.nameError = 'Please enter your Full name'
  } else if (!validateName(name)) {
    errors.nameError = 'Please enter a valid full name'
  }

  if (isCustomer === 'company') {
    if (isEmpty(store_name)) {
      errors.storeNameError = 'Please enter your Company name'
    } else if (!validateCompany(store_name)) {
      errors.storeNameError = 'Please enter a valid company name'
    }
  }

  if (isEmpty(phone)) {
    errors.phoneError = 'Please enter your Whatsapp number'
  } else if (!validatePhoneNumber(phone)) {
    errors.phoneError = 'Please enter a valid Whatsapp number'
  }

  if (isEmpty(email)) {
    errors.emailError = 'Please enter your email'
  } else if (!isEmail(email)) {
    errors.emailError = 'Please enter a valid email'
  }

  if (isEmpty(password)) {
    errors.passwordError = 'Please enter your password'
  } else if (password.length < 8) {
    errors.passwordError = 'Please enter atleast 8 characters'
  }
  // else if (!validatePassword(password)) {
  // eslint-disable-next-line max-len
  //   errors.passwordError = 'Use 8 or more characters with a mix of letters, numbers & symbols'
  // }

  if (!checkbox) {
    errors.checkboxError = 'You must accept terms and condition'
  }

  return errors
}
