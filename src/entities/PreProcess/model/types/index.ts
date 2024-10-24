export interface PreProcessNodeProps {
    id: string;
    data: {
        input1Value?: string;
        input2Value?: string;
        input3Value?: string;
        label1Value?: string;
        label2Value?: string;
        label3Value?: string;
        updateNodeData: (id: string, newData: any) => void;
    };
    isConnectable: boolean;
    
}
