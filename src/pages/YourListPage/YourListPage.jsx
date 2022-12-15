import SuggestionList from "../../components/SuggestionList/SuggestionList";
import * as suggestionsAPI from "../../utilities/suggestions-api"
import { useState, useEffect } from "react";
import BucketList from "../../components/BucketList/BucketList";
import * as listItemsAPI from "../../utilities/listItems-api"

export default function YourListPage({user}) {
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

  useEffect(() => {
    async function getListItems() {
      const allListItems = await listItemsAPI.getAllForUser();
      setListItems(allListItems);
    };
    if (user) getListItems();
  }, [user]
  )

  return (
    <>
      <h1>Your List</h1>
      <div className="your-list-items">
        <BucketList listItems={listItems} setListItems={setListItems} addListItem={addListItem} deleteListItem={deleteListItem} />
      </div>
      <div className="suggestions">
        <h4>Suggestions</h4>
        <button
          onClick={getSuggestions}
        >hi</button>
        <SuggestionList suggestions={suggestions} />
      </div>
    </>
  );
}