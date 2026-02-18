import express from 'express';
import userRoutes from '../src/routes/userRoutes.js';
import errorHandler from '../src/middleware/errorHandler.js';
import pc from 'picocolors';


const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("backend is working");
  if (req.query.error) {
    res.status(500).send("An error occurred");
  }
})

app.use('/api', userRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('\n' + '─'.repeat(40));
  console.log(`${pc.green('🚀 Server is sparking!')}`);
  console.log(`${pc.cyan('📂 API Root:')}  ${pc.underline(`http://localhost:${PORT}`)}`);
  console.log(`${pc.yellow('🕒 Started at:')} ${new Date().toLocaleTimeString()}`);
  console.log('─'.repeat(40) + '\n');
});