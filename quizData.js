const quizData = [
  {
    date: '4/12',
    question:
      'Q: Tell me what the Devil’s Dictionary defines as the Hider factor in the progress of the human race.',
    answer: 'A: Villains',
  },
  {
    date: '4/19',
    question: 'Q: Between A and B ... which line seems longer ...?',
    answer: 'A: They’re the same',
  },
  {
    date: '4/23',
    question:
      'Q: Between music, theater, and chariot racing, which sport did Nero win when he participated in the Olympics?',
    answer: 'A: All of them',
  },
  {
    date: '4/25',
    question:
      'Q: Ann asks for help about what does the phrase “my country right or wrong” mean to convey?',
    answer: 'A1: You unquestionably support it',
  },
  {
    date: '4/25',
    question:
      'Q: Ann asks for help about what does the phrase “my country right or wrong” mean to convey?',
    answer: 'A2: You have a duty to correct it',
  },
  {
    date: '4/27',
    question: 'Q: Do you know the name of the theorem named after this number?',
    answer: 'A: Four color theorem',
  },
  {
    date: '4/30',
    question: 'Q1: First off, the “wunder” part probably means ...?',
    answer: 'A1: Wonder',
  },
  {
    date: '4/30',
    question: 'Q2: Next, the “kind” part. That’s probably ...',
    answer: 'A2: Child',
  },
  {
    date: '4/30',
    question:
      'Q3: Yeah, that’s gotta be it. “Kind” means a child ... or at least a young guy, in your case.',
    answer: 'A3: A prodigy',
  },
  {
    date: '5/7',
    question:
      'Q: So what’s the literal translation of the phrase “femme fatale?”',
    answer: 'A: Fatal woman',
  },
  {
    date: '5/10',
    question:
      'Q: You know the time period Yoshitsune was active in, don’t you?',
    answer: 'A: The Heian period',
  },
  {
    date: 'EXAMS 5/11',
    question: 'Q1: What historical figure inspired “favoring the magistrate?”',
    answer: 'A1: Minamoto no Yoshitsune',
  },
  {
    date: 'EXAMS 5/11',
    question:
      'Q2: Yoshitune had a brother, right. Oh, I think his name was ...',
    answer: 'A2: Minamoto no Yoritomo',
  },
  {
    date: 'EXAMS 5/11',
    question:
      'Q3: But they ended up coming into conflict. And in the end when they had to oppose each other ...',
    answer: 'A3: Yoritomo won',
  },
  {
    date: 'EXAMS 5/11',
    question:
      'Q4: That’s probably because people tend to sympathize less with people in power, and sympathize more with ...',
    answer: 'A4: The weak',
  },
  {
    date: 'EXAMS 5/12',
    question:
      'Q1: Which brain function is responsible for the phenomenon of seeing an illusion in this figure?',
    answer: 'A1: Cognition',
  },
  {
    date: 'EXAMS 5/12',
    question:
      'Q2: Which of the following maps can you paint without any adjacent areas being the same color?',
    answer: 'A2: Both',
  },
  {
    date: 'EXAMS 5/13',
    question:
      'Q1: Name that book that defined “male factor” as the chief factor in the progress of the human race.',
    answer: 'A1: The Devil’s Dictionary',
  },
  {
    date: 'EXAMS 5/13',
    question:
      'Q2: What character archetype refers to a mysterious and seductive woman, typically with ulterior motives?',
    answer: 'A2: Femme Fatale',
  },
  {
    date: '5/16',
    question:
      'Q: What do we call the phenomenon where believing in a treatment’s power is enough to improve your condition?',
    answer: 'A: The Placebo effect',
  },
  {
    date: '5/19',
    question:
      'Q: Which famous artist of the Edo period is said to have moved residence over 100 times?',
    answer: 'A: Katsushika Hokusai',
  },
  {
    date: '5/21',
    question:
      'Q: The golden ratio is 1:1.618 but do you know the silver ratio?',
    answer: 'A: 1:1.414',
  },
  {
    date: '5/23',
    question:
      'Q1: If we think about what these words have in common, then maybe “syn” means ...',
    answer: 'A1: Together',
  },
  {
    date: '5/23',
    question:
      'Q2: And “aisthesis,” huh? That’s a little like the word aesthetics. I wonder if it means ...',
    answer: 'A2: Senses',
  },
  {
    date: '5/23',
    question: 'Q3: So that means the full word basically means...',
    answer: 'A3: Senses coming together',
  },
  {
    date: '5/26',
    question: 'Q: Do you know which author Leblanc borrowed from?',
    answer: 'A: Arthur Conan Doyle',
  },
  {
    date: '5/31',
    question:
      'Q: Do you know which peg-legged, parrot toting historical figure’s appearance became visual shorthand for pirates?',
    answer: 'A: John Silver',
  },
  {
    date: '6/4',
    question: 'Q: What do you think the name for the phenomenon is?',
    answer: 'A: The halo effect',
  },
  {
    date: '6/7',
    question:
      'Q: The red king crab is biologically related to the hermit crab. So how is it different from a crab. Do you know?',
    answer: 'A: The number of legs',
  },
  {
    date: '6/8',
    question:
      'Q: Where does totalitarianism take things a step further than authoritarianism?',
    answer: 'A: Controlling Public Thought',
  },
  {
    date: '6/13',
    question:
      'Q: What color do you think it turns (when washing your hair with copper)',
    answer: 'A: Green',
  },
  {
    date: '6/15',
    question:
      'Q: Between paper bills and coins, which one is issued by the government?',
    answer: 'A: Coins',
  },
  {
    date: '6/20',
    question: 'Assist Ann: One of these has minor metals in it, right?',
    answer: 'A: Smartphone',
  },
  {
    date: '6/23',
    question: 'Q: Now do you know what this woman’s position was?',
    answer: 'A: A pope',
  },
  {
    date: '6/27',
    question:
      'Q: Which of these animals is involved in an English idiom about the weather?',
    answer: 'A: Dogs',
  },
  {
    date: '6/29',
    question: 'Q: What do you think it says on the back of this (Shogi) piece?',
    answer: 'A: Gold',
  },
  {
    date: '7/1',
    question:
      'Q: What’s the meaning of the original Chinese phrase that these dumplings’ name came from?',
    answer: 'A: Barbarian’s Head',
  },
  {
    date: '7/4',
    question:
      'Q: Two people are responsible for July and August having 31 days. Do you know who those people are?',
    answer: 'A: Julius and Augustus',
  },
  {
    date: '7/7',
    question:
      'Assist Ann: So Tanabata’s about gods crossing a starry sky to reunite once every year. It might have something to do with... ?',
    answer: 'A1: The Milky Way',
  },
  {
    date: '7/7',
    question: 'Q2: Traditional food',
    answer: 'A2: Soumen’s noodles',
  },
  {
    date: '7/9',
    question: 'Q: Do you know what shape it is?',
    answer: 'A: A triangle',
  },
  {
    date: '7/11',
    question: 'Q1: What is long-term memory, anyway?',
    answer: 'A1: Memories that last a long time',
  },
  {
    date: '7/11',
    question:
      'Q2: Markus mentioned something about the amount of memories you could store, right? Something like ...',
    answer: 'A2: Infinite',
  },
  {
    date: '7/11',
    question:
      'Q3: If you have theoretically infinite space for them... Theoretically, you’d be able to retain them for ...',
    answer: 'A3: Forever',
  },
  {
    date: '7/12',
    question: 'Q: Do you know what he did?',
    answer: 'A: Thievery',
  },
  {
    date: 'EXAMS 7/13',
    question:
      'Q1: If angle C is 28 degrees, and angles A and D are 88 degrees, what is the angle of B and E?',
    answer: 'A1: 64 degrees',
  },
  {
    date: 'EXAMS 7/13',
    question:
      'Q2: I think this came up in class. They were invented by the campus’s guy from Romance of the Three Kingdoms, right?',
    answer: 'A2: Zhuge Liang',
  },
  {
    date: 'EXAMS 7/13',
    question: 'Q3: And they were offering something to quell the river ...',
    answer: 'A3: Barbarians’ heads',
  },
  {
    date: 'EXAMS 7/13',
    question: 'Q4: This master strategist came up with the baozi to',
    answer: 'A4: To offer them instead of heads',
  },
  {
    date: 'EXAMS 7/14',
    question: 'Q1: What is the name and genus of this organism?',
    answer: 'A1: Red King Crab (Paralithodes)',
  },
  {
    date: 'EXAMS 7/14',
    question:
      'Q2: What happened when the government issued paper and hard currencies in Japan for the first time?',
    answer: 'A2: It caused confusion in the economy',
  },
  {
    date: 'EXAMS 7/15',
    question:
      'Q1: What is the English equivalent of the Norwegian idiom “raining witches?”',
    answer: 'A1: Raining cats and dogs',
  },
  {
    date: 'EXAMS 7/15',
    question:
      'Q2: Which of the following is another name for spikenard noodles traditionally eaten in Tanabata?',
    answer: 'A2: Demon guts',
  },
  {
    date: '9/3',
    question:
      'Q: Each hand in this famous statue means something, but ... do you know what the right represents?',
    answer: 'A: Prosperity',
  },
  {
    date: '9/6',
    question:
      'Q: Do you know the name of that phenomenon where the second hand looks like it’s stopped moving?',
    answer: 'A: Chronostasis',
  },
  {
    date: '9/14',
    question: 'Q: What does a pawn shop offer that a secondhand shop doesn’t?',
    answer: 'A: Money loans for collateral',
  },
  {
    date: '9/17',
    question:
      'Q: What’s one of the supposed origins for the phrase “cat got your tongue?”',
    answer: 'A: Cats eating human tongues',
  },
  {
    date: '9/21',
    question:
      'Q: Robot comes from a word in Czech ... but where in Europe is the Czech Republic located?',
    answer: 'A: Central Europe',
  },
  {
    date: '9/24',
    question:
      'Q: How many white and black shapes are there respectively on a soccer ball?',
    answer: 'A: 20 white, 12 black',
  },
  {
    date: '9/28',
    question:
      'Q1: So "PVS," referring to when you mistakenly think your phone is going off... What\'s the P?',
    answer: 'A1: Phantom',
  },
  {
    date: '9/28',
    question:
      'Q2: The next part is the V part. That means it\'d be "phantom..." what?',
    answer: 'A2: Vibration',
  },
  {
    date: '9/28',
    question: 'Q3: Last is the S. So if we have "phantom vibration" so far...?',
    answer: 'A3: Syndrome',
  },
  {
    date: '9/29',
    question:
      'Q: But the fishermen of Nagaragawa are actually civil servants as well. So, tell me which sector they belong to.',
    answer: 'A: Imperial Household Agency',
  },
  {
    date: '10/3',
    question:
      'Q: If we use “three watermelons in the sun” to visualize a certain matter’s size against the universe’s, what are the melons?',
    answer: 'A: Stars',
  },
  {
    date: '10/6',
    question: 'Q: Now, do you know who invented this instrument? (Guillotine)',
    answer: 'A: Joseph-Ignace Guillotine',
  },
  {
    date: '10/11',
    question: 'Q: Which name was most commonly ascribed to shape B?',
    answer: 'A: Bouba',
  },
  {
    date: 'EXAMS 10/17',
    question:
      'Q1: Counting both black and white surfaces, how many surfaces are there in total on a soccer ball?',
    answer: 'A1: 32 surfaces',
  },
  {
    date: 'EXAMS 10/17',
    question:
      'Q2: Didn’t the teacher say that the number of colors used to be different? Do you remember?',
    answer: 'A2: It used to be one color',
  },
  {
    date: 'EXAMS 10/17',
    question:
      'Q3: Oh yeah, I remember. I think she said that unlike now, soccer games were broadcast with ...',
    answer: 'A3: Black and white picture',
  },
  {
    date: 'EXAMS 10/18',
    question: 'Q1: Who conducted executions using this device?',
    answer: 'A1: Charles-Henri Sanson',
  },
  {
    date: 'EXAMS 10/18',
    question:
      'Q2: What is the reason that most people can not become a commercial fisherman of Nagarasawa?',
    answer: 'A2: It’s a hereditary profession',
  },
  {
    date: 'EXAMS 10/19',
    question:
      'Q1: What is the meaning of “robota,” the etymological root of “robot”',
    answer: 'A1: Slave labor',
  },
  {
    date: 'EXAMS 10/19',
    question:
      'Q2: Which of the following describes the density of the stars in outer space?',
    answer: 'A2: 3 bees in all of Europe',
  },
  {
    date: '10/22',
    question:
      'Q: Now, tell me the total count for each column in this magic square.',
    answer: 'A: 15',
  },
  {
    date: '10/24',
    question:
      'Q: From a psychological standpoint, what’s a key reason our memories can differ from reality?',
    answer: 'A: Memory Bias',
  },
  {
    date: '11/2',
    question:
      'Q: Can you tell me the meaning of the word “wack” in Thieves’ Cant?',
    answer: 'A: A share of stolen goods',
  },
  {
    date: '11/4',
    question:
      'Q: Clubs is a club, diamond is a gem, so what does a spade represent?',
    answer: 'A: A sword',
  },
  {
    date: '11/8',
    question: 'Q: Tell me how old you have to be to listen in on a trial?',
    answer: 'A: Any age',
  },
  {
    date: '11/10',
    question: 'Q: Do you know why it’s missing in the character for crow?',
    answer: 'A: Crow eyes are hard to see',
  },
  {
    date: '11/12',
    question:
      'Q: I wonder. Do you know why voices sound so different over the phone?',
    answer: 'A: Because the voice is synthetic.',
  },
  {
    date: '11/14',
    question: 'Q: Tell me why that is? (Sun rising over Mt. Fuji)',
    answer: 'A: Because of high altitude',
  },
  {
    date: '11/15',
    question:
      'Q: He was to be paraded through the city and punished in a very particular way. How was he punished? (Nezumi Kozo)',
    answer: 'A: His head was put on display',
  },
  {
    date: '11/17',
    question:
      'Q: Do you know the name for this graph? Your hint is “snails” ...',
    answer: 'A: Cochleoid',
  },
  {
    date: 'EXAMS 12/20',
    question:
      'Q1: Choose the graph which is named after the Chinese yoyo known as a diabolo.',
    answer: 'A1: D',
  },
  {
    date: 'EXAMS 12/20',
    question:
      'Q2: He was a really famous thief in the Edo period, right? How much money did he steal, in the end?',
    answer: 'A2: Over one billion yen',
  },
  {
    date: 'EXAMS 12/20',
    question: 'Q3: As a result he was sentenced to ...',
    answer: 'A3: Having his head displayed',
  },
  {
    date: 'EXAMS 12/20',
    question:
      'Q4: Criminals, especially famous criminals, were mostly parades around for ...',
    answer: 'A4: A performance',
  },
  {
    date: 'EXAMS 12/21',
    question: 'Q1: Which suit of cards represents the Holy Grail?',
    answer: 'A1: Hearts',
  },
  {
    date: 'EXAMS 12/21',
    question:
      'Q2: According to Japanese judicial law, what is possible for even an infant to do in court?',
    answer: 'A2: Attend',
  },
  {
    date: 'EXAMS 12/22',
    question:
      'Q1: What country refers to a person who controls politics behind the scenes as a “prime minister in black?”',
    answer: 'A1: Japan',
  },
  {
    date: 'EXAMS 12/22',
    question:
      'Q2: The Japanese word “dokyuu” translates to “massive.” What English word inspired the initial “do” in dokyuu?',
    answer: 'A2: Dreadnought',
  },
  {
    date: '1/11',
    question:
      'Assist Ann 1: What’s this phrase supposed to illustrate about the gods of Shinto?',
    answer: 'A1: How numerous they are',
  },
  {
    date: '1/11',
    question:
      'Assist Ann 2: What’s the phrase again? The one about how many gods there are in Shinto?',
    answer: 'A2: The Eight Million Gods',
  },
  {
    date: '1/14',
    question:
      'Q: Where do you think the fictional land of “Ihatov” is modeled after?',
    answer: 'A: Iwate',
  },
  {
    date: '1/18',
    question: 'Q: What did the word awful originally mean?',
    answer: 'A: Impressive',
  },
  {
    date: '1/20',
    question: 'Q: Do you know what she’s stepping on?',
    answer: 'A: A snake',
  },
  {
    date: '1/24',
    question: 'Q1: What does that mean when describing a person? (Sweet)',
    answer: 'A1: Kind-hearted',
  },
  {
    date: '1/24',
    question:
      'Q2: So what kind of connotation would “salty” have in that context?',
    answer: 'A2: Negative',
  },
  {
    date: '1/24',
    question: 'Q3: So with all of that in mind, “salty” probably means ...',
    answer: 'A3: Resentful',
  },
  {
    date: '1/27',
    question:
      'Q: How far did this study suggest personal happiness can spread?',
    answer: 'A: To friends of friends of friends',
  },
]

export default quizData
