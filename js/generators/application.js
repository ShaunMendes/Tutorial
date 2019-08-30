window.onload = function () {
    function* generator() {

        let tweets = yield $.getJSON('data/tweets.json');
        console.log(tweets)

        let friends = yield $.getJSON('data/fb-friends.json');
        console.log(friends)

        let ytVids = yield $.getJSON('data/yt-videos.json');
        console.log(ytVids)
    }

    function genWrapper(generator) {

        const myGen = generator()

        function handle(yielded) {
            if (yielded.done === false) {
                yielded.value.then((data) => {
                    return handle(myGen.next(data))
                })
            }
        }

        return handle(myGen.next())
    }
    genWrapper(generator)
}