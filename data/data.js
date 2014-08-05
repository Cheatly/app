function Info () {
    this.title = "";
    this.description = "";
}

function Interface() {


}

function Cheat(title,description,imageurl){
    this.title = title;
    this.description = description;
    this.image = imageurl;
}


function Data(locale){

    this.locale = locale;

    this.info = new Info();
    this.interface = new Interface();


    this.cheats = new Array();

    this.addCheat = function(title,description,image){
        this.cheats.push(new Cheat(title,description,image));
    }

}


var data = new Array();


var l="en";
data[l]= new Data(l);

data[l].info.title="Subway Surfers Cheats";
data[l].info.description="These are cheats and glitches in "+data[l].info.title+". Sometimes some of the glitches/cheats doesn't work due to an update. Spiegazione di quello che devono fare per ogni sezione + rate this app or share";


for(i=0;i<10;i++){
    data[l].addCheat(
        i+"t",
        i+"d",
        i+"i"
    );
}

/*
console.log(data);*/
