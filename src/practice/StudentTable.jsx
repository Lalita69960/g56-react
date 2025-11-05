const StudentTable = () => {
  const studentData = [
    { id: 1, name: "Alice", subject: "Math", grade: "A" },
    { id: 2, name: "Bob", subject: "Science", grade: "B" },
    { id: 3, name: "Charlie", subject: "History", grade: "A-" },
    { id: 4, name: "Diana", subject: "English", grade: "B+" },
    { id: 5, name: "Edward", subject: "Math", grade: "C" },
  ];

  const getGradingColor = (grade) => {
    if (["A","A-"].includes(grade)) return "bg-success text-white";
    if (["B","B+"].includes(grade)) return "bg-info text-white";
    if ("C" === grade) return "bg-warning text-dark";

    return "";
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Student Grading</h1>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Subject</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.subject}</td>
                <td className={getGradingColor(student.grade)}>{student.grade}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
