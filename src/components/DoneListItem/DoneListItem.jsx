import "./DoneListItem.css"

export default function DoneListItem({ doneItemObject }) {
    return (
        <div className="done-list-item">
            <div className="checkmark">
                √
            </div>
            <p>
                {doneItemObject.listItemTitle}
            </p>
        </div>
    )
}