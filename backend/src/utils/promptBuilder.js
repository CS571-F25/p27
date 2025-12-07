export function buildUserPrompt(answers) {
  return `
User profile:

Primary goal: ${answers.goal || 'not specified'}
Experience level: ${answers.experience || 'not specified'}
Equipment available: ${
    answers.equipment && answers.equipment.length
      ? answers.equipment.join(', ')
      : 'not specified'
  }
Days per week: ${answers.daysPerWeek}
Approx. time per session: ${answers.sessionLength} minutes
Body focus / priority muscles: ${
    answers.focusMuscles && answers.focusMuscles.length
      ? answers.focusMuscles.join(', ')
      : 'none specifically chosen'
  }

Constraints:
- Design a plan that fits ${answers.daysPerWeek} training days per week.
- Each session should fit in about ${answers.sessionLength} minutes.
- Only use exercises that can be done with the listed equipment.
- Emphasize the body focus muscles across the week.

Now generate a complete training plan for this user following the formatting instructions you were given.
`;
}
