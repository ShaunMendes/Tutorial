window.onload = () => {

    function get(url) {
        return new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest()
            xhttp.open("GET", url, true)
            xhttp.onload = () => {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.response))
                } else {
                    reject(xhttp.statusText)
                }
            }
            xhttp.onerror = () => {
                reject(xhttp.statusText)
            }
            xhttp.send();

        })
    }
    const pormise = get("data/tweets.json");
    pormise.then(tweets => {
        console.log(tweets)
        return get('data/friends.json')
    }).then(friends => {
        console.log(friends)
        return get('data/videos.json')
    }).then(videos => {
        console.log(videos)
    }).catch(err => {
        console.log(err)
    })
}