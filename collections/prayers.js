Prayers = new Meteor.Collection('prayers');

Prayers.allow({
  update: ownsDocument,
  remove: ownsDocument,
	insert: isUser //function(){return "true" == "true";}
});

Prayers.deny({
  update: function(userId, prayer, fieldNames) {
    // may only edit the following fields:
    return (_.without(fieldNames, 'request').length > 0);
  }
});

Meteor.methods({
  prayer: function(prayerAttributes) {
    var user = Meteor.user();
    
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new requests");
		
		// ensure the post has a title
    if (prayerAttributes.request.length == 0)
			throw new Meteor.Error(422, 'Please fill in a request');
		
  }
});