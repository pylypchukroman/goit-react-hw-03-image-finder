import style from './Searchbar.module.css';
import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    input: '',
  };
  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    this.props.changeSearch(this.state.input);
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form className="form" onSubmit={this.hendleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            value={this.state.input}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
