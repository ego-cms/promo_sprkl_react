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

### Alert

An alert is a notification providing important information about the state of applications or devices, actions result and often triggers a communication request. It may contain a title, an optional message, and one or more parts.

Alerts may contain text. Its length varies depending on the device, fonts, margins and padding. If the text is too long, it can be split and shown in preview mode, where the first part will be split up with “…“ and the other part will be hidden.

```yaml
  type(type of the alert): 'info' | 'success' | 'error' | 'warning' - required
  subType(subType of the alert): 'default' | 'withDescription' | 'simple' - required
    
  margin?: spacingsType - css
  padding?: spacingsType - css
  width?: string (100%) - css
  background?: colorsType (none) - css
  color(text color)?: colorsType (depends on type) - css
  
  title(title of the alert)?: string
  onClick(onClick on cross)?: any
  description(description of the alert)?: string
```


#### Info default
```yaml
  <Alert type="info" subType="default" title="title" />
```
<img width="607" alt="image" src="https://user-images.githubusercontent.com/96983515/228543850-93862572-2edf-4162-babf-7ea3df92bcef.png">

#### Info with description
```yaml
  <Alert type="info" subType="withDescription" title="title" description="description" />
```
<img width="607" alt="image" src="https://user-images.githubusercontent.com/96983515/228544148-6b76bfd2-e1b2-4c23-9a12-313ffd9ad25d.png">

#### Info simple
```yaml
  <Alert type="info" subType="simple" title="title" />
```
<img width="603" alt="image" src="https://user-images.githubusercontent.com/96983515/228544324-cc331ab0-881b-41fd-a643-8e6a0f6114f1.png">

#### Success default
```yaml
  <Alert type="success" subType="default" title="title" />
```
<img width="603" alt="image" src="https://user-images.githubusercontent.com/96983515/228548116-ba835266-3a58-4ff5-9da7-41651b51067a.png">


#### Success with description
```yaml
  <Alert type="success" subType="withDescription" title="title" description="description" />
```
<img width="603" alt="image" src="https://user-images.githubusercontent.com/96983515/228547722-57708942-8f65-4ff0-884f-fcfe7e06b3b4.png">


#### Success simple
```yaml
  <Alert type="success" subType="simple" title="title" />
```
<img width="603" alt="image" src="https://user-images.githubusercontent.com/96983515/228546564-32bcc096-e4cb-42ac-bcef-62eea6c26a47.png">


#### Error default
```yaml
  <Alert type="error" subType="default" title="title" />
```
<img width="603" alt="image" src="https://user-images.githubusercontent.com/96983515/228548328-510591b6-3fea-4be5-80ff-8da26e949680.png">


#### Error with description
```yaml
  <Alert type="error" subType="withDescription" title="title" description="description" />
```
<img width="603" alt="image" src="https://user-images.githubusercontent.com/96983515/228547435-5cfdd0c9-6e83-40fb-8ecb-038aeba39c22.png">


#### Error simple
```yaml
  <Alert type="error" subType="simple" title="title" />
```
<img width="603" alt="image" src="https://user-images.githubusercontent.com/96983515/228546795-6bde120e-4449-4f2f-8d20-f1345b0b4144.png">


#### Warning default
```yaml
  <Alert type="warning" subType="default" title="title" />
```
<img width="603" alt="image" src="https://user-images.githubusercontent.com/96983515/228548551-2ea60ab8-43d8-4112-b8b9-f9ef41239b6e.png">


#### Warning with description
```yaml
  <Alert type="warning" subType="withDescription" title="title" description="description" />
```
<img width="603" alt="image" src="https://user-images.githubusercontent.com/96983515/228547171-9424779d-5cbe-4872-8741-512f7f6942bc.png">


#### Warning simple
```yaml
  <Alert type="warning" subType="simple" title="title" />
```
<img width="603" alt="image" src="https://user-images.githubusercontent.com/96983515/228546916-7c7048a2-6e51-43d0-a4a6-24363ca5d5e6.png">

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

### Breadcrumbs

Breadcrumbs are the navigation chain on the site, which reflects the path to the current page. They’re important for usability and navigation: users always can see their current location on the website and get to the needed page by clicking items in the chain.

Breadcrumbs may be styled with a chevron or slash. The last breadcrumb keeps interactive.

This component generate breadcrumbs based on react-router-dom (automatically)

```yaml
  targetIndex?: number - index of name what you want customize string
  breadcrumbName?: string - custom name of the index
  isSlash?: boolean
```

example:
```yaml
<Breadcrumbs targetIndex={2} breadcrumbName="customName" />
```

#### Collapse

Show titles and texts appropriately by toggling the visibility of content in your project with a few classes.

