const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  r1.question("how old are you?", (answer2)=>{
    r1.question("Who is your favourite comic book hero?", (answer3))=>{
      r1.question("Who is stronger, ${answer3} or the Hulk?", (answer4)=>{
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.close();
      }
      })
    })



