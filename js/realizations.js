	var portfolioItem = document.getElementsByClassName("ap-portfolio-item");
	var portfolioBoxText = document.getElementsByClassName("ap-portfolio-box-text");
	var overlayImg = document.getElementsByClassName("ap-portfolio-box-img");

		for (var i = 0; i < portfolioBoxText.length ; i++) {
			var init = () => {
			
			portfolioBoxText[i].style.display = 'none'; 

			var j = i;

				portfolioItem[i].addEventListener('mouseover', () => {
				    portfolioBoxText[j].style.display = 'block';
				    overlayImg[j].classList.add("ap-portfolio-img-overlay");
			  	});

				portfolioItem[i].addEventListener('mouseout', () => {
				    portfolioBoxText[j].style.display = 'none';
				    overlayImg[j].classList.remove("ap-portfolio-img-overlay");
			  });
			};
			init();
		}