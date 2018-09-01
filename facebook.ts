class facebook_profile{
    name:string;
    date:number;
    livesin :string;
    friends:number;
    mobileno:number;
    workneducation:string;
    languages:string;
    currentcity:string;
    constructor(title:string,bdate:number,place:string,frnd:number,mnumber:number,work:string,lang:string,city:string)
    {
        this.name=title;
        this. date=bdate;
        this.livesin =place;
        this.friends=frnd;
        this.mobileno=mnumber;
        this. workneducation=work;
        this.languages=lang;
        this. currentcity=city;
    }
    getinfo()
    {
        console.log("Name:"+this.name);
        console.log("Date:"+this.date);
        console.log("Lives in:"+this.livesin);
        console.log("Freinds:"+this.friends);
        console.log("Mobile Number:"+this.mobileno);
        console.log("Work and education:"+this.workneducation);
        console.log("Languages:"+this.languages);
        console.log("Curentcity:"+this.currentcity);
       
    }
    
   
}
let faceinfo=new facebook_profile("Saurabh Behra",24,"Raigarh",500,8349617947,"MVJ COLLEGE","Hindi and English","Bangalore");
faceinfo.getinfo();

