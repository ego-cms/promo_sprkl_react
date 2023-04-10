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

export const hexToRgbaToRgb = (hexCode: string, a: number) => {
  let hex = hexCode.charAt(0) === '#' ? hexCode.substring(1) : hexCode

  const checkHex = hex.match(/[ABCDEFabcdef0-9]{3,6}/g)
  if (hex.length !== 6 && hex.length !== 3) {
    throw 'Only hex values with 3 or 6 digits allowed.'
  } else if (checkHex === null || (checkHex[0].length !== 3 && checkHex[0].length !== 6)) {
    throw 'hex value out of bounds.'
  }

  if (hex.length === 3) {
    hex = hex.replace(/.{1,1}/g, '$&$&')
  }

  const rgb = hex.match(/.{1,2}/g)

  const [r, g, b] = [parseInt(rgb[0], 16), parseInt(rgb[1], 16), parseInt(rgb[2], 16)]

  const r3 = Math.round((1 - a) * 255 + a * r)
  const g3 = Math.round((1 - a) * 255 + a * g)
  const b3 = Math.round((1 - a) * 255 + a * b)

  return 'rgb(' + r3 + ',' + g3 + ',' + b3 + ')'
}
