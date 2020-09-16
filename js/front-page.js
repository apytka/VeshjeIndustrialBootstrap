	var box = document.getElementById("ap-portfolio-box");
	var overlay = document.getElementById("ap-portfolio-box-text");
	var boxImg = document.getElementById("ap-portfolio-box-img");

	var init = () => {
			
		overlay.style.display = 'none'; 

		box.addEventListener('mouseover', () => {
			overlay.style.display = 'block';
			boxImg.classList.add("ap-portfolio-img-overlay");
		});

		box.addEventListener('mouseout', () => {
			overlay.style.display = 'none';
			    boxImg.classList.remove("ap-portfolio-img-overlay");
			});
		};
	init();
	