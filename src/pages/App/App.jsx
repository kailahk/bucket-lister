import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import AboutPage from '../AboutPage/AboutPage';
import DonePage from '../DonePage/DonePage';
import NavBar from '../../components/NavBar/NavBar';
import YourListPage from '../YourListPage/YourListPage';
import DetailPage from '../DetailPage/DetailPage';
import * as suggestionsAPI from "../../utilities/suggestions-api"
import * as listItemsAPI from "../../utilities/listItems-api"

export default function App() {
  const [user, setUser] = useState(getUser());
  const [suggestions, setSuggestions] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [newListInfo, setNewListInfo] = useState({});

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
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route 
                path="/yourlist" 
                element={<YourListPage 
                  user={user} 
                  listItems={listItems} 
                  getSuggestions={getSuggestions} 
                  setSuggestions={setSuggestions} 
                  addListItem={addListItem}
                  deleteListItem={deleteListItem}
                  setListItems={setListItems}
                  suggestions={suggestions} 
                  newListInfo={newListInfo}
                  setNewListInfo={setNewListInfo}
                />}
              />
              <Route path="/" element={<AboutPage />} />
              <Route path="/done" element={<DonePage listItems={listItems} />} />
              <Route 
                path="/details/:id" 
                element={<DetailPage 
                  listItems={listItems} 
                  deleteListItem={deleteListItem}
                  setListItems={setListItems}
                />}
              />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
