
import { Node } from '@xyflow/react';

export interface NodeComponentProps {
  id: Node;

  data: {
    inputs: string[];


    updateNodeData: (id: Node, newData: Record<string, any>) => void;

    [key: string]: any;
  };

  isConnectable: boolean;
}
