const cohortName = '2302-ACC-PT-WEB-PT-C'
export const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;

export async function fetchPosts() {
    try {
      const response = await fetch(`${APIURL}posts`);
      const postResponse = await response.json();
      return postResponse.data.posts; // Assuming posts are returned as an array in the response
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }