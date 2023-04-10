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

import React, { FC, ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { hexToRgbaToRgb } from 'sprkl'

type Prop = {
  primaryColor?: string
  accentColor?: string
  neutralsColor?: string
  errorColor?: string
  warningColor?: string
  successColor?: string
  infoColor?: string
  children: ReactNode
  bodyTextStyles?: any
  headlineTextStyles?: any
  labelTextStyle?: any
  supportTextStyle?: any
  primaryButtonStyle?: any
  ghostButton?: any
  outlineButton?: any
  secondaryButton?: any
  tertiaryButton?: any
}

export const Theme: FC<Prop> = ({
  children,
  primaryButtonStyle,
  primaryColor,
  supportTextStyle,
  infoColor,
  errorColor,
  successColor,
  neutralsColor,
  warningColor,
  accentColor,
  bodyTextStyles,
  headlineTextStyles,
  labelTextStyle,
  ghostButton,
  outlineButton,
  secondaryButton,
  tertiaryButton,
}) => {
  const theme: DefaultTheme = {
    colors: {
      primary900: primaryColor || '#421C86',
      primary800: primaryColor ? hexToRgbaToRgb(primaryColor, 0.9) : '#501FA8',
      primary700: primaryColor ? hexToRgbaToRgb(primaryColor, 0.8) : '#6125CE',
      primary600: primaryColor ? hexToRgbaToRgb(primaryColor, 0.7) : '#7034E4',
      primary500: primaryColor ? hexToRgbaToRgb(primaryColor, 0.6) : '#7F52EE',
      primary400: primaryColor ? hexToRgbaToRgb(primaryColor, 0.5) : '#9C80F4',
      primary300: primaryColor ? hexToRgbaToRgb(primaryColor, 0.4) : '#BCACF9',
      primary200: primaryColor ? hexToRgbaToRgb(primaryColor, 0.3) : '#D8D0FC',
      primary100: primaryColor ? hexToRgbaToRgb(primaryColor, 0.2) : '#EAE6FD',
      primary50: primaryColor ? hexToRgbaToRgb(primaryColor, 0.15) : '#F3F1FE',

      accent900: accentColor || '#77193A',
      accent800: accentColor ? hexToRgbaToRgb(accentColor, 0.9) : '#921943',
      accent700: accentColor ? hexToRgbaToRgb(accentColor, 0.8) : '#B51A52',
      accent600: accentColor ? hexToRgbaToRgb(accentColor, 0.7) : '#D5266B',
      accent500: accentColor ? hexToRgbaToRgb(accentColor, 0.6) : '#E8418D',
      accent400: accentColor ? hexToRgbaToRgb(accentColor, 0.5) : '#F168AB',
      accent300: accentColor ? hexToRgbaToRgb(accentColor, 0.4) : '#F79FCC',
      accent200: accentColor ? hexToRgbaToRgb(accentColor, 0.3) : '#FAC9E4',
      accent100: accentColor ? hexToRgbaToRgb(accentColor, 0.2) : '#FBE4F1',
      accent50: accentColor ? hexToRgbaToRgb(accentColor, 0.15) : '#FDF0F7',

      neutrals900: neutralsColor || '#111827',
      neutrals800: neutralsColor ? hexToRgbaToRgb(neutralsColor, 0.9) : '#1F2937',
      neutrals700: neutralsColor ? hexToRgbaToRgb(neutralsColor, 0.8) : '#374151',
      neutrals600: neutralsColor ? hexToRgbaToRgb(neutralsColor, 0.7) : '#4B5563',
      neutrals500: neutralsColor ? hexToRgbaToRgb(neutralsColor, 0.6) : '#6B7280',
      neutrals400: neutralsColor ? hexToRgbaToRgb(neutralsColor, 0.5) : '#9CA3AF',
      neutrals300: neutralsColor ? hexToRgbaToRgb(neutralsColor, 0.4) : '#D1D5DB',
      neutrals200: neutralsColor ? hexToRgbaToRgb(neutralsColor, 0.3) : '#E5E7EB',
      neutrals100: neutralsColor ? hexToRgbaToRgb(neutralsColor, 0.2) : '#F3F4F6',
      neutrals50: neutralsColor ? hexToRgbaToRgb(neutralsColor, 0.15) : '#F9FAFB',

      error900: errorColor || '#7F1D1D',
      error800: errorColor ? hexToRgbaToRgb(errorColor, 0.9) : '#991B1B',
      error700: errorColor ? hexToRgbaToRgb(errorColor, 0.8) : '#B91C1C',
      error600: errorColor ? hexToRgbaToRgb(errorColor, 0.7) : '#DC2626',
      error500: errorColor ? hexToRgbaToRgb(errorColor, 0.6) : '#EF4444',
      error400: errorColor ? hexToRgbaToRgb(errorColor, 0.5) : '#F87171',
      error300: errorColor ? hexToRgbaToRgb(errorColor, 0.4) : '#FCA5A5',
      error200: errorColor ? hexToRgbaToRgb(errorColor, 0.3) : '#FECACA',
      error100: errorColor ? hexToRgbaToRgb(errorColor, 0.2) : '#FEE2E2',
      error50: errorColor ? hexToRgbaToRgb(errorColor, 0.15) : '#FEF2F2',

      warning900: warningColor || '#7C2D12',
      warning800: warningColor ? hexToRgbaToRgb(warningColor, 0.9) : '#9A3412',
      warning700: warningColor ? hexToRgbaToRgb(warningColor, 0.8) : '#C2410C',
      warning600: warningColor ? hexToRgbaToRgb(warningColor, 0.7) : '#EA580C',
      warning500: warningColor ? hexToRgbaToRgb(warningColor, 0.6) : '#F97316',
      warning400: warningColor ? hexToRgbaToRgb(warningColor, 0.5) : '#FB923C',
      warning300: warningColor ? hexToRgbaToRgb(warningColor, 0.4) : '#FDBA74',
      warning200: warningColor ? hexToRgbaToRgb(warningColor, 0.3) : '#FED7AA',
      warning100: warningColor ? hexToRgbaToRgb(warningColor, 0.2) : '#FFEDD5',
      warning50: warningColor ? hexToRgbaToRgb(warningColor, 0.15) : '#FFF7ED',

      success900: successColor || '#14532D',
      success800: successColor ? hexToRgbaToRgb(successColor, 0.9) : '#166534',
      success700: successColor ? hexToRgbaToRgb(successColor, 0.8) : '#15803D',
      success600: successColor ? hexToRgbaToRgb(successColor, 0.7) : '#16A34A',
      success500: successColor ? hexToRgbaToRgb(successColor, 0.6) : '#22C55E',
      success400: successColor ? hexToRgbaToRgb(successColor, 0.5) : '#4ADE80',
      success300: successColor ? hexToRgbaToRgb(successColor, 0.4) : '#86EFAC',
      success200: successColor ? hexToRgbaToRgb(successColor, 0.3) : '#BBF7D0',
      success100: successColor ? hexToRgbaToRgb(successColor, 0.2) : '#DCFCE7',
      success50: successColor ? hexToRgbaToRgb(successColor, 0.15) : '#DCFCE7',

      info900: infoColor || '#1E3A8A',
      info800: infoColor ? hexToRgbaToRgb(infoColor, 0.9) : '#1E40AF',
      info700: infoColor ? hexToRgbaToRgb(infoColor, 0.8) : '#1D4ED8',
      info600: infoColor ? hexToRgbaToRgb(infoColor, 0.7) : '#2563EB',
      info500: infoColor ? hexToRgbaToRgb(infoColor, 0.6) : '#3B82F6',
      info400: infoColor ? hexToRgbaToRgb(infoColor, 0.5) : '#60A5FA',
      info300: infoColor ? hexToRgbaToRgb(infoColor, 0.4) : '#93C5FD',
      info200: infoColor ? hexToRgbaToRgb(infoColor, 0.3) : '#BFDBFE',
      info100: infoColor ? hexToRgbaToRgb(infoColor, 0.2) : '#DBEAFE',
      info50: infoColor ? hexToRgbaToRgb(infoColor, 0.15) : '#EFF6FF',

      black100: 'rgba(0 0 0)',
      black88: 'rgba(0 0 0 / 88%)',
      black80: 'rgba(0 0 0 / 80%)',
      black72: 'rgba(0 0 0 / 72%)',
      black64: 'rgba(0 0 0 / 64%)',
      black56: 'rgba(0 0 0 / 56%)',
      black48: 'rgba(0 0 0 / 48%)',
      black40: 'rgba(0 0 0 / 40%)',
      black32: 'rgba(0 0 0 / 32%)',
      black24: 'rgba(0 0 0 / 24%)',
      black16: 'rgba(0 0 0 / 16%)',
      black8: 'rgba(0 0 0 / 8%)',

      white100: 'rgba(255 255 255)',
      white88: 'rgba(255 255 255 / 88%)',
      white80: 'rgba(255 255 255 / 80%)',
      white72: 'rgba(255 255 255 / 72%)',
      white64: 'rgba(255 255 255 / 64%)',
      white56: 'rgba(255 255 255 / 56%)',
      white48: 'rgba(255 255 255 / 48%)',
      white40: 'rgba(255 255 255 / 40%)',
      white32: 'rgba(255 255 255 / 32%)',
      white24: 'rgba(255 255 255 / 24%)',
      white16: 'rgba(255 255 255 / 16%)',
      white8: 'rgba(255 255 255 / 8%)',
    },

    spacings: {
      z: '0',
      xxs: '2px',
      xs: '4px',
      s: '8px',
      m: '12px',
      l: '16px',
      xl: '24px',
      xxl: '48px',
      xxxl: '64px',
    },

    corners: {
      s: '4px',
      m: '6px',
      l: '8px',
      xl: '16px',
      round: '10000px',
    },

    bodyText: {
      l: 'font-size: 1.25rem; line-height: 1.2;',
      m: 'font-size: 1rem;',
      s: 'font-size: 0.875rem; letter-spacing: 0rem;',
      ...bodyTextStyles,
    },
    headlineText: {
      l: 'font-size: 3.5rem; letter-spacing: -0.125rem; line-height: 1.1;',
      xl: 'font-size: 3rem; letter-spacing: -0.08125rem; line-height: 1.1;',
      m: 'font-size: 2rem; letter-spacing: -0.05rem;',
      s: 'font-size: 1.75rem; letter-spacing: -0.025rem;',
      xs: 'font-size: 1.5rem; letter-spacing: -0.015rem;',
      xxs: 'font-size: 1.25rem; letter-spacing: -0.015rem;',
      ...headlineTextStyles,
    },
    labelText: { m: 'font-size: 1rem;', s: 'font-size: 0.875rem;', ...labelTextStyle },
    supportText: {
      quote:
        'font-family: IBM Plex Sans; font-style: normal; font-weight: 700; font-size: 32px; line-height: 38px; letter-spacing: -0.24px;',
      overline:
        'font-family: IBM Plex Sans; font-style: normal; font-weight: 700; font-size: 14px; line-height: 16px; text-transform: uppercase',
      caption:
        'font-family: Inter; font-style: normal; font-weight: 500; font-size: 14px; line-height: 16px; letter-spacing: -0.24px',
      ...supportTextStyle,
    },

    primaryButton: {
      xl: 'padding: 0 23px; height: 56px;',
      l: 'padding: 0 18px; height: 48px;',
      m: 'padding: 0 16px; height: 40px;',
      s: 'padding: 0 11px; height: 32px;',
      ...primaryButtonStyle,
    },
    ghostButton: {
      xl: 'padding: 0 23px; height: 56px;',
      l: 'padding: 0 18px; height: 48px;',
      m: 'padding: 0 16px; height: 40px;',
      s: 'padding: 0 11px; height: 32px;',
      ...ghostButton,
    },
    outlineButton: {
      xl: 'padding: 0 23px; height: 56px;',
      l: 'padding: 0 18px; height: 48px;',
      m: 'padding: 0 16px; height: 40px;',
      s: 'padding: 0 11px; height: 32px;',
      ...outlineButton,
    },
    secondaryButton: {
      xl: 'padding: 0 23px; height: 56px;',
      l: 'padding: 0 18px; height: 48px;',
      m: 'padding: 0 16px; height: 40px;',
      s: 'padding: 0 11px; height: 32px;',
      ...secondaryButton,
    },
    tertiaryButton: {
      xl: 'padding: 0 23px; height: 56px;',
      l: 'padding: 0 18px; height: 48px;',
      m: 'padding: 0 16px; height: 40px;',
      s: 'padding: 0 11px; height: 32px;',
      ...tertiaryButton,
    },
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
