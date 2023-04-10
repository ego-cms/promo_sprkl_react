# A React version of TheSprkl UI Kit

[![License:](https://img.shields.io/badge/license-license-green)](https://www.thesprkl.io/legal/eula)

Table of contents
=================

* [Get started](#get-started)
    * [General info](#general-info)
    * [Theme setup](#theme-setup)
* [Components](#components)
   * [General info_components](#general-info-components)
   * [Alert (not available in promo)](#alert)
   * [Avatar](#avatar)
   * [Box](#box)
   * [Breadcrumbs (not available in promo)](#breadcrumbs)
   * [Buttons (only one button type in promo)](#buttons)
   * [Checkbox (not available in promo)](#checkbox)
   * [Collapse (not available in promo)](#collapse)
   * [Dropdown (not available in promo)](#dropdown)
   * [Radio (not available in promo)](#radio)
   * [Input](#input)
   * [List (not available in promo)](#list)
   * [Stepper (not available in promo)](#stepper)
   * [Tabs (not available in promo)](#tabs)
   * [Tag (not available in promo)](#tag)
   * [Toggle (not available in promo)](#toggle)
   * [Tooltip (not available in promo)](#tooltip)
   * [Typography](#typography)


## Get started

### General info
To start using the react_sprkl UI Kit, the user must have an initialized React project. This is a mono repository built on yarn workspaces and parcels.
You can use it out of the box, or create your own project. There are TheSprkll UI Kit dependencies:

```yaml
  "react": "^17.0.2",
   "react-dom": "^17.0.2",
   "react-router-dom": "^6.4.2",
   "styled-components": "^5.3.6",
   "react-device-detect": "^2.2.2",
   "use-react-router-breadcrumbs": "^4.0.1"
 ```

If you decide to use yarn workspaces you need to clone that repo and type: 
```yaml
  yarn
```
to install the dependencies.


### Theme setup

TheSprkl theme setup is built on
```yaml
  "styled-components": "^5.3.6"
```
package. TheSprkl theme has set up colors and text styles used by TheSprkl components.

You have object: 
```yaml
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
```

You can provide colors to generate a palette from one color.

Here is how it looks like:
```yaml
  <Theme
    primaryColor="#8B5CF6"
    accentColor="#34D399"
    warningColor="#F43E5E"
    infoColor="#0EA5E9"
    neutrals900="#0EA5E9"
    error900="#0EA5E9"
    success900="#0EA5E9"
  >
    <App />
  </Theme>
```

To use colors you need to provide a color as a string
````yaml
  <PrimaryButton background='accent900'>
    Sign up
  </PrimaryButton>
````

Or you can provide your own color:
````yaml
  <PrimaryButton background='red'>
    Sign up
  </PrimaryButton>
````

You can create your own style types of objects or overwrite the existing ones

Text:
```yaml
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
    xxxs: 'font-size: 18px; line-height: 22px; letter-spacing: -0.24px;',
    xxxxs: 'font-size: 14px; line-height: 20px; letter-spacing: -0.2px;',
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
````

There is usage:
````yaml
  <Theme
    bodyTextStyles={{ red: 'color: red' }}
    tertiaryButton={{ red: 'color: red' }}
    primaryColor="#8B5CF6"
    accentColor="#34D399"
    warningColor="#F43E5E"
    infoColor="#0EA5E9"
  >
    <App />
  </Theme>
````

Now you have a new type in the <BodyText/> component. To use it you need to provide the name of that object in the type of the property

````yaml
  <BodyText type="red">Red text</BodyText>
  <TertiaryButton styleType="red">Red text button</TertiaryButton>
````

to overwrite the existing:
````yaml
  <Theme
    bodyTextStyles={{ m: 'color: red' }}
    tertiaryButton={{ m: 'color: red' }}
    primaryColor="#8B5CF6"
    accentColor="#34D399"
    warningColor="#F43E5E"
    infoColor="#0EA5E9"
  >
    <App />
  </Theme>
````

Now default type "m" is overwritten:
````yaml
  <BodyText type="m">Red text</BodyText>
  <TertiaryButton styleType="m">Red text button</TertiaryButton>
````

Also, you have preset margins and corners:
````yaml
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
````

You can use them when providing margins or padding and border-radius in components. Also, you can combine letters and px. Example:
````yaml
  <PrimaryButton borderRadius='l' margin="l 10px" size="m" width="100%">
    Sign up
  </PrimaryButton>
````

## Components

### General info_components

cornersType represents object or string (any value - example: 'l' or '10px')
````yaml
corners: {
      s: '4px',
      m: '6px',
      l: '8px',
      xl: '16px',
      round: '10000px',
    },
````

colorsType represents object or string (any color - example: 'primary900' or '#ffff')

````yaml
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
````

spacingsType represents object or string (example:'l' or '10px' or 'l 10px')

````yaml
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
````

All props with CSS mark accept string which represents CSS property

example:
````yamal
  <BodyText widht='100px'>100px width text</BodyText>
````

### Avatar

Avatar - (also known as a profile picture or userpic) is a graphical representation of a user or the user's character or persona. Avatars show a thumbnail representation of an individual or company in the interface. This type of component occurs widely in material design and is used everywhere, from tables to dialogue menus.

You may choose a preferable option:

> Six sizes: XXS, XS, S, M, L, XL. Sizes can be changed through the parameter “size.”
> Three types: icon, picture, letter;
> Two variants: circular and rounded square. To have rounded square change the parameter Circle to false.

```yaml
  size(size of the avatar): 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs' | string - required
  type: 'icon' | 'picture' | 'letter' - required
  border: 'circular' | 'rounded' | string - required
  
  //css
  background: colorsType - required
  color: colorsType - required
  
  margin?: spacingsType
  width?: string
  outlineOffset(css outline-offset property)?: string (-1px)
  outline(css outline property)?: string ('1px solid')
  height?: string
  outlineColor?: colorsType
  
  //handlers
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseDown?: (e: MouseEvent<HTMLDivElement>) => void
  onTouchStart?: (e: TouchEvent<HTMLDivElement>) => void
  onMouseUp?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void
  onTouchEnd?: (e: TouchEvent<HTMLDivElement>) => void
  onMouseOver?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseOut?: (e: MouseEvent<HTMLDivElement>) => void
```

example: 

#### A default image will be displayed with the image (the type should be a picture):
```yaml
  <Avatar
    color="white100"
    type="picture"
    background="primary600"
    size="m"
    border="rounded"
    >
  <img style={{ height: '102%', width: '100%', objectFit: 'cover' }} src={avatar1} />
    </Avatar>
```
<img width="347" alt="image" src="https://user-images.githubusercontent.com/96983515/228803954-50b7718a-59c5-436f-93da-7ce7ba4ea348.png">

```yaml
  <Avatar
    color="white100"
    type="picture"
    background="primary600"
    size="m"
    border="circular"
    >
  <img style={{ height: '102%', width: '100%', objectFit: 'cover' }} src={avatar1} />
    </Avatar>
```
<img width="347" alt="image" src="https://user-images.githubusercontent.com/96983515/228804034-e040b5b8-3373-43ca-9247-0f04d1dfa83e.png">


#### Without an imgage the default avatar icon will be displayed (type should be icon):
```yaml
  <Avatar
  key={item}
  color="white100"
  type="icon"
  background="primary600"
  size="m"
  border="rounded"
  />
```
<img width="347" alt="image" src="https://user-images.githubusercontent.com/96983515/228804197-8beccbd8-890c-46d8-8088-f8ee87de54b1.png">

```yaml
  <Avatar
  key={item}
  color="white100"
  type="icon"
  background="primary600"
  size="m"
  border="circular"
  />
```
<img width="347" alt="image" src="https://user-images.githubusercontent.com/96983515/228804126-88b3e525-d290-4fac-83db-7648ccf61d1c.png">


#### If you provide the text, the text will be displayed (type should be a letter):
```yaml
  <Avatar
  color="white100"
  type="letter"
  background="primary600"
  size="m"
  border="rounded"
  >
  M
  </Avatar>
```
<img width="347" alt="image" src="https://user-images.githubusercontent.com/96983515/228804278-af333813-31af-4b02-87b7-77370f49b42f.png">

```yaml
  <Avatar
  color="white100"
  type="letter"
  background="primary600"
  size="m"
  border="circular"
  >
  M
  </Avatar>
```
<img width="347" alt="image" src="https://user-images.githubusercontent.com/96983515/228804339-251da4e7-9f3b-4d2a-bd6e-855bbaaf2787.png">

### Box

This is the main component to build any other components

````yaml
  //hover properties
  backgroundHover?: colorsType - background (css)
  colorHover?: colorsType - color (css)
  borderHover?: string - border (css)

  //:before
  beforeContent?: string - you can provide here any before content (css)


  borderColor?: colorsType - border-color (css)
  borderTopColor?: colorsType - border-top-color (css)
  outlineColor?: colorsType - outline-color (css)
  color?: colorsType - css
  background?: colorsType - css
  padding?: spacingsType - css
  margin?: spacingsType - css
  borderRadius?: cornersType - border-radius (css)

  animation?: string - css
  transition?: string - css
  height?: string - css
  minHeight?: string - min-height (css)
  width?: string - css
  minWidth?: string - min-width (css)
  maxHeight?: string - min-height (css)
  display?: string - css 
  backgroundImg?: string - background-img (css)
  border?: string - css
  outline?: string - css
  borderBottom?: string - border-bottom (css)
  borderRight?: string - border-right (css)
  borderTop?: string - border-top (css)
  cursor?: string - css
  opacity?: string - css
  top?: string - css
  left?: string - css
  right?: string - css
  bottom?: string - css
  pointEvents?: string - point-events (css)
  shadow?: string - box-shadow (css)
  userSelect?: string - user-select (css)
  zIndex?: string - z-index (css)
  maxWidth?: string - max-width (css)
  backgroundPosition?: string - background-position (css)
  gap?: string - css
  outlineOffset?: string - outlineOffset (css)
  position?: 'relative' | 'static' | 'absolute' | 'fixed' | 'sticky' | string - css
  textAlign?: 'left' | 'right' | 'center' | string - text-align (css)
  backgroundClip?: 'border-box' | 'padding-box' | 'content-box' | 'text' | string - background-clip (css)
  directionFlex?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | string - direction-flex (css)
  justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'stretch'
    | string - justify-content (css)
  alignItems?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | string - align-items (css)
  alignSelf?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | string - align-self (css)
  wrapFlex?: 'wrap' | 'nowrap' | 'wrap-reverse' | string - wrap-flex (css)
  overflowY?: 'scroll' | 'hidden' | 'auto' | 'visible' | string - overflow-y (css)
  overflowX?: 'scroll' | 'hidden' | 'auto' | 'visible' | string - overflow-x (css)
  overflow?: 'scroll' | 'hidden' | 'auto' | 'visible' | string - css
  boxSizing?: string - box-sizing (css)
````

example: 
````yaml
  <Box alignItems="start" directionFlex="column" margin="0 10px 0 0"></Box>
````

### Buttons

Buttons are one of the essential components. It calls the user to make an action or choice with one tap. Buttons might be in different conditions and states, which is also important in communication between the user and the system.

You have base component ButtonBase.tsx. Every button extends from that component. That's why all those props are common:

````yaml
  styleType: 'xl' | 'l' | 'm' | 's' | string - required property
    
  disabled?: boolean - disable button

  //hover css
  backgroundHover?: string - background (css)
  shadowHover?: string - box-shadow (css)
  colorHover?: string - color (css)

  //active css
  backgroundActive?: string - background (css)

  //common css
  margin?: spacingsType - (css)
  borderRadius?: cornersType - border-radius(css)
  color?: colorsType - (css)
  width?: string - (css)
  height?: string - (css)
  position?: string - css
  alignSelf?: string - align-self (css)
  justifyContent?: string - justify-content (css)
  fontWeight?: number - font-weight (css)
  textTransform?: string - text-transform (css)
  border?: string - css
  background?: colorsType - css
  borderColor?: colorsType - border-color (css)
  right?: string - css
  top?: string - css
  whiteSpace?: string - white-space (css)
  tabIndex?: string - tab-index (css)
  fontSize?: string - font-size (css)
  shadow?: string - box-shadow (css)
````

Available only one button in promo:

````yaml
  <TertiaryButton styleType='m'>Primary button</PrimaryButton>
````
<img width="161" alt="image" src="https://user-images.githubusercontent.com/96983515/228805281-445ffaf1-da22-422c-ae2e-24d66e34332c.png">


default style object:
````yaml
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
````

### Input 

```yaml
  inputType(size): 'l' | 'm' | 's' 
  margin?: spacingsType
  width?: string (100%)
  labelText(text on the top of input)?: string (not set)
  helperText(text on the bottom of input)?: string (not set)
  placeholder?: string (not set)
  value?: string | number ('')
  isError?: boolean (not set)
  disabled?: boolean (false)
  icon?: any
```

example
```yaml
<Input width="500px" inputType="l" labelText="labelText" helperText="helperText" />
```
```yaml
<Input width="500px" inputType="l" labelText="labelText" helperText="helperText" isError={true}/>
```
<img width="1548" alt="image" src="https://user-images.githubusercontent.com/96983515/228806648-c937686c-6ee8-40f3-be0f-8b1e82a5b1c5.png">

### Typography

You have base component TextBase.tsx. Every text extends from that component. That's why all those props are common:

````yaml
  color?: colorsType - css
  margin?: spacingsType - css
  width?: string - css
  minWidth?: string - min-width (css)
  alignSelf?: string - alignSelf (css)
  maxWidth?: string - max-width (css)
  whiteSpace?: string - white-space (css)
  position?: string - css
  right?: string - css
  left?: string - css
  bottom?: string - css
  top?: string - css
  textOverflow?: string - text-overflow (css)
  fontSize?: string - font-size (css)
  textAlign?: 'left' | 'right' | 'center' | string - text-align (css)
  overflow?: 'scroll' | 'hidden' | 'auto' | 'visible' | string - css
 ````

There are 3 types of text in promo:

````yaml
  <BodyText type='m'>Body Text</BodyText>
````
<img width="134" alt="image" src="https://user-images.githubusercontent.com/96983515/228875675-e2bfd015-b02e-47a5-933a-a6909cd07805.png">
possible types of BodyText:
````yaml
  type: 'l' | 'm' | 's' | string  - required property
````

````yaml
  <HeadlineText type='m'>Headline Text</HeadlineText>
````
<img width="344" alt="image" src="https://user-images.githubusercontent.com/96983515/228875784-4fb3fc61-9655-429e-aef9-705a607c961a.png">
possible types of HeadlineText:
````yaml
  type: 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs' | string  - required property
````

````yaml
  <LabelText type='m'>Label Text</LabelText>
````
<img width="112" alt="image" src="https://user-images.githubusercontent.com/96983515/228875874-9bf84eb4-2724-48c8-bee9-79616291160b.png">
possible types of LabelText:
````yaml
  type: 'm' | 's' | string  - required property
````


default style object:
````yaml
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
````

