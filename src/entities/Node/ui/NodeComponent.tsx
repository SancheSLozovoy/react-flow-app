import React, { useEffect, useRef, useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { NodeComponentProps } from '../model';

const NodeComponent: React.FC<NodeComponentProps> = ({ data, id, isConnectable }) => {
    const labelRefs = [useRef<HTMLLabelElement>(null), useRef<HTMLLabelElement>(null), useRef<HTMLLabelElement>(null)];
    const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

    const [values, setValues] = useState(
        data.inputs.map((input: string, idx: number) => data[input] || '')
    );

    useEffect(() => {
        data.updateNodeData(id, values.reduce((acc, val, idx) => ({
            ...acc,
            [data.inputs[idx]]: val
        }), {}));
    }, [values, id, data.updateNodeData, data.inputs]);

    useEffect(() => {
        setValues(data.inputs.map((input: string) => data[input] || ''));
    }, [data]);

    const handleChange = (index: number, value: string) => {
        setValues(prev => prev.map((val, idx) => idx === index ? value : val));
    };

    return (
        <div className="text-updater-node">
            <div className="text-updater-inner">
                {data.inputs.map((input, index) => (
                    <React.Fragment key={input}>
                        <label
                            className="label"
                            ref={labelRefs[index]}
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            onBlur={() => handleChange(index, labelRefs[index].current?.textContent || 'Change')}
                        >
                            {values[index]}
                        </label>
                        <input
                            ref={inputRefs[index]}
                            name={input}
                            value={values[index]}
                            onChange={(e) => handleChange(index, e.target.value)}
                            className="nodrag"
                        />
                    </React.Fragment>
                ))}
            </div>
            <Handle className="handle" type="source" position={Position.Bottom} isConnectable={isConnectable} />
        </div>
    );
};

export default NodeComponent;
