function main(){

  //Hides and then fades in the entire site
	$('.skillset').hide();
  $('.skillset').fadeIn(1000);

  //Hides the projects
  $('.projects').hide();

  //Functionality for buttons
  $('.projects-button').on('click',function(){
    //This used in order to select one button at a time
    //Toggles the next .projects class for 400ms
    $(this).next().slideToggle(400);
    //Toggles the class active for the button
     $(this).toggleClass('active');
     //Changes the text of the button
    $(this).text("Projects Viewed");
  });


}

$(document).ready(main);
