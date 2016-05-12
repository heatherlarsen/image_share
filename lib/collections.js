Images = new Mongo.Collection("images");

// set up security on Images collection
Images.allow({
	insert: function(userId, doc) {
		if (Meteor.user()) { // are they logged in
			// force the image to be owned by the user
			if (userId != doc.createdBy) {
				return false;
			} else {
				return true;
			}
		} else { // user not logged in
			return false;
		}
	}, 
	remove: function(doc) {
		return true;
	}
});