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
  // window size API  is not rotated, but screen values are
  if (isOrientationRotated()) {
    // generally a mobile device
    return {
      width: Math.min(
        window.innerWidth ?? Infinity,
        window.screen?.height ?? Infinity,
        window.screen?.availHeight ?? Infinity
      ),
      height: Math.min(
        window.innerHeight ?? Infinity,
        Math.min(
          window.screen?.width ?? Infinity,
          window.screen?.availWidth ?? Infinity
        ) - 64 // padding for the bar at the top of ldjam website
      ),
    };
  }
  return {
    width: Math.min(
      window.innerWidth ?? Infinity,
      window.screen?.width ?? Infinity,
      window.screen?.availWidth ?? Infinity
    ),
    height: Math.min(
      window.innerHeight ?? Infinity,
      Math.min(
        window.screen?.height ?? Infinity,
        window.screen?.availHeight ?? Infinity
      ) - 80 // window inner height/width doesnt work from inside iframe, so this is close -- for my ios safari, with bars expanded, 693 - 527 = 166, or 693 - 636 = 57
    ),
  };
}
