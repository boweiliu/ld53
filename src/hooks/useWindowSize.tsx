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

export function useWindowSize() {
  if (isOrientationRotated()) {
    // window sizes are not rotated, but screen might be
    return {
      width: Math.min(
        window.innerWidth ?? Infinity,
        window.screen?.height ?? Infinity,
        window.screen?.availHeight ?? Infinity
      ),
      height: Math.min(
        window.innerHeight ?? Infinity,
        window.screen?.width ?? Infinity,
        window.screen?.availWidth ?? Infinity
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
      window.screen?.height ?? Infinity,
      window.screen?.availHeight ?? Infinity
    ),
  };
}
