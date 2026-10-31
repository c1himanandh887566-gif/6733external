
// Student data
let students = [
    { id: 1, name: "Abhilash", age: 21, branch: "CSD" },
    { id: 2, name: "Rahul", age: 22, branch: "CSE" }
];

// 1. CREATE - Add student
app.post('/students', (req, res) => {
    const student = req.body;

    students.push(student);

    res.status(201).json({
        message: "Student added successfully",
        student: student
    });
});

// 2. READ - Get all students
app.get('/students', (req, res) => {
    res.json(students);
});

// Get student by ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

// 3. UPDATE - Update student
app.put('/students/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students[index] = {
        ...students[index],
        ...req.body,
        id: id
    };

    res.json({
        message: "Student updated successfully",
        student: students[index]
    });
});

// 4. DELETE - Delete student
app.delete('/students/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
