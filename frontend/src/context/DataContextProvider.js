import React, {useState} from 'react';
import axios from 'axios';

export const DataContext = React.createContext();

export default function DataContextProvider(props){
  // State
  const [yogaClasses, setYogaClasses] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  //functions
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
    console.log(`${newDate.toLocaleTimeString()} ${newDate.toLocaleDateString()}`)
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

      }}>
      {props.children}
    </DataContext.Provider>
  );
};
