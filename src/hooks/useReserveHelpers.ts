import { useMemo, useRef } from "react";
import { throttle } from "lodash";

export function useReserveHelpers() {
  const mapWidth = useRef<number>(60);
  const isResizing = useRef(false);

  const mapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLElement>(null); //Section Element
  
  function calculateGridColumns(mapWidth: number): string {
    const tablet = window.innerWidth < 1250;
    const breakpoints = [
      { width: 40, cols: 4 },
      { width: 55, cols: 3 },
      { width: 70, cols: 2 },
      { width: 80, cols: 1 },
    ];

    const columns =
      breakpoints.find((point) => mapWidth < point.width)?.cols || 4;
    return `repeat(${tablet ? columns - 1 : columns}, minmax(0, 1fr))`;
  }

  function setGridColumns() { //this logic must be separate as a function, cause we should pass it to our resize eventListener
    if (gridRef.current)
      gridRef.current.style.gridTemplateColumns = calculateGridColumns(
        mapWidth.current
      );
  }

  const startResizing = () => {
    isResizing.current = true;
    document.body.style.userSelect = 'none';
  };

  const handleResizing = (e: MouseEvent) => {
    if (!isResizing.current) return;

    const calculatedMapWidth = (e.clientX / window.innerWidth) * 100;

    if (window.innerWidth >= 1024) {
      if (calculatedMapWidth >= 20 && calculatedMapWidth < 80) {
        if (mapRef.current)
          mapRef.current.style.width = calculatedMapWidth + '%';
        if (cardRef.current)
          cardRef.current.style.width = 100 - calculatedMapWidth + '%';
        mapWidth.current = calculatedMapWidth; //set the map's width in a ref to be accessible outside of this function

        setGridColumns(); //wrapped this logic inside a function
      }
    }
  };

  const stopResizing = () => {
    isResizing.current = false;
    document.body.style.userSelect = '';
  };

  const throttledHandleResizing = useMemo(
    () => throttle(handleResizing, 100), []
  );
  const throttledSetGridColumns = useMemo(
    () => throttle(setGridColumns, 500), []
  );
  
  return {
    mapRef,
    cardRef,
    gridRef,
    startResizing,
    stopResizing,
    throttledHandleResizing,
    throttledSetGridColumns,
  };
}