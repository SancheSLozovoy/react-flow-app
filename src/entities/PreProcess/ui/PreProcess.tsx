import React, { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { PreProcessNodeProps } from '../model/types';
import './PreProcess.css'


const PreProcess: React.FC<PreProcessNodeProps> = ({ data, isConnectable }) => {
    const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
            <div className='text-updeter-inner'>
                <label  className='label' contentEditable='true'>Change label</label>
                <input
                    name="text"
                    onChange={onChange}
                    className="nodrag"
                    value={data.text}
                />
                <label  className='label' contentEditable='true'>Change label</label>
                <input
                    name="text"
                    onChange={onChange}
                    className="nodrag"
                    value={data.text}
                />
                <label className='label' contentEditable='true'>Change label</label>
                <input
                    name="text"
                    onChange={onChange}
                    className="nodrag"
                    value={data.text}
                />
            </div>
        </div>
    );
};

export default PreProcess;
