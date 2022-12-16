import { useState } from "react";
import "./ListItem.css"

export default function ListItem({ listItem, deleteListItem, editListItem, setListItems, listItems }) {
    const [newListInfo, setNewListInfo] = useState({ listItemTitle: listItem.listItemTitle })
    const [editBtn, setEditBtn] = useState(false)

    function handleChange(evt) {
        setNewListInfo({ listItemTitle: evt.target.value })
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(listItem._id, newListInfo)
        editListItem(listItem._id, newListInfo)
    }

    return (
        <>
            <div className="bucket-list-item">
                <button className="delete-list-item" onClick={() => deleteListItem(listItem._id)}>
                    <img className="delete-icon" src="https://i.imgur.com/wosDLot.png" alt="Delete Icon" />
                </button>
                <p>{listItem.listItemTitle}</p>
                <button className="edit-list-item" onClick={() => setEditBtn(!editBtn)} >
                    <img className="edit-icon" src="https://i.imgur.com/uRSKxOT.png" alt="Edit Icon" />
                </button>
            </div>
            {editBtn &&
                <form onClick={handleSubmit} >
                    <input
                        type="text"
                        value={newListInfo.listItemTitle}
                        name="listItemTitle"
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            }
            <br />
        </>
    )
}