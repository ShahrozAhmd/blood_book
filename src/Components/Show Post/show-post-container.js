import React, { useEffect, useState } from "react";
import useStyles from "./show-post-styles";
import ShowPost from "./show-post";
import { db } from "../../config/firebase_config";

const ShowPostContainer = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts").onSnapshot((res) => {

      setPosts(res.docs.map(item => {
        return({
          postid: item.id,
           ...item.data()
        })
        // return({
        //   id: item.id,
        //   user: item.data()
        // })
      }))
    });

  }, []);
console.log(posts)
  return (
    <div>
      {posts && posts.map((item) => {
        return(
          <ShowPost abc = {false} key={item.postid} id={item.creatorUid} post={item} />
        )
      })}
    </div>
  );
};

export default ShowPostContainer;
