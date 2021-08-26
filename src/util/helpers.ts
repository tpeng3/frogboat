import { COLORS } from "@util/constants";

// convert hex value to rgba for that sweet opacity
export const hexToRGBA = (hex: string, alpha?: string | number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

export const shuffle = (array) => {
  const shuffledArray = [...array];
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex], shuffledArray[currentIndex]];
  }

  return shuffledArray;
}

// helper function for adding screen breakpoint media queries in styled components
import { css } from "styled-components";
import { breakpoints } from "@util/constants";

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media screen and (min-width: ${breakpoints[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `.join("");
  return acc;
}, {} as Record<keyof typeof breakpoints, (l: TemplateStringsArray, ...p: any[]) => string>);

// font mixin
export const font = (
  fontSize: string,
  lineHeight?: string,
  fontWeight?: number | string,
  letterSpacing?: string
): string => `
  font-size: ${fontSize};
  line-height: ${lineHeight};
  font-weight: ${fontWeight};
  letter-spacing: ${letterSpacing};
`;

// elevation mixin
export const elevation = (level: number, color?: string): string => {
  const shadowColor = color
    ? [hexToRGBA(color, 0.3), hexToRGBA(color, 0.15)]
    : [hexToRGBA(COLORS.shadow, 0.3), hexToRGBA(COLORS.shadow, 0.15)];
  switch (level) {
    case 0:
      return `box-shadow: none;`;
    case 1:
      return `box-shadow: 0 1px 2px 0 ${shadowColor[0]}, 0 1px 3px 1px ${shadowColor[1]};`;
    case 2:
      return `box-shadow: 0 1px 2px 0 ${shadowColor[0]}, 0 2px 6px 2px ${shadowColor[1]};`;
    case 3:
      return `box-shadow: 0 1px 3px 0 ${shadowColor[0]}, 0 4px 8px 3px ${shadowColor[1]};`;
    case 4:
      return `box-shadow: 0 2px 3px 0 ${shadowColor[0]}, 0 6px 10px 4px ${shadowColor[1]};`;
    case 5:
      return `box-shadow: 0 4px 4px 0 ${shadowColor[0]}, 0 8px 12px 6px ${shadowColor[1]};`;
    default:
      return `box-shadow: none;`;
  }
};

export const getUniqueId = (prefix: string = Date.now().toString()) => {
  return `${prefix}-${Math.round(Math.random() * 1e10)}`;
};

/**
 * Group objects in an array by a property value.
 * @param array
 * @param key
 */
export const groupBy = (array: Array<any>, key: string): object => {
  if (array.length === 0) {
    return [];
  }
  return array.reduce((accumulator, currentValue) => {
    accumulator[currentValue[key]] = accumulator[currentValue[key]] || [];
    accumulator[currentValue[key]].push(currentValue);
    return accumulator;
  }, {});
};

const allScripts = new Map();
/**
 * Injects a singleton script into <head>.
 * @param url
 */
export const injectScript = (src: string | string[]) => {
  if (typeof src === "string") {
    return load(src);
  }

  return Promise.all(src.map((url) => load(url)));

  /**
   * Creates the script and injects into <head>
   * @param scriptSrc Script URL to load.
   */
  function load(scriptSrc: string) {
    const pending = allScripts.get(scriptSrc);

    if (pending) {
      return pending;
    }

    const newScript = document.createElement("script");
    newScript.src = scriptSrc;
    document.head.appendChild(newScript);

    const scriptPromise = new Promise((resolve, reject) => {
      newScript.onload = resolve;
      newScript.onerror = reject;
    });

    allScripts.set(scriptSrc, scriptPromise);
    return scriptPromise;
  }
};

/**
 * @example
 * sentenceCase('NONE') // None
 * @param str
 */
export const sentenceCase = (str: string): string => {
  return str.charAt(0) + str.slice(1).toLowerCase();
};

/*
 * Checks if the current route contains a given route
 */
export const isRouteActive = (
  baseRoute: string,
  currentRoute: string
): boolean => {
  return currentRoute.indexOf(baseRoute.replace(/\/$/, "")) > -1;
};

/*
 * Create a slug out of a string
 * i.e. `This is this original` --> `this-is-the-original`
 */
export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

/**
 * Returns the absolute position of an element based on the document.
 * @param el Element to get position of.
 */
export const getElementY = (el) => {
  let yPos = 0;
  while (el) {
    yPos += el.offsetTop + el.clientTop;
    el = el.offsetParent;
  }
  return yPos;
};

// export const getElementX = (el: HTMLElement, stopAt?: string) => {
//   let xPos = 0;
//   while (el) {
//     xPos += el.offsetLeft + el.clientLeft;
//     if (!el.parentElement.className.includes(stopAt)) {
//       el = el.offsetParent as HTMLElement;
//     } else {
//       el = null;
//     }
//   }
//   return xPos;
// };

/**
 * Check userAgent for iOS specific fixes.
 */
// export const isIOS = (): boolean => {
//   if (isRunningInBrowser) {
//     return /iPad|iPhone/.test(navigator.userAgent);
//   }
//   return false;
// };

/**
 * Remove trailing slash on url string
 */
export const removeTrailingSlash = (url: string) => {
  return url.replace(/\/$/, "");
};

/**
 * Get video ID from youtube URL
 */
export const parseVideoId = (url: string): string => {
  var regExp =
    /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/;
  var match = url.match(regExp);
  return match ? match[5] : "";
};

/**
 * Allows you to open a link in a new tab.
 * Good for onClick events that should open external links.
 */
export const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener");
  if (newWindow) newWindow.opener = null;
};

// set a cookie with a expiration time
export const setCookie = ({ value, name, expire }) => {
  const now = new Date();
  const time = now.getTime();
  //set cookie expiration
  const expireTime = time + expire * 60 * 60 * 1000;
  now.setTime(expireTime);
  // set cookie in the document
  document.cookie = `${name}=${value};expires=` + now.toUTCString() + ";path=/";
};

// export const getCookie = name => {
//   const cookieList = document.cookie.split(';');
//   let currentCookie = cookieList.find(cookie => cookie.indexOf(name) !== -1);
//   if (Boolean(currentCookie)) {
//     const cookieValues = currentCookie.trim().split('=');
//     return {
//       key: cookieValues[0],
//       value: cookieValues[1],
//     };
//   }
//   return null;
// };

// export const deleteCookie = (name: string): void => {
//   const cookie = getCookie(name);
//   if (cookie && cookie.key) {
//     document.cookie =
//       name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
//   }
// };

// export const getLanguage = () => {
//   const fallback = ['en', 'es-419', 'pt-BR', 'fr', 'id', 'ko', 'zh-CN', 'ja'];
//   let navLanguage = 'en';
//   const langIndex = v =>
//     fallback.findIndex(
//       item => item.toLowerCase().trim() === v.toLowerCase().trim(),
//     );
//   if (isRunningInBrowser) {
//     navLanguage = navigator.language;
//     if (navLanguage.toLowerCase().startsWith('es')) {
//       navLanguage = 'es-419';
//     }
//     if (langIndex(navLanguage) === -1) {
//       navLanguage = fallback[0];
//     }
//   }
//   return navLanguage;
// };
