var facebook_profile = /** @class */ (function () {
    function facebook_profile(title, bdate, place, frnd, mnumber, work, lang, city) {
        this.name = title;
        this.date = bdate;
        this.livesin = place;
        this.friends = frnd;
        this.mobileno = mnumber;
        this.workneducation = work;
        this.languages = lang;
        this.currentcity = city;
    }
    facebook_profile.prototype.getinfo = function () {
        console.log("Name:" + this.name);
        console.log("Date:" + this.date);
        console.log("Lives in:" + this.livesin);
        console.log("Freinds:" + this.friends);
        console.log("Mobile Number:" + this.mobileno);
        console.log("Work and education:" + this.workneducation);
        console.log("Languages:" + this.languages);
        console.log("Curentcity:" + this.currentcity);
    };
    return facebook_profile;
}());
var faceinfo = new facebook_profile("Saurabh Behra", 24, "Raigarh", 500, 8349617947, "MVJ COLLEGE", "Hindi and English", "Bangalore");
faceinfo.getinfo();
