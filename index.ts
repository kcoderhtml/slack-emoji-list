interface EmojiResponse {
    ok: boolean;
    emoji: {
        [key: string]: string;
    };
}

const response: EmojiResponse = await (await fetch(
    "https://slack.com/api/emoji.list",
    {
        headers: {
            "Authorization": "Bearer " + process.env.SLACKTOKEN
        }
    }
)).json();


console.log("number of emojis gotten",Object.keys(response.emoji).length)

// save to file with bun
Bun.write("emojis.json", JSON.stringify(response.emoji))