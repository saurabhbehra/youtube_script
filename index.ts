class youtube_video{
    video_title:string;
    singer:string;
    movie:string;
    view:number;
    likes:number;
    dislikes:number;
    subscriber:any;
    published:any;
    constructor(title:string,singerv:string,moviev:string,viewv:number,likes:number,dislikes:number,subscriber:any,published:any)
    {
        this.video_title=title;
        this.singer=singerv;
        this.movie=moviev;
        this.view=viewv;
        this.likes=likes;
        this.dislikes=dislikes;
        this.subscriber=subscriber;
        this.published=published;
    }
    getinfo()
    {
        console.log("Title:"+this.video_title);
        console.log("Singer:"+this.singer);
        console.log("Movie:"+this.movie);
        console.log("Views:"+this.view);
        console.log("Likes:"+this.likes);
        console.log("Dislikes:"+this.dislikes);
        console.log("Subscriber:"+this.subscriber);
        console.log("Published:"+this.published);
       
    }
}
let youinfo=new youtube_video("Dekhte Dekhte","Atif Aslam","Batti Gul Meter Chalu",1264409,30000,899,59,25);

youinfo.getinfo();
