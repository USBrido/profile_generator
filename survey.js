const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyQuery = {
name: '',
activity: '',
listen: '',
mealType: '',
mealFood: '',
sport:'',
animal:''
};

  rl.question('What\'s your name? ', (answer1) => { console.log(`Hi ${answer1}, so good to have you here!`);
  surveyQuery.name = answer1

    rl.question('What is your favorite activity? ', (answer2) => { console.log(`Oh, ${answer2} is amazing!`);
    surveyQuery.activity = answer2
 
      rl.question('What is the food you like the most? ', (answer3) => { console.log(`I definitely should try ${answer3}! Sounds so good!`);
      surveyQuery.mealFood = answer3
      
        rl.question(`What\'s your favorite meal that you usually eat ${answer3}? `, (answer4) => { console.log(`Oh, ${answer4} is good!`);
        surveyQuery.mealType = answer4
 
          rl.question('What is your favorite type of music? ', (answer5) => { console.log(`Oh, so your favorite type of music is ${answer5}`);
          surveyQuery.listen = answer5
  
            rl.question('What is your favorite animal? ', (answer6) => { console.log(`Oh, ${answer6}s are so nice!`);
            surveyQuery.animal = answer6
            console.log(
            `Hi! My name is ${surveyQuery.name}. 
            My favorite activity is ${surveyQuery.activity}. 
            And I love to eat ${surveyQuery.mealFood} at ${surveyQuery.mealType = answer4}. 
            I like ${surveyQuery.animal}s and ${surveyQuery.listen } music!`);
            rl.close();
          });
        });
      });
    });
  });
});



// Instead of asking the user about what they think of Node.js, we can ask them the following questions, in order:

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!
// That said, feel free to change the narrative if you have better, more interesting questions to ask them.