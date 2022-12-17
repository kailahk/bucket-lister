import { useState } from "react";
import { Link } from "react-router-dom";
import "./ListItem.css"
import * as listItemsAPI from "../../utilities/listItems-api"

export default function ListItem({
    listItem,
    deleteListItem,
    listItems,
    setListItems,
}) {
    const [editBtn, setEditBtn] = useState(false);
    const [formData, setFormData] = useState({ listItemTitle: listItem.listItemTitle })

    async function editListItem() {
        const items = await listItemsAPI.edit(listItem._id, formData);
        setListItems(items);
    }

    function handleEditChange(evt) {
        setFormData({ listItemTitle: evt.target.value })
    }

    function handleEditSubmit(evt) {
        evt.preventDefault();
        editListItem()
    }

    function handleCheckOffClick(evt) {
        listItem.completed = true;
    }

    return (
        <>
            <div className="list-item-with-check-off">
                <button className="check-off" onClick={handleCheckOffClick}>
                </button>
                <div className="bucket-list-item">
                    <button className="delete-list-item" onClick={() => deleteListItem(listItem._id)}>
                        <img className="delete-icon" src="https://i.imgur.com/wosDLot.png" alt="Delete Icon" />
                    </button>
                    <Link to={`/details/${listItem._id}`}>
                        <p>{listItem.listItemTitle}</p>
                    </Link>
                    <button className="edit-list-item" onClick={() => setEditBtn(!editBtn)} >
                        <img className="edit-icon" src="https://i.imgur.com/uRSKxOT.png" alt="Edit Icon" />
                    </button>
                </div>
            </div>
            {editBtn &&
                <form onClick={handleEditSubmit} >
                    <input
                        type="text"
                        value={formData.listItemTitle}
                        name="listItemTitle"
                        onChange={handleEditChange}
                        required
                    />
                    <button type="submit" onClick={() => setEditBtn(!editBtn)}>Submit</button>
                </form>
            }
            <br />
        </>
    )
}