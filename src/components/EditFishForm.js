import React from 'react';

class EditFishForm extends React.Component {
      handleChange = event => {
        console.log(event.currentTarget.value)
        //update the fish
        //1. Take copy of current fish
        const updatedFish = { ...this.props.fish, 
            [event.currentTarget.name]: event.currentTarget.value }
        console.log(updatedFish)
        //2. 
        this.props.updateFish(this.props.index, updatedFish)
      };
	render() {
		return (
			<div className="fish-edit">
				<input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name}/>
				<input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price}/>
                <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh !</option>
                    <option value="unavailable">Sold Out !</option>
				</select>
				<textarea type="text" name="desc" onChange={this.handleChange} value={this.props.fish.desc}/>
                <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image}/>
                <button type="submit" 
                onClick={() => this.props.deleteFish(this.props.index)}>
                Remove Fish</button>
			</div>
		);
	}
}

export default EditFishForm;
