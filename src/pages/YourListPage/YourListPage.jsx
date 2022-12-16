import SuggestionList from "../../components/SuggestionList/SuggestionList";
import * as suggestionsAPI from "../../utilities/suggestions-api"
import { useState, useEffect } from "react";
import BucketList from "../../components/BucketList/BucketList";
import * as listItemsAPI from "../../utilities/listItems-api"
import "./YourListPage.css"

export default function YourListPage({ user }) {
  const [suggestions, setSuggestions] = useState([]);
  const [listItems, setListItems] = useState([]);

  async function getSuggestions() {
    const suggestions = await suggestionsAPI.getSuggestions();
    setSuggestions(suggestions)
  }

  async function addListItem(data) {
    const listItem = await listItemsAPI.create(data)
    setListItems([...listItems, listItem])
  }

  async function deleteListItem(id) {
    const listItems = await listItemsAPI.remove(id);
    setListItems(listItems);
  }

  async function editListItem(id, updatedListItem) {
    const item = await listItemsAPI.edit(id, updatedListItem);
    const updated = listItems.map(i => i._id === item._id ? item : i);
    setListItems(updated);
  }

  useEffect(() => {
    async function getListItems() {
      const allListItems = await listItemsAPI.getAllForUser();
      setListItems(allListItems);
    };
    if (user) getListItems();
  }, [user]
  )

  return (
    <main className="yourlist-page">
      <h1>YOUR LIST</h1>
      <div className="yourlist-page-content">
        <div className="your-list-items">
          <BucketList
            listItems={listItems}
            setListItems={setListItems}
            addListItem={addListItem}
            deleteListItem={deleteListItem}
            editListItem={editListItem}
          />
        </div>
        <div className="suggestions-with-title">
          <div className="suggestions">
          <h4>Suggestions</h4>
          <button onClick={getSuggestions} className="suggestion-btn">
            <img src="https://i.imgur.com/6ABHHdz.png" alt="Shuffle Suggestions Icon" className="reverse-img-icon" />
          </button>
          </div>
          <SuggestionList suggestions={suggestions} />
        </div>
      </div>
    </main>
  );
}