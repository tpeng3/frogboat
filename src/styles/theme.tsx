import { hexToRGBA } from '@util/helpers';
import { breakpoints, COLORS } from '@util/constants';

const defaultShadowColor = `${hexToRGBA(COLORS.shadow, .30)} ${hexToRGBA(COLORS.shadow, .15)}`
const coloredShadowColor = (color) => `${hexToRGBA(color, .30)} ${hexToRGBA(color, .15)}`

export default {
  screens: {
    // max-widths in pixels
    ...breakpoints
  },
  mobile:
    `@media screen and (min-width: ${props => props.mobile})
    @content`,
  tablet:
    `@media screen and (min-width: ${props => props.tablet})
    @content`,
  laptop:
    `@media screen and (min-width: ${props => props.laptop})
      @content`,
  desktop:
    `@media screen and (min-width: ${props => props.desktop})
      @content`,
  colors: {
    blue: "#0099ff",
    darkblue: "#00072e",
    orange: "#FF9429",
    shadow: "#606467"
  },
  opacity: {
    0: 0,
    25: 0.25,
    50: 0.5,
    75: 0.75,
    100: 1,
  },
  py: (value: number | string) =>
    `padding-top: ${value}; padding-bottom: ${value};`,
  // elevation mixins
  elevation0: () =>
    `box-shadow: none`,
  elevation1: (color: string) => {
    const shadowColor = color ? coloredShadowColor(color) : defaultShadowColor
    return `box-shadow: 0 1px 2px 0 nth(${shadowColor}, 1), 0 1px 3px 1px nth(${shadowColor}, 2)`
  },
  elevation2: (color: string) => {
    const shadowColor = color ? coloredShadowColor(color) : defaultShadowColor
    return `box-shadow: 0 1px 2px 0 nth(${shadowColor}, 1), 0 2px 6px 2px nth(${shadowColor}, 2)`
  },
  elevation3: (color: string) => {
    const shadowColor = color ? coloredShadowColor(color) : defaultShadowColor
    return `box-shadow: 0 1px 3px 0 nth(${shadowColor}, 1), 0 4px 8px 3px nth(${shadowColor}, 2)`
  },
  elevation4: (color: string) => {
    const shadowColor = color ? coloredShadowColor(color) : defaultShadowColor
    return `box-shadow: 0 2px 3px 0 nth(${shadowColor}, 1), 0 6px 10px 4px nth(${shadowColor}, 2)`
  },
  elevation5: (color: string) => {
    const shadowColor = color ? coloredShadowColor(color) : defaultShadowColor
    return `box-shadow: 0 4px 4px 0 nth(${shadowColor}, 1), 0 8px 12px 6px nth(${shadowColor}, 2)`
  }
};
