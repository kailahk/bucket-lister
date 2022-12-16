import "./SuggestionListItem.css"
export default function ({ suggestion }) {
    return (
        <div className="suggestion-list-item">
            <button className="add-suggestion-to-list">
                <img className="add-icon" src="https://i.imgur.com/nPQdlPV.png" alt="Addition Icon" />
            </button>
            <p className="suggestion-list-text">{suggestion}</p>
        </div>
    )
}