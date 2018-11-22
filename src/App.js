import React, {Component} from 'react';
import './App.css';
import Terminal from 'terminal-in-react';

class App extends Component {
    locationData = {
        city: undefined,
        state: undefined
    };

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <Terminal
                    hideTopBar={true}
                    allowTabs={false}
                    startState='maximised'
                    color='green'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={{
                        'intro': () => 'echo Harshit Gupta\n B.tech CSE',
                        'github':()=>window.open('https://www.github.com/harshitsaamu/'),
                        'linkedin':()=>window.open('https://www.linkedin.com/in/harshithgc/'),
                        'resume':()=>window.open('https://www.linkedin.com/in/harshithgc/')
                    }}
                    descriptions={{
                        'intro': 'my introduction',
                        'github':'my github account',
                        'resume':'download my resume',
                        'linkedin':'lets\'s talk professionally'
                    }}
                    msg='Hey human Harshit here, how can I help you'
                />
            </div>
        );
    }
}

export default App;
