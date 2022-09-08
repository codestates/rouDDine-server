const app = require('./controller/app')
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(201).send('Hello World 🇰🇷');
});

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번에서 작동중입니다.`);
});

