import './index.css'

const SuggestionItem = props => {
  const {suggestions, changeSearchValue} = props
  const {suggestion} = suggestions

  const onClickArrow = () => {
    changeSearchValue(suggestion)
  }

  return (
    <li className="list-item-container">
      <p className="suggestion-text">{suggestion}</p>
      <button onClick={onClickArrow} className="button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-mark"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
