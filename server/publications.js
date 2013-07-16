
Meteor.publish('prayers', function(limit) {
  return Prayers.find({}, {sort: {datePosted: -1}, limit: limit});
});

Meteor.publish('thisUser', function () {
  return Meteor.users.find({_id: this.userId}, 
		{fields: {'profile': 1}});
});