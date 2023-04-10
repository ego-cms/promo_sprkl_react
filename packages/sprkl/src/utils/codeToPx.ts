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

export const codeToPx = (code: string, ThemeObj: any) =>
  code
    .split(' ')
    .map(item => (ThemeObj[item] ? ThemeObj[item] : item))
    .join(' ')
