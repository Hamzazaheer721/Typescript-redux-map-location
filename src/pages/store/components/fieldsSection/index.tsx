import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faBurgerSoda,
  faCreditCardFront,
  faUser,
  faSave
} from '@fortawesome/pro-light-svg-icons'
import { FC, memo } from 'react'
import Input from '../../../../components/input'
import Select from '../../../../components/select'
import {
  FieldsSectionContainer,
  InputContainer,
  InputsContainer,
  SingleInputContainer,
  CheckboxContainer,
  CustomCheckBox,
  CheckboxPlaceholder,
  ButtonContainer
} from './index.styled'
import CoverImages from '../coverImagesSection'
import Button from '../../../../components/button'

const FieldsSection: FC = memo(() => (
  <FieldsSectionContainer>
    <SingleInputContainer>
      <Input prefix={faUser} label="Bussiness Profile" />
    </SingleInputContainer>

    <InputsContainer>
      <InputContainer>
        <Input label="WhatsApp Number" phonefield prefix={faWhatsapp} store />
      </InputContainer>

      <InputContainer>
        <Input
          prefix={faCreditCardFront}
          label="Bussiness URL"
          suffixText=".whatspays.com"
        />
      </InputContainer>
    </InputsContainer>

    <InputsContainer>
      <InputContainer>
        <Select prefix={faBurgerSoda} label="Industry" />
      </InputContainer>

      <InputContainer>
        <Select prefix={faBuilding} label="Industry Type" />
      </InputContainer>
    </InputsContainer>

    <InputsContainer>
      <InputContainer>
        <Input prefix={faBuilding} label="About Bussiness" textArea />
      </InputContainer>
    </InputsContainer>

    <InputsContainer>
      <InputContainer>
        <CoverImages />
      </InputContainer>
    </InputsContainer>

    <InputsContainer>
      <InputContainer>
        <CheckboxContainer>
          <CustomCheckBox
            type="checkbox"
            name="remember"
            // onChange={handleChange}
          />
          <CheckboxPlaceholder>
            I`ve read and understod the
            <span> Terms & Conditions </span>
            of WhatsPays
          </CheckboxPlaceholder>
        </CheckboxContainer>
      </InputContainer>
    </InputsContainer>
    <ButtonContainer>
      <InputsContainer>
        <InputContainer>
          <Button icon={faSave} text="Save" />
        </InputContainer>
      </InputsContainer>
    </ButtonContainer>
  </FieldsSectionContainer>
))

export default FieldsSection
