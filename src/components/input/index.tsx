/* eslint-disable no-unused-vars */
import {
  ChangeEvent,
  forwardRef,
  MouseEvent,
  memo,
  MutableRefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/pro-light-svg-icons'
import debounce from 'lodash/debounce'
import { DebouncedFunc } from 'lodash'
import {
  InputContainer,
  InputField,
  Label,
  PhoneInputField,
  Prefix,
  Suffix,
  SuffixText,
  TextAreaField,
  SecondSuffix,
  PrefixText
} from './index.styled'

interface CountryData {
  name: string
  dialCode: string
  countryCode: string
  format: string
}

interface InputProps {
  label: string
  value: string
  name: string
  prefix: IconProp
  suffix: IconProp
  typePassword: boolean
  phonefield: boolean
  readOnly: boolean
  secondSuffix: IconProp
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  locationHandleChange: (e: ChangeEvent<HTMLInputElement>) => void

  handlePhoneChange?: (
    value: string,
    data: {} | CountryData,
    event: ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => void
  store: boolean
  suffixText: string
  textArea: boolean
  autoComplete?: boolean
  debounceValue?: number
  setInitialValue?: boolean
  grayed?: boolean
  prefixText: string
  handleSuffixClick?: (e: MouseEvent<SVGSVGElement>) => void
  handleSecondSuffixClick?: (e: MouseEvent<SVGSVGElement>) => void
  handleTextAreaChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  _disabled: boolean
}

const Input = memo(
  forwardRef<HTMLInputElement | null, Partial<InputProps>>(
    (
      {
        label,
        value = '',
        name,
        typePassword = false,
        prefix,
        suffix,
        phonefield,
        readOnly,
        secondSuffix,
        suffixText,
        store,
        grayed,
        _disabled,
        textArea,
        prefixText,
        autoComplete,
        debounceValue,
        setInitialValue,
        handleChange,
        handleSuffixClick,
        handlePhoneChange,
        handleTextAreaChange,
        handleSecondSuffixClick,
        ...props
      },
      inputRef
    ) => {
      const localRef = useRef<HTMLInputElement>(null)
      const debouncedHandleChange =
        useRef<DebouncedFunc<(e: ChangeEvent<HTMLInputElement>) => void>>()

      const [showPassword, setShowPassword] = useState(false)
      const [val, setVal] =
        useState<string>('') /* state to force render when debouncing */
      const [hack, setHack] = useState<boolean>(false)

      useEffect(() => {
        if (handleChange && !debouncedHandleChange.current) {
          debouncedHandleChange.current = debounce(handleChange, debounceValue)
        }
      }, [])

      useEffect(() => {
        debounceValue && localRef.current && setVal(localRef.current.value)
      }, [hack])

      useLayoutEffect(() => {
        if (setInitialValue && localRef.current) {
          localRef.current.value = value
          setVal(value) /* This has been fit here to make label go up only */
        }
      }, [value])

      const handleHack = useCallback(() => {
        debounceValue && setHack((prevState) => !prevState)
      }, [])

      const handleEyeChange = useCallback(() => {
        setShowPassword((prevState) => !prevState)
      }, [])

      return (
        <InputContainer
          hasValue={debounceValue ? !!val : !!value}
          store={!!store}
          grayed={!!grayed}
        >
          {!phonefield && !textArea && (
            <InputField
              readOnly={readOnly}
              {...props}
              name={name}
              disabled={_disabled}
              onSelect={handleHack}
              prefixText={!!prefixText}
              // value={debounceValue ? _value : value}
              placeholder=""
              type={typePassword && !showPassword ? 'password' : 'text'}
              ref={(element) => {
                if (element) {
                  // eslint-disable-next-line no-extra-semi
                  ;(localRef as MutableRefObject<HTMLInputElement>).current =
                    element
                }
                if (inputRef) {
                  if (typeof inputRef === 'function') {
                    inputRef(element)
                  }
                  if (typeof inputRef === 'object') {
                    // eslint-disable-next-line no-param-reassign
                    inputRef.current = element
                  }
                }
              }}
              onChange={
                debounceValue ? debouncedHandleChange.current : handleChange
              }
            />
          )}
          {textArea && (
            <TextAreaField
              readOnly={!!readOnly}
              {...props}
              name={name}
              rows={4}
              autoSize={{ minRows: 4, maxRows: 4 }}
              onChange={handleTextAreaChange}
            />
          )}
          {phonefield && (
            <PhoneInputField
              placeholder=""
              country="pk"
              value={value}
              onChange={handlePhoneChange}
            />
          )}
          {prefix && (
            <Prefix
              icon={prefix}
              $phonefield={!!phonefield}
              $textArea={!!textArea}
            />
          )}
          {prefixText && (
            // eslint-disable-next-line react/jsx-one-expression-per-line
            <PrefixText> {prefixText} </PrefixText>
          )}
          <Label
            hasValue={debounceValue ? !!val : !!value}
            $phonefield={!!phonefield}
            $textArea={!!textArea}
            prefixText={!!prefixText}
          >
            {label}
          </Label>
          {typePassword && (
            <Suffix
              onClick={handleEyeChange}
              icon={showPassword ? faEye : faEyeSlash}
            />
          )}
          {!typePassword && suffix && (
            <Suffix
              onClick={handleSuffixClick}
              icon={suffix}
              $secondSuffix={!!secondSuffix}
              grayed={!!grayed}
            />
          )}
          {!typePassword && secondSuffix && (
            <SecondSuffix
              icon={secondSuffix}
              onClick={handleSecondSuffixClick}
            />
          )}
          {!typePassword && suffixText && <SuffixText>{suffixText}</SuffixText>}
        </InputContainer>
      )
    }
  )
)

export default Input
