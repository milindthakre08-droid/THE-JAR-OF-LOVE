const starters = [
"I love",
"I adore",
"I cherish",
"I appreciate",
"I smile because of"
];

const endings = [
"every single day.",
"more than words can explain.",
"because it makes my world better.",
"and it always feels special.",
"because I never get tired of it."
];

// core emotional themes based on your input
const traits = [
"calling you Lakku",
"your love for dal chawal",
"your endless bakbak",
"spending time with you",
"how you care for me",
"your pure heart",
"your innocence and pureness",
"the way you talk to me",
"the comfort I feel with you",
"your cute way of being yourself",
"the way you make ordinary moments special",
"your presence in my life",
"the way you listen to me",
"the way you understand me",
"your smile that stays in my mind"
];

// extra expansion themes to safely reach 365 without repetition feeling forced
const expandedTraits = [
"talking to you late at night",
"sharing random thoughts with you",
"your funny bakbak that never ends",
"how you get excited about food",
"watching you be yourself",
"your small habits that I notice",
"your kindness even in small things",
"how you make silence comfortable",
"your soft nature",
"your honesty",
"your emotional side",
"your way of caring silently",
"the bond we share",
"the way you make me smile without trying",
"thinking about you randomly during the day"
];

// combine all traits
const allTraits = [...traits, ...expandedTraits];

// generate 365 unique reasons
const reasons = [];

let count = 0;

for (let i = 0; i < starters.length; i++) {
  for (let j = 0; j < allTraits.length; j++) {
    for (let k = 0; k < endings.length; k++) {

      if (count >= 365) break;

      reasons.push(
        `${starters[i]} ${allTraits[j]} ${endings[k]}`
      );

      count++;
    }
    if (count >= 365) break;
  }
  if (count >= 365) break;
}
