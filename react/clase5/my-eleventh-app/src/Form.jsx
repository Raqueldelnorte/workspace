import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textArea: "Hello there, this is some text in a text area",
      select: "coconut",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert("textarea submitted: " + this.state.textArea);
    alert("select submitted: " + this.state.select);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Text area:
          <textarea
            value={this.state.textArea}
            name="textArea" // Cambié 'textarea' por 'textArea' para que coincida con el estado
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Pick your favorite flavor:
          <select
            value={this.state.select}
            name="select"
            onChange={this.handleChange}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
