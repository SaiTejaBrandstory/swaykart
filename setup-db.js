const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 SwayKart Database Setup');
console.log('==========================\n');

const questions = [
  'Enter your database host name: ',
  'Enter your database port (default: 5432): ',
  'Enter your database name (default: swaykart): ',
  'Enter your username: ',
  'Enter your password: '
];

const answers = {};

function askQuestion(index) {
  if (index >= questions.length) {
    // Create .env.local file
    const envContent = `# Database Configuration
DB_HOST=${answers[0]}
DB_PORT=${answers[1] || '5432'}
DB_NAME=${answers[2] || 'swaykart'}
DB_USER=${answers[3]}
DB_PASSWORD=${answers[4]}
`;

    fs.writeFileSync('.env.local', envContent);
    console.log('\n✅ Environment variables saved to .env.local');
    console.log('\n📝 Next steps:');
    console.log('1. Make sure your database is accessible');
    console.log('2. Run: npm run dev');
    console.log('3. Visit: http://localhost:3000/leaderboard');
    console.log('\n🎉 Setup complete!');
    rl.close();
    return;
  }

  rl.question(questions[index], (answer) => {
    answers[index] = answer.trim();
    askQuestion(index + 1);
  });
}

askQuestion(0);
