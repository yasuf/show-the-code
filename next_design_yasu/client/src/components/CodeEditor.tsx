// components/CodeEditor.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(import('@monaco-editor/react'), { ssr: false });

const CodeEditor = ({language}:any) => {
    return (
        <div style={{height: "100%"}}>
        <MonacoEditor
            height="100%"
            defaultLanguage="Javascript"
            defaultValue=" "
            theme="vs-white"
            language={language}
        />
        </div>
    );
};

export default CodeEditor;