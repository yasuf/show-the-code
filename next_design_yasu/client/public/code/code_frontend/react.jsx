// This is react code sample.
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [greeting, setGreeting] = React.useState('Hello, World!');

    return (
        <div>
            <h1>{greeting}</h1>
            <button onClick={() => setGreeting('Hello, React!')}>Change Greeting</button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
