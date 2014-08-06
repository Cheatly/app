function Info () {
    this.title = "";
    this.title_plus ="";
    this.description = "";
    this.image ="";
    this.about="";
    this.about_thanks="";
    this.about_law="";
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

data[l].info.title="Subway Surfers";
data[l].info.title_plus="Cheats";
data[l].info.description='These app offers cheats and guide for '+data[l].info.title+'. Sometimes some of the cheats doesn\'t work due to an update. <br/><br/>';
data[l].info.image="<center><img src='data/img/icon_big.jpg' class='app_icon_big'></img></center>";
data[l].info.about="This app is powered by www.<a target='_blank' href='http://www.cheat.ly'>Cheat.ly</a>";
data[l].info.about_thanks="Thanks to:<br/>Icons8 [www.icons8.com/]<br/>Framework 7 [www.idangero.us/framework7]<br/>";

data[l].info.about_law="Notice: The name \""+data[l].info.title+"\" and all the images and logos displayed in the application are protected by copyright and are registered trademarks of their respective corporations. This application is not responsible for any misuse that a third party can do about these images nor have any rights to these images or name \""+data[l].info.title+"\". This application, or someone related to this, claims not to have any type of property (copyright or otherwise) of the images and logos used in this application nor on the name \""+data[l].info.title+"\". The images, logos and the name \""+data[l].info.title+"\" are protected by copyright and / or trademark. The use of low-resolution images and logos, and \""+data[l].info.title+" "+data[l].info.title_plus+"\" name of this application is rated as \"Fair Use\" under U.S. copyright law. If you feel there is a direct copyright or trademark violation that doesn't follow within the \"Fair Use\" guidelines, please contact us directly at support@cheat.ly.";


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
        "http://img2.wikia.nocookie.net/__cb20130331174902/subwaysurf/images/9/9e/Back_Forward_Run_screenshot.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Zombie Jake",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'October 3, 2012'.",
 "http://img4.wikia.nocookie.net/__cb20130121122553/subwaysurf/images/thumb/3/3f/Zombie_Jake.png/150px-Zombie_Jake.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel -  Elf Tricky and Starboard",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'December 1, 2012'.",
        "http://img3.wikia.nocookie.net/__cb20130128221223/subwaysurf/images/thumb/9/98/Elftricky.png/150px-Elftricky.png;http://img2.wikia.nocookie.net/__cb20130202023456/subwaysurf/images/thumb/8/84/Starboard.png/150px-Starboard.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Carmen and Toucan",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'January 30, 2013'.",
        "http://img1.wikia.nocookie.net/__cb20130306233203/subwaysurf/images/thumb/6/65/Carmen.png/150px-Carmen.png;http://img4.wikia.nocookie.net/__cb20131124105103/subwaysurf/images/e/e4/Carmen-1-.JPG"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Kim and Outback",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'April 5, 2013'.",
        "http://img4.wikia.nocookie.net/__cb20140629151608/subwaysurf/images/thumb/7/72/Kim.jpg/150px-Kim.jpg;http://img2.wikia.nocookie.net/__cb20140126044933/subwaysurf/images/thumb/7/79/OMG12345_%283%29.PNG/270px-OMG12345_%283%29.PNG"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Sun and Panda",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'August 3, 2013'.",
        "http://img3.wikia.nocookie.net/__cb20130808113538/subwaysurf/images/thumb/6/61/Sun.png/150px-Sun.png;http://img1.wikia.nocookie.net/__cb20131124105651/subwaysurf/images/a/ad/Sun-1-.JPG"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Alex and Teddy",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'September 9, 2013'.",
        "http://img3.wikia.nocookie.net/__cb20131021041744/subwaysurf/images/thumb/d/d7/Alex.jpg/150px-Alex.jpg;http://img4.wikia.nocookie.net/__cb20131124105734/subwaysurf/images/thumb/e/ea/Alex-1-.JPG/150px-Alex-1-.JPG"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Eddy and Pumpkin",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'October 31, 2013'.",
        "http://img1.wikia.nocookie.net/__cb20131014031918/subwaysurf/images/thumb/c/cd/Eddy.png/150px-Eddy.webp;http://img1.wikia.nocookie.net/__cb20131124105827/subwaysurf/images/9/9b/Eddy-1-.JPG"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Jamie and Snowflake",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'December 28, 2013'.",
        "http://img4.wikia.nocookie.net/__cb20131124104647/subwaysurf/images/thumb/4/42/Jamie-1-.JPG/150px-Jamie-1-.JPG;http://img1.wikia.nocookie.net/__cb20131225100400/subwaysurf/images/thumb/8/86/UnlockedBoardSnowflake.PNG/139px-UnlockedBoardSnowflake.PNG"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel -  Jay and Bengal",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'January 2, 2014'.",
        "http://img4.wikia.nocookie.net/__cb20140117142432/subwaysurf/images/thumb/9/93/JayCropped.jpg/150px-JayCropped.jpg;http://img2.wikia.nocookie.net/__cb20140108124811/subwaysurf/images/thumb/b/ba/Juju.jpg/360px-Juju.jpg"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Nick and Flamingo",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'January 17, 2014'.",
        "http://img2.wikia.nocookie.net/__cb20130609084034/subwaysurf/images/thumb/6/6f/Nick.png/120px-Nick.png;http://img3.wikia.nocookie.net/__cb20131124105501/subwaysurf/images/thumb/3/31/Nick-1-.JPG/91px-Nick-1-.webp"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Mina and Bubblegum",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'February 10, 2014'.",
        "http://img3.wikia.nocookie.net/__cb20140216154113/subwaysurf/images/thumb/4/44/Mina.jpg/120px-Mina.webp;http://img1.wikia.nocookie.net/__cb20140228165624/subwaysurf/images/thumb/2/23/UnlockingBubblegum1.PNG/360px-UnlockingBubblegum1.PNG"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Tony and Liberty",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'February 20, 2014'.",
        "http://img1.wikia.nocookie.net/__cb20130121103719/subwaysurf/images/thumb/9/9a/Tony.png/150px-Tony.webp;http://img2.wikia.nocookie.net/__cb20131124104947/subwaysurf/images/thumb/5/5b/Tony-1-.JPG/150px-Tony-1-.webp"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Rosa and Prickly",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'April 1, 2014'.",
        "http://img1.wikia.nocookie.net/__cb20140327194647/subwaysurf/images/thumb/8/86/Rosa.png/120px-Rosa.webp;http://img1.wikia.nocookie.net/__cb20140328065649/subwaysurf/images/thumb/a/a6/Cactus.png/150px-Cactus.webp"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Roberto and Kick-Off",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'April 5, 2014'.",
        "http://img3.wikia.nocookie.net/__cb20130304095033/subwaysurf/images/thumb/9/9b/Roberto.png/150px-Roberto.webp;http://img1.wikia.nocookie.net/__cb20140517123536/subwaysurf/images/thumb/8/84/Prince_Jimmy_1.jpg/360px-Prince_Jimmy_1.jpg"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Olivia and Moose",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'May 8, 2014'.",
        "http://img4.wikia.nocookie.net/__cb20140509015830/subwaysurf/images/thumb/3/3f/Olivia.jpg/150px-Olivia.webp;http://img2.wikia.nocookie.net/__cb20140725140135/subwaysurf/images/thumb/7/78/UnlockingMoose1.PNG/360px-UnlockingMoose1.PNG"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Harumi and Fortune",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'May 24, 2014'.",
        "http://img1.wikia.nocookie.net/__cb20130509024848/subwaysurf/images/c/cd/Harumi.png;"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Edison and Banana",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'June 4, 2014'.",
        "http://img3.wikia.nocookie.net/__cb20140628102659/subwaysurf/images/thumb/1/1b/UnlockingEdison1.PNG/360px-UnlockingEdison1.PNG;http://img4.wikia.nocookie.net/__cb20140702192653/subwaysurf/images/thumb/6/69/Banana.png/480px-Banana.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addCheat(
        "Time Travel - Coco and Rose",
        "Time Travel will allow you to buy removed limited edition characters, and other special mission with limited time, but note that the scene will not change.<br/><br/>Steps:<br/>1. Go to your device's setting and click 'Date and Time.'<br/>Set the time on 'June 26, 2014'.",
        "http://img4.wikia.nocookie.net/__cb20130729115021/subwaysurf/images/thumb/d/d8/Coco.png/150px-Coco.webp;http://img2.wikia.nocookie.net/__cb20140721181355/subwaysurf/images/thumb/b/b0/UnlockingRose3.PNG/360px-UnlockingRose3.PNG"
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
        "http://img3.wikia.nocookie.net/__cb20130128222146/subwaysurf/images/9/91/Supersneakers.png;http://img1.wikia.nocookie.net/__cb20130128222116/subwaysurf/images/0/07/Jetpack.png"
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
        "http://img2.wikia.nocookie.net/__cb20130528024703/subwaysurf/images/f/f5/Bouncer.png"
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


/*-----------------------------------------------------------------------------------------------*/


/*--------------------------*/
data[l].addGuide(
        "Ride On Top",
        "Ride on the tops of the trains whenever possible as the camera view is from right behind you and being up high will give you a better view of oncoming traffic and power-ups.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Free coins in 30 seconds",
        "Open subway surfers and go to shop.at the boddom of the screen thare is a earn coins button ,press it,and one down from the top it says (sponsored video-watch video to earn coins)watch it and get 100 coins in only about 30 seconds.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Mega jump",
        "When you get a super jump when you get the last coin jump or for a jet pack when it runs out of fuel jump then when you get the last coin jump again",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Brody",
        "Collect 350000 coins.",
        "http://img3.wikia.nocookie.net/__cb20130114112130/subwaysurf/images/4/4c/Brody.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Frank",
        "Collect 40000 coins.",
        "http://img1.wikia.nocookie.net/__cb20130112042907/subwaysurf/images/2/2b/Frank.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Fresh",
        "Collect 3 Boomboxes.",
        "http://img1.wikia.nocookie.net/__cb20130108104922/subwaysurf/images/0/03/Fresh.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Frizzy",
        "Collect 150000 coins.",
        "http://img4.wikia.nocookie.net/__cb20130112042515/subwaysurf/images/d/d1/Frizzy.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock King",
        "Collect 80000 coins.",
        "http://img1.wikia.nocookie.net/__cb20130202024726/subwaysurf/images/1/1d/King.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Lucy",
        "Collect 7000 coins.",
        "http://img4.wikia.nocookie.net/__cb20130112014128/subwaysurf/images/0/05/Lucy.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Ninja",
        "Collect 20000 coins.",
        "http://img3.wikia.nocookie.net/__cb20130110112228/subwaysurf/images/2/21/Ninja.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Prince K.",
        "Collect 980000 coins.",
        "http://img1.wikia.nocookie.net/__cb20130110124405/subwaysurf/images/3/3a/Prince_K.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Spike",
        "Collect 3 Guitars.",
        "http://img1.wikia.nocookie.net/__cb20130108121607/subwaysurf/images/d/de/Spike.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Tagbot",
        "Collect 12000 coins.",
        "http://img1.wikia.nocookie.net/__cb20130119040030/subwaysurf/images/2/2c/Tagbot.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Tasha",
        "Collect 30000 coins.",
        "http://img2.wikia.nocookie.net/__cb20130202025554/subwaysurf/images/thumb/4/45/Tasha.png/120px-Tasha.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Tony",
        "Collect 95000 coins.",
        "http://img2.wikia.nocookie.net/__cb20130121103719/subwaysurf/images/9/9a/Tony.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Tricky",
        "Collect 3 caps.",
        "http://img4.wikia.nocookie.net/__cb20130107122828/subwaysurf/images/d/d4/Tricky.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Yutani",
        "Collect 3 Shaceships.",
        ""
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Tony",
        "Collect 95000 coins.",
        "http://img3.wikia.nocookie.net/__cb20130108122436/subwaysurf/images/1/19/Yutani.png"
    );
/*--------------------------*/

/*--------------------------*/
data[l].addGuide(
        "Unlock Zoe",
        "Collect 120000 coins.",
        "http://img2.wikia.nocookie.net/__cb20130202023505/subwaysurf/images/4/4a/Zoe.png"
    );
/*--------------------------*/

/*------------------------------------------------------------------------------------------------*/

/*--------------------------*/
data[l].addVideo(
        "Trailer",
        "fUk_eBKL3q8"
    );
/*--------------------------*/
data[l].addVideo(
        "Subway surfers game cheats",
        "3uNG3Rrc12M"
    );
/*--------------------------*/
data[l].addVideo(
        "Tips, Tricks, and Secrets",
        "M_wrEUrBp_w"
    );
/*--------------------------*/
data[l].addVideo(
        "Unlimited Coins Guide",
        "VZsHpDy2qGo"
    );
/*--------------------------*/
data[l].addVideo(
        "Gameplay",
        "b5HVNGA0MI8"
    );
/*--------------------------*/
data[l].addVideo(
        "World Record",
        "_Z5hxyn3COw"
    );
/*--------------------------*/
