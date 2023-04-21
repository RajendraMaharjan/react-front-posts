import Post from "./Post";
import React, { useState } from "react";
import '../../assets/css/dashboard.css'
import PostDetails from "../../containers/PostDetails"

function Posts(data) {
    // console.log("HERE"+data.mainData[0].title);

    const [selected, setPost] = useState(data.mainData[0]);

    const postMapping = data.mainData.map((p) => {
        return <Post
            key={p.id}
            post={p}
            onClick={() => {
                handleClick(p.id)
            }}
        />
    });


    const handleClick = (itemid) => {
        const dd = data.mainData.find((x) => x.id === itemid);
        setPost(dd);

    }


    return (
        <>
            <div className="container">
                {postMapping}
            </div>
            {selected != null &&
                <PostDetails singleData={selected} />
            }

        </>
    )


}

export default Posts;