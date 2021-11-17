import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { FC, memo } from 'react'
import { CustomCheckBox } from './index.styled'

interface ICheckboxInterface {
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: CheckboxChangeEvent) => void
  name: string
  label: string
  borderRadius?: string
  border?: string
  height?: string
  width?: string
}
const Checkbox: FC<ICheckboxInterface> = memo(
  ({ handleChange, label, name, border, borderRadius, height, width }) => (
    <CustomCheckBox
      name={name}
      onChange={handleChange}
      borderRadius={borderRadius}
      border={border}
      height={height}
      width={width}
    >
      {label}
    </CustomCheckBox>
  )
)

export default Checkbox
