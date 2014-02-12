var nextPhrase = (function() {

// List of phrases in the following format, "Thank you for..."
	var phraseArray =  [
		"being so awesome.",
		"being such a hottie.",
		"always giving me the best haircut, ever!",
		"styling my hair when I'm too lazy.",
		"making me tea and oatmeal every day.",
		"being such an amazing role model for our daughters.",
		"being such a supportive wife.",
		"making me those amazing chicken wraps.",
		"warning me before you turn the light on when I'm sleeping late.",
		"digging the 'stache.",
		"loving me and all of my glorious body hair.",
		"repeating yourself when I don't listen the first time.",
		"kissing me even when I have bad breath in the morning.",
		"listening to my endless ideas.",
		"supporting me with my endless interests.",
		"being so damn sexy!",
		"reminding me to do things... a lot.",
		"telling it like it is.",
		"shoveling the driveway.",
		"taking out the trash.",
		"doing (insert task here), when I forget.",
		"believing in me.",
		"visiting me in my dreams.",
		"smiling.",
		"laughing.",
		"trying foods that are a bit outside your comfort zone.",
		"taking the dogs out.",
		"taking our the recycling.",
		"doing all our grocery shopping.",
		"doing all the laundry.",
		"always keeping the house so clean.",
		"doing the dishes.",
		"loading the dish washer.",
		"emptying the dish washer.",
		"picking up after me.",
		"making me food.",
		"driving me to the train station.",
		"not freaking out when I decided to quit my job.",
		"not freaking out when I had my hours cut.",
		"not freaking out when I have to stay late for work.",
		"not freaking out when I had to go to Romania for two and a half weeks.",
		"not throwing the Apple TV remote at me.",
		"sharing the heating blanket with me when we snuggle up on the couch.",
		"watching the movies that I like to watch.",
		"coming to the gym with me.",
		"inviting me to yoga.",
		"coming to visit me when I was at SIB.",
		"not busting my balls too much when I don't follow through on commitments.",
		"trusting me.",
		"knowing that the future will be brighter.",
		"going back to work.",
		"dropping me off at the train.",
		"picking me up at the train.",
		"supporting my obsessive food tracking (while it lasted).",
		"picking up my dirty socks (on the rare occasions) when I leave them on the floor.",
		"keeping the bed warm when I crawl in late at night.",
		"steaming my clothes.",
		"ironing my clothes.",
		"picking out my clothes.",
		"washing my clothes.",
		"giving the girls tubby's.",
		"getting the girls dressed.",
		"wiping the girls bums.",
		"getting Kaylee on the bus.",
		"getting Kaylee off the bus.",
		"dropping Brooke off at school.",
		"picking Brooke up at school.",
		"finding the things I misplace.",
		"cleaning up after me.",
		"not getting annoyed when I'm up late typing in bed.",
		"not getting annoyed when I use up all the hot water.",
		"not using all the hot water.",
		"marrying me.",
		"loving me.",
		"being my wife.",
		"being an amazing mom.",
		"being an incredible woman.",
		"being such a kind person.",
		"being so thoughtful.",
		"being silly with me.",
		"not throwing things at the TV when the Patriots lose.",
		"not giving me crap about buying all the bike commuting stuff and then not riding to the train station a single day.",
		"being you.",
		"being so caring.",
		"being such a strong woman.",
		"putting water in the dogs bowl.",
		"being so frugal while money is tight.",
		"inspiring me to be a better man.",
		"inspiring me to be a better father.",
		"finding me foods with high protein.",
		"making me dinner.",
		"making me breakfast.",
		"making me lunch.",
		"taking care of our girls.",
		"taking care of me.",
		"giving me hugs.",
		"giving me kisses.",
		"giving me...",
		"restocking the toilet paper.",
		"going to get dog food when we run out.",
		"living without all of the cable channels.",
		"not complaining about the laptop that's permanently attached to my hands.",
		"not breaking ANOTHER phone.",
		"liking craft beer.",
		"loving sports.",
		"teaching our girls how to be strong.",
		"overcoming life's challenges with me.",
		"making me check the oil.",
		"saying you like it when I play the guitar.",
		"finding free activities to do with the girls.",
		"taking the girls to the library all the time.",
		"doing fun crafts with the girls.",
		"buying the girls all the fun girly things I would never think to get them.",
		"making me go to the American Girl store.",
		"challenging yourself.",
		"growing so much as an individual.",
		"dealing with the girls drama.",
		"seeing me for who I really am.",
		"you.",
		"giving birth to Kaylee.",
		"giving birth to Brooke.",
		"giving birth to two amazing girls.",
		"not bringing up the guinea pig idea when we got back from France.",
		"not banning nuts from the house.",
		"buying me fish even though you hate it.",
		"buying me nuts even though they scare you.",
		"feeding me.",
		"cleaning the toilet.",
		"boiling me water.",
		"making me tea.",
		"picking my dirty clothes up off the floor.",
		"putting my clothes away.",
		"folding my socks and underwear.",
		"cleaning my office.",
		"loving The Walking Dead.",
		"having an awesome sense of humor.",
		"loving all of us. -Kaylee",
		"cleaning up all our toys when we forget to pick them up. -Brooke",
		"helping me brush my teeth. -Brooke",
		"giving us kisses. -Kaylee",
		"giving us hugs. -Kaylee",
		"helping Kaylee with her homework."
	];

  var copy;
  return function() {
    if (!copy || !copy.length) copy = phraseArray.slice();
    return "&nbsp;" + copy.splice(Math.random() * copy.length | 0, 1);
  }
}());