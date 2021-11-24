import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/';
export const addPostRequest = (title: string, body: string) => {
  const response = axios
    .post(
      baseUrl + 'posts',
      { title, body, userId: 1 },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
    .then((response) => {
      localStorage.setItem('posts', response.data);
      return response;
    });
  return response;
};

export const fetchPosts = () => {
  const resposne = axios
    .get(baseUrl + 'posts')
    .then((response) => {
      return response.data;
    })
    .catch((error) => null);

  return resposne;
};

export const fetchPostDetails = (id: number) => {
  const resposne = axios
    .get(baseUrl + 'posts/' + id)
    .then((response) => {
      return response.data;
    })
    .catch((error) => null);

  return resposne;
};
