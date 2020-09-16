var switchList = document.getElementById("ap-view-switcher-list");
var switchCol = document.getElementById("ap-view-switcher-col");
var columnDisplay = document.getElementsByClassName("ap-post-list-page-col");
var hr = document.getElementsByClassName("ap-hr-blog");

	switchCol.addEventListener('click', () => {
		switchList.classList.remove('ap-view-switcher-active');
		switchCol.classList.add('ap-view-switcher-active');
		for (var i = 0; i < columnDisplay.length; i++) {
			columnDisplay[i].classList.add('col-md-6');
			columnDisplay[i].classList.remove('col-12');
		}
		for (var j = 0; j < hr.length; j++) {
			hr[j].style.display = "none";
		}
	});

	switchList.addEventListener('click', () => {
		switchCol.classList.remove('ap-view-switcher-active');
		switchList.classList.add('ap-view-switcher-active');
		for (var i = 0; i < columnDisplay.length; i++) {
			columnDisplay[i].classList.add('col-12');
			columnDisplay[i].classList.remove('col-md-6');
		}
			for (var j = 0; j < hr.length; j++) {
			hr[j].style.display = "block";
		}
	});