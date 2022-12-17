import SuggestionListItem from "../SuggestionListItem/SuggestionListItem"
import "./SuggestionList.css"

export default function SuggestionList({suggestions, addListItem, setSuggestions}) {
    const suggestion = suggestions.map((s, idx) => <SuggestionListItem suggestion={s}key={idx} addListItem={addListItem} suggestions={suggestions} setSuggestions={setSuggestions} />)
    return (
        <div className="suggestion-list">
            {suggestion}
        </div>
    )
}