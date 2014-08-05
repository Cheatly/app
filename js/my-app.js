var loc="en";


var $$ = Framework7.$; // Export selectors engine
var myApp = new Framework7({
    onPageBeforeInit: function (app, page) {

        if (page.name === 'page-1') {
            $$("#navbar_1_title").html(window.data[loc].info.title);
        }else if(page.name === 'page-2'){
            $$("#navbar_2_title").html("Cheats & Tips");
        }else if(page.name === 'page-3'){
            $$("#navbar_3_title").html("Guide & Walkthroughs");
        }else if(page.name === 'page-4'){
            $$("#navbar_4_title").html("Videos");
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


        }else if(page.name === 'page-3'){


        }else if(page.name === 'page-4'){


        }
    }
});


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});




/*


<li class="accordion-item"><a href="#" class="item-content item-link">
                                        <div class="item-inner">
                                            <div class="item-title">Item 1</div>
                                        </div></a>
                                        <div class="accordion-item-content">
                                            <div class="content-block">
                                                <p>Item 1 content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim viverra velit sed euismod. Mauris sed quam vehicula, dapibus ante a, aliquet augue.</p>
                                            </div>
                                        </div>
                                    </li>



*/










/* esempio di pagina dinamica
// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back-blue"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}
*/
