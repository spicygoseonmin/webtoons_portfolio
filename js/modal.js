$(function() {
	// $(".modal_wrap").draggable({containment: 'parent', scroll: false}); // 레이어 팝업 창 드래그 가능

	// 쿠키 저장여부 체크
	if (getCookie("popToday") !== "close") {      
		document.querySelector(".modal_wrap").style.display = "block";
	} else {
		document.querySelector(".modal_wrap").style.display = "none"; 
	}
});

// 오늘하루만보기 닫기버튼 스크립트
function closeToday() { 
	setCookie("popToday", "close", 1); 
	document.querySelector(".modal_wrap").style.display = "none";
}

// 그냥 닫기버튼 스크립트
function closePop() { 
	document.querySelector(".modal_wrap").style.display = "none";
}

// 쿠키 설정 함수
function setCookie(name, value, days) {
	let date = new Date();
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// 쿠키 가져오기 함수
function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
	return null;
}
