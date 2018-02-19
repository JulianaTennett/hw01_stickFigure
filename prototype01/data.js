// We will store all the message data as a json object containing an
// array of objects, each one defining key-value pairs of things such as
// the message, the date, whether if the message is maniac or depressing, etc...

var data = {
	pieces: [
		{ 	id: 1,
			maniac: false,
			date: "10/11/2016",
			message: "u ever get hit with such a huge wave of vague, overwhelming emotions and don’t know how to process the sudden rush of feeling in your stomach so you just wanna scream for no reason but ur in public"
		},
		{
			id: 2,
			maniac: true,
			date: "",   // note this has no date, so use empty string to avoid nullpointer errors
			message: "Since I was a kid, when I get really, really excited, I clench my jaw shut and close my eyes tight and squeeze my hands together under my chin with my forearms pressed into my chest. I don't know why I do it, and if I'm having a really good day my jaw literally starts to ache after a while and it's not comfortable. I think it's a way to cope with the feelings that inflate my chest and cannot be contained or ignored. Now that I'm older I only do this when I'm alone (or when I forget I'm around people). My dad pointed it out to me last summer."
		},
		{
			id: 3,
			maniac: false,
			date: "",
			message: '"In cyclothymic disorder, moods swing between short periods of mild depression and hypomania, an elevated mood... People with cyclothymic disorder have milder symptoms than occur in full-blown bipolar disorder."'  // note the use of single quotes here to wrap double quotes!
		},
		{
			id: 4,
			maniac : true,
			date: "",
			message: 'Cyclothymic disorder, I only just learned that word now. I originally titled this piece "Some Things on Manic Depression"'
		},
		{
			id: 5,
			maniac: false,
			date: "3/30/2016",
			message: "I don’t understand why my emotions are so, so up and down. In Lisbon I felt like nothing would ever hurt again, and now I’m in Madrid and wondering why I am in Europe at all. I don’t get it. Why do I have to be so manic depressive?"
		}
	]
};

