"use strict";

var studentsArray = [{
  name: "Lakshman",
  regNo: "R272",
  email: "lakkaru@gmail.com",
  marks: 70
}, {
  name: "Ravi",
  regNo: "R372",
  email: "ravigunz@gmail.com",
  marks: 90
}];
function getResult(marks) {
  if (marks >= 80) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  }
}
var myFunc = function myFunc() {
  return 0;
};
var studentComponent = studentsArray.map(function (val, key) {
  return /*#__PURE__*/React.createElement("tr", {
    id: key
  }, /*#__PURE__*/React.createElement("td", null, val.name), /*#__PURE__*/React.createElement("td", null, val.regNo), /*#__PURE__*/React.createElement("td", null, val.email), /*#__PURE__*/React.createElement("td", null, val.marks), /*#__PURE__*/React.createElement("td", null, getResult(val.marks)));
});
var student = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", {
  style: {
    fontWeight: "bold"
  }
}, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Name"), /*#__PURE__*/React.createElement("td", null, "Reg No"), /*#__PURE__*/React.createElement("td", null, "Email"), /*#__PURE__*/React.createElement("td", null, "Marks"), /*#__PURE__*/React.createElement("td", null, "Result"))), /*#__PURE__*/React.createElement("tbody", null, studentComponent)));
var domContainer = document.querySelector("#app");
var root = ReactDOM.createRoot(domContainer);
root.render(student);
