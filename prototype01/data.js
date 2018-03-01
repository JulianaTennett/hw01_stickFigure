// We will store all the message data as a json object containing an
// array of objects, each one defining key-value pairs of things such as
// the message, the date, whether if the message is maniac or depressing, etc...

var data = {
	pieces: [
		{ 	id: 1,
			maniac: true,
			date: "9/23/16",
			message: '"I AM IN A GREAT MOOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!! IT’S A GREAT DAY!!!!!!!!!!!!!!!!"'
		},
		{
			id: 2,
			maniac: true,
			date: "",   // note this has no date, so use empty string to avoid nullpointer errors
			message: "Since I was a kid, when I get really, really excited, I clench my jaw shut and close my eyes tight and squeeze my hands together under my chin with my forearms pressed into my chest. I don't know why I do it, and if I'm having a really good day my jaw literally starts to ache after a while and it's not comfortable. I think it's a way to cope with the feelings that inflate my chest and cannot be contained or ignored. Now that I'm older I only do this when I'm alone (or when I forget I'm around people). My dad pointed it out to me last summer."
		},
		{
			id: 3,
			maniac: true,
			date: "7/3/15",
			message: '"HYPED UP ON BITMOJIS AND COLLEGE APARTMENT HEAVEN ON CRAIGSLIST.CANNOT SLEEP. CANNOT CALM DOWN. TOO MANY POSSIBILITIES. FUTURE!!!"'  // note the use of single quotes here to wrap double quotes!
		},
		{
			id: 4,
			maniac : true,
			date: "",
			message: 'My therapist once told me "If people average 50 thoughts per minute, you must average 150" That’s when I realized my mind is a constant rapid whirlwind of thoughts, more thoughts than others usually have, and that’s why I am always buzzing. Always thinking. Always over-thinking.'
		},
		{
			id: 5,
			maniac: true,
			date: "12/16/16",
			message: '"When you’re hyped up on coffee and Scout events and free pizza and your body doesn’t feel like it can contain the emotion...and suddenly your hype is deflated but that energy is still buzzing in your chest and now it’s really negative, embarrassed energy and not excited energy but close to excited, but not excited, it’s sad and now the negative energy is taking up all this space and you want to explode into star dust and tears at the same time"'
		},
		{
			id: 6,
			maniac: true,
			date: "4/15/15",
			message: '"I FEEL REALLY GOOD ABOUT MY LIFE I DONT KNOW WHEN I TRANSITIONED INTO HAPPY AGAIN BUT IM LOVING IT LETS GO ITS A NEW PHASE OF LIFE AND IM FINALLY STARTING TO LET GO OF THE PAST"'
		},
		{
			id: 7,
			maniac: false,
			date: "10/11/16",
			message: '"u ever get hit with such a huge wave of vague, overwhelming emotions and don’t know how to process the sudden rush of feeling in your stomach so you just wanna scream for no reason but ur in public"'
		},
		{
			id: 8,
			maniac: false,
			date: "3/30/2016",
			message: '"I don’t understand why my emotions are so, so up and down. In Lisbon I felt like nothing would ever hurt again, and now I’m in Madrid and wondering why I am in Europe at all. I don’t get it. Why do I have to be so manic depressive?"'
		},
		{
			id: 6,
			maniac: false,
			date: "8/1/16",
			message: '"Still fighting off this invading feeling of melancholy and grayness and trying to feel happy and do fun things, and I just want to want to leave my apartment to have fun instead of feeling exhausted and bored and uninterested 100% of the time and why don’t I find joy in things I usually find joy in??!"'
		},
		{
			id: 9,
			maniac: false,
			date: "9/18/15",
			message: '"I feel an inexplicable weight on my face. Like my eyes feel heavier and my cheeks are heavier so I can’t smile or make expressions or do anything but sit dead face. My faces feels dead, that’s it. Which is not cool, because I am supposed to be a happy, bubbly, fun-loving person, who’s always positive and doesn’t let things get to her and keeps her emotions in tact. But here I am, feeling dead"'
		}
	]
};
