function getParameterFromURL(name) {
  const queryParams = new URLSearchParams(window.location.search);

  return queryParams.get(name) || '';
}

export { getParameterFromURL };
