app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
