/* Ready States

0 - request not initialized
1 - request has been setup
2 - request has been sent
3 - request is in process
4 - request is completed

*/

window.onload = () => {
    const http = new XMLHttpRequest();

    http.onreadystatechange = () => {
        // console.log(http)
        if (http.readyState === 4 && http.status === 200) {
            // console.log(JSON.parse(http.response))
        }
    }


    // requestType, contentLocation, Async
    http.open("GET", "data/tweets.json", true);
    http.send();


    //jquery method
    $.get("data/tweets.json", (data) => {
        console.log(data)
    })
}