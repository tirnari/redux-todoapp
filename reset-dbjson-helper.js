module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/reset') {
    console.log('resetting database')
    // TODO it would be nice to restore not with an empty object
    // but with the initial database
    const data = {
      "todos": []
    };

    return req.app.db.setState(data).then(() => res.status(200).end())
  }
  // not a POST /reset
  next()
};
