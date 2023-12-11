const { Client, MusicClient } = require("youtubei")
// import { createPrompt } from "bun-promptx"

// const stage = "devel"
const stage = "release"
const youtube = new Client()
const music = new MusicClient()
const run = async () => {
    const videos = await youtube.search(prompt("Search Youtube: "), {
        type: "video"
    })

    const data = videos['items']
    console.log(videos.items.length)
    let i = 0
    while(i < data.length) {
        if (stage == "release") {
            let name = data[i]['channel']['name']
            console.log(`${name} - ${videos['items'][i]['title']}`)
            console.log(`https://youtube.com/watch?v=${videos['items'][i]['id']}`)
            console.log('----------------------------------------------------------------------------------------')
            i++
        } else {
            console.log(data)
            i++
        }
    }
    const nextVideos = await videos.next()
    console.log(nextVideos.length)
    console.log(videos.items.length)
}

run()
