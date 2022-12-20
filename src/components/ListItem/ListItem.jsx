import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ListItem.css"
import * as listItemsAPI from "../../utilities/listItems-api"

export default function ListItem({
    listItem,
    deleteListItem,
    setListItems,
    listItems,
}) {
    const [editBtn, setEditBtn] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [title, setTitle] = useState('');

    useEffect(function () {
        setIsCompleted(listItem.completed);
        setTitle(listItem.listItemTitle);
    }, [listItem])

    async function handleEditSubmit(evt) {
        evt.preventDefault();
        const updatedListItem = await listItemsAPI.edit(listItem._id, { listItemTitle: title });
        updateListItems(updatedListItem);
        setEditBtn(false);
    }

    async function handleCompletedChange(evt) {
        const updatedListItem = await listItemsAPI.edit(listItem._id, { completed: evt.target.checked });
        updateListItems(updatedListItem);
    }

    function updateListItems(updatedListItem) {
        const listItemIdx = listItems.findIndex(item => item._id === updatedListItem._id)
        const itemsCopy = [...listItems]
        itemsCopy.splice(listItemIdx, 1, updatedListItem)
        setListItems(itemsCopy);
    }

    return (
        <>
            <div className="list-item-with-check-off">
                <input
                    className="check-off"
                    type="checkbox"
                    checked={isCompleted}
                    onChange={handleCompletedChange}
                />
                {!editBtn ?
                    <div className="bucket-list-item">
                        <div>
                            <button className="delete-list-item" onClick={() => deleteListItem(listItem._id)}>
                                <img className="delete-icon" src="https://i.imgur.com/wosDLot.png" alt="Delete Icon" />
                            </button>
                        </div>
                        <div>
                            <Link to={`/details/${listItem._id}`}>
                                <p>{listItem.listItemTitle}</p>
                            </Link>
                        </div>
                        <div>
                            <button className="edit-list-item" onClick={() => setEditBtn(!editBtn)} >
                                <img className="edit-icon" src="https://i.imgur.com/uRSKxOT.png" alt="Edit Icon" />
                            </button>
                        </div>
                    </div>
                    :
                    <form onSubmit={handleEditSubmit} className="edit-title-form">
                        <input
                            value={title}
                            onChange={(evt) => setTitle(evt.target.value)}
                        />
                        <button className="submit-title-change" type="submit">Submit</button>
                    </form>
                }
            </div>
        </>
    )
}