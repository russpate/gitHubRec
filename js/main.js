$(document).ready(function(){
//
//
//
///////// User Data
//
//
//
$('.avatar').append("<img src='" + userData.avatar_url + "'/>");
$('.userName').text(userData.name);
$('.atName').text(userData.login);
$('.userEmail').append("<span class='octicon octicon-mail'></span> " + "<a href='mailto:#'>" + userData.email + "</a>");
$('.userWebsite').append("<span class='octicon octicon-link'></span> " + "<a href='#'>" +userData.blog + "</a>");

$('.userJoin').append("<span class='octicon octicon-clock'></span> " + "Joined on " + moment.utc(userData.created_at).format("MMM Do, YYYY"));
//
//
//
///////// Repo Data
//
//
//


// var sortedRepoData = "";
// _.sortBy(repoData,'date', function(item){
//   sortedRepoData += item;
// });

var fullRepoData = "";
_.each(repoData, function(item){

  fullRepoData += "<div class='repoData'>"
    + "<div class='repoStackLeft'><div class='repoInfo'><div class='repoTitleWrap'>"
    + "<div class='repoTitle'><a href ='"
    + item.clone_url
    + "'>"
    + item.name
    + "</a></div></div>"
    + "<div class='repoDescriptionWrap'>"
    + "<div class='repoDescription'>"
    + item.description
    + "</div></div>"
    + "<div class='repoTimeWrap'>"
    + "<div class='repoTime'>"
    + "updated"
    + moment.utc(item.created_at).fromNow()
    + "</div></div>"
    + "</div></div>"
    + "<div class='repoStackRight'><div class='stats'>"
    + "<ul>"
    + "<li>"
    //ternary operator removes values that are null and replaces with an empty string
    + (item.language ? item.language : "")
    + "</li>"
    + "<li><span class='octicon octicon-star'></span>"
    + item.stargazers_count
    + "</li>"
    + "<li><span class='octicon octicon-git-branch'></span>"
    + item.forks_count
    + "</span></li>"
    + "</ul>"
    + "</div></div></div>";
});

$('.repoDataWrap').append(fullRepoData);

//
//
//
///////// Public Activity
//
//
//

var fullUserData = "";
_.each(eventData, function(item){

  fullUserData += item.actor;
});


$('.public').append(fullUserData);

//
//
//
///////// Click events
//
//
//
//

// var tabItem = $('li').find('a');
// tabItem.on("click", function (event) {
//   event.preventDefault();
//   var selectedTab = "." + $(this).attr('rel');
//   $(selectedTab).siblings('.section').removeClass('active');
//   $(selectedTab).addClass('active');
// });

var tabItem = $('.tabsLeft ul li');
tabItem.on("click", function (event) {
  event.preventDefault();

  $(this).siblings('.tabsLeft ul li').removeClass('activeTab');
  $(this).addClass('activeTab');

  var selectedTab = "." + $(this).attr('rel');
  console.log(selectedTab);
  $(selectedTab).siblings('.section').removeClass('active');
  $(selectedTab).addClass('active');
});



//
//
//extraSpace for in progress

}); // $(document).ready
