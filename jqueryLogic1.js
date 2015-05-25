// Hovering over menu buttons
$(document).ready(function(){
  $("#craftsmenCont").hover(function(){
    if (!craftsmenPressed) {
      $("#craftsmenPic").fadeTo(200, 0.3);
      $("#craftsmenText").css("z-index", "100");
    };
  },
  function(){
    if (!craftsmenPressed) {
      $("#craftsmenPic").fadeTo(200, 1);
      $("#craftsmenText").css("z-index", "-100");
    };
  });
  $("#aboutUsCont").hover(function(){
    if (!aboutUsPressed) {
      $("#aboutUsPic").fadeTo(200, 0.3);
      $("#aboutUsText").css("z-index", "100");
    };
  },
  function(){
    if (!aboutUsPressed) {
      $("#aboutUsPic").fadeTo(200, 1);
      $("#aboutUsText").css("z-index", "-100");
    };
  });
  $("#galleryCont").hover(function(){
    if (!galleryPressed) {
      $("#galleryPic").fadeTo(200, 0.3);
      $("#galleryText").css("z-index", "100");
    };
  },
  function(){
    if (!galleryPressed) {
      $("#galleryPic").fadeTo(200, 1);
      $("#galleryText").css("z-index", "-100");
    };
  });
});

// Clicking menu buttons (support funtions: menuButtonClicked, discardPressedMenuButtons, homeView)
$(document).ready(function(){
  $("#craftsmenCont").click(function(){
    menuButtonClicked(1);
  });
  $("#aboutUsCont").click(function(){
    menuButtonClicked(2);
  });
  $("#galleryCont").click(function(){
    menuButtonClicked(3);
  });
  $("#logoCont").click(function(){
    homeView();
  });
  $("#actionButtonCont0").click(function(){
    getStarted();
  });
});

function menuButtonClicked(choice){
  switch(choice){
    case 3:
      if (!galleryPressed){
        discardPressedMenuButtons();
        galleryPressed = true;
        $("#dependentText").html(menuTextArray[3]);
        $("#galleryPic").fadeTo(200, 0.3);
        $("#galleryText").css("z-index", "100");
      }
      else{
        homeView();
      }
      fixTextSizes();
      break;
    case 1:
      if (!craftsmenPressed){
        discardPressedMenuButtons();
        craftsmenPressed = true;
        $("#dependentText").html(menuTextArray[1]);
        $("#craftsmenPic").fadeTo(200, 0.3);
        $("#craftsmenText").css("z-index", "100");
      }
      else{
        homeView();
      }
      fixTextSizes();
      break;
    case 2:
      if (!aboutUsPressed){
        discardPressedMenuButtons();
        aboutUsPressed = true;
        $("#dependentText").html(menuTextArray[2]);
        $("#aboutUsPic").fadeTo(200, 0.3);
        $("#aboutUsText").css("z-index", "100");
      }
      else{
        homeView();
      }
      fixTextSizes();
      break;
  }
}

function discardPressedMenuButtons(){
  if (galleryPressed) {
      $("#galleryPic").fadeTo(200, 1);
      $("#galleryText").css("z-index", "-100");
      galleryPressed = false;
  };
  if (craftsmenPressed) {
      $("#craftsmenPic").fadeTo(200, 1);
      $("#craftsmenText").css("z-index", "-100");
      craftsmenPressed = false;
  };
  if (aboutUsPressed) {
      $("#aboutUsPic").fadeTo(200, 1);
      $("#aboutUsText").css("z-index", "-100");
      aboutUsPressed = false;
  };
}

function discardPressedGetStarted(){
  if (getStartedPressed) {
    $("#modelPanel").hide();//right side
    $(".customHalves").hide();
    $("#textPanel").show();//left side
    $(".menuHalves").show();
    $("#actionButtonCont1").slideUp();//bottom side
    $("#actionButtonCont0").css("opacity","1");
    $("#actionButtonCont0").css("cursor","pointer");
    getStartedPressed = false;
  };
}

