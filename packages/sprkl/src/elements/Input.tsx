/* eslint-disable react/display-name */

/* ******************************************************** */
/* 2023 © TheSprkl for React v.1.0 (www.thesprkl.io)      */
/* is a proprietary product developed by                    */
/* EGO Creative Innovations Limited (www.ego-cms.com)       */
/*                                                          */
/* EULA https://www.thesprkl.io/legal/eula                  */
/* Support https://www.thesprkl.io/contact-us               */
/* Discord https://discord.gg/3qjXP9jCra                    */
/*                                                          */
/* ******************************************************** */

import React, { forwardRef, PropsWithChildren, useState } from 'react'
import { colorsType, spacingsType } from '../types'
import { Box, ClearIcon, LabelText, TextBase } from '.'
import styled from 'styled-components'

interface Props {
  inputType: 'l' | 'm' | 's'
  margin?: spacingsType
  width?: string
  labelText?: string
  helperText?: string
  placeholder?: string
  value?: string | number
  isError?: boolean
  disabled?: boolean
  icon?: any
}

export const Input = forwardRef<HTMLInputElement, PropsWithChildren<Props>>(
  (
    { width = '100%', margin, inputType, placeholder, labelText, helperText, value = '', isError, disabled, icon },
    ref,
  ) => {
    const [innerValue, setInnerValue] = useState(value)

    const inputOnChange = e => setInnerValue(e.target.value)

    const colorDisabled = disabled ? 'neutrals400' : 'neutrals500'
    const colorIconDisabled = disabled ? 'neutrals400' : 'neutrals700'
    const resultTop = inputType === 'm' ? '-10px' : '-10px'

    const clearIconOnClick = () => setInnerValue('')

    return (
      <Box directionFlex="column" margin={margin} width={width}>
        <LabelText margin="0 0 4px 0" color={colorDisabled} type="s">
          {labelText}
        </LabelText>

        <Box
          width="100%"
          borderRadius="l"
          position="relative"
          background="white100"
          border="1px solid"
          alignItems="center"
          borderColor={isError ? 'error600' : 'neutrals300'}
        >
          {icon}

          <InputStyled
            disabled={disabled}
            inputType={inputType}
            ref={ref}
            placeholder={placeholder}
            borderColor={isError ? 'error600' : 'neutrals300'}
            value={innerValue}
            onChange={inputOnChange}
          />
          <Box color={isError ? 'error600' : colorIconDisabled} colorHover="neutrals600">
            {Boolean(innerValue) && (
              <ClearIcon
                onClick={clearIconOnClick}
                position="absolute"
                right={inputType === 'm' ? '16px' : '8px'}
                top={inputType === 'l' ? '-12px' : resultTop}
              />
            )}
          </Box>
        </Box>

        <HelperText margin="4px 0 0 0" color={isError ? 'error600' : colorDisabled}>
          {helperText}
        </HelperText>
      </Box>
    )
  },
)

const HelperText = styled(TextBase)`
  width: fit-content;
  font-family: Inter, sans-serif;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.24px;
  font-size: 11px;
`

type PropsInputStyledType = {
  inputType: 'l' | 'm' | 's'
  borderColor: colorsType
}

const InputStyled = styled.input<PropsInputStyledType>`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.24px;
  width: 100%;

  color: ${({ theme }) => theme.colors.neutrals700};
  padding: ${({ inputType }) => {
    const result = inputType === 'm' ? '10px 16px' : '6px 8px'
    return inputType === 'l' ? '12px 16px' : result
  }};
  border: none;
  outline: none;
  border-radius: 8px;
`
