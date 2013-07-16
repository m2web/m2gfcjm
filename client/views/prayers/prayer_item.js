Template.prayerItem.helpers({
  ownPrayer: function() {
		if(!Meteor.user()){
			return false;
		}
    return this.author == Meteor.user().profile.name;
  },
});