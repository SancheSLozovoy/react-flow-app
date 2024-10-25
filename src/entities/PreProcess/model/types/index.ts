import { NodeData } from "../../../../features/addNode/types";

export interface PreProcessNodeProps {
    data: NodeData & { 
        input3Value?: string; 
        updateNodeData: (id: string, data: NodeData) => void 
    };
    id: string;
    isConnectable: boolean;
}