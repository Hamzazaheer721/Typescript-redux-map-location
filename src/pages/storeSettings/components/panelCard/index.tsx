/* eslint-disable no-unused-vars */
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, memo, useCallback } from 'react'
import SwitchButton from '../../../../components/switchButton'
import {
  PanelCardContainer,
  PanelCardLeftContainer,
  PanelCardRightContainer,
  PanelCardRightContainerDescription,
  PanelCardRightHeaderContainer
} from './index.styled'
import './styles.css'

interface IPanelCardProps {
  title: string
  description: string
  icon: IconProp
  grayColor: boolean
  currencyText?: boolean
  switchButton?: boolean
}

const PanelCard: FC<IPanelCardProps> = memo(
  ({ title, grayColor, icon, switchButton, currencyText, description }) => {
    const makeBold = useCallback(
      (_desc) => _desc.replace('10%', '<b class="bold">10%</b>'),
      []
    )

    return (
      <PanelCardContainer $grayColor={!!grayColor}>
        <PanelCardLeftContainer>
          <FontAwesomeIcon icon={icon} />
        </PanelCardLeftContainer>
        <PanelCardRightContainer>
          <PanelCardRightHeaderContainer>
            <>{title}</>
            <>
              {switchButton && <SwitchButton size="small" />}
              {currencyText && <span>PKR</span>}
            </>
          </PanelCardRightHeaderContainer>
          <PanelCardRightContainerDescription>
            {description.includes('10%') ? (
              <span
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: makeBold(description) }}
              />
            ) : (
              <>{description}</>
            )}
          </PanelCardRightContainerDescription>
        </PanelCardRightContainer>
      </PanelCardContainer>
    )
  }
)

export default PanelCard