```yaml
  collapseArray: CollapseItemArrType[]
  borderColor?: colorsType - css
  chevronIconEnd?: boolean - display chevron on right side (default is left)
  margin?: string - css
  isChevron?: boolean - display or not chevron
  padding?: string - css
```

collapseArray should be like that:

```yaml
  CollapseItemArrType = {
    title(title of item): string
    description(description of item): string
    id: number
  }
```

example:
```yaml
const CollapseUi = () => {
  const collapseObj = [
    {
      title: 'title1',
      description: 'description1',
      id: 1,
    },
    {
      title: 'title2',
      description: 'description2',
      id: 2,
    },
    {
      title: 'title3',
      description: 'description3',
      id: 3,
    },
  ]

  return (
    <Box directionFlex="column" margin="10px 0">
      <Collapse collapseArray={collapseObj} />

      <Collapse borderColor="white100" collapseArray={collapseObj} />
    </Box>
  )
}
```
<img width="422" alt="image" src="https://user-images.githubusercontent.com/96983515/228804789-35e2ee1f-e56d-4fb2-aad0-d7f2e9f1621a.png">

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

There are 5 types of buttons:

````yaml
  <PrimaryButton styleType='m'>Primary button</PrimaryButton>
````
<img width="161" alt="image" src="https://user-images.githubusercontent.com/96983515/228804958-ff6a9efd-6386-4021-89b0-bc320b30e1f5.png">
````yaml
  <GhostButton styleType='m'>Primary button</PrimaryButton>
````
<img width="161" alt="image" src="https://user-images.githubusercontent.com/96983515/228805179-ec2cb47c-8179-47af-af19-561a4a0f55c8.png">

````yaml
  <OutlineButton styleType='m'>Primary button</PrimaryButton>
````
<img width="161" alt="image" src="https://user-images.githubusercontent.com/96983515/228805355-c0a3a9da-a12c-464d-884c-ae87fe906039.png">

````yaml
  <SecondaryButton styleType='m'>Primary button</PrimaryButton>
````
<img width="161" alt="image" src="https://user-images.githubusercontent.com/96983515/228805010-f457605a-3fc7-4c02-9a09-461502435f4d.png">

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

### Checkbox

A graphic UI element that allows the user to control a two-state option, enabled and disabled. When enabled, a checkmark is displayed inside the checkbox. Traditionally, the flag has a square shape.

```yaml
  label(checkbox text): string
  isChecked(value from useState): boolean
  setIsChecked(set from useState): Dispatch<SetStateAction<boolean>>
  bgChecked?: string - provide color if you want to change checkbox background
```

example:
```yaml
 const CheckRadioToggle = () => {
  const [value2, setValue2] = useState(false)

  return (
    <Checkbox label={'Checkbox'} isChecked={value2} setIsChecked={setValue2} />
  )}
```
<img width="98" alt="image" src="https://user-images.githubusercontent.com/96983515/228805535-b3e5017c-31fb-4e59-a575-bd95124c70b7.png">

### Dropdown

The dropdown allows the user to choose one of the existing options. It is usually used for navigation or forms. Depending on the location and property, it may be designed in different ways.

TheSprklDropDown has named constructors with predefined size parameters. Button size controls by text size and padding:

> XL horizontal: 24, vertical: 16
> L horizontal: 20, vertical: 12
> M horizontal: 16, vertical: 8
> S horizontal: 12, vertical: 6

Props:
```yaml
  type(type of dropdown button): 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'outline'
  subtype(size of dropdown button): 'l' | 'm' | 's' | 'xs'
  width?(the width of button and dropdown): string (auto)
  margin?(button margin): string (0px)
  disabled?(disable the dropdown): boolean (false)
  onChange(setFunction from useState): (option: string) => void
  activeValue(value from useState): number | string
  top(if parent is relative, you can set the top position of the whole dropdown component)?: string (0px)
  right(if parent is relative, you can set the top position of the whole dropdown component)?: string (0px)
  position(set the position of whole dropdown component)?: string (relative)
  optionList(array of values in the dropdown): string[] | number[]
```

example:
```yaml
const CollapseUi = () => {
  const [value, setValue] = useState('hello')
  const collapseArray = ['hello', 'world', 'one', 'two']

  const typeArr = ['primary', 'secondary', 'tertiary', 'ghost', 'outline']

  const size = ['l', 'm', 's', 'xs'] 

  return (
          <Dropdown
          subtype={size[0]}
          width="300px"
          type={item[0]}
          activeValue={value}
          optionList={collapseArray}
          onChange={setValue}
          />
  )
}
```
<img width="1578" alt="image" src="https://user-images.githubusercontent.com/96983515/228806389-79a354b4-62d5-47f2-ae43-0dce81abfb45.png">

### Radio

