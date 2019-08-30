// calback is a function passed as a parameter

window.onload = () => {

    const handleError = (jqXHR, textStatus, error) => {
        console.log(error)
    }

    $.ajax({
        type: "GET",
        url: "data/tweets.json",
        success: cbTweets,
        error: handleError

    })

    function cbTweets(data) {
        console.log(data)
        $.ajax({
            type: "GET",
            url: "data/friends.json",
            success: cbFriends,
            error: handleError

        })
    }

    function cbFriends(data) {
        console.log(data)
        $.ajax({
            type: "GET",
            url: "data/videos.json",
            success: data => {
                console.log(data)
            },
            error: handleError

        })
    }
}