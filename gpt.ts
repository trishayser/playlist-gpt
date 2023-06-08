import { Configuration, OpenAIApi } from "openai";
import { BASIC_PROMPT } from "./consts";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export async function getPlaylistObject(prompt: string): Promise<Object | undefined> {

    const completion = await openai.createCompletion({
        model: "", 
        prompt: BASIC_PROMPT + prompt,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    const resultString = completion.data.choices[0].text;

    if (resultString) 
        try {
            const resultJson = JSON.parse(resultString)
            return resultJson
        }
        catch(e) {
            console.log("Couldn't parse the JSON File")
            console.error(e);
            return undefined
        }
    else {
        return undefined
    }
    
}

export async function getPlaylistFakeObject(prompt: string): Promise<Object | undefined> {
    let res = [
        {
          "Artist": "AC/DC",
          "Song": "Back in Black"
        },
        {
          "Artist": "Guns N' Roses",
          "Song": "Sweet Child o' Mine"
        },
        { 
          "Artist": "Queen",
          "Song": "Bohemian Rhapsody"
        },
        {
          "Artist": "Metallica",
          "Song": "Enter Sandman"
        },
        {
          "Artist": "Aerosmith",
          "Song": "Dream On"
        }
      ] as Object

      return res


}
