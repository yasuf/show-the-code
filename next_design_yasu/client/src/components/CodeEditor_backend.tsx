// components/CodeEditor.tsx
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(import('@monaco-editor/react'), { ssr: false });

const CodeEditor_backend = ({file, language}:any) => {
    const [code, setCode] = useState('');

    useEffect(() => {
        const fetchCode = async () => {
            const response = await fetch(`/code/code_backend/${file}`);
            const codeText = await response.text();
            setCode(codeText);
        };
        fetchCode();}, [language]);

    return (
        <div className='h-[85%]'>
            <MonacoEditor
                height="100%"
                defaultLanguage="Javascript"
                // defaultValue=" "
                value={code}
                theme="vs-white"
                language={language}
                options={{ 
                    fontSize: 9.13,  
                    fontFamily: 'Cascadia Mono',
                    lineHeight: 10.61,
                    wordWrap: 'off',
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    automaticLayout: true, 
                }}
                onChange={(newValue) => setCode(newValue || "")}
            />
        </div>
    );
};

export default CodeEditor_backend;