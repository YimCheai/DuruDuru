const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000; // You can choose any port you like

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

const questionsFilePath = path.join(__dirname, 'src', 'data', 'questions.json');

// Helper function to read questions from the JSON file
const readQuestions = () => {
    try {
        const data = fs.readFileSync(questionsFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading questions.json:', error);
        return [];
    }
};

// Helper function to write questions to the JSON file
const writeQuestions = (questions) => {
    try {
        fs.writeFileSync(questionsFilePath, JSON.stringify(questions, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing questions.json:', error);
    } 
};

// API to get all questions
app.get('/api/questions', (req, res) => {
    const questions = readQuestions();
    res.json(questions);
});

// API to add a new question
app.post('/api/questions', (req, res) => {
    const newQuestion = req.body; // Expecting the new question object in the request body
    let questions = readQuestions();
    questions.push(newQuestion);
    writeQuestions(questions);
    res.status(201).json({ message: 'Question added successfully', question: newQuestion });
});

// API to add an answer to a specific question
app.post('/api/questions/:id/answers', (req, res) => {
    const questionId = req.params.id;
    const newAnswer = req.body; // Expecting the new answer object in the request body

    let questions = readQuestions();
    const questionIndex = questions.findIndex(q => q.questionId === questionId);

    if (questionIndex > -1) {
        // Ensure the answers array exists
        if (!questions[questionIndex].answers) {
            questions[questionIndex].answers = [];
        }
        questions[questionIndex].answers.push(newAnswer);
        writeQuestions(questions);
        res.status(200).json({ message: 'Answer added successfully', question: questions[questionIndex] });
    } else {
        res.status(404).json({ message: 'Question not found' });
    }
});

// Serve static files from the React build directory (after running `npm run build`)
// This part is for production deployment. During development, React's dev server handles this.
app.use(express.static(path.join(__dirname, 'build')));

// All other GET requests not handled by the API should return your React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
