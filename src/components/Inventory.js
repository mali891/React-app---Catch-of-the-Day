import React from "react";
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    state = {
        fishes: {}
    }

    addFish = (fish) => {
        //This is wrong
        this.setState({
            fishes: fish
        })

        console.log(this.state)
    }

    render() {
        return (
            <div className="inventory">
                <AddFishForm addFish={ this.addFish } />            
            </div>
        )
    }
}

export default Inventory;
