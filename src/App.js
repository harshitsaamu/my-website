import React, {Component} from 'react';
import './App.css';
import Terminal from 'terminal-in-react';

class App extends Component {
    projectsData = {
        projects: undefined
    };

    static getRepos() {
        fetch(`https://api.github.com/users/harshitsaamu/repos`)
            .then(data => {
                return data.json()
            }).then(data => {
            for (let i in data) {
                let repo = data[i];
                if (repo.owner.login === 'harshitsaamu')
                    console.log(repo.name);
            }
        })
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
                    style={{fontWeight: "bold", fontSize: "1em"}}
                    commands={{
                        'intro': () => 'Harshit Gupta\nB.Tech(CSE)\tSRM UNIVERSITY\tFinal Year\nGeek ;p',
                        'github': () => window.open('https://www.github.com/harshitsaamu/'),
                        'linkedin': () => window.open('https://www.linkedin.com/in/harshithgc/'),
                        'resume': () => window.open('https://www.linkedin.com/in/harshithgc/'),
                        'projects': () => App.getRepos()
                    }}
                    descriptions={{
                        'intro': 'my introduction',
                        'github': 'my github account',
                        'resume': 'download my resume',
                        'linkedin': 'lets\'s have a professionally talk',
                        'projects': 'Some of my awesome projects :)'
                    }}
                    msg='Hey human Harshit here, how can I help you'
                />
            </div>
        );
    }
}

export default App;
