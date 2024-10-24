import React, { useEffect, useRef, useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { PreProcessNodeProps } from '../model/types';
import './PreProcess.css';

const PreProcess: React.FC<PreProcessNodeProps> = ({ data, id, isConnectable }) => {
    const inputRef1 = useRef<HTMLInputElement>(null);
    const inputRef2 = useRef<HTMLInputElement>(null);
    const inputRef3 = useRef<HTMLInputElement>(null);
    const labelRef1 = useRef<HTMLLabelElement>(null);
    const labelRef2 = useRef<HTMLLabelElement>(null);
    const labelRef3 = useRef<HTMLLabelElement>(null);

    const [input1Value, setInput1Value] = useState(data.input1Value || '');
    const [input2Value, setInput2Value] = useState(data.input2Value || '');
    const [input3Value, setInput3Value] = useState(data.input3Value || '');
    const [label1Value, setLabel1Value] = useState(data.label1Value || 'Change');
    const [label2Value, setLabel2Value] = useState(data.label2Value || 'Change');
    const [label3Value, setLabel3Value] = useState(data.label3Value || 'Change');

    useEffect(() => {
        data.updateNodeData(id, {
            input1Value,
            input2Value,
            input3Value,
            label1Value,
            label2Value,
            label3Value
        });
    }, [input1Value, input2Value, input3Value, label1Value, label2Value, label3Value, id, data.updateNodeData]);

    useEffect(() => {
        setInput1Value(data.input1Value || '');
        setInput2Value(data.input2Value || '');
        setInput3Value(data.input3Value || '');
        setLabel1Value(data.label1Value || 'Change');
        setLabel2Value(data.label2Value || 'Change');
        setLabel3Value(data.label3Value || 'Change');
    }, [data]);

    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="handle target" />
            <div className='text-updeter-inner'>
                <label
                    ref={labelRef1}
                    className='label'
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    onBlur={() => setLabel1Value(labelRef1.current?.textContent || 'Change')}
                >
                    {label1Value}
                </label>
                <input
                    ref={inputRef1}
                    name="input1"
                    value={input1Value}
                    onChange={(e) => setInput1Value(e.target.value)}
                    className="nodrag"
                />
                <label
                    ref={labelRef2}
                    className='label'
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    onBlur={() => setLabel2Value(labelRef2.current?.textContent || 'Change')}
                >
                    {label2Value}
                </label>
                <input
                    ref={inputRef2}
                    name="input2"
                    value={input2Value}
                    onChange={(e) => setInput2Value(e.target.value)}
                    className="nodrag"
                />
                <label
                    ref={labelRef3}
                    className='label'
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    onBlur={() => setLabel3Value(labelRef3.current?.textContent || 'Change')}
                >
                    {label3Value}
                </label>
                <input
                    ref={inputRef3}
                    name="input3"
                    value={input3Value}
                    onChange={(e) => setInput3Value(e.target.value)}
                    className="nodrag"
                />
            </div>
        </div>
    );
};

export default PreProcess;
