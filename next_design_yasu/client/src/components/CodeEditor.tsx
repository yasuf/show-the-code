// components/CodeEditor.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(import('@monaco-editor/react'), { ssr: false });

const CodeEditor = () => {
    return (
        <div style={{height: "100%"}}>
        <MonacoEditor
            height="100%"
            defaultLanguage="javascript"
            defaultValue=" "
            theme="vs-white"
        />
        </div>
    );
};

export default CodeEditor;