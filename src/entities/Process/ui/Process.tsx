import React, { useEffect, useRef, useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { ProcessNodeProps } from '../model/types';
import '../../PreProcess/ui/PreProcess.css';

const Process: React.FC<ProcessNodeProps> = ({ data, id, isConnectable }) => {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const labelRef1 = useRef<HTMLLabelElement>(null);
  const labelRef2 = useRef<HTMLLabelElement>(null);

  const [input1Value, setInput1Value] = useState(data.input1Value || '');
  const [input2Value, setInput2Value] = useState(data.input2Value || '');
  const [label1Value, setLabel1Value] = useState(data.label1Value);
  const [label2Value, setLabel2Value] = useState(data.label2Value);

  useEffect(() => {
    data.updateNodeData(id, {
      input1Value,
      input2Value,
      label1Value,
      label2Value,
    });
  }, [input1Value, input2Value, label1Value, label2Value, id, data.updateNodeData]);

  useEffect(() => {
    setInput1Value(data.input1Value || '');
    setInput2Value(data.input2Value || '');
    setLabel1Value(data.label1Value || '');
    setLabel2Value(data.label2Value || '');
  }, []);

  return (
    <div className="text-updater-node">
      <div className="text-updeter-inner">
        <label
          className='label'
          ref={labelRef1}
          contentEditable="true"
          suppressContentEditableWarning={true}
          onInput={() => setLabel1Value(labelRef1.current?.textContent || '')}
        >
          {label1Value}
        </label>
        <input
          ref={inputRef1}
          name="input1"
          value={input1Value}
          onChange={(e) => setInput1Value(e.target.value)}
        />
        <label
          className='label'
          ref={labelRef2}
          contentEditable="true"
          suppressContentEditableWarning={true}
          onInput={() => setLabel2Value(labelRef2.current?.textContent || '')}
        >
          {label2Value}
        </label>
        <input
          ref={inputRef2}
          name="input2"
          value={input2Value}
          onChange={(e) => setInput2Value(e.target.value)}
        />
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
};

export default Process;
