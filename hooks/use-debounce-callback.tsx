/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useRef } from 'react';

type CallbackFunction<T extends (...args: any[]) => any> = T;

export function useDebounceCallback<T extends (...args: any[]) => any>(
  callback: CallbackFunction<T>,
  delay: number
) {
  const timerRef = useRef<any>(null);
  const callbackRef = useRef<any>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [debouncedCallback]);

  return debouncedCallback;
}
