import React, {useState} from 'react';
import axios from 'axios';

const adminAxios = axios.create();
adminAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const DataContext = React.createContext();

export default function DataContextProvider(props){
  // State
  const [yogaClasses, setYogaClasses] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  // set token state to token/user from local storage. if not set token/user state to empty string
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user"))) || {};
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  //functions
  function login(user,password) {
    const credentials = {username: user, password: password};
    return adminAxios.post("/auth/login", credentials)
      .then((res) => {
        console.log('login form response:')
        console.log(res.data)
        const {token, user} = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setToken(token);
        return res;
      });
  };
  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
    setToken("");
  };
  function getAllYogaClasses() {
    axios.get("/public/yogaclass")
      .then((res) => {
        setYogaClasses([...res.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  function getAllBlogPosts() {
    axios.get("/public/blogpost")
      .then((res) => {
        setBlogPosts([...res.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  function formatDate(date) {
    let newDate = new Date(date)
    return `${newDate.toLocaleTimeString()} ${newDate.toLocaleDateString()}`;
  };


  return (
    <DataContext.Provider
      value={{
        yogaClasses,
        blogPosts,
        getAllYogaClasses,
        getAllBlogPosts,
        formatDate,
        user,
        token,
        login,
        logout,

      }}>
      {props.children}
    </DataContext.Provider>
  );
};
