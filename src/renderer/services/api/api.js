const http = {
  setHeader: (attr) => {
    const headers = new Headers();
    const keys = Object.keys(attr);

    for (const key of keys) {
      headers.set(key, attr[key]);
    }

    return headers;
  },
  getHeader: (type, token) => {
    const headers = this.setHeader({
      'Content-Type': 'application/json',
      'Authorization': `${type} ${token}`
    });

    return { headers: headers };
  }
  // add API calls here
}

export default http;
