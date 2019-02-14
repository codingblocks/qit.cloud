/* global div */

import React from 'react'
import ReactDOM from 'react-dom'

export class renderDiv extends React.Component {
  render() {
    const div = document.createElement('div')
    ReactDOM.render( < div / > , div)
  }
}

export class divBreakdown extends React.Component {
  render() {
    return ReactDOM.unmountComponentAtNode(div)
  }
}

export function Header() {
  return ( < div >
    <div data-testid = 'header'
    className = 'in-header' / >
    </div>
  )
}

export const serverMock = {
  myMethod: jest
    .fn()
    .mockReturnThis()
}

export const mockEpisodes = [{
  '@search.score': 7.5773935,
  'id': 'changelog_com_6_519',
  'podcastTitle': 'Changelog',
  'episodeTitle': 'Cool, depending on your definition of cool (JS Party #24)',
  'description': 'Feross Aboukhadijeh, Suz Hinton, Nick Nisi, and Alex Sexton get weird this week talking about their favorite old and weird HTML tags, web APIs that do or don’t require permission, and their favorite weird websites.',
  'published': '2018-05-07T11:00:00Z',
  'audioUrl': 'https://cdn.changelog.com/uploads/jsparty/24/js-party-24.mp3',
  'episode': null,
  'season': null,
  'episodeType': null,
  'feed': 'https://changelog.com/master/feed',
  'tags': []
}, {
  '@search.score': 2.6994188,
  'id': 'Buzzsprout_495655',
  'podcastTitle': 'The Cloudcast',
  'episodeTitle': 'DevOps Before It Was Cool',
  'description': "Aaron talks with Matthew Boeckman (<a href=\"https://twitter.com/matthewboeckman\">@matthewboeckman</a>, owner <a href=\"http://dryas.io/\">dryas.io</a>, ex-VP of DevOps Craftsy) about life in the DevOps trenches at a high growth startup over the course of six years. Lessons learned, and a glimpse into what’s next in the industry.<br />\r\n<br />\r\n<b>Show Links:</b><br />\r\n<ul>\r\n<li>Get a<a href=\"http://www.oreilly.com/pub/get/thecloudcast16\"> free eBook</a> from O'Reilly media or use promo code PC20CLOUD for a discount - 40% off Print Books and 50% off eBooks and videos</li>\r\n<li><a href=\"https://dryas.io/\">Dryas.io Website</a></li>\r\n<li><a href=\"https://www.craftsy.com/\">Craftsy Website</a></li>\r\n<li><a href=\"https://dryas.io/?cat=16\">Matthew's Articles on Dryas.io</a></li>\r\n<li><a href=\"https://devops.com/author/matthewboeckman/\">Matthew's Articles on DevOps.com</a></li>\r\n<li><a href=\"https://victorops.com/blog/\">VictorOps Blog</a></li>\r\n<li><a href=\"https://www.amazon.com/dp/B016CJ5HUA\">Beyond Blame: Learning From Failure and Success</a></li>\r\n</ul>\r\n<div>\r\n<br />\r\n<b>Show Notes:</b><br />\r\n<ul>\r\n<br />\r\n<li>Topic 1 - We first met at AWS Re:Invent a few years ago while you were still at Craftsy and I was fascinated by your journey to where you are now. You were doing DevOps before it was cool. Tell us a little about your history and your run up to opening your own consulting business?</li>\r\n</ul>\r\n<ul>\r\n<li>Topic 2 - What were your keys to success running both DevOps and Operations?</li>\r\n</ul>\r\n<ul>\r\n<li>Topic 3 - As a practitioner, how much do you follow the DevOps community? Are there certain people or trends that you follow? What is interesting to you these days?</li>\r\n</ul>\r\n<ul>\r\n<li>Topic 4 - Looking back, what would you have done differently?</li>\r\n</ul>\r\n<ul>\r\n<li>Topic 5 - We have a lot of listeners that are just starting out, how would you recommend they get started?</li>\r\n</ul>\r\n<ul>\r\n<li>Topic 6 - What made you decide to leave your role at Craftsy and hang out your own signpost?</li>\r\n</ul>\r\n<ul>\r\n</ul>\r\n<ul>\r\n</ul>\r\n<br />\r\n<b>Feedback?</b><br />\r\n<ul>\r\n<li>Email:<a href=\"mailto:show@thecloudcast.net\">show at thecloudcast dot net</a></li>\r\n<li>Twitter:<a href=\"http://twitter.com/thecloudcastnet\">@thecloudcastnet</a> or <a href=\"http://twitter.com/serverlesscast\">@serverlesscast</a> </li>\r\n<li>YouTube:<a href=\"https://www.youtube.com/user/TheCloudcastNET\">Cloudcast Channel</a></li>\r\n</ul>\r\n</div>",
  'published': '2017-04-02T04:00:00Z',
  'audioUrl': 'https://www.buzzsprout.com/3195/495655-the-cloudcast-294-devops-before-it-was-cool.mp3',
  'episode': null,
  'season': null,
  'episodeType': 'full',
  'feed': 'https://feeds.buzzsprout.com/3195.rss',
  'tags': ['.net', 'devops', 'aws']
}, {
  '@search.score': 2.2655528,
  'id': '27f1eb47_8543_41af_86ea_80d5c2f8e802',
  'podcastTitle': 'Design Details',
  'episodeTitle': 'The Cool Tools (feat. Dylan Field)',
  'description': "Today we caught up with Dylan Field, the CEO and co-founder of Figma. In this episode we dig into Dylan's background, design tools an Figma, internships, opinionated design, design education and more.",
  'published': '2016-03-30T12:00:00Z',
  'audioUrl': 'https://audio.simplecast.com/6951a981.mp3',
  'episode': '120',
  'season': null,
  'episodeType': 'full',
  'feed': 'https://rss.simplecast.com/podcasts/1034/rss',
  'tags': []
}]
