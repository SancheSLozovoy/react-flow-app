export interface ProcessNodeProps {
    id: string;
    data: {
        input1Value?: string;
        input2Value?: string;
        label1Value?: string;
        label2Value?: string;
        updateNodeData: (id: string, newData: any) => void;
    };
    isConnectable: boolean;
    
}
