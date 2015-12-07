$(document).ready(function() {
	$.ajax( {
		type: "GET",
		url: "https://api.github.com/users/chrisdonofrio/repos?sort=updated",
		success: function(reposList) {
			for (var i = 0; i < reposList.length; i++) {
				var addListItem = buildNewListGroup(reposList[i]);
				$(".list-group").append(addListItem);
			}
		},

		error: function(jqXHR, textStatus, errorThrown) {
			alert("Uh oh! An error occurred!");
		}
	});


		function buildNewListGroup(repoInfo) {
			var commitsApiUrl = "https://api.github.com/repos/";
			commitsApiUrl += repoInfo.owner.login + "/";
			commitsApiUrl += repoInfo.name + "/commits";

		var addLink = $("<a>")
			.attr("href", commitsApiUrl)
			.addClass("list-group-item")
			.append(repoInfo.full_name);
		return addLink;





		}
});