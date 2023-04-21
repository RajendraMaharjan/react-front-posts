import axios from "axios";
import React from "react";


function deletePost(postId) {
    console.log('Chekcked postId =>', postId);
    return axios
        .delete('http://localhost:8080/posts/' + postId)
        .then(res => {
            console.log("DELETED", res.data);
        })
        .catch(err => {
            console.log('exception occured', err);
        })
}


function PostDetails(params) {
    console.log('HELLO ID: ', params.singleData.id);

    async function deleteHandler(postID) {
        await deletePost(postID);
    }

    const contentElement =
        <>
            <div>
                <h1>{params.singleData.title}</h1>
                <div>
                    <h3>{params.singleData.author}</h3>
                </div>

                <div>
                    This is the content in the post:
                    {params.singleData.content}
                </div>

                <p><a target="_break;" href="">edit</a></p><p onClick={() => deleteHandler(params.singleData.id)}>
                    {/* <a href=""> */}
                    delete
                    {/* </a> */}
                </p>

            </div>
        </>;
    return contentElement;
}

export default PostDetails;