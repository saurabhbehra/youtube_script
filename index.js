var youtube_video = /** @class */ (function () {
    function youtube_video(title, singerv, moviev, viewv, likes, dislikes, subscriber, published) {
        this.video_title = title;
        this.singer = singerv;
        this.movie = moviev;
        this.view = viewv;
        this.likes = likes;
        this.dislikes = dislikes;
        this.subscriber = subscriber;
        this.published = published;
    }
    youtube_video.prototype.getinfo = function () {
        console.log("Title:" + this.video_title);
        console.log("Singer:" + this.singer);
        console.log("Movie:" + this.movie);
        console.log("Views:" + this.view);
        console.log("Likes:" + this.likes);
        console.log("Dislikes:" + this.dislikes);
        console.log("Subscriber:" + this.subscriber);
        console.log("Published:" + this.published);
    };
    return youtube_video;
}());
var youinfo = new youtube_video("Dekhte Dekhte", "Atif Aslam", "Batti Gul Meter Chalu", 1264409, 30000, 899, 59, 25);
youinfo.getinfo();
