export default function ({ listItem, deleteListItem }) {

    return (
        <>
            <p>{listItem.listItemTitle}</p>
            <button onClick={() => deleteListItem(listItem._id)}>
                Delete
            </button>
            <button>
                Edit
            </button>
        </>
    )
}