import { useState } from "react"
import ListItem from "../ListItem/ListItem"
import "./BucketList.css"

export default function BucketList({
    listItems,
    setListItems,
    addListItem,
    deleteListItem,
    editListItem,
    handleEditChange,
    handleEditSubmit,
    editBtn,
    setEditBtn,
    newListInfo,
    setNewListInfo,
    doneList,
    setDoneList,
    showDoneBtn
}) {

    const [listItemInfo, setListItemInfo] = useState({
        listItemTitle: ''
    })

    const notDoneItems = listItems.filter((ndi) => ndi.completed === false)
    const listTitles = notDoneItems.map(
        (l, idx) => <ListItem
            key={idx}
            listItem={l}
            listItems={listItems}
            setListItems={setListItems}
            deleteListItem={deleteListItem}
            editListItem={editListItem}
            setListItemInfo={setListItemInfo}
            handleEditChange={handleEditChange}
            handleEditSubmit={handleEditSubmit}
            editBtn={editBtn}
            setEditBtn={setEditBtn}
            newListInfo={newListInfo}
            setNewListInfo={setNewListInfo}
            doneList={doneList}
            setDoneList={setDoneList}
            showDoneBtn={showDoneBtn}
        />
    )

    function handleAddChange(evt) {
        setListItemInfo({ listItemTitle: evt.target.value })
    }

    function handleAddSubmit(evt) {
        evt.preventDefault();
        addListItem(listItemInfo);
        setListItemInfo({ listItemTitle: '' })
    }

    return (
        <>
            {listItems.length ?
                <>
                    <div className="bucket-list-items">
                        {listTitles}
                    </div>
                    <br />
                </>
                :
                <p>No list items yet!</p>
            }
            <div className="add-one">
                <h3>
                    ADD ONE
                </h3>
                <form onSubmit={handleAddSubmit} className="add-to-list-form">
                    <input
                        type="text"
                        placeholder="New Bucket List Item"
                        value={listItemInfo.listItemTitle}
                        name="listItemTitle"
                        onChange={handleAddChange}
                        required
                    />
                    <br />
                    <button className="add-list-item-btn">ADD</button>
                </form>
            </div>
        </>
    )
}