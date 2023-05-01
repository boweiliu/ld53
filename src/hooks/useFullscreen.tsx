import { RefObject, useRef, useCallback, useState } from 'react';

export interface FullscreenContext {
  isFullscreen: boolean;
  makeFullscreen: () => Promise<void>;
  clearFullscreen: () => Promise<void>;
  toggleFullscreen: () => Promise<void>;
}

export function useFullscreen(props: {
  ref: RefObject<HTMLDivElement>;
}): FullscreenContext {
  const { ref } = props;
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isChangingFullscreen, setIsChangingFullscreen] =
    useState<boolean>(false);
  const [fullscreenError, setFullscreenError] = useState<Error | null>(null);

  const makeFullscreen = useCallback(() => {
    if (ref.current) {
      const el = ref.current;
      return el
        .requestFullscreen?.()
        .then(() => {
          setIsFullscreen(true);
        })
        .catch((e) => {
          setFullscreenError(e);
        });
    }
    return Promise.resolve();
  }, [ref]);

  const clearFullscreen = useCallback(() => {
    return window.document
      ?.exitFullscreen?.()
      .then(() => {
        setIsFullscreen(false);
      })
      .catch((e) => {
        setFullscreenError(e);
      });
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      return clearFullscreen();
    }
    return makeFullscreen();
  }, [clearFullscreen, makeFullscreen, isFullscreen]);

  return { isFullscreen, makeFullscreen, clearFullscreen, toggleFullscreen };
}
