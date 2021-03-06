import styled, { css } from 'styled-components'
import { Checkbox } from 'antd'
import { device } from '../../styles/devices'

interface ICheckboxProps {
  height: string
  borderRadius: string
  border: string
  width: string
  labelSize?: string
}

export const CustomCheckBox = styled(Checkbox)<Partial<ICheckboxProps>>`
  .ant-checkbox {
    border-radius: ${({ borderRadius }) => borderRadius || '3px'};
  }

  .ant-checkbox-inner {
    border: ${({ border }) => border || '0.5px solid #4e98e2'};
    border-radius: ${({ borderRadius }) => borderRadius || '3px'};
    height: ${({ height }) => height || '14px'};
    width: ${({ width }) => width || '14px'};
    @media ${device.desktop1080p} {
      height: ${({ height }) => height || '16px'};
      width: ${({ width }) => width || '16px'};
    }
  }

  .ant-checkbox-inner:hover,
  .ant-checkbox-inner:active {
    border: none;
  }

  .ant-checkbox-checked:after {
    border: none;
  }

  .ant-checkbox {
    border: none;
    box-shadow: 0px 3px 6px #00000029 !important;
  }

  .ant-checkbox-checked:focus-within {
    .ant-checkbox-inner {
      background-color: ${(props) => props.theme.color.primary};
    }
  }
`
export const Container = styled.div<{ labelSize?: string, labelColor?: string}>`
  ${({ labelSize, labelColor }) => labelSize &&
    css`
      & {
        .ant-checkbox-wrapper {
          font-size: ${labelSize} !important;
          color: ${labelColor}
        }
      }
    `}
`
