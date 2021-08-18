const timeout = (req, res, next) => {
  setTimeout(() => next(), 1500);
};

export default timeout;
