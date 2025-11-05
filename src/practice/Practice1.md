# Practice 1: Breaking Down a Table into Components

## Objective

Create a React application that displays a table of "Student Grades" by breaking down a table into reusable components.  
Use an **array of objects** to represent the data and style the table using **Bootstrap**.

---

## Requirements

1. **Data Structure**: Use an array of objects to represent student data. Each object should contain:

    - `id`: A unique identifier for each student.
    - `name`: The name of the student.
    - `subject`: The subject they’re graded on.
    - `grade`: The grade they received.

   Example array:

   ```javascript
   const studentData = [
     { id: 1, name: "Alice", subject: "Math", grade: "A" },
     { id: 2, name: "Bob", subject: "Science", grade: "B" },
     { id: 3, name: "Charlie", subject: "History", grade: "A-" },
     { id: 4, name: "Diana", subject: "English", grade: "B+" },
     { id: 5, name: "Edward", subject: "Math", grade: "C" },
   ];
   ```

   **Styling**: Use Bootstrap classes to style the table. Apply conditional styling to the grade cells based on the grade value:

    - Grades "A" and "A-": Use `bg-success text-white`.
    - Grades "B" and "B+": Use `bg-info text-white`.
    - Grade "C": Use `bg-warning text-dark`.
