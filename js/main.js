jQuery(document).ready(function($) {

	'use strict';

    $('.imageGallery1 a').simpleLightbox();


    var owl = $("#owl-portfolio");

      owl.owlCarousel({
        
        pagination : true,
        paginationNumbers: false,
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        items : 4, //10 items above 1000px browser width
        itemsDesktop : [1000,4], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
        
    });


    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e){
      e.preventDefault();
        var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  
    })


	/************** Toggle *********************/
    // Cache selectors
    var lastId,
        topMenu = $(".menu-first"),
        topMenuHeight = 80,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
          
          if($(this).hasClass('external')) {
            return;
          }
            
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 750);
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;
       
       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href=#"+id+"]").parent().addClass("active");
       }                   
    });



    $(window).scroll(function(){
         $('.main-header').toggleClass('scrolled', $(this).scrollTop() > 1);
     });



    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });


    $('.toggle-menu').click(function(){
        $('.menu-first').toggleClass('show');
        // $('.menu-first').slideToggle();
    });

    $('.menu-first li a').click(function(){
      $('.menu-first').removeClass('show');
    });


    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -79 }, 500, 'linear');
    });




});


var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})



// JS DU QUIZZ 

$(function() {
  //first, create a set of questions, answers and results
  var personalityQuiz = {
    questions: [
      {
        title: "Your favourite animal is:",
        answers: [
          {
            answer: "cat, otter, bee",
            result: "hermione"
          },
          {
            answer: "dog, hawk, horse",
            result: "ron"
          },
          {
            answer: "owl, lion, deer",
            result: "harry"
          }
        ]
      },
      {
        title: "Your favourite color is:",
        answers: [
          {
            answer: "green, silver, blue",
            result: "hermione"
          },
          {
            answer: "orange, brown, yellow",
            result: "ron"
          },
          {
            answer: "golden, red, black",
            result: "harry"
          }
        ]
      },
      {
        title: "Your favourite food is:",
        answers: [
          {
            answer: "fruits and veggies",
            result: "hermione"
          },
          {
            answer: "all food, I love food",
            result: "ron"
          },
          {
            answer: "home made food",
            result: "harry"
          }
        ]
      },
      {
        title: "At school you were:",
        answers: [
          {
            answer: "straight A student",
            result: "hermione"
          },
          {
            answer: "average student",
            result: "ron"
          },
          {
            answer: "excelled at 1-2 subjects",
            result: "harry"
          }
        ]
      },
      {
        title: "Your ideal partner should:",
        answers: [
          {
            answer: "make you smile",
            result: "hermione"
          },
          {
            answer: "inspire you",
            result: "ron"
          },
          {
            answer: "understand you",
            result: "harry"
          }
        ]
      },
      {
        title: "You are best known for your:",
        answers: [
          {
            answer: "intelligence and wit",
            result: "hermione"
          },
          {
            answer: "loyalty",
            result: "ron"
          },
          {
            answer: "bravery",
            result: "harry"
          }
        ]
      },
      {
        title: "Pick favourite movie from the three below:",
        answers: [
          {
            answer: "Animatrix",
            result: "hermione"
          },
          {
            answer: "Star Trek",
            result: "ron"
          },
          {
            answer: "Matrix",
            result: "harry"
          }
        ]
      },
      {
        title: "Your dream job would be:",
        answers: [
          {
            answer: "scientist, doctor, web developer",
            result: "hermione"
          },
          {
            answer: "reality TV star, celebrity, footballer",
            result: "ron"
          },
          {
            answer: "journalist, policeman, fireman",
            result: "harry"
          }
        ]
      }
    ],
    results: ["harry", "hermione", "ron"],
    descriptions: [
      "You are Harry. Brave and true to yourself but sometimes you feel a bit misunderstood and need time on your own",
      "You are Hermione. Best known for your intelligence and wit, you are always there to help the others out",
      "You are Ron. You might feel overlooked but in the end it is you who saves the day and shines",
      "Well, you cannot decide, can you? Each of them is special and so are you."
    ]
  };

  //function allowing to mix the questions and answers so the quiz is more interesting
  function randomize(elements) {
    for (var i = 0; i < elements.length; i++) {
      var j = Math.floor(Math.random() * elements.length);
      var temp = elements[i];
      elements[i] = elements[j];
      elements[j] = temp;
    }
    return elements;
  }
  //variables you will need for the quiz:
  var index = 0; // this is the first question index;
  var quiz = personalityQuiz;
  var questions = quiz.questions;
  var questionSet = questions.length;
  var collectedAnswers = []; //this is the array where the answers are stored, then counted and depending on the occurence of each, result is established
  var startingBtn = $("#start");
  // first initiate the quiz
  startingBtn.on("click", function(event) {
    $(this).remove();
    $(this).parent().remove();
    var testBoard = $("<div>");
    testBoard.addClass("board");
    testBoard.appendTo($("section"));
    testBoard.attr("id", "testBoard");

    var button = $("<button>start test</button>");
    button.appendTo(testBoard);
    button.attr("class", "startTest");
  });

  //the functions you need for the quiz once it has started
  function createQuestion() {
    if (index < questionSet) {
      var answers = questions[index].answers;
      randomize(answers);

      var title = $("<h5>", {
        class: "title"
      });
      title.appendTo(testBoard);
      var quizDiv = $("<div>", {
        class: "quizDiv"
      });
      quizDiv.insertAfter(title);
      title.text(questions[index].title);
      for (var i = 0; i < answers.length; i++) {
        var label = $("<label>");
        label.appendTo(quizDiv);
      }

      var labels = quizDiv.find("label");
      for (var i = 0; i < labels.length; i++) {
        $(labels[i]).text(answers[i].answer); //the label text matches the answer
        $(labels[i]).attr("data", answers[i].result);
      }

      labels.each(function(index2, value) {
        var input = $("<input>");
        input.attr("type", "radio");
        input.attr("name", "one");
        input.prependTo($(this));
      });

      var inputs = quizDiv.find("input");
      inputs.on("change", function(event) {
        $(this).parent().addClass("checked");
        $(this).parent().siblings("label").removeClass(); //this is how you color only the checked answer and know which it was
      });

      var button = $("<button>", {
        class: "quizButton"
      });
      button.appendTo(quizDiv);
      button.text("next");
    } else {
      showResults();
    }
  }

  function showResults() {
    var resultsBoard = $("<div>", {
      class: "resultsBoard"
    });
    resultsBoard.appendTo($("section"));
    $("section").children().not(resultsBoard).hide();
    var resultsParagraph = $("<p>", {
      class: "resultsParagraph"
    });
    resultsParagraph.appendTo(resultsBoard);
    var result0 = collectedAnswers.filter(function(item) {
      return item === quiz.results[0];
    }).length;
    var result1 = collectedAnswers.filter(function(item) {
      return item === quiz.results[1];
    }).length;
    var result2 = collectedAnswers.filter(function(item) {
      return item === quiz.results[2];
    }).length;

    document.getElementById('output').innerHTML = result0;
	document.getElementById('output1').innerHTML = result1;
	document.getElementById('output2').innerHTML = result2;
      // resultsParagraph.text(result0);
   
      // resultsParagraph.text(result1);

      // resultsParagraph.text(result2);

     
    
  }
//if you do not choose an answer- alert is shown and the quiz is halted
  function createAlertBox(element) {
    var alertBox = $("<div>", {
      class: "alertBox"
    });
    var alertP = $("<p>");
    alertBox.prependTo(element);
    alertP.appendTo(alertBox);
    alertP.text("Before moving forward choose an answer!");

    var hideAlertBtn = $("<button>", {
      class: "hideAlertBtn"
    });
    hideAlertBtn.appendTo(alertBox);
    hideAlertBtn.text("OK");
  }

  //test starts
  $("section").on("click", ".startTest", function() {
    $(this).remove();
    randomize(questions);
    createQuestion();
  });

  $("section").on("click", ".quizButton", function() {
    var labels = $(this).siblings("label");
    //console.log(labels);
    var checked = labels.find("input:checked");
    //console.log(checked);
    var labelText = checked.parent().text();
    //console.log(labelText);
    var dataText = checked.parent().attr("data");
    if (index < questionSet) {
      //you cannot move on if no answer is given
      if (dataText === undefined) {
        createAlertBox($("#testBoard"));
      } else {
        index++;
        collectedAnswers.push(dataText);
        console.log(collectedAnswers, collectedAnswers.length);
        createQuestion();
        $(this).parent().hide();
        $(this).parent().prev().hide();
      }
      //once the questions are all answered, the results are generated
    } else {
      showResults();
    }
  });

  $("section").on("click", ".hideAlertBtn", function() {
    $(this).parent().remove();
  });
});