function homeView(){
  discardPressedGetStarted();
  discardPressedMenuButtons();
  $("#dependentText").html(menuTextArray[0]);
  fixSizes();
}

function getStarted(){
  discardPressedMenuButtons();
  $("#textPanel").hide();
  $(".menuHalves").hide();
  $("#modelPanel").show();
  $(".customHalves").show();
  $(".specificOptionsCont").hide();
  $("#actionButtonCont1").slideDown();
  $("#actionButtonCont0").css("opacity","0.3");
  $("#actionButtonCont0").css("cursor","auto");
  getStartedPressed = true;
  fixModelSize();
}

//listen to window and resize content accordingly (support funtion: fixSizes, fixModelSize, fixPanelSize, fixTextSizes)
$(window).resize(function() {
  fixSizes();
});

function fixSizes(){
  w = $(document).width();//update w
  fixPanelSizes();
  fixTextSizes();
  if(getStartedPressed){
    fixModelSize();
  }
}

function fixModelSize(){
  var w = ($(document).width())*0.5;
  var h = w*0.7;
  // $("#myModel").css({"width":w, "height":h});
  document.getElementById("x3d").setAttribute('width', w);
  document.getElementById("x3d").setAttribute('height', h);
}

function fixPanelSizes(){
  //panel alignment
  var panelSize = w*0.5*0.7;
  $("#textPanel").css({"width":panelSize, "height":panelSize});
  $("#menuPanel").css({"width":panelSize, "height":panelSize});
  //button alignment
  var buttonWidth = panelSize*0.5;
  $(".menuHalves").css({"width":buttonWidth, "height":panelSize});
  $(".buttonContainer1").css({"width":buttonWidth, "height":buttonWidth});
  $(".buttonContainer2").css({"width":buttonWidth, "height":panelSize});
  var buttonPicWidth = buttonWidth - 10;
  var buttonBigPicHeight = panelSize - 10;
  $("#galleryCont").css({"width":buttonPicWidth, "height":buttonPicWidth});
  $("#craftsmenCont").css({"width":buttonPicWidth, "height":buttonPicWidth});
  $("#aboutUsCont").css({"width":buttonPicWidth, "height":buttonBigPicHeight});
  //text alignment
  var smallMove = buttonPicWidth*0.5;
  var bigMove = buttonBigPicHeight*0.5;
  if (w<1000) {
    smallMove -= 10;
    bigMove -= 10;
  }
  else{
    smallMove -= 18;
    bigMove -= 18; 
  }
  $("#craftsmenText").css({"width":buttonPicWidth, "height":buttonPicWidth, "top":smallMove});
  $("#galleryText").css({"width":buttonPicWidth, "height":buttonPicWidth, "top":smallMove});
  $("#aboutUsText").css({"width":buttonPicWidth, "height":buttonBigPicHeight, "top":bigMove});
}

function fixTextSizes(){
  if (w<1000){
    $("p.text").css("font-size", "12px");
    $(".buttonText").css("font-size", "20px");
  }
  else{
    $("p.text").css("font-size", "16px");
    $(".buttonText").css("font-size", "36px");
  }
}
function init(){
  craftsmenPressed = false;
  galleryPressed = false;
  aboutUsPressed = false;
  getStartedPressed = false;
  uploadTexts();
  $("#actionButtonCont1").hide();
  $("#modelPanel").hide();
  $(".customHalves").hide();
  fixSizes();
}

function uploadTexts(){
  var defaultText = "<p style='text-align:right' class='text'><q><i>One should either be a work of art or wear a work of art.</i></q><br/>-Oscar Wilde</p><br/><p style='text-align:justify' class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
  var craftsmenText = "<p style='text-align:justify' class='text'>Hello this is text about craftsmen</p>";
  var aboutUsText = "<p style='text-align:justify' class='text'>Hello this is text about us</p>";
  var galleryText = "<p style='text-align:justify' class='text'>Hello this is text with gellery pics</p>";
  menuTextArray = [defaultText, craftsmenText, aboutUsText, galleryText]; //automatically global variable (because 'var' is not declared)
  $("#dependentText").html(menuTextArray[0]);
}



