const express = require('express');
const fs = require('fs');
const path = require('path')
const app = express();

let users = [
  {
    id: 0,
    name: "rafael",
    phone: "(111)111111"
  },
  {
    id: 1,
    name: "igor",
    phone: "(222)222222"
  },
  {
    id: 2,
    name: "jenni",
    phone: "(333)3333333"
  }
]

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {

  // res.render('user', {name: "rafael trindade", phone: "(234)343434"})
  res.render('user', {users})

})

app.listen(process.env.PORT || 3000, () => {
  console.log("server running on 3000")
})