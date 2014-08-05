var loc="en";


var $$ = Framework7.$; // Export selectors engine
var myApp = new Framework7({
    onPageBeforeInit: function (app, page) {

        if (page.name === 'page-1') {
            $$("#navbar_1_title").html(window.data[loc].info.title);

        }else if(page.name === 'page-2'){
            $$("#navbar_2_title").html("Cheats & Tips");
            $$(".tab-link[data-tab='tab-2']").find(".badge").html(window.data[loc].cheats.length);
        }else if(page.name === 'page-3'){
            $$("#navbar_3_title").html("Guide & Walkthroughs");
            $$(".tab-link[data-tab='tab-3']").find(".badge").html(window.data[loc].guide.length);
        }else if(page.name === 'page-4'){
            $$("#navbar_4_title").html("Videos");
            $$(".tab-link[data-tab='tab-4']").find(".badge").html(window.data[loc].videos.length);
        }

    },
    onPageInit: function (app, page) {
        console.log(page.name+' initialized');
        var pg=$$(".page[data-page='"+page.name+"']");
        if (page.name === 'page-1') {

            $$("#navbar_1_title").html(window.data[loc].info.title);
            $$(pg).find("[data-id='title']").html(window.data[loc].info.title);
            $$(pg).find("[data-id='content']").html(window.data[loc].info.description);

        }else if(page.name === 'page-2'){

            $$(pg).find("[data-id='content']").html(createContents_Cheats());

        }else if(page.name === 'page-3'){

            $$(pg).find("[data-id='content']").html(createContents_Guide());

        }else if(page.name === 'page-4'){

            $$(pg).find("[data-id='content']").html(createContents_Cheats());
        }
    }
});


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});



function createContents_Cheats(){
    var html="";
    html+="<ul>";
    for(var i=0;i<window.data[loc].cheats.length;i++)
    {
        html+='<li class="accordion-item">'+
                    '<a href="#" class="item-content item-link">'+
                        '<div class="item-inner">'+
                            '<div class="item-title">'+window.data[loc].cheats[i].title+'</div>'+
                        '</div>'+
                    '</a>'+
                    '<div class="accordion-item-content">'+
                        '<div class="content-block">'+window.data[loc].cheats[i].description+'</div>'+
                    '</div>'+
                '</li>';
    }
    html+="</ul>";
    return html;
}

function createContents_Guide(){
    var html="";
    html+="<ul>";
    for(var i=0;i<window.data[loc].guide.length;i++)
    {
        html+='<li class="accordion-item">'+
                    '<a href="#" class="item-content item-link">'+
                        '<div class="item-inner">'+
                            '<div class="item-title">'+window.data[loc].guide[i].title+'</div>'+
                        '</div>'+
                    '</a>'+
                    '<div class="accordion-item-content">'+
                        '<div class="content-block">'+window.data[loc].guide[i].description+'</div>'+
                    '</div>'+
                '</li>';
    }
    html+="</ul>";
    return html;
}

function createContents_Videos(){
    var html="";
    html+="<ul>";
    for(var i=0;i<window.data[loc].videos.length;i++)
    {
        html+='<li class="accordion-item">'+
                    '<a href="#" class="item-content item-link">'+
                        '<div class="item-inner">'+
                            '<div class="item-title">'+window.data[loc].videos[i].title+'</div>'+
                        '</div>'+
                    '</a>'+
                    '<div class="accordion-item-content">'+
                        '<div class="content-block">'+window.data[loc].videos[i].url+'</div>'+
                    '</div>'+
                '</li>';
    }
    html+="</ul>";
    return html;
}


