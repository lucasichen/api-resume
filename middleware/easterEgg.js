exports.unsupportedMethodHandler = (req, res, next) => {
    if (req.method !== 'GET') {
        res.status(500).json({
          message: "Either my database is down, or you are trying to give me a job... :)",
        });
      } else {
        next();
      }
};