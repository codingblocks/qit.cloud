The podcast feed urls are all in [feeds.json](https://github.com/codingblocks/podcast-app/blob/master/podcast-feed-loader/app/feeds.json)

You can add a new show to the file, and run the podcast-feed-loader to make sure nothing blows up. Once it gets merged, the changes will get automatically deployed to the Azure function that imports the feeds. The podcast-feed-loader runs every couple hours so give it some time before checking.


| Property      | Required?        | Description                                                                                                                                                                      |
|---------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| url           | required         | The podcast feed url for a show, the easiest way to find this is to search for the show on [Podchaser](https://www.podchaser.com/)                                               |
| title         | optional (null)  | Override the podcast title from the feed, some shows have additional keywords in their titles. This also makes it easier to see what shows are already being aggregated.|                                                                                    
| titleCleanser | optional (null)  | Regular expression for trimming episode numbers or other fluff out of episode titles                                                                                             |
| forceHttps    | optional (false) | Some feeds list mp3 files as "http" even though https files are available from the host. Setting this property true will save the https versions of the url to the search engine |

Here is an example declaration:
```javascript
{
  "url": "https://codingblocks.libsyn.com/rss",
  "title": "Coding Blocks",
  "titleCleanser": "^\\d+.\\s",
  "forceHttps": true
}
```

Based on this declaration, the feed loader will...
* Set the podcast title to "Coding Blocks"
* strip out the episode number, period, and first space
* Change any http mp3 url to https

Here's a before/after table to demonstrate the changes:

| Property      | Before                                                                                                                         | After                                                                                 |
|---------------|--------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| Podcast Title | Coding Blocks - Patterns, Architecture, Best Practices, Tips and Tricks for Software, Database, and Web Developers / Engineers | Coding Blocks                                                                         |
| Episode Title | 86. Lightning Talks                                                                                                            | Lightning Talks                                                                       |
| Episode Url   | http://secure-hwcdn.libsyn.com/p/c/e/8/ce81c570d4111110/coding-blocks-episode-86.mp3                                           | https://secure-hwcdn.libsyn.com/p/c/e/8/ce81c570d4111110/coding-blocks-episode-86.mp3 |