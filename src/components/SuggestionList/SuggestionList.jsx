import SuggestionListItem from "../SuggestionListItem/SuggestionListItem"

export default function SuggestionList({suggestions}) {
    const suggestion = suggestions.map((s, idx) => <SuggestionListItem suggestion={s}key={idx} />)
    return (
        <>{suggestion}</>
    )
}