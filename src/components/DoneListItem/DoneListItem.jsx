import "./DoneListItem.css"
import { Link } from "react-router-dom"

export default function DoneListItem({ doneItemObject }) {
    return (
        <div className="done-item-with-checkbox">
            <input
                className="check-off"
                type="checkbox"
                checked={true}
                readOnly
            />
            <div className="done-list-item">
                <div className="done-list-item">
                    <Link to={`/details/${doneItemObject._id}`}>
                        <div className="done-item-object">{doneItemObject.listItemTitle}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}