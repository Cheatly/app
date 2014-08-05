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

function Guide(title,description,imageurl){
    this.title = title;
    this.description = description;
    this.image = imageurl;
}

function Video(title,url){
    this.title = title;
    this.url = url;
}


function Data(locale){

    this.locale = locale;

    this.info = new Info();
    this.interface = new Interface();


    this.cheats = new Array();
    this.guide = new Array();
    this.videos = new Array();

    this.addCheat = function(title,description,image){
        this.cheats.push(new Cheat(title,description,image));
    }

    this.addGuide = function(title,description,image){
        this.guide.push(new Guide(title,description,image));
    }

    this.addVideo = function(title,url){
        this.videos.push(new Video(title,url));
    }

}


var data = new Array();


var l="en";
data[l]= new Data(l);

data[l].info.title="Subway Surfers Cheats";
data[l].info.description="These are cheats and glitches in "+data[l].info.title+". Sometimes some of the glitches/cheats doesn't work due to an update. Spiegazione di quello che devono fare per ogni sezione + rate this app or share";


/*--------------------------*/
data[l].addCheat(
        "A Free Past Board",
        "This cheat gives you the Miami-Special Board for FREE! The instuctions of this cheat is the same as Time Travel Cheat. <br/><br/>Steps:<br/> 1. Go to your device's setting and change the date and time to 'May 30, 2013.'<br/>2. Open Subway Surfers and check your Boards Section. <br/>3. See if you got the Miami-Special Board!<br/><br/>- Note: This cheat may not work!",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Back Forward Run",
        "Back Forward Run is a rather funny glitch that allow your chraracter to run backwards.<br/><br/>Steps<br/>1. Buy or get in the Mystery Box a Mega Headstart.<br/>2. Start playing and die in a few seconds you begin.<br/>3. Just as you die, click on your headstart to activate it. You will fly back forward.<br/><br/>- Note: It is very hard, so maybe you will need more than one try.<br/>- Another Note: Sometimes when you try to do it, it ends up occurring the 'Moving Smoke' glitch.<br/>- Third Note: If you have an update less than Rio, you should use Headstart Instead?",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Zombie Jake",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'October 3, 2012'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel -  Elf Tricky and Starboard",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'December 1, 2012'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Carmen and Toucan",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'January 30, 2013'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Kim and Outback",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'April 5, 2013'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Sun and Panda",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'August 3, 2013'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Alex and Teddy",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'September 9, 2013'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Eddy and Pumpkin",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'October 31, 2013'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Jamie and Snowflake",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'December 28, 2013'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel -  Jay and Bengal",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'January 2, 2014'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Nick and Flamingo",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'January 17, 2014'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Mina and Bubblegum",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'February 10, 2014'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Tony and Liberty",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'February 20, 2014'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Rosa and Prickly",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'April 1, 2014'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Roberto and Kick-Off",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'April 5, 2014'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Olivia and Moose",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'May 8, 2014'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Harumi and Fortune",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'May 24, 2014'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Edison and Banana",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'June 4, 2014'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Coco and Rose",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'June 26, 2014'.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Lucky Death",
        "Lucky Death is when you bump into an obstacle you will just stand and run without moving, until you move to another lane, continuing the game.<br/><br/>Steps:<br/>1. When there is an obstacle in front of you, and a train on the right (left), in a moment before death quickly turn to the side of the train.<br/>2. Swipe in any direction to keep moving!<br/><br/>- Note: This glitch is very rare so it won't always work.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Coin-Doubler Jetpack",
        "<p>This cheat will allow you to collect 2 coins, when riding a jetpack.</p><p>Steps<br />Get Super Sneakers power-up.<br />When you're lucky, you might find a jetpack, when the super sneakers isn't de-activated yet. (Can be easy if the Super Sneakers is upgraded.)<br />Swipe to collect coins, as you can see the coin meter fills it 2 coins every coin collected.<br />Tip: Upgrade the Super Sneakers and Jetpack for the cheat to be easier.</p>",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Hover-Mixture",
        "<p>Hover-Mixture is a glitch which the jetpack will act like a hoverboard. This is a crazy glitch that doesn't affect anything, also to active this glitch the hoverboard is supposed to end perfectly while picking up a jetpack at the same time, which is almost impossible to occur.</p><p>Steps<br />Activate a hoverboard.<br />Wait until the hoverboard ends.<br />This is the hard part: When the hoverboard perfectly ends, pick up a jetpack at the same time.</p>",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Moving Smoke",
        "<p>Mid-Air Smoke is a glitch when the Jetpack's &quot;colored&quot; smoke will go to other directions, other than the jetpack itself. You need the Bouncer hoverboard for this glitch.</p><p>Steps<br />Activate Bouncer.<br />This is the slightly hard part: Pick up a jetpack, at the same time the Bouncer still activated.<br />Note: The cheat might not work.<br />Another Note: Upgrade your jetpack for longer durability.<br />Third Note: Sometimes you don't need the Bouncer, and this occurs when you do the &quot;Back Forward Run&quot; glitch.</p>",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Invisi-Board",
        "<p>Invisi-Board is a glitch that will make the hoverboard invisible, while surfing. This glitch occurs when you try to do the &quot;Back Forward Run.&quot; glitch, but ended up occuring this glitch.</p><p>Steps<br />Start playing and die in a few seconds you begin.<br />Just as you die, click on your mega headstart to activate it. You will fly back forward.<br />When you land, activate your hoverboard, and look if it's invisible.<br />Note: Sometimes it's doesn't work, so try again, but save some hoverboards and mega headstarts.</p>",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Frozen Flyer",
        "<p>1. Start your run and die right away.</p><p>2. Use a Mega Headstart right after you die.</p><p>3. This may cause you to get a jet pack and fly in the same position as when you died. But if you move you will regain the ability to move.</p>",
        ""
    );
/*--------------------------*/


for(i=0;i<10;i++){
    data[l].addVideo(
        i+"t",
        i+"d"
    );
}
for(i=0;i<100;i++){
    data[l].addGuide(
        i+"t g",
        i+"d g",
        i+"i g"
    );
}
