const logger = (req, res, next) => {
  console.log("logger ", req.method, req.url);
  console.log("header ", req.headers);
  next();
};

export default logger;
