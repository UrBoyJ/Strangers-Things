import { fetchPosts } from "./fetchHelpers";
import { useEffect, useState } from "react";

function AllPosts() {
  const [postLists, setPostLists] = useState([]);
  const {isLoggedIn, setisLoggedIn} = useState(true)
  useEffect(
    () => async () => {
      const results = await fetchPosts();
      setPostLists(results);
      console.log(results);
    },
    []
  );
  return (
    <>
      <h1>This is all posts</h1>
      {postLists.map((postData) => {
        return (
          <div key={postData._id} className="cards">
            <h1>{postData.title}</h1>

          {!isLoggedIn ? <p>Common</p> : null}
          </div>
        );
      })}
    </>
  );
}

export default AllPosts;