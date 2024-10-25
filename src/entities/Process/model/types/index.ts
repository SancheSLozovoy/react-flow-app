import { NodeData } from "../../../../features/addNode/types";

export interface ProcessNodeProps {
    data: NodeData & { updateNodeData: (id: string, data: NodeData) => void };
    id: string;
    isConnectable: boolean;
}