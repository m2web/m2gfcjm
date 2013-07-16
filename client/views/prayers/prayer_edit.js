Template.prayerEdit.helpers({
  post: function() {
    return Prayers.findOne(Session.get('currentPrayerId'));
  }
});

Template.prayerEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPrayerId = Session.get('currentPrayerId');

    var prayerProperties = {
      request: $(e.target).find('[name=request]').val()
    }

    Prayers.update(currentPrayerId, {$set: prayerProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Meteor.Router.to('prayersList');
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this request?")) {
      var currentPrayerId = Session.get('currentPrayerId');
      Prayers.remove(currentPrayerId);
      Meteor.Router.to('prayersList');
    }
  }
});