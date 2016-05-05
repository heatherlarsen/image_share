if (Meteor.isServer) {
    console.log("I'm on the server in the client folder!");
    Meteor.startup(() => {
        if (Images.find().count() == 0) {
            for (var i = 1; i < 23; i++) {
                Images.insert(
                    {
                        img_src: "img_"+i+".jpg",
                        img_alt: "Image number "+i
                    }
                );
            } // end of for insert images
            console.log("startup.js says: " + Images.find().count()); // count the images
        } // end of if
    });
}