#### RadioGroup
Props:
```yaml
  name(name of radio inputs): string ('')
  selectedValue(value from useState): string ('')
  onClickRadioButton(action onClick on button): (value: string) => void
  children(Radio components): ReactElement<PropsRadioType>[]
```
#### Radio
Props:
```yaml
labelText(text to the left of the button)?: string ('')
value(input value)?: string ('')
onChange(internal function. Look RadioGroup. Do not provide any func)?: () => void
name(input name. Do not provide)?: string ('')
checked(input checked. Do not provide)?: boolean (false)
```

example:
```yaml
const CheckRadioToggle = () => {
  const [value3, setValue3] = useState('two')

  return (
          <RadioGroup
          name="RadioGroup1"
          selectedValue={value3}
          onClickRadioButton={value => {
          setValue3(value)
          }}
          >
          <Radio value="one" labelText="one" />
          <Radio value="two" labelText="two" />
          </RadioGroup>
  )
}
```
<img width="94" alt="image" src="https://user-images.githubusercontent.com/96983515/228806567-c0025610-7698-43b2-b4d1-fa5de011d354.png">

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

### List

```yaml
  type: 'ordered' | 'unordered' | 'custom'
  children: JSX.Element[]
  margin?: string
```

```yaml
   <List type="ordered">
   <BodyText type="m">
   Text
   </BodyText>
   <BodyText type="m">
   Text
   </BodyText>
   </List>
```
<img width="407" alt="image" src="https://user-images.githubusercontent.com/96983515/228806721-7d7a781a-83b7-4cd0-aac3-6efad37ba7e6.png">

### Stepper

```yaml
  type(type of Stepper): 'horizontal' | 'vertical'
  isTextType(text type Stepper)?: boolean (false)
  isNumeric(numeric type Stepper)?: boolean (false)
  stepLength(cont of steps): number
  activeIndex(value from useState): number
  height(height of wrapper box)?: string (300px)
  width(height of wrapper box)?: string (100%)
  onClick(action onClick on step): (currentStep: any) => void
  stepName(array of names of the steps)?: string[]
```

```yaml
  const StepperUi = () => {
  const [step, setStep] = useState(0)

  const stepName = ['one', 'two', 'three', 'four']

  const func = currentStep => setStep(currentStep)

  return (
    <>
      <Box>
        <Stepper stepName={stepName} type="vertical" stepLength={4} activeIndex={step} onClick={func} isNumeric />
        <Stepper stepName={stepName} type="vertical" stepLength={4} activeIndex={step} onClick={func} />
        <Stepper type="vertical" stepName={stepName} isTextType stepLength={4} activeIndex={step} onClick={func} />
      </Box>

      <Stepper type="horizontal" stepLength={4} activeIndex={step} onClick={func} isNumeric />
      <Stepper type="horizontal" stepLength={4} activeIndex={step} onClick={func} />
      <Stepper type="horizontal" stepName={stepName} isTextType stepLength={4} activeIndex={step} onClick={func} />
    </>
  )
}
```

#### Vertical numeric
```yaml
<Stepper stepName={stepName} type="vertical" stepLength={4} activeIndex={step} onClick={func} isNumeric />
```
<img width="216" alt="image" src="https://user-images.githubusercontent.com/96983515/228806872-f22087ac-a376-41f0-8ab4-d3be4e3c5687.png">

#### Vertical circular
```yaml
<Stepper stepName={stepName} type="vertical" stepLength={4} activeIndex={step} onClick={func} />
```
<img width="216" alt="image" src="https://user-images.githubusercontent.com/96983515/228806938-f8ec9362-7827-4ba1-bee0-59f7876e7cac.png">

#### Vertical text
```yaml
<Stepper type="vertical" stepName={stepName} isTextType stepLength={4} activeIndex={step} onClick={func} />
```
<img width="216" alt="image" src="https://user-images.githubusercontent.com/96983515/228806992-3e8b71fd-5d95-4c6c-8b41-813ab9b6df74.png">

#### Horizontal numeric
```yaml
<Stepper type="horizontal" stepLength={4} activeIndex={step} onClick={func} isNumeric />
```
<img width="1728" alt="image" src="https://user-images.githubusercontent.com/96983515/228807068-c35d2660-e08d-449c-af48-8498506fd961.png">

#### Horizontal circular
```yaml
<Stepper type="horizontal" stepLength={4} activeIndex={step} onClick={func} />
```
<img width="1728" alt="image" src="https://user-images.githubusercontent.com/96983515/228807122-5bfcdfe6-e572-4ba4-b676-63d579db4429.png">

