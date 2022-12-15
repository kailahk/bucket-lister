import { useState } from "react"
import ListItem from "../ListItem/ListItem"

export default function BucketList({ listItems, setListItems, addListItem, deleteListItem }) {
    const listTitles = listItems.map((l, idx) => <ListItem listItem={l} key={idx} setListItems={setListItems} deleteListItem={deleteListItem} />)
    const [listItemInfo, setListItemInfo] = useState({
        listItemTitle: ''
    })

    function handleChange(evt) {
        setListItemInfo({listItemTitle: evt.target.value})
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addListItem(listItemInfo);
        setListItemInfo({listItemTitle: ''})
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
                <label>
                    Add One
                </label>
                <form onSubmit={handleSubmit} className="add-to-list-form">
                    <input
                        type="text"
                        placeholder="New Bucket List Item"
                        value={listItemInfo.listItemTitle}
                        name="listItemTitle"
                        onChange={handleChange}
                        required
                    />
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}