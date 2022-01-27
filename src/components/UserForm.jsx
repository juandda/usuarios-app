import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/userForm.styles.css"

const UserForm = ({getUsers, userSelected, deselectUser}) =>{
    const[name, setName] = useState("");
    const[lastname, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[birthday, setBirthday] = useState("");

    useEffect(()=>{
        if(userSelected){
            setName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday)
        }else{
            reset();
        }
    },[userSelected]);

    const submit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
            first_name:name,
            last_name:lastname,
            birthday
        };
        if(userSelected){
            axios
                .put(
                    `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
                    user
                )
                .then(() =>{
                    getUsers();
                    deselectUser();
                });
        }else{
            axios
                .post("https://users-crud1.herokuapp.com/users/", user)
                .then(()=>getUsers())
        }
        reset();
    }

    const reset = () =>{
        setName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setBirthday("")
    }
    return( 
        <form onSubmit={submit}>
            <div className="info-container">
                <input 
                    type="text" 
                    id="name"
                    value={name}
                    placeholder="First name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="text" 
                    id="lastName"
                    value={lastname}
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input 
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password"
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <input 
                    type="date"
                    id="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
                <button>Submit</button>
            </div>
        </form>
    )
}

export default UserForm;