#### Horizontal text
```yaml
<Stepper type="horizontal" stepName={stepName} isTextType stepLength={4} activeIndex={step} onClick={func} />
```
<img width="1728" alt="image" src="https://user-images.githubusercontent.com/96983515/228807168-347a45ea-dfeb-457b-8ef4-d8703a1666fa.png">

### Tabs

```yaml
type(type of tab): 'horizontal' | 'vertical'
activeIndex: number
height(height of wrapper box)?: string (not set)
width(height of wrapper box)?: string (100%)
onClick(action onClick on step): (currentStep: any) => void
namesArr(array of tab names): JSX.Element[]
activeColor?(active tab color text): string
```


```yaml
const TabsUi = () => {
  const [step, setStep] = useState(0)

  const stepName = [
    <LabelText key="one" color="current" type="m">
      one
    </LabelText>,
    <LabelText key="two" color="current" type="m">
      two
    </LabelText>,
    <LabelText key="three" color="current" type="m">
      three
    </LabelText>,
    <LabelText key="four" color="current" type="m">
      four
    </LabelText>,
  ]

  const func = currentStep => setStep(currentStep)

  return (
    <>
      <Tabs width="800px" type="horizontal" activeIndex={step} onClick={func} namesArr={stepName} />

      <Tabs width="200px" type="vertical" activeIndex={step} onClick={func} namesArr={stepName} />
    </>
  )
}
```

#### Horizontal
````yaml
<Tabs width="800px" type="horizontal" activeIndex={step} onClick={func} namesArr={stepName} />
````
<img width="819" alt="image" src="https://user-images.githubusercontent.com/96983515/228808682-db7906f9-d330-4f15-8f0b-220fefffac2d.png">

#### Vertical
```yaml
<Tabs width="200px" type="vertical" activeIndex={step} onClick={func} namesArr={stepName} />
```
<img width="286" alt="image" src="https://user-images.githubusercontent.com/96983515/228808730-e0ecba4d-3eeb-4ac4-b033-d85f0981980a.png">

### Tag

```yaml
  children: string
  type: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'outline' | 'default'
  size: 's' | 'm' | 'l'
  margin?: string
  backgroundColor?: string
```

```yaml
const TagsUi = () => {
  const type = ['primary', 'secondary', 'tertiary', 'ghost', 'outline', 'default'] as any
  const size = ['s', 'm', 'l'] as any

  return (
    <Box padding="10px" background="neutrals600" alignItems="center">
      {type.map(item => (
        <Fragment key={item}>
          {size.map(sizeItem => (
            <Tags type={item} key={sizeItem} size={sizeItem} margin="5px">
              {item + ' ' + sizeItem}
            </Tags>
          ))}
        </Fragment>
      ))}
    </Box>
  )
}
```
<img width="1526" alt="image" src="https://user-images.githubusercontent.com/96983515/228808876-4a1a7dd1-4c74-4598-ab2f-0e9fb4ba4c32.png">

### Toggle

```yaml
  name: string
  checked: string | boolean
  disabled?: boolean
  mobile?: boolean - mobile version
  onChange?: () => void
```

```yaml
const CheckRadioToggle = () => {
  const [value1, setValue1] = useState(false)

  return (
      <Toggle name="Toggle" checked={value1} onChange={() => setValue1(p => !p)} />
  )
}
```
<img width="50" alt="image" src="https://user-images.githubusercontent.com/96983515/228808975-512cb4d5-9b1c-4afd-81dd-e2d7423bc794.png">

### Tooltip

```yaml
  type: 'top' | 'right' | 'left' | 'bottom'
  width?: string
  children: string
  topPos?: string
  botPos?: string
```

```yaml
const TooltipUi = () => {
  const typeArr = [
    { type: 'top', botPos: '-155px' },
    { type: 'right' },
    { type: 'left' },
    { type: 'bottom', topPos: '-176px' },
  ] as any[]

  return (
    <Box margin="10px 0" alignItems="center" justifyContent="center" width="100%">
      <Box padding="5px" position="relative" width="300px" height="300px" background="red">
        {typeArr.map(({ type, topPos, botPos }) => (
          <Tooltip botPos={botPos} topPos={topPos} key={type} type={type}>
            {`Hello. How are you? I hope you are good ${type}`}
          </Tooltip>
        ))}
      </Box>
    </Box>
  )
}
```
<img width="626" alt="image" src="https://user-images.githubusercontent.com/96983515/228809259-8f02a5ec-c36e-48f4-993e-c5010345879a.png">

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

There are 4 types of text:

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

````yaml
  <SupportText type='m'>Support Text</SupportText>
````
<img width="297" alt="image" src="https://user-images.githubusercontent.com/96983515/228879093-d7c44083-b91c-4cf9-852e-5b76737138c1.png">
possible types of SupportText:
````yaml
  type: 'quote' | 'overline' | 'caption'  - required property
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

