const starters = [
"I love",
"I adore",
"I cherish",
"I appreciate",
"I smile because of"
];

const traits = [
"your beautiful eyes",
"your cute eyes",
"your beautiful hair",
"your caring nature",
"how talkative you are",
"your pure heart",
"the way you say 'let it be'",
"your love for daal chawal",
"your smile",
"your laugh",
"the way you make my day lovely",
"the way you make me feel special",
"the way you support me",
"the way you make me happy",
"being able to call you Lakku"
];

const endings = [
"every single day.",
"more than words can explain.",
"for reasons I discover again and again.",
"because it makes my life brighter.",
"because it makes me fall for you all over again."
];

const reasons = [];

for (let i = 1; i <= 1000; i++) {
const starter = starters[Math.floor(Math.random() * starters.length)];
const trait = traits[Math.floor(Math.random() * traits.length)];
const ending = endings[Math.floor(Math.random() * endings.length)];

reasons.push(`${starter} ${trait} ${ending}`);
}
