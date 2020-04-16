import React from "react"
import "./SearchBar.css"

class SearchBar extends React.Component {
  state = { term: "" }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault()

    this.props.onFormSubmit(this.state.term)

    // make sure to call callback from parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>YouTube Search App</label>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
