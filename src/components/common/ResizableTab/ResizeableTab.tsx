import React, {
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { tabPosition, tabState } from "../../../lib/types/resizeableTab";
import { resizeTab } from "../../../lib/utils/tabResize";
import * as S from "./style";

interface ResizableTabProps {
  parentRef?: React.ReactNode;
  position?: tabPosition;
  children: React.ReactNode;
}

const setInitState: (position: tabPosition) => tabState = (
  position: tabPosition
) => {
  const result: tabState = {
    onHandling: false,
    position: position,
    width: "30vw",
    height: "100%",
  };
  switch (position) {
    case "left": {
      return { ...result };
    }
    case "right": {
      return { ...result };
    }
    case "bottom": {
      return { ...result, width: "100%", height: "30vh" };
    }
  }
};

const ResizableTab: React.FC<ResizableTabProps> = ({
  parentRef,
  position = "left",
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const initState: tabState = setInitState(position);
  const [tabState, setTabState] = useState<tabState>(initState);

  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;

    switch (position) {
      case "left": {
        setTabState({
          ...tabState,
          onHandling: true,
        });
        target.style.setProperty("padding", "100vw");

        return;
      }
      case "bottom": {
        setTabState({
          ...tabState,
          onHandling: true,
        });
        target.style.setProperty("padding", "100vh ");
        return;
      }
    }
  };
  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
    // console.log("마우스 움직임", tabState.onHandling);
    const { onHandling, position } = tabState;
    if (onHandling) {
      switch (position) {
        case "left": {
          setTabState({
            ...tabState,
            width: `${e.clientX}px`,
          });
          return;
        }
        case "bottom": {
          let height = window.innerHeight - e.clientY;
          if (e.clientY < 50) {
            height = window.innerHeight - 50;
          }
          setTabState({
            ...tabState,
            height: `${height}px`,
          });
          return;
        }
      }
    }
  };

  const onMouseUp: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    // console.log("마우스 들어올림", tabState.onHandling);
    setTabState({
      ...tabState,
      onHandling: false,
    });
    target.style.setProperty("padding", "0px");
    target.style.setProperty("top", "0px");
  };

  useEffect(() => {
    resizeTab({ ref, tabState });
  }, [tabState]);

  return (
    <S.ResizableTabWrapper ref={ref} position={position}>
      {position === "left" && (
        <S.ResizeSide
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          position={position}
        />
      )}
      {position === "bottom" && (
        <S.ResizeSideBottom
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        />
      )}
      <S.ResizeChildren>{children}</S.ResizeChildren>
    </S.ResizableTabWrapper>
  );
};

export default ResizableTab;
