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
var fullRepoData = "";
_.each(repoData, function(item){

  fullRepoData +=
  "<div class='repoData'><div class='repoStackLeft'><div class='repoInfo'><div class='repoTitleWrap'><div class='repoTitle'><a href ='" + item.clone_url + "'>" + item.name + "</a></div></div>" + "<div class='repoDescriptionWrap'><div class='repoDescription'>" + item.description + "</div></div>" + "<div class='repoTimeWrap'><div class='repoTime'>" + "updated" + moment.utc(item.created_at).fromNow() + "</div></div>" + "</div></div>" + "<div class='repoStackRight'><div class='stats'>" + "<ul>" + "<li>" + item.language + "</li>" + "<li><span class='octicon octicon-star'></span>" + item.stargazers_count + "</li>" + "<li><span class='octicon octicon-git-branch'></span>" + item.forks_count + "</span></li>" + "</ul>" + "</div></div></div>";
});
$('.repoDataWrap').append(fullRepoData);






//
//
//extraSpace for in progress
