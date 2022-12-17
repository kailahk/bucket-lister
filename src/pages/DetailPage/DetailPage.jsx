import { useParams, Link } from "react-router-dom"
import { useState } from "react";
import "./DetailPage.css"

export default function DetailPage({ listItems, deleteListItem }) {
    const { id } = useParams();
    const listItem = listItems.find(item => item._id === id);

    return (
        <main className="details-page">
            <Link to='/yourlist'>
                <button className="back-btn">
                    BACK
                </button>
            </Link>
            <div className="what">
                <h1>What:</h1><p>{listItem.listItemTitle}</p>
            </div>
            <div className="where">
                <h3>Where:</h3><p>{listItem.listItemLocation}</p>
            </div>
            <div className="where">
                <h3>When:</h3><p>{listItem.listItemDate}</p>
            </div>
            <div className="where">
                <h3>Who:</h3><p>{listItem.listItemPeople}</p>
            </div>
            <div className="notes-and-link">
                <div className="notes">
                    NOTES:
                </div>
                <div className="link">
                    LINK:
                </div>
            </div>
            <div className="edit-and-delete-btns">
                {/* <button className="edit-details-btn" onClick={() => setEditBtn(!editBtn)} >
                    <img className="edit-details-icon" src="https://i.imgur.com/uRSKxOT.png" alt="Edit Icon" />
                </button> */}
                <Link to='/yourlist'>
                <button className="delete-details-btn" onClick={() => deleteListItem(listItem._id)}>
                    <img className="delete-details-icon" src="https://i.imgur.com/wosDLot.png" alt="Delete Icon" />
                </button>
                </Link>
            </div>
        </main>
    )
}