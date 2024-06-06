export const config = () => ({
  ENVIRONMENT: "",
  Database: {
    Version: "",
    URL: "",
    Name: "",
    Password: "",
    Redis: {
      Port: "",
      Host: "",
    },
  },
  API: {
    JwtSecret: "",
    JwtExpire: "",
    CookieSecret: "",
    MaxAge: 86400, // 1 day in seconds
  },
  TopGGToken: "",
  FallbackLocale: "",
  Discord: {
    Token: "",
    DevToken: "",
    Client: {
      Owners: [""],
      Secret: "",
      ID: "",
      CallbackURL: "",
    },
    Servers: {
      NDCommunity: "",
      TestGuild: "",
    },
  },
  Debug: {
    Client: true,
    Shard: false,
    Translations: false,
    Lavalink: false,
    PremiumMusicPlayer: false,
  },
  Music: {
    Lavalink: true,
    Volumes: {
      Lavalink: 0.75,
      Player: 50,
    },
    Player: {
      AutoLeaveEmpty: {
        Channel: {
          Enable: true,
          Delay: 60000,
        },
        Queue: {
          Enable: true,
          Delay: 30000,
        },
      },
    },
    Client: {
      selfDeaf: true,
      serverDeaf: true,
    },
  },
  Emojis: {
    logo: "",
    fail: "",
    accept: "",
    success: "",
    thing: "",
    loading: "",
    loading2: "",
    delayping: "",
    Music: {
      Youtube: "",
      Spotify: "",
      SoundCloud: "",
      Deezer: "",
      Facebook: "",
      Apple: "",
      Twitch: "",
    },
  },
  URLList: {
    Music: {
      Youtube: "https://www.youtube.com",
      ShortYoutube: "https://youtu.be",
      SoundCloud: "https://soundcloud.com",
      Spotify: "https://open.spotify.com",
      Deezer: "https://www.deezer",
      Facebook: "https://facebook.com",
      Apple: "https://music.apple.com/",
      Twitch: "https://www.twitch.tv/",
    },
  },
  EvalBadKeys: [
    "client.token",
    "client.destroy",
    "process.env.Token",
    "process.env.DevToken",
    "process.env.DATABASE_URL",
    "process.env.DatabaseName",
    "process.env.DatabasePassword",
    "process.env.RedisPort",
    "process.env.RedisHost",
    "process.env.LavalinkHOST",
    "process.env.LavalinkPassword",
    "process.env.SpotifyClientId",
    "process.env.SpotifyClientSecret",
  ],
});
