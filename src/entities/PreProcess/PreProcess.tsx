import React, { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';

interface ProcessNodeProps {
    data: {
        text: string;
    };
    isConnectable: boolean;
}

const Process: React.FC<ProcessNodeProps> = ({ data, isConnectable }) => {
    const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="text-updater-node">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="text">Label</label>
                <input
                    id="text"
                    name="text"
                    onChange={onChange}
                    className="nodrag"
                    value={data.text}
                />
                <label htmlFor="text">Label</label>
                <input
                    id="text"
                    name="text"
                    onChange={onChange}
                    className="nodrag"
                    value={data.text}
                />
                <label htmlFor="text">Label</label>
                <input
                    id="text"
                    name="text"
                    onChange={onChange}
                    className="nodrag"
                    value={data.text}
                />
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                isConnectable={isConnectable}
            />
        </div>
    );
};

export default Process;