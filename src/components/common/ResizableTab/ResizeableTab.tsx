import styled from "@emotion/styled";
import React, {
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { resizeTab } from "../../../lib/utils/tabResize";

interface ResizableTabProps {
  parentRef?: React.ReactNode;
  position?: tabPosition;
  children: React.ReactNode;
}

export type tabState = {
  onHandling: boolean;
  position: tabPosition;
  width: string;
  height: string;
};

export type tabPosition = "left" | "right" | "bottom";

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

    // setTabState({
    //   ...tabState,
    //   onHandling: true,
    // });
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
    <ResizableTabWrapper ref={ref} position={position}>
      {position === "left" && (
        <ResizeSide
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          position={position}
        />
      )}
      {position === "bottom" && (
        <ResizeSideBottom
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        />
      )}
      <ResizeChildren>{children}</ResizeChildren>
    </ResizableTabWrapper>
  );
};

export default ResizableTab;

const ResizableTabWrapper = styled.div<tabProps>`
  position: absolute;
  bottom: ${(props) => (props.position === "bottom" ? 0 : "")};
  height: 100%;
  width: 100%;
  background-color: blue;
  z-index: 1;
`;

type tabProps = {
  position: tabPosition;
};

const ResizeSide = styled.div<tabProps>`
  position: absolute;
  z-index: 1;
  right: 0;
  top: ${(props) => props.position === "bottom" && 0};
  width: 10px;
  height: 100%;
  /* background-color: red; */
  transform: translateX(50%);

  &:hover {
    cursor: col-resize;
  }
`;
const ResizeSideBottom = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 10px;
  /* background-color: blue; */
  transform: translateY(-50%);

  &:hover {
    cursor: row-resize;
  }
`;

const ResizeChildren = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: pink;
  overflow: hidden;
  &:hover {
    cursor: default;
  }
`;
