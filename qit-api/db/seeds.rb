User.create([
  {username: 'test1', email: 'test1@test.com', password: 'testy'},
  {username: 'test2', email: 'test2@test.com', password: 'testy'},
  {username: 'test3', email: 'test3@test.com', password: 'testy'}
])

Episode.create([
  {"@search.score": 0.042451847, audioUrl: "https://media.devchat.tv/adventures-in-angular/AiA_208_From_Custom_Webpack_build_to_Angular_CLI_with_Martin_Jakubik.mp3", description: "", episode: "", episodeTitle: "AiA 208: From Custom Webpack Build to Angular CLI with Martin Jakubik", episodeType: "", podcastTitle: "Adventures in Angular", published: "2018-09-25T10:00:00.000Z", season: ""},
  {"@search.score": 0.10188444, audioUrl: "https://traffic.libsyn.com/secure/syntax/Syntax077.mp3?dest-id=532671", description: "", episode: "", episodeTitle: "Hasty Treat - Positivity and Web Development", episodeType: "full", podcastTitle: "Syntax.fm", published: "2018-09-24T13:00:00.000Z", season: ""},
  {"@search.score": 0.060035978, audioUrl: "https://media.devchat.tv/js-jabber/JSJ_330_AWS_Amplify_with_Nader_Dabit.mp3", description: "", episode: "", episodeTitle: "“AWS: Amplify” with Nader Dabit", episodeType: "", podcastTitle: "JavaScript Jabber", published: "2018-09-11T10:00:00.000Z", season: ""}
])

QueueItem.create([
  {user: User.find(1), episode: Episode.find(1)},
  {user: User.find(1), episode: Episode.find(2)},
  {user: User.find(1), episode: Episode.find(3)}
])

Playlist.create([
  {name: 'my playlist1', user: User.find(1)},
  {name: 'my playlist2', user: User.find(1)},
  {name: 'my playlist3', user: User.find(1)},
])

PlaylistItem.create([
  {playlist: Playlist.find(1), episode: Episode.find(1)},
  {playlist: Playlist.find(1), episode: Episode.find(2)},
  {playlist: Playlist.find(1), episode: Episode.find(3)},
  {playlist: Playlist.find(2), episode: Episode.find(1)},
  {playlist: Playlist.find(2), episode: Episode.find(2)},
  {playlist: Playlist.find(2), episode: Episode.find(3)},
  {playlist: Playlist.find(3), episode: Episode.find(1)},
  {playlist: Playlist.find(3), episode: Episode.find(2)},
  {playlist: Playlist.find(3), episode: Episode.find(3)}
])
