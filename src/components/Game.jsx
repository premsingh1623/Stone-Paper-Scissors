import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Game.module.scss';


function Game() {
    const [Chosen, setChosen] = useState(null);
    const [Comp, setComp] = useState(null);
    const [Won, setWon] = useState(null);
    const [Match, setMatch] = useState(0);
    const [Userpoint, setUserpoint] = useState(0);
    const [Comppoint, setComppoint] = useState(0);


    let choices = ["stone", "paper", "scissors"];

    const userChoice = (value) => {
        setChosen(value)
        let compChoice = choices[Math.floor(Math.random() * choices.length)]
        setComp(compChoice)
        let match = Match + 1
        setMatch(match)
        result(value, compChoice)
    }



    const result = (user, computer) => {

        switch (user + computer) {
            case 'scissorspaper':
            case 'paperstone':
            case 'stonescissors':
                let userpoint = Userpoint + 1
                setUserpoint(userpoint)
                break
            case 'stonepaper':
            case 'paperscissors':
            case 'scissorsstone':
                let comppoint = Comppoint + 1
                setComppoint(comppoint)
                break
        }

    }

    useEffect(() => {
        endMatch(Match)

    }, [Match],[Comp],[Chosen]);

    const endMatch = (number) => {
            if (number > 4) {
                if (Userpoint > Comppoint) {
                    let user = "User won"
                    setWon('user won')
                } else if (Comppoint > Userpoint) {
                    let computer = "Computer Won"
                    setWon(computer)
                } else {
                    let draw = "Draw"
                    setWon(draw)
                }
            }
        }

const reset = () => {
    setChosen(null)
    setComp(null)
    setWon(null)
    setMatch(0)
    setUserpoint(0)
    setComppoint(0)
}


return (
    <div className="container">
        <h1><span>Total turn = 5 </span>Turns left = {5 - Match}</h1>
        {choices.map((choice, index) => <button disabled={(Match >= 5) ? true : false} key={index} onClick={() => userChoice(choice)}>{choice}</button>)}
        
        {/* <button onClick={() => userchoice('Stone')}>Stone</button>
            <button onClick={() => userchoice('Paper')}>Paper</button>
            <button onClick={() => userchoice('Scissors')}>Scissors</button> */}
        <h1>You Chose - '{Chosen}'</h1>
        <h1>Computer Chose - '{Comp}'</h1>
        <h1>{Won}</h1>
        <h1>User point/s : {Userpoint}</h1>
        <h1>Computer point/s : {Comppoint}</h1>
        <button onClick={() => reset()}>Replay</button>

    </div>
);
}

export default Game;
