import React, { useEffect, useState } from "react";
import useStyles from "./show-post-styles";
import ShowPost from "./show-post";
import { db } from "../../config/firebase_config";

const ShowPostContainer = () => {
  const classes = useStyles();
  const [data, setData] = useState([])

  useEffect(() => {
    db.collection("posts").onSnapshot((res) => {

      setData(res.docs.map(item => {
        return({
          id: item.id,
          user: item.data()
        })
      }))
    });
  }, []);
console.log(data)
  return (
    <div>
      {data && data.map((item) => {
        return(
          <ShowPost key={item.id} id={item.id} data={item.user} />
        )
      })}
    </div>
  );
};

export default ShowPostContainer;
