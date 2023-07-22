async function request(url, method, body) {
  const resp = await fetch(`https://64ba86655e0670a501d6525a.mockapi.io/${url}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (resp.status >= 200 && resp.status < 300) {
    return resp.json();
  } else {
    return new Error('smth went wrong, response status is ' + resp.status);
  }
}

async function getReviews() {
  return await request('review', 'GET');
}

async function addNewReview(text, id, name) {
  const date = new Date();

  const resp = await request('review', 'POST', { id, name, text, date: date.toLocaleDateString() });

  return resp;
}

export { getReviews, addNewReview };
