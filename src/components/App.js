import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import { Object } from "core-js";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }

    addFish = (fish) => {
        const newFish = { ...this.state.fishes };

        newFish[`Fish${Date.now()}`] = fish;

        this.setState({
            fishes: newFish
        })
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes })

        Object.keys(this.state.fishes).map(fish => console.log(fish.desc))
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        { Object.keys(this.state.fishes).map(fish => 
                            <Fish 
                            key={ fish } 
                            details={ this.state.fishes[fish] } 
                        />) }
                    </ul>
                </div>
                <Order />
                <Inventory addFish={ this.addFish } loadSampleFishes={ this.loadSampleFishes } />
            </div>
        );
    }
}

export default App;
