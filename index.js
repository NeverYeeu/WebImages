import {images} from"/api.js"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
function insertBackground(){
	const linkBack = 'https://i.postimg.cc/hvsJ7ZJf/back.jpg'
	let imgBack = document.createElement('img')
	$('#web-background').appendChild(imgBack)
	imgBack.setAttribute('src', linkBack)
}; insertBackground();
const bookBox = $('.book-box');
bookBox.innerHTML = images.map(renderBookBox).join('');

function renderBookBox(img){
	let {nameComic, linkHref, inforDescription} = img;
	return (`
	<a class="box_infor" href=${linkHref} >
		<div class="box_infor-img">
			<img alt="">
			<div class="infor-img_des">${inforDescription}</div>
		</div>
		<div class="box_infor-name hover-name">
			${nameComic}
		</div>
	</a>
	`)
}
function handleImgBox(){
	let inforImages = $$('.box_infor-img > img');
	console.log(inforImages)
	for (let i = 0; i < inforImages.length; i++){
		let linkImage = 'images/' + images[i].idComic + '-' + images[i].editImg + '/'+images[i].editImg + '.jpg'
		inforImages[i].setAttribute('src', linkImage)
	}
}; handleImgBox()

