export const recommendedWorkouts = [
  {
    id: 1,
    name: 'Full Body Strength',
    duration: '45 min',
    difficulty: 'Intermediate',
    exercises: ['Squats', 'Push-ups', 'Deadlifts', 'Pull-ups'],
    calories: 350,
    isRecommended: true
  },
  {
    id: 2,
    name: 'Cardio Blast',
    duration: '30 min',
    difficulty: 'Beginner',
    exercises: ['Running', 'Jumping Jacks', 'Burpees', 'Mountain Climbers'],
    calories: 280,
    isRecommended: false
  },
  {
    id: 3,
    name: 'Upper Body Focus',
    duration: '40 min',
    difficulty: 'Advanced',
    exercises: ['Bench Press', 'Rows', 'Shoulder Press', 'Bicep Curls'],
    calories: 320,
    isRecommended: false
  },
];

export const foodPlans = [
  {
    id: 1,
    name: 'High Protein Plan',
    meals: 5,
    calories: 2200,
    focus: 'Muscle Building',
  },
  {
    id: 2,
    name: 'Weight Loss Plan',
    meals: 4,
    calories: 1600,
    focus: 'Fat Loss',
  },
  {
    id: 3,
    name: 'Balanced Nutrition',
    meals: 5,
    calories: 2000,
    focus: 'Maintenance',
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Alex R.",
    role: "Muscle Building",
    quote: "The personalized plan actually adapted to my 3-day schedule. Finally seeing progress after months of stagnation.",
    initial: "A",
  },
  {
    id: 2,
    name: "Sarah K.",
    role: "Weight Loss",
    quote: "I love that I don't have to guess what to eat. The macro breakdowns are spot on and easy to follow.",
    initial: "S",
  },
  {
    id: 3,
    name: "Mike T.",
    role: "Strength Training",
    quote: "Simple, effective, and straight to the point. The dashboard tracks my PRs automatically.",
    initial: "M",
  },
  {
    id: 4,
    name: "Emily W.",
    role: "Marathon Prep",
    quote: "The engine understood I needed leg strength without bulk. My run times have dropped significantly.",
    initial: "E",
  },
  {
    id: 5,
    name: "David L.",
    role: "Home Workouts",
    quote: "I only have dumbbells, and it generated a legit routine. No more random YouTube videos.",
    initial: "D",
  },
  {
    id: 6,
    name: "Jessica P.",
    role: "Post-Partum",
    quote: "Safe, gradual progression was my main concern. This app respected my limits while pushing me.",
    initial: "J",
  }
];

export const generateMockPlan = (answers) => {
  const goal = answers.goal || 'Fitness';
  const days = answers.daysPerWeek || 3;

  let plan = `OVERVIEW:\nThis is a generated fallback plan designed for your goal: ${goal}. Since the AI server is unreachable, we have created a structured routine based on standard principles.\n\n`;
  plan += `WEEKLY SPLIT:\n`;
  for (let i = 1; i <= days; i++) {
    plan += `Day ${i} - Full Body & Core\n`;
  }
  plan += `\nWORKOUTS BY DAY:\n`;

  for (let i = 1; i <= days; i++) {
    plan += `\nDay ${i} - Full Body & Core\n`;
    plan += `Squats (Goblet or Bodyweight): 3 sets x 12 reps\n`;
    plan += `Push-Ups (or Knee Push-Ups): 3 sets x 10-15 reps\n`;
    plan += `Dumbbell Rows (or Bodyweight Row): 3 sets x 12 reps\n`;
    plan += `Lunges: 3 sets x 10 reps per leg\n`;
    plan += `Plank: 3 sets x 30-45 seconds\n`;
  }

  plan += `\nBODY FOCUS NOTES:\nFocus on controlled movements. This plan covers all major muscle groups.\n`;
  plan += `\nSAFETY AND PROGRESSION:\nand stay hydrated. Consult a doctor before starting.`;

  return { plan };
};