import { useState } from "react";

export default function ListItem({ listItem, deleteListItem, editListItem, setListItems, listItems }) {
    const [newListInfo, setNewListInfo] = useState({ listItemTitle: listItem.listItemTitle })
    const [editBtn, setEditBtn] = useState(false)

    function handleChange(evt) {
        setNewListInfo({ listItemTitle: evt.target.value })
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        const id = listItems.findById(listItem._id)
        editListItem({ _id: id, listItemTitle: newListInfo.listItemTitle })
        // setListItems([...listItems, {id, listItemTitle: newListInfo.listItemTitle}])
    }

    return (
        <>
            <p>{listItem.listItemTitle}</p>
            <button onClick={() => deleteListItem(listItem._id)}>
                Delete
            </button>
            <button onClick={() => setEditBtn(!editBtn)} >
                Edit
            </button>
            {editBtn &&
                <form>
                    <input
                        type="text"
                        value={newListInfo.listItemTitle}
                        name="listItemTitle"
                        onChange={handleChange}
                        required
                    />
                    <button onClick={() => handleSubmit(listItem._id)} type="submit">Submit</button>
                </form>
            }

        </>
    )
}