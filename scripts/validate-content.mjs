import people from '../src/data/people.json' with { type: 'json' };

const requiredFields = ['id', 'name', 'relationship', 'message', 'finalWish'];

const errors = [];

if (!Array.isArray(people) || people.length === 0) {
  errors.push('`people.json` must be a non-empty array.');
}

for (const [index, person] of people.entries()) {
  for (const field of requiredFields) {
    if (!person[field] || typeof person[field] !== 'string') {
      errors.push(`Item ${index + 1} is missing valid field: ${field}`);
    }
  }
}

if (errors.length > 0) {
  console.error('Content validation failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Content validation passed: ${people.length} people entries are valid.`);
