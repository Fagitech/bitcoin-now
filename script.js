function request() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json', true);
    request.onload = function() {
        if (request.status == 200) {
            var data = JSON.parse(this.response);
            document.getElementById("price").innerHTML = "$ " + data['bpi']['USD']['rate'];
        } else {
            console.log("Error");
        }
    }
    request.send();
}
request();
setInterval(request, 10000);