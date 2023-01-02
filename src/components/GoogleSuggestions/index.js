import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  changeSearchValue = suggestion => {
    const value = suggestion
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="google-search-container">
            <div className="search-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                className="search-input"
                type="search"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul className="suggestions-container">
              {searchResults.map(eachResult => (
                <SuggestionItem
                  key={eachResult.id}
                  suggestions={eachResult}
                  changeSearchValue={this.changeSearchValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
