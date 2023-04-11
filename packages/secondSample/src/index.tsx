/* ******************************************************** */
/* 2023 © TheSprkl for React PROMO (www.thesprkl.io)      */
/* is a proprietary product developed by                    */
/* EGO Creative Innovations Limited (www.ego-cms.com)       */
/* This is a reduced demo version of TheSprkl, the rights   */
/* and terms of use of which are governed by a separate     */
/* commercial license.                                      */
/*                                                          */
/* This promo version is fully functional but contains a    */
/* limited number of items.                                 */
/*                                                          */
/* EULA https://www.thesprkl.io/legal/eula                  */
/* Support https://www.thesprkl.io/contact-us               */
/* Discord https://discord.gg/3qjXP9jCra                    */
/*                                                          */
/* ******************************************************** */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Theme } from 'sprkl'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Theme
          headlineTextStyles={{
            xxxs: 'font-size: 18px; line-height: 22px; letter-spacing: -0.24px;',
            xxxxs: 'font-size: 14px; line-height: 20px; letter-spacing: -0.2px;',
          }}
          bodyTextStyles={{
            xs: 'font-family: Inter; font-style: normal; font-weight: 400; font-size: 12px; line-height: 16px;',
          }}
          primaryColor="#8B5CF6"
          accentColor="#34D399"
          warningColor="#F43E5E"
          infoColor="#0EA5E9"
        >
          <App />
        </Theme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
