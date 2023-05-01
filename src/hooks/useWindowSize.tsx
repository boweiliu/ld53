function isOrientationRotated() {
  let isRotated: boolean;
  const screenOrientation = window.screen?.orientation;
  if (screenOrientation) {
    if (screenOrientation.angle === 0) {
      isRotated = false;
    } else {
      isRotated = true;
    }
  } else {
    // fallback path for safari ios which does not support screenOrientation api
    const orientation = window?.orientation;
    if (typeof orientation === 'number') {
      if (orientation === 0) {
        isRotated = false;
      } else {
        isRotated = true;
      }
    } else {
      // we can't tell the orientation at all, assume false
      isRotated = false;
    }
  }
  return isRotated;
}

function isIframe(): boolean {
  // we're definitely inside a sandboxed iframe
  if (window.origin === null || window.origin === 'null') {
    return true;
  }
  // not sure, just return false
  return false;
}

function getIsLandscape(): boolean {
  const height = window.screen?.height;
  const width = window.screen?.width;
  let isLandscape: boolean;
  if (height && width && height < width) {
    isLandscape = true;
  } else {
    isLandscape = false;
  }

  if (isOrientationRotated()) {
    return !isLandscape;
  }
  return isLandscape;
}

/**
 * Are you running in an iframe (in which case window inner width/height is unhelpful) or ordinary web site (noiframe) or fullscreen?
 * Are you running in desktop or mobile? (mobile has extra addressbar/tabbar toggle state)
 * Are you portrait or landscape?
 *
 * This function should:
 *   - iframe, desktop, *: use iframe size (window innerwidth/height) since desktops are big enough
 *   - noframe, desktop, *: use window size  because we want to expand to fill
 *   - fullscreen, desktop, *: same
 *   - iframe, mobile, portrait: if the iframe is too big, shrink down to what we think the portrait size is, NOT taking into account address bar (since we assume user can get rid of it)
 *   - noframe, mobile, portrait: use window size but also shrink down and take into account full size address bar
 *   - fullscreen, mobile, *: not sure, but probably window size would work here for  both portrait and landscape
 *   - iframe, mobile, landscape: take into account the 64px ludum dare header bar
 *   - noframe, mobile, landscape: window inner sizes should work
 *   - fullscreen, mobile, landscape: not sure, but probably window size would work here.
 */
export function useWindowSize() {
  return { getWindowSize, ...getWindowSize(false) };
}

export function getWindowSize(isFullscreen: boolean) {
  const windowSize = { h: window.innerHeight, w: window.innerWidth };
  let screenSize = {
    h: Math.min(
      window.screen?.height ?? Infinity,
      window.screen?.availHeight ?? Infinity
    ),
    w: Math.min(
      window.screen?.width ?? Infinity,
      window.screen?.availWidth ?? Infinity
    ),
  };
  // user has rotated their device, we need to swap the effective width and height
  if (isOrientationRotated()) {
    screenSize = { h: screenSize.w, w: screenSize.h };
  }

  const isLandscape = getIsLandscape();

  const defaultResult = {
    width: Math.min(windowSize.w, screenSize.w),
    height: Math.min(windowSize.h, screenSize.h),
    isLandscape,
  } as const;
  if (isFullscreen) {
    return defaultResult;
  }
  if (isIframe()) {
    if (isLandscape) {
      return {
        width: Math.min(windowSize.w, screenSize.w - 76), // ios safari landscape mode padding = 693 - 617 = 76
        height: Math.min(windowSize.h, screenSize.h - 64), // ldjam site header
        isLandscape,
      };
    }
    // window inner height/width doesnt work from inside iframe, so this is close -- for my ios safari, with bars expanded, 693 - 527 = 166, or 693 - 636 = 57
    return {
      width: Math.min(windowSize.w, screenSize.w),
      height: Math.min(windowSize.h, screenSize.h - 64), // minimized mobile address bars
      isLandscape,
    };
  }
  return defaultResult;
}
