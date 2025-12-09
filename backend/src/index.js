import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { openai } from './utils/openaiClient.js';
import { SYSTEM_PROMPT } from './utils/quizPrompt.js';
import {buildUserPrompt} from './utils/promptBuilder.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/generate-plan', async (req, res) => {
  try {
    const answers = req.body.answers;

    if (!answers) {
      return res.status(400).json({ error: 'Missing answers in request body' });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: buildUserPrompt(answers) }
      ],
      temperature: 0.7
    });

    const plan = completion.choices[0]?.message?.content || '';
    res.json({ plan });
  } catch (err) {
    console.error('OpenAI error:', err);
    res.status(500).json({ error: 'Failed to generate plan' });
  }
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
