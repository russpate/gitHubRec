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
  "<div class='repoData'><div class='repoInfo'><div class='repoTitleWrap'><div class='repoTitle'>" + item.name + "</div></div>" + "<div class='repoDescriptionWrap'><div class='repoDescription'>" + item.description + "</div></div>" + "<div class='repoTimeWrap'><div class='repoTime'>" + "updated" + moment.utc(item.created_at).fromNow() + "</div></div>" + "</div></div>";


});
$('.repoDataWrap').append(fullRepoData);


// "<div class='repoData'><div class='repoInfo'><div class='repoTitleWrap'><div class='repoTitle'>"
// + item.name + "</div></div>"
//
// <div class='repoStatsWrap'>
// <div class='repoStats'>
// stats
// </div>
// </div>
// </div>
// </div>
