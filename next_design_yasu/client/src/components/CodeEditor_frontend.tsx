// components/CodeEditor.tsx
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(import('@monaco-editor/react'), { ssr: false });

const CodeEditor_frontend = ({file, language}:any) => {
    const [code, setCode] = useState('');

    useEffect(() => {
        const fetchCode = async () => {
            const response = await fetch(`/code/code_frontend/${file}`);
            const codeText = await response.text();
            setCode(codeText);
        };
        fetchCode();}, [language]);

    return (
        // <div className='h-[85%] border-b-[2px] border-[#000000]'>
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
                    padding: {
                        top: 28.76,
                        bottom: 20,
                    },
                    wordWrap: 'off',
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    automaticLayout: true, 
                    readOnly: true,
                    scrollbar: {
                        useShadows: false,
                        verticalScrollbarSize: 5,
                        horizontalScrollbarSize: 5,
                        vertical: 'auto',
                        horizontal: 'auto',
                    },
                    overviewRulerBorder: true,
                }}
                onChange={(newValue) => setCode(newValue || "")}
            />
        </div>
    );
};

export default CodeEditor_frontend;