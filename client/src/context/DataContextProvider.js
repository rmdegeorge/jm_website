import React, { useState } from "react";
import axios from "axios";

const adminAxios = axios.create();
adminAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const DataContext = React.createContext();

export default function DataContextProvider(props) {
  // State
  const [yogaClasses, setYogaClasses] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  // set token state to token/user from local storage. if not set token/user state to empty string
  const [user, setUser] =
    useState(JSON.parse(localStorage.getItem("user"))) || {};
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [uploadedFile, setUploadedFile] = useState({});
  const [uploadPercent, setUploadPercent] = useState(0);

  //functions
  function login(user, password) {
    const credentials = { username: user, password: password };
    return adminAxios
      .post("/auth/login", credentials)
      .then(res => {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setToken(token);
        return res;
      })
      .catch(err => {
        console.error(err);
      });
  }
  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
    setToken("");
  }
  function getAllYogaClasses() {
    axios
      .get("/public/yogaclass")
      .then(res => {
        setYogaClasses([...res.data]);
      })
      .catch(err => {
        console.error(err);
      });
  }
  async function uploadFile(file, fileName) {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: progressEvent => {
          setUploadPercent(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      err.response.status === 500
        ? console.error(new Error("500: there was an error with the server"))
        : console.error(err.response.data.msg);
    }
  }
  function addNewYogaClass(name, body, imgSrc) {
    const bodyArray = body.split("\n").filter(n => n);
    const newYogaClass = { name, body: bodyArray, imgSrc };
    adminAxios
      .post("/admin/yogaclass", newYogaClass)
      .then(res => {
        getAllYogaClasses();
      })
      .catch(err => {
        console.error(err);
      });
  }
  function editYogaClass(_id, name, body, imgSrc) {
    const bodyArray = body.split("\n").filter(n => n);
    let updatedClass = {};
    imgSrc
      ? (updatedClass = { name, body: bodyArray, imgSrc })
      : (updatedClass = { name, body: bodyArray });
    adminAxios
      .put(`/admin/yogaclass/${_id}`, updatedClass)
      .then(res => {
        getAllYogaClasses();
      })
      .catch(err => {
        console.error(err);
      });
  }
  function deleteYogaClass(_id) {
    adminAxios
      .delete(`/admin/yogaclass/${_id}`)
      .then(res => {
        getAllYogaClasses();
      })
      .catch(err => {
        console.error(err);
      });
  }
  function getAllBlogPosts() {
    axios
      .get("/public/blogpost")
      .then(res => {
        setBlogPosts([...res.data]);
      })
      .catch(err => {
        console.error(err);
      });
  }
  function addNewBlogPost(title, body, tags, imgSrc) {
    const tagsArray = tags.split(", ").filter(n => n);
    const bodyArray = body.split("\n").filter(n => n);
    const newBlogPost = { title, body: bodyArray, tags: tagsArray, imgSrc };
    adminAxios
      .post("/admin/blogpost", newBlogPost)
      .then(res => {
        getAllBlogPosts();
      })
      .catch(err => {
        console.error(err);
      });
  }
  function editBlogPost(_id, title, body, tags, imgSrc) {
    const tagsArray = tags.split(", ").filter(n => n);
    const bodyArray = body.split("\n").filter(n => n);
    let updatedBlogPost = {};
    imgSrc
      ? (updatedBlogPost = { title, body: bodyArray, tags: tagsArray, imgSrc })
      : (updatedBlogPost = { title, body: bodyArray, tags: tagsArray });
    adminAxios
      .put(`/admin/blogpost/${_id}`, updatedBlogPost)
      .then(res => {
        getAllBlogPosts();
      })
      .catch(err => {
        console.error(err);
      });
  }
  function deleteBlogPost(_id) {
    adminAxios
      .delete(`/admin/blogpost/${_id}`)
      .then(res => {
        getAllBlogPosts();
      })
      .catch(err => {
        console.error(err);
      });
  }
  function formatDate(date) {
    let newDate = new Date(date);
    return `${newDate.toLocaleTimeString()} ${newDate.toLocaleDateString()}`;
  }

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
        addNewYogaClass,
        addNewBlogPost,
        deleteBlogPost,
        editYogaClass,
        deleteYogaClass,
        editBlogPost,
        uploadFile,
        uploadedFile,
        setUploadedFile,
        uploadPercent
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
