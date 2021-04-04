function dispSideBar() {
	document.getElementById('sidebar').style.display='block';
	document.getElementById('clickBtn').style.display='none';
	document.getElementById('shop').style.display='none';
	document.getElementById('navbar').style.opacity=0.5;
	document.getElementById('navbar').style.opacity=0.5;
	document.getElementById('video').style.opacity=0.5;
}
function closeSideBar(){
	document.getElementById('sidebar').style.display='none';
	document.getElementById('clickBtn').style.display='block';	
	document.getElementById('shop').style.display='block';	
	document.getElementById('navbar').style.opacity=1;
	document.getElementById('navbar').style.opacity=1;
	document.getElementById('video').style.opacity=1;
}