import React, { useState, useEffect, useRef } from 'react';
import { TabList } from './Scrollable.styled';

export const Scrollable = props => {
  let ref = useRef();
  const [state, setState] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = e => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 4,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);

      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  const onMouseMove = e => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      return;
    }
    e.preventDefault();

    const { clientX, scrollX, isScrolling } = state;
    if (isScrolling) {
      ref.current.scrollLeft = scrollX + e.clientX - clientX;

      setState({
        ...state,
        scrollX: scrollX + e.clientX - clientX,
        clientX: e.clientX,
      });
    }
  };

  const onMouseUp = e => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      return;
    }
    setState({ ...state, isScrolling: true, clientX: e.clientX });
    e.preventDefault();
  };

  const onMouseDown = e => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      return;
    }
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };
  });

  return (
    <TabList
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {React.Children.map(props.children, child => React.Children.only(child))}
    </TabList>
  );
};
