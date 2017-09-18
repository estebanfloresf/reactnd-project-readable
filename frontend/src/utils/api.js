

export function fetch_posts() {

   return fetch(
       'http://localhost:3001/posts',
       {
           headers: { 'Authorization': 'fetchposts' }
       }

   ).then((res) => res.json())


}