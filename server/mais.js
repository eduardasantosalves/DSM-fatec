import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(3000, () => console.log('Rodando em http://localhost:3000'));