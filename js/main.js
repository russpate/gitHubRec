
$('.avatar').append("<img src='" + userData.avatar_url + "'/>");

$('.userName').text(userData.name);
$('.atName').text(userData.login);
$('.userEmail').append("<a href='mailto:#'>" + userData.email + "</a>");
$('.userWebsite').append("<a href='#'>" +userData.blog + "</a>");
// $('.userWebsite').text(userData.created_at);


$('.userJoin').text("Joined on " + moment.utc(userData.created_at).format("MMM Do, YYYY"));
