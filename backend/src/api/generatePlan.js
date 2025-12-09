import express from 'express';
import { openai } from '../utils/openaiClient.js';
import SYSTEM_PROMPT from '../utils/quizPrompt.js'

const router = express.Router();

router.post('/api/generate-plan', async (req, res) => {
  try {
    const answers = req.body.answers;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: buildUserPrompt(answers) }
      ],
      temperature: 0.6
    });

    const plan = completion.choices[0]?.message?.content || '';
    res.json({ plan });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate plan' });
  }
});

export default router;
