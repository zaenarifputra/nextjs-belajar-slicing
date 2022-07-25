import * as React from 'react';
import useResizeObserver from '@react-hook/resize-observer';

const useSize = (target: any) => {
  const [size, setSize] = React.useState();

  React.useLayoutEffect(() => {
    target && setSize(target.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry: any) => setSize(entry.contentRect));
  return size;
};

export default useSize;
