import SuggestionList from "../../components/SuggestionList/SuggestionList";
import BucketList from "../../components/BucketList/BucketList";
import "./YourListPage.css"
import { useState } from "react";

export default function YourListPage({ 
  user, 
  listItems, 
  getSuggestions, 
  setSuggestions, 
  addListItem, 
  deleteListItem, 
  editListItem, 
  setListItems,
  suggestions,
  handleEditChange,
  handleEditSubmit,
  editBtn,
  setEditBtn,
  newListInfo,
  setNewListInfo,
  doneList,
  setDoneList,
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
            editListItem={editListItem}
            getSuggestions={getSuggestions} 
            setSuggestions={setSuggestions} 
            suggestions={suggestions} 
            handleEditChange={handleEditChange}
            handleEditSubmit={handleEditSubmit}
            editBtn={editBtn}
            setEditBtn={setEditBtn}
            newListInfo={newListInfo}
            setNewListInfo={setNewListInfo}
            doneList={doneList}
            setDoneList={setDoneList}
          />
        </div>
        <div className="suggestions-with-title">
          <div className="suggestions">
          <h4>Suggestions</h4>
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