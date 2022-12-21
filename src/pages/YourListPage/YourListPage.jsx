import SuggestionList from "../../components/SuggestionList/SuggestionList";
import BucketList from "../../components/BucketList/BucketList";
import "./YourListPage.css"

export default function YourListPage({ 
  listItems, 
  getSuggestions, 
  setSuggestions, 
  addListItem, 
  deleteListItem, 
  setListItems,
  suggestions,
}) {

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
          />
        </div>
        <div className="suggestions-with-title">
          <div className="suggestions">
          <h4 className="suggestions-title">Suggestions</h4>
          <button onClick={getSuggestions} className="suggestion-btn">
            <img src="https://i.imgur.com/6ABHHdz.png" alt="Shuffle Suggestions Icon" className="reverse-img-icon" />
          </button>
          </div>
          <SuggestionList suggestions={suggestions} addListItem={addListItem} setSuggestions={setSuggestions} />
        </div>
      </div>
    </main>
  );
}