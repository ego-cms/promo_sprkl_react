import 'styled-components'

export type colorsType =
  | 'primary900'
  | 'primary800'
  | 'primary700'
  | 'primary600'
  | 'primary500'
  | 'primary400'
  | 'primary300'
  | 'primary200'
  | 'primary100'
  | 'primary50'
  | 'accent900'
  | 'accent800'
  | 'accent700'
  | 'accent600'
  | 'accent500'
  | 'accent400'
  | 'accent300'
  | 'accent200'
  | 'accent100'
  | 'accent50'
  | 'neutrals900'
  | 'neutrals800'
  | 'neutrals700'
  | 'neutrals600'
  | 'neutrals500'
  | 'neutrals400'
  | 'neutrals300'
  | 'neutrals200'
  | 'neutrals100'
  | 'neutrals50'
  | 'error900'
  | 'error800'
  | 'error700'
  | 'error600'
  | 'error500'
  | 'error400'
  | 'error300'
  | 'error200'
  | 'error100'
  | 'error50'
  | 'info900'
  | 'info800'
  | 'info700'
  | 'info600'
  | 'info500'
  | 'info400'
  | 'info300'
  | 'info200'
  | 'info100'
  | 'info50'
  | 'success900'
  | 'success800'
  | 'success700'
  | 'success600'
  | 'success500'
  | 'success400'
  | 'success300'
  | 'success200'
  | 'success100'
  | 'success50'
  | 'warning900'
  | 'warning800'
  | 'warning700'
  | 'warning600'
  | 'warning500'
  | 'warning400'
  | 'warning300'
  | 'warning200'
  | 'warning100'
  | 'warning50'
  | 'black100'
  | 'black88'
  | 'black80'
  | 'black72'
  | 'black64'
  | 'black56'
  | 'black48'
  | 'black40'
  | 'black32'
  | 'black24'
  | 'black16'
  | 'black8'
  | 'white100'
  | 'white88'
  | 'white80'
  | 'white72'
  | 'white64'
  | 'white56'
  | 'white48'
  | 'white40'
  | 'white32'
  | 'white24'
  | 'white16'
  | 'white8'
  | string

type oneSpacingType = 'z' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'

type twoSpacingsType = `${oneSpacingType} ${oneSpacingType}`
type threeSpacingsType = `${twoSpacingsType} ${oneSpacingType}`
type fourSpacingsType = `${twoSpacingsType} ${twoSpacingsType}`
export type spacingsType = oneSpacingType | twoSpacingsType | threeSpacingsType | fourSpacingsType | string

export type oneCornerType = 's' | 'm' | 'l' | 'xl' | 'round'
type twoCornersType = `${oneCornerType} ${oneCornerType}`
type threeCornersType = `${twoCornersType} ${oneCornerType}`
type fourCornersType = `${twoCornersType} ${twoCornersType}`
export type cornersType = oneCornerType | twoCornersType | threeCornersType | fourCornersType | string

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary900: string
      primary800: string
      primary700: string
      primary600: string
      primary500: string
      primary400: string
      primary300: string
      primary200: string
      primary100: string
      primary50: string

      accent900: string
      accent800: string
      accent700: string
      accent600: string
      accent500: string
      accent400: string
      accent300: string
      accent200: string
      accent100: string
      accent50: string

      neutrals900: string
      neutrals800: string
      neutrals700: string
      neutrals600: string
      neutrals500: string
      neutrals400: string
      neutrals300: string
      neutrals200: string
      neutrals100: string
      neutrals50: string

      error900: string
      error800: string
      error700: string
      error600: string
      error500: string
      error400: string
      error300: string
      error200: string
      error100: string
      error50: string

      info900: string
      info800: string
      info700: string
      info600: string
      info500: string
      info400: string
      info300: string
      info200: string
      info100: string
      info50: string

      success900: string
      success800: string
      success700: string
      success600: string
      success500: string
      success400: string
      success300: string
      success200: string
      success100: string
      success50: string

      warning900: string
      warning800: string
      warning700: string
      warning600: string
      warning500: string
      warning400: string
      warning300: string
      warning200: string
      warning100: string
      warning50: string

      black100: string
      black88: string
      black80: string
      black72: string
      black64: string
      black56: string
      black48: string
      black40: string
      black32: string
      black24: string
      black16: string
      black8: string

      white100: string
      white88: string
      white80: string
      white72: string
      white64: string
      white56: string
      white48: string
      white40: string
      white32: string
      white24: string
      white16: string
      white8: string
    }

    spacings: {
      z: string
      xxs: string
      xs: string
      s: string
      m: string
      l: string
      xl: string
      xxl: string
      xxxl: string
    }

    corners: {
      s: string
      m: string
      l: string
      xl: string
      round: string
    }

    bodyText: any
    headlineText: any
    labelText: any
    supportText: any
    primaryButton: any
    ghostButton: any
    outlineButton: any
    secondaryButton: any
    tertiaryButton: any
  }
}
