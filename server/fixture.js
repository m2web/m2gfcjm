if(Prayers.find().count() === 0){
	Prayers.insert({
			request: 'That we all be conformed into the image of Christ',
			author: 'Mark McFadden',
			datePosted: new Date(),
			userId: 'Mark.McFadden'
	});
}