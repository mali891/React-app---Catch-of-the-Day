import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

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

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" age={ 100 } />
                </div>
                <Order />
                <Inventory addFish={ this.addFish } />
            </div>
        );
    }
}

export default App;
