$(document).ready(function() {

	var searchItUp = function() {
		var what = document.getElementById('Searched').value;
		$.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=' + what, function(results) {
			var numberOfResults = results[1].length;

			document.getElementById('searchWrap').style.top="15px";
			$("#wikiTitle").empty();
			$(".credits").empty();

			if (numberOfResults == 0) {
				$('.search-results').append('<p class="not-found">No results found.</p>');
			}

			for (var i = 0; i < numberOfResults; i++) {
			var title = results[1][i];
			var desc = results[2][i];
			var pageURL = results[3][i];
				$('.search-results').append('<a href=' + pageURL + '><li><h2>' + title + '</h2><p>' + desc + '</p></li></a>');
			}
		});
	}

	document.getElementById('Searched').onkeydown = function(key) {
		if (key.keyCode == 13) {
			$(".search-results").empty();
			return searchItUp();
		}
	}

	document.getElementById('SearchButton').onclick = function() {
		$(".search-results").empty();
		return searchItUp();
	};
});