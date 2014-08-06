var loc="en";


var $$ = Framework7.$; // Export selectors engine
var myApp = new Framework7({
    onPageBeforeInit: function (app, page) {

        if (page.name === 'page-1') {
            $$("#navbar_1_title").html(window.data[loc].info.title+" "+window.data[loc].info.title_plus);
        }else if(page.name === 'page-2'){
            $$("#navbar_2_title").html("Cheats, Unlocks & Tips");
            $$(".tab-link[data-tabn='tab-2']").find(".badge").html(window.data[loc].cheats.length);
        }else if(page.name === 'page-3'){
            $$("#navbar_3_title").html("Guide & Walkthroughs");
            $$(".tab-link[data-tabn='tab-3']").find(".badge").html(window.data[loc].guide.length);
        }else if(page.name === 'page-4'){
            $$("#navbar_4_title").html("Videos");
            $$(".tab-link[data-tabn='tab-4']").find(".badge").text(window.data[loc].videos.length);
        }

    },
    onPageInit: function (app, page) {
        console.log(page.name+' initialized');
        var pg=$$(".page[data-page='"+page.name+"']");
        if (page.name === 'page-1') {

            $$(pg).find("[data-id='title']").html(window.data[loc].info.title+" "+window.data[loc].info.title_plus);
            $$(pg).find("[data-id='content']").html(window.data[loc].info.description+window.data[loc].info.image);

        }else if(page.name === 'page-2'){

            $$(pg).find("[data-id='content']").html(createContents_Cheats());

        }else if(page.name === 'page-3'){

            $$(pg).find("[data-id='content']").html(createContents_Guide());

        }else if(page.name === 'page-4'){

            $$(pg).find("[data-id='content']").html(createContents_Videos());
        }

    }

});

$$("#about").html(window.data[loc].info.about+"<br/><br/>"+window.data[loc].info.image);
$$("#about_law").html(window.data[loc].info.about_law);


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});



function createContents_Cheats(){
    var html="";

    if(window.data[loc].cheats.length==0){
        html="<div class='content-block'>Unfortunately there are no records here.<br/>Let's trust in a future update.</div>";
    }else{
        html+="<ul>";
        for(var i=0;i<window.data[loc].cheats.length;i++)
        {
            html+='<li class="accordion-item">'+
                '<a href="#" class="item-content item-link">'+
                '<div class="item-inner">'+
                '<div class="item-title">'+(i+1)+') '+window.data[loc].cheats[i].title+'</div>'+
                '</div>'+
                '</a>'+
                '<div class="accordion-item-content">'+
                '<div class="content-block">'+
                window.data[loc].cheats[i].description+"<br/>"+
                insertImageCheats(i)+
                '</div>'+
                '</div>'+
                '</li>';
        }
        html+="</ul>";
    }
    return html;
}


function insertImageCheats(n){

    if(window.data[loc].cheats[n].image!=""){
        var html="<br/>";
        var split=window.data[loc].cheats[n].image.split(";");
        for(var i=0;i<split.length;i++){
            if(i%2==0){html+='<div class="row">';}
            html+='<div class="col-50"><img src="'+split[i]+'" width="100%"></img></div>';
            if(i%2==1){html+='</div>';}
        }

        return html;

    }
    return "";
}

function insertImageGuide(n){

    if(window.data[loc].guide[n].image!=""){
        var html="<br/>";
        var split=window.data[loc].guide[n].image.split(";");
        for(var i=0;i<split.length;i++){
            if(i%2==0){html+='<div class="row">';}
            html+='<div class="col-50"><img src="'+split[i]+'" width="100%"></img></div>';
            if(i%2==1){html+='</div>';}
        }

        return html;

    }

    return "";
}

function createContents_Guide(){
    var html="";
    if(window.data[loc].guide.length==0){
        html="<div class='content-block'>Unfortunately there are no records here.<br/>Let's trust in a future update.</div>";
    }else{
        html+="<ul>";
        for(var i=0;i<window.data[loc].guide.length;i++)
        {
            html+='<li class="accordion-item">'+
                '<a href="#" class="item-content item-link">'+
                '<div class="item-inner">'+
                '<div class="item-title">'+(i+1)+') '+window.data[loc].guide[i].title+'</div>'+
                '</div>'+
                '</a>'+
                '<div class="accordion-item-content">'+
                '<div class="content-block">'+
                window.data[loc].guide[i].description+"<br/>"+
                insertImageGuide(i)+
                '</div>'+
                '</div>'+
                '</li>';
        }
        html+="</ul>";
    }
    return html;
}

function createContents_Videos(){
    var html="";
    var ytimg_start="http://img.youtube.com/vi/";
    var ytimg_end="/default.jpg";
    var yt_url="http://www.youtube.com/embed/";
    var ytframe_start="<iframe width='100%' height='300px' src='http://www.youtube.com/embed/";
    var ytframe_end="?theme=light' frameborder='0' allowfullscreen></iframe>";


    if(window.data[loc].videos.length==0){
        html="<div class='content-block'>Unfortunately there are no records here.<br/>Let's trust in a future update.</div>";
    }else{
        html+="<ul>";
        for(var i=0;i<window.data[loc].videos.length;i++)
        {
            html+='<li class="accordion-item">'+
                '<a href="#" class="item-content item-link">'+
                '<div class="item-media"><img src="'+
                ytimg_start+window.data[loc].videos[i].url+ytimg_end+
                '" width="60"></div>'+
                '<div class="item-inner">'+
                '<div class="item-title">'+(i+1)+') '+window.data[loc].videos[i].title+'</div>'+
                '</div>'+
                '</a>'+
                '<div class="accordion-item-content">'+
                '<div class="content-block">'+
                ytframe_start+window.data[loc].videos[i].url+ytframe_end+
                '</div>'+
                '</div>'+
                '</li>';
        }
        html+="</ul>";
    }
    return html;
}


