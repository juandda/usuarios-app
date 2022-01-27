import React from "react";
import "../styles/userList.styles.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons"

const UserList = ({users, selectUser, deleteUser}) => {
    return(
        <div>
            {users.map((user)=>(
                <div className="user-container">
                    <div className="user-info">
                        <h3>{`${user.first_name} ${user.last_name}`}</h3>
                        <h4>{user.email}</h4>
                        <h4>{user.birthday}</h4>
                    </div>
                    <div className="buttons"> 
                        <button onClick={()=>deleteUser(user.id)}><FontAwesomeIcon icon={faTrash} color="#9B0000"/></button>
                        <button onClick={()=>selectUser(user)}><FontAwesomeIcon icon={faEdit} color="#325288"/></button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserList;