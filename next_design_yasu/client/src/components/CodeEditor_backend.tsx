// components/CodeEditor.tsx
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// const Prism = require('prismjs');
const code = `var data = 1;`;

// Returns a highlighted HTML string
// const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');


const MonacoEditor = dynamic(import('@monaco-editor/react'), { ssr: false });

const CodeEditor_backend = ({file, language}:any) => {
    const [code, setCode] = useState('');

    useEffect(() => {
        const fetchCode = async () => {
        try {
            const response = await fetch(`/code/code_backend/${file}`);
            if(!response.ok) {
                throw new Error('Failed to fetch code');
            }
            const codeText = await response.text();
            setCode(codeText);
            } catch(error) {
                console.error('Error Fetching code:', error);
            }
        };
        fetchCode();}, [language]);

    useEffect(() => {
        console.log(language);
    }, [language])

    return (
        <div className='h-[85%] flex flex-row'>
            <div className='bg-gradient-to-r from-[#eae8e8] to-[#ffffff] min-w-[9.7px]'></div>
            <MonacoEditor
                height="100%"
                defaultLanguage={code}
                // defaultValue=" "
                value={code}
                theme="vs-white"
                language={language}
                options={{
                    fontSize: 12,
                    fontFamily: 'Cascadia Mono',
                    lineHeight: 15,
                    padding: {
                        top: 28.76,
                        bottom: 20,
                    },
                    wordWrap: 'off',
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    readOnly: true,
                    rulers: [],
                    overviewRulerBorder: false,
                    lineDecorationsWidth: 0,
                    scrollbar: {
                        useShadows: false,
                        verticalScrollbarSize: 5,
                        horizontalScrollbarSize: 5,
                        vertical: 'auto',
                        horizontal: 'auto',
                    },
                }}
                onChange={(newValue) => setCode(newValue || "")}
            />
        </div>
    );
};

export default CodeEditor_backend;
