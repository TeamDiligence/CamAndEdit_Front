import { tabState } from "../../components/common/ResizableTab/ResizeableTab";


export const resizeTab = ({ ref, tabState }: { ref: React.RefObject<HTMLDivElement>, tabState: tabState }) => {
   ref.current!.style.setProperty('width',`calc(${tabState.width})`);
   ref.current!.style.setProperty('height',`calc(${tabState.height})`);
}