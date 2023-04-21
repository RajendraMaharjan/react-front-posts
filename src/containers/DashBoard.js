import Posts from "../components/post/Posts";
import '../assets/css/dashboard.css'
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function DashBoard() {

    // const apiPostData = getPostedDataFromUser(1);

    const [apiPosts, setPosts] = useState([]);
    // console.log('Raj', apiPosts);

    const titleRef = useRef();
    const contentRef = useRef();
    const authorRef = useRef();

    function addPostFromDashboard() {
        const newTitle = titleRef.current.value;
        const newContent = contentRef.current.value;
        const newAuthor = authorRef.current.value;

        if ((newTitle.length === 0
            || newContent.length === 0
            || newAuthor.length === 0)) {
            alert("Values should not be empty!!");
        } else {
            console.log("KASARI CHIRYO", newAuthor, newContent, newAuthor);
            const firstPost = {};
            firstPost.title = newTitle;
            firstPost.content = newContent;
            firstPost.author = newAuthor;

            addPosts(2, firstPost);
            setPosts([firstPost, ...apiPosts]);
            clearForm();

        }
    }


    function clearForm() {
        titleRef.current.value = '';
        contentRef.current.value = '';
        authorRef.current.value = '';
    }

    async function getPostedDataFromUserAPI(userId) {
        return axios
            .get('http://localhost:8080/users/' + userId + '/posts')
            .then((res) => {
                // console.log("HELLLLLLLLOOOOOOO", res.data)
                setPosts(res.data.posts);
            })
            .catch((err) => {
                console.error(err)
            });
    }

    async function addPosts(userId, postData) {
        return axios
            .post('http://localhost:8080/users/' + userId + '/posts', postData)
            .then((res) => {
                // console.log("HELLLLLLLLOOOOOOO", res.data)
                setPosts(res.data.posts);
            })
            .catch((err) => {
                console.error(err)
            });
    }


    useEffect(() => {
        getPostedDataFromUserAPI(2)
    }, [])


    const dashElement =
        <>
            <div >
                <h1>Welcome to WAA react assignment</h1>
                <div>
                    <Posts mainData={apiPosts}

                    />
                    <br /> <br />

                    <div>
                        <div className="handler">
                            <label className="handler-item">Add New Post</label><br /><br />
                            <label className="handler-item">Title: </label><input ref={titleRef} type="text" /><br /><br />
                            <label className="handler-item">Content: </label><input ref={contentRef} type="text" /><br /><br />
                            <label className="handler-item">Author: </label><input ref={authorRef} type="text" /><br /><br />
                        </div>
                        <br />
                        <div className="handler">
                            <button onClick={addPostFromDashboard}>
                                Add Post
                            </button>
                        </div>
                    </div>

                </div>
                <br />
                <br />

            </div >
        </>;

    return dashElement;

}

export default DashBoard;