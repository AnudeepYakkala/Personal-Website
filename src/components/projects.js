import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck';

import BudgerManager from './images/BudgetManager.jpg';
import betterbnb from './images/betterbnb.jpg';
import Heart from './images/Heart.jpg';
import SafeWalk from './images/SafeWalk.jpg';
import TicTacToe from './images/TicTacToe.jpg';
import TradingBot from './images/TradingBot.jpg';

import './projects.css'

export default class Projects extends React.Component {
    render() {
        return (
            <div className="projects-color">
                <h1 class="project-title">PROJECTS</h1>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={betterbnb}/>
                        <Card.Body>
                            <p class="card-text"><b>Betterbnb </b>A web application that provides booking website users a more complete and honest view of the listings being recommended to them. Users are provided with crime statistics, notable nearby attractions, weather information, population statistics, and nearby lodging. This will allow users to make a more informed decision when using a booking website such as airbnb.</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={TradingBot}/>
                        <Card.Body>
                            <p class="card-text"><b>PaperBot </b>A web application that allows users to create educational paper trading bots. Users are able to configure certain events that could set off a buy or a sell order such as if a specific term is trending on twitter. This gives users the ability to create a trading algorithm from scratch and use what they learn from it to make more informed decisions about the stock market.</p>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={BudgerManager}/>
                        <Card.Body>
                            <p class="card-text"><b>Budget Manager </b>A group project made during Purdue's BoilerMake Hackathon. We wanted to create a tool for students to effectively manage their finances. This application allows users to track their monthly spending. It also creates personalized spending goals so that users can save money to buy items that they add to their "wishlist".</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={SafeWalk}/>
                        <Card.Body>
                            <p class="card-text"><b>SafeWalk </b>Worked with the Purdue Police Department to develop a mobile application that modernizes the Purdue safe-walk program to make it more accessible for students. When requesting the SafeWalk service, students can simply share their location through the mobile application instead of having to describe it over the phone.</p>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={TicTacToe}/>
                        <Card.Body>
                            <p class="card-text"><b>Tic-Tac-Toe AI </b>An unbeatable tic-tac-toe AI built using the min-max algorithm. This was a project I built over my freshman year summer when I first started learning about various Artificial Intelligence techniques.</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Heart}/>
                        <Card.Body>
                            <p class="card-text"><b>Heart Disease Predictor </b>Used a Cleveland heart disease dataset to train multiple deep learning models. Found that a random forest classifier model produced the best results. The model predicts with an 84.6% accuracy if someone has Heart Disease using factors such as age, blood pressure, and heart rate.</p>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}