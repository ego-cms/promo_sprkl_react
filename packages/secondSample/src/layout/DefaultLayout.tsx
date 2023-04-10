import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Box } from 'sprkl'
import { Navigation } from './navigation'
import { SprklIcon } from '../elements'
import { Header } from './header'
import { useTypedSelector } from '../store'

interface Props {
  children: ReactNode
  title: string
  titleComponent?: any
  innerMargin?: string
  headerMargin?: string
  innerPadding?: string
  bodySectionPadding?: string
}

export const DefaultLayout: FC<Props> = ({
  children,
  title,
  titleComponent,
  innerMargin = '0 xl',
  headerMargin = 'xl 0 28px 0',
  innerPadding = '0 xl 0 0',
  bodySectionPadding = '0 0 xl 0',
}) => {
  const resolution = useTypedSelector(state => state.resolution)
  const isDesktop = resolution === 'desktop'
  const mobile = resolution === 'mobile'

  const [isNavBar, setIsNavBar] = useState(isDesktop || mobile)

  const positionMobile = mobile ? 'fixed' : 'absolute'
  const positionNavBar = isDesktop ? 'sticky' : positionMobile
  const marginNavBar = mobile ? '0' : innerPadding
  const marginBody = mobile ? '0 s' : innerMargin

  useEffect(() => {
    if (!isDesktop && !mobile) {
      setIsNavBar(false)
    } else {
      setIsNavBar(true)
    }
  }, [resolution])

  return (
    <>
      <Box position="relative">
        {isNavBar && (
          <Box
            margin={marginNavBar}
            boxSizing={mobile ? 'border-box' : 'content-box'}
            top="0"
            left="0"
            position={positionNavBar}
            zIndex="2"
            alignItems={mobile ? 'center' : 'start'}
            directionFlex="column"
            background="white100"
            padding={mobile ? 'm' : 'xl'}
            width={mobile ? '88px' : '180px'}
            maxWidth={mobile ? '88px' : '180px'}
            minWidth={mobile ? '88px' : '180px'}
            height={mobile ? '100vh' : 'calc(100vh - 48px)'}
            shadow={mobile ? 'none' : '6px 6px 30px rgba(69, 93, 140, 0.1), 2px 2px 2px rgba(73, 96, 141, 0.1)'}
            overflow="auto"
          >
            <SprklIcon margin={mobile ? '0 0 xl 0' : '0 0 xxl 0'} />

            <Navigation isMobile={mobile} />
          </Box>
        )}

        <Box margin={marginBody} padding={bodySectionPadding} width="100%" directionFlex="column" position="relative">
          <Header
            margin={headerMargin}
            titleComponent={titleComponent}
            isNavBar={isNavBar}
            setIsNavBar={setIsNavBar}
            title={title}
          />
          {children}
        </Box>
      </Box>
    </>
  )
}

/* {isNavBar && (
  <Box
    margin={marginNavBar}
    boxSizing={mobile ? 'border-box' : 'content-box'}
    top={!mobile ? '0' : 'calc(100vh - 55px)'}
    left="0"
    position={positionNavBar}
    zIndex="2"
    directionFlex="column"
    background="white100"
    padding={mobile ? 'm' : 'xl'}
    width={mobile ? '100%' : '180px'}
    maxWidth={mobile ? '100%' : '180px'}
    minWidth={mobile ? '100%' : '180px'}
    height={mobile ? '55px' : 'calc(100vh - 48px)'}
    shadow={mobile ? 'none' : '6px 6px 30px rgba(69, 93, 140, 0.1), 2px 2px 2px rgba(73, 96, 141, 0.1)'}
    overflow="auto"
  >
    {!mobile && <SprklIcon margin="0 0 xxl 0" />}

    <Navigation isMobile={mobile} />
  </Box>
)}*/
