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
        setDetailsFormData({ ...detailsFormData, [evt.target.name]: evt.target.value })
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
            <form className="details-page-form" onSubmit={handleEditDetailsSubmit} >
                <div className="what">
                    <h1 className="what-title">What:</h1>
                    {!editDetailsBtn ?
                        <p className="what-detail-text detail-text scroll">{listItem.listItemTitle}</p>
                        :
                        <textarea
                            type="text"
                            value={detailsFormData.listItemTitle}
                            name="listItemTitle"
                            onChange={handleEditDetailsChange}
                            className="details-input"
                        />
                    }
                </div>
                <div className="where">
                    <h3 className="details-title">Where:</h3>
                    {!editDetailsBtn ?
                        <p className="detail-text scroll">{listItem.listItemLocation}</p>
                        :
                        <textarea
                            type="text"
                            value={detailsFormData.listItemLocation}
                            name="listItemLocation"
                            onChange={handleEditDetailsChange}
                            placeholder="No location added yet"
                            className="details-input"
                        />
                    }
                </div>
                <div className="when">
                    <h3 className="details-title">When:</h3>
                    {!editDetailsBtn ?
                        <p className="detail-text scroll">{listItem.listItemDate}</p>
                        :
                        <textarea
                            type="text"
                            value={detailsFormData.listItemDate}
                            name="listItemDate"
                            onChange={handleEditDetailsChange}
                            placeholder="No date added yet"
                            className="details-input"
                        />
                    }
                </div>
                <div className="who">
                    <h3 className="details-title">Who:</h3>
                    {!editDetailsBtn ?
                        <p className="detail-text scroll">{listItem.listItemPeople}</p>
                        :
                        <textarea
                            type="text"
                            value={detailsFormData.listItemPeople}
                            name="listItemPeople"
                            onChange={handleEditDetailsChange}
                            placeholder="No people added yet"
                            className="details-input"
                        />
                    }
                </div>
                <div className="note">
                    <h4>Notes:</h4>
                    {!editDetailsBtn ?
                        <p className="detail-text scroll">{listItem.listItemNote}</p>
                        :
                        <textarea
                            type="text"
                            value={detailsFormData.listItemNote}
                            name="listItemNote"
                            onChange={handleEditDetailsChange}
                            className="details-input"
                        />
                    }
                </div>
                <div className="link">
                    <h4>Link:</h4>
                    {!editDetailsBtn ?
                        <p><a className="details-link detail-text scroll" href={listItem.listItemLink} target="_blank">{listItem.listItemLink}</a></p>
                        :
                        <textarea
                            type="text"
                            value={detailsFormData.listItemLink}
                            name="listItemLink"
                            onChange={handleEditDetailsChange}
                            className="details-input"
                        />
                    }
                </div>
                <br />
                <div>
                {editDetailsBtn && <button className="submit-details-change" type="submit">SUBMIT</button>}
                </div>
            </form>
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