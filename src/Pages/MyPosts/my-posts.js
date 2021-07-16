import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import useStyles from "./mypost-styles";
import React, { useEffect, useState } from "react";
import ShowPost from "../../Components/Show Post/show-post";
import { db } from "../../config/firebase_config";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const MyPosts = (props) => {
  let uid = localStorage.getItem("uid");
  const classes = useStyles();
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    let res = [];

    db.collection("posts")
      .where("creatorUid", "==", uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          res.push({
            postid: doc.id,
            ...doc.data(),
          });
          console.log(doc.id, " => ", doc.data());
        });
        setPosts(res);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const deletePostHandler = (postid) => {
    console.log(postid);
    db.collection("posts").doc(postid).delete().then(() => {

        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

    let res = [];

    db.collection("posts")
      .where("creatorUid", "==", uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          res.push({
            postid: doc.id,
            ...doc.data(),
          });
          console.log(doc.id, " => ", doc.data());
        });
        setPosts(res);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: "white",
          height: "100vh",
          overflow: "scroll",
        }}
      >
        <div>
          {posts &&
            posts.map((item) => {
              return (
                <div>
                  <ShowPost
                    abc={false}
                    key={item.postid}
                    id={item.creatorUid}
                    post={item}
                  />
                   <Button
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick= {()=> deletePostHandler(item.postid)}
                  >
                   Delete
                  </Button>
                </div>
              );
            })}
        </div>
      </Container>
    </React.Fragment>
  );
};

export default MyPosts;
