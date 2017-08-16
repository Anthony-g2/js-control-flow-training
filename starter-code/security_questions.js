console.log("security_questions.js loaded");
let securityQuestions = [
  {
    question:"Mother's Maiden Name",
    expectedAnswer: "Doe"
  },
  {
    question:"Pet's Name",
    expectedAnswer: "Fluffy"
  },
  {
    question:"Birth City",
    expectedAnswer: "Atlantis"
  }
];
/* src = "https://www.reddit.com/r/learnprogramming/comments/16sb71/javascript_how_do_i_repeat_a_prompt_until_a/" */
for (var i = 0;i<securityQuestions.length;i++) {
  var x = prompt(securityQuestions[i].question)
  if (x != securityQuestions[i].expectedAnswer) {
    alert('Incorrect, refresh the page and try again.');
    break
  } else {
    x;
  }
};
