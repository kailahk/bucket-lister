import { useParams, Link } from "react-router-dom"
import { useState } from "react";
import "./DetailPage.css"
import * as listItemsAPI from "../../utilities/listItems-api"

export default function DetailPage({ listItems, deleteListItem, setListItems }) {
    const { id } = useParams();
    const listItem = listItems.find(item => item._id === id);
    const [editDetailsBtn, setEditDetailsBtn] = useState(false);
    const [detailsFormData, setDetailsFormData] = useState({
        listItemTitle: listItem.listItemTitle,
        listItemPeople: listItem.listItemPeople,
        listItemLocation: listItem.listItemLocation,
        listItemDate: listItem.listItemDate,
        listItemNote: listItem.listItemNote,
        listItemLink: listItem.listItemLink,
    });

    async function editDetailsItem() {
        const items = await listItemsAPI.edit(listItem._id, detailsFormData);
        setListItems(items);
    }


    function handleEditDetailsChange(evt) {
        setDetailsFormData({ [evt.target.name]: evt.target.value })
    }

    function handleEditDetailsSubmit(evt) {
        evt.preventDefault();
        editDetailsItem();
    }

    return (
        <form className="details-page-form" onSubmit={handleEditDetailsSubmit} >
            <main className="details-page">
                <div className="container">
                    <div className="what">
                        <h1>What:</h1><p>{listItem.listItemTitle}</p>
                        {editDetailsBtn &&
                            <input
                                type="text"
                                value={detailsFormData.listItemTitle}
                                name="listItemTitle"
                                onChange={handleEditDetailsChange}
                            />
                        }
                    </div>
                    <div className="where">
                        <h3>Where:</h3><p>{listItem.listItemLocation}</p>
                        {editDetailsBtn &&
                            <input
                                type="text"
                                value={detailsFormData.listItemLocation}
                                name="listItemLocation"
                                onChange={handleEditDetailsChange}
                                placeholder="No location added yet"
                            />
                        }
                    </div>
                    <div className="when">
                        <h3>When:</h3><p>{listItem.listItemDate}</p>
                        {editDetailsBtn &&
                            <input
                                type="text"
                                value={detailsFormData.listItemDate}
                                name="listItemDate"
                                onChange={handleEditDetailsChange}
                                placeholder="No date added yet"
                            />
                        }
                    </div>
                    <div className="who">
                        <h3>Who:</h3><p>{listItem.listItemPeople}</p>
                        {editDetailsBtn &&
                            <input
                                type="text"
                                value={detailsFormData.listItemPeople}
                                name="listItemPeople"
                                onChange={handleEditDetailsChange}
                                placeholder="No people added yet"
                            />
                        }
                    </div>
                </div>
                <br />
                <div className="notes-and-link">
                    <div className="note">
                        <input
                            type="text"
                            value={detailsFormData.listItemNote}
                            name="listItemNote"
                            onChange={handleEditDetailsChange}
                            placeholder='NOTES:'
                        />
                    </div>
                    <div className="link">
                        <input
                            type="text"
                            value={detailsFormData.listItemLink}
                            name="listItemLink"
                            onChange={handleEditDetailsChange}
                            placeholder="LINK:"
                        />
                    </div>
                </div>
                <br />
                {editDetailsBtn && <button type="submit" onClick={() => setEditDetailsBtn(!editDetailsBtn)}>Submit</button>}
                <div className="edit-and-delete-btns">
                    <button className="edit-details-btn" onClick={() => setEditDetailsBtn(!editDetailsBtn)} >
                        <img className="edit-details-icon" src="https://i.imgur.com/uRSKxOT.png" alt="Edit Icon" />
                    </button>
                    <Link to='/yourlist'>
                        <button className="delete-details-btn" onClick={() => deleteListItem(listItem._id)}>
                            <img className="delete-details-icon" src="https://i.imgur.com/wosDLot.png" alt="Delete Icon" />
                        </button>
                    </Link>
                </div>
            </main>
        </form>
    )
}