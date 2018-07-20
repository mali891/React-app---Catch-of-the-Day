import React from 'react';

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    addFish = e => {
        e.preventDefault();

        const fish = {
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }

        this.props.addFish(fish);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form onSubmit={ this.addFish } className="fish-edit">
                <input ref={ this.nameRef } type="text" name="name" placeholder="Name" />
                <input ref={ this.priceRef } type="text" name="price" placeholder="Price" />
                <select ref={ this.statusRef } name="status" id="">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out</option>
                </select>
                <textarea ref={ this.descRef } name="name" placeholder="Desc"></textarea>
                <input ref={ this.imageRef } type="text" name="image" placeholder="Image"/>
                <button type="submit">Add Fish +</button>
            </form>
        )
    }
}

export default AddFishForm;