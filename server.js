const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// I-serve ang mga static files (css, js, images)
app.use(express.static(path.join(__dirname)));

// Kapag binuksan ang main URL, i-serve ang index.html (redirect file mo)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});