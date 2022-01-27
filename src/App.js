import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() =>{
    axios
      .get("https://users-crud1.herokuapp.com/users")
      .then((res)=> setUsers(res.data));
  },[])

  const getUsers = () =>{
    axios
      .get("https://users-crud1.herokuapp.com/users")
      .then((res)=> setUsers(res.data));
  }
  const deleteUser = (id) =>{
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(()=>  getUsers())
  }
  const selectUser = (user) => setUserSelected(user)
  const deselectUser = () => setUserSelected(null)
  return (
    <div className="App">
      <div className='title-container'>
        <h2>New User</h2>
      </div>
      <UserForm
        getUsers={getUsers}
        userSelected={userSelected}
        deselectUser={deselectUser}
      />
      <UserList
        users={users}
        selectUser={selectUser}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
