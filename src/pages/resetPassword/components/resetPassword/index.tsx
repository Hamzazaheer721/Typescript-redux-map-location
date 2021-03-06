import { FC, memo } from 'react'
import { faKey, faUnlockAlt, faCode } from '@fortawesome/pro-light-svg-icons'
import { Link } from 'react-router-dom'
import Input from '../../../../components/input'
import Button from '../../../../components/genericButton'
import ToastComponent from '../../../../components/toaster'
import useForm from './useForm'
import {
  LoginHeader,
  LoginFooter,
  LoginDescription,
  MarginDiv,
  EmptyErrorState
} from '../../../../styles/typography'
import {
  ButtonContainer,
  Container,
  HeadingsContainer,
  InputContainer,
  InputFieldsContainer,
  LinkText
} from './index.styled'

const ActivationCode: FC = memo(() => {
  const {
    hasParams,
    activationRef,
    passwordRef,
    confirmPasswordRef,
    handleSubmit,
    handleChange,
    passwordError,
    confirmationPasswordError,
    activationCodeError,
    resetPasswordMessage,
    resetPasswordSuccess
  } = useForm()

  return (
    <Container>
      <HeadingsContainer>
        <LoginHeader>Reset Password</LoginHeader>
        <LoginDescription>
          Enter
          <b> Verification Code </b>
          to activate your account
        </LoginDescription>
      </HeadingsContainer>
      {resetPasswordMessage && !resetPasswordSuccess ? (
        <ToastComponent toastType="error" description={resetPasswordMessage} />
      ) : (
        <ToastComponent
          toastType="info"
          description="Enter your New Password!"
        />
      )}

      <InputFieldsContainer>
        {!hasParams && (
          <InputContainer>
            <Input
              ref={activationRef}
              label="Activation Code"
              name="activation_code"
              value={activationRef && activationRef.current?.value}
              prefix={faCode}
              handleChange={handleChange}
            />
          </InputContainer>
        )}
        {activationCodeError ? (
          <EmptyErrorState>{activationCodeError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )}
        <InputContainer>
          <Input
            ref={passwordRef}
            label="Password"
            prefix={faKey}
            typePassword
            name="password"
            value={passwordRef && passwordRef.current?.value}
            handleChange={handleChange}
          />
        </InputContainer>
        {passwordError ? (
          <EmptyErrorState>{passwordError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )}
        <InputContainer>
          <Input
            ref={confirmPasswordRef}
            label="Confirm Password"
            prefix={faKey}
            typePassword
            name="password_confirmation"
            value={confirmPasswordRef && confirmPasswordRef.current?.value}
            handleChange={handleChange}
          />
        </InputContainer>
        {confirmationPasswordError ? (
          <EmptyErrorState>{confirmationPasswordError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )}
      </InputFieldsContainer>
      <ButtonContainer>
        <Button
          type="submit"
          label="Reset Password"
          icon={faUnlockAlt}
          handleSubmit={handleSubmit}
        />
      </ButtonContainer>
      <LoginFooter>
        Already on WhatsPays?
        <Link to="/get-started">
          <LinkText> Login</LinkText>
        </Link>
      </LoginFooter>
    </Container>
  )
})

export default ActivationCode
