Meteor.Router.add({
	'/': 'prayersList',
	'/submit' : 'prayerSubmit',
	'/prayers/:_id/edit': {
    to: 'prayerEdit', 
    and: function(id) { Session.set('currentPrayerId', id); }    
  },
});

Meteor.Router.add({
  '/prayers/:userId': { to: 'userPage', and: function(userId) {
			Session.set('currentUserId',userId);
		}
	}
});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'accessDenied';
  },
  'clearErrors': function(page) {
    clearErrors();
    return page;
  }
});

Meteor.Router.filter('requireLogin', {only: 'prayerSubmit'});
Meteor.Router.filter('clearErrors');

