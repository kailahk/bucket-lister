import SuggestionListItem from "../SuggestionListItem/SuggestionListItem"
import "./SuggestionList.css"

export default function SuggestionList({suggestions}) {
    const suggestion = suggestions.map((s, idx) => <SuggestionListItem suggestion={s}key={idx} />)
    return (
        <div className="suggestion-list">
            {suggestion}
        </div>
    )
}