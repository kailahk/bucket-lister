import { useState } from "react";
import { Link } from "react-router-dom";
import "./ListItem.css"
import * as listItemsAPI from "../../utilities/listItems-api"

export default function ListItem({
    listItem,
    deleteListItem,
    setListItems,
}) {
    const [editBtn, setEditBtn] = useState(false);
    const [formTitleData, setFormTitleData] = useState({
        listItemTitle: listItem.listItemTitle
    })
    const [formCompletedData, setFormCompletedData] = useState({
        completed: listItem.completed
    })

    async function editListItem() {
        const items = await listItemsAPI.edit(listItem._id, formTitleData);
        console.log(items);
        setListItems(items);
    }

    function handleEditChange(evt) {
        setFormTitleData({ listItemTitle: evt.target.value })
    }

    function handleEditSubmit(evt) {
        evt.preventDefault();
        editListItem();
    }

    function handleCheckOffClick(evt) {
        const val = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
        setFormCompletedData({
            ...formCompletedData,
            [evt.target.name]: val
        });
        editListItem();
    }

    return (
        <>
                <div className="list-item-with-check-off">
                    <input
                        className="check-off"
                        type="checkbox"
                        checked={formCompletedData.completed}
                        name="completed"
                        onChange={handleCheckOffClick}
                    />
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
                        value={formTitleData.listItemTitle}
                        name="listItemTitle"
                        onChange={handleEditChange}
                    />
                    <button type="submit" onClick={() => setEditBtn(!editBtn)}>Submit</button>
                </form>
            }
            <br />
        </>
    )
}