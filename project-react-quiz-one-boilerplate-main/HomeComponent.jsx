import React from 'react';
import './HomeComponent.css';

class HomeComponent extends React.Component {
    render() {
        return (
            <div className="home-container">
                <h1>Welcome to Quiz App</h1>
                <button className="start-button">Start Quiz</button>
            </div>
        );
    }
}

export default HomeComponent;
