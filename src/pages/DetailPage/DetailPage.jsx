import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import "./DetailPage.css"
import * as listItemsAPI from "../../utilities/listItems-api"

export default function DetailPage({ listItems, deleteListItem, setListItems }) {
    const { id } = useParams();
    const [listItem, setListItem] = useState(null);
    const [editDetailsBtn, setEditDetailsBtn] = useState(false);
    const [detailsFormData, setDetailsFormData] = useState({
        listItemTitle: '',
        listItemPeople: '',
        listItemLocation: '',
        listItemDate: '',
        listItemNote: '',
        listItemLink: '',
    });

    useEffect(function () {
        const listItem = listItems.find(item => item._id === id);
        setListItem(listItem);
        if (!listItem) return;
        const { listItemTitle, listItemPeople, listItemLocation, listItemDate, listItemNote, listItemLink } = listItem;
        setDetailsFormData({ listItemTitle, listItemPeople, listItemLocation, listItemDate, listItemNote, listItemLink })
    }, [id, listItems])

    if (!listItem) return null

    function handleEditDetailsChange(evt) {
        setDetailsFormData({...detailsFormData, [evt.target.name]: evt.target.value })
    }

    async function handleEditDetailsSubmit(evt) {
        evt.preventDefault();
        const updatedListItem = await listItemsAPI.edit(listItem._id, detailsFormData);
        const listItemIdx = listItems.findIndex(item => item._id === updatedListItem._id)
        const itemsCopy = [...listItems]
        itemsCopy.splice(listItemIdx, 1, updatedListItem)
        setListItems(itemsCopy);
        setEditDetailsBtn(false);
    }

    return (
        <main className="details-page">
            <div className="container">
                <form className="details-page-form" onSubmit={handleEditDetailsSubmit} >
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
                    <div className="notes-and-link">
                        <div className="note">
                            <h4>Notes:</h4><p>{listItem.listItemNote}</p>
                            {editDetailsBtn &&
                                <input
                                    type="text"
                                    value={detailsFormData.listItemNote}
                                    name="listItemNote"
                                    onChange={handleEditDetailsChange}
                                />
                            }
                        </div>
                        <div className="link">
                            <h4>Link:</h4><p><a href={listItem.listItemLink} target="_blank">{listItem.listItemLink}</a></p>
                            {editDetailsBtn &&
                                <input
                                    type="text"
                                    value={detailsFormData.listItemLink}
                                    name="listItemLink"
                                    onChange={handleEditDetailsChange}
                                />
                            }
                        </div>
                    </div>
                    {editDetailsBtn && <button type="submit">Submit</button>}
                </form>
            </div>
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
        </main >
    )
}