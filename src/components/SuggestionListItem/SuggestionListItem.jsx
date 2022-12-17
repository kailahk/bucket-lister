import "./SuggestionListItem.css"
export default function ({ suggestion, addListItem, suggestions, setSuggestions }) {

    function handleClick(evt) {
        addListItem({listItemTitle: suggestion})
        let newSuggestions = suggestions.filter(s => suggestion !== s)
        setSuggestions(newSuggestions)
    }

    return (
        <div className="suggestion-list-item">
            <button 
                className="add-suggestion-to-list"
                onClick={handleClick}
            >
                <img className="add-icon" src="https://i.imgur.com/nPQdlPV.png" alt="Addition Icon" />
            </button>
            <p className="suggestion-list-text">{suggestion}</p>
        </div>
    )
}