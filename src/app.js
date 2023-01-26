const studentsArray = [
  { name: "Lakshman", regNo: "R272", email: "lakkaru@gmail.com", marks: 70 },
  { name: "Ravi", regNo: "R372", email: "ravigunz@gmail.com", marks: 90 },
];

function getResult(marks) {
  if (marks >= 80) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  }
}

const myFunc = function () {
  return 0;
};

const studentComponent = studentsArray.map((val, key) => {
  return (
    <tr key ={key}>
      <td>{val.name}</td>
      <td>{val.regNo}</td>
      <td>{val.email}</td>
      <td>{val.marks}</td>
      <td>{getResult(val.marks)}</td>
    </tr>
  );
});

const student = (
  <div>
    <table>
      <thead style={{ fontWeight: "bold" }}>
        <tr>
          <td key = "ee">Name</td>
          <td>Reg No</td>
          <td>Email</td>
          <td>Marks</td>
          <td>Result</td>
        </tr>
      </thead>
      <tbody>{studentComponent}</tbody>
    </table>
  </div>
);

const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(student);
