const musicPath = (folder, file) => `./music/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

const tracks = [
  {
    title: "YOU MAKE ME SAD",
    artist: "LOVELY BOMB",
    album: "LOVELY BOMB - YOU MAKE ME SAD",
    folder: "LOVELY BOMB - YOU MAKE ME SAD",
    coverFile: "cover.jpg",
    blobAudio: true,
    fallbackDuration: 217.73,
    accent: "#d8dde8",
    glow:
      "linear-gradient(118deg, rgba(216,221,232,.26), transparent 46%), linear-gradient(300deg, rgba(118,94,104,.32), transparent 55%)",
  },
  {
    title: "get some",
    artist: "xemnaschrist / pryme! / Fss",
    album: "get some",
    folder: "xemnaschrist,pryme!,Fss - get some",
    coverFile: "cover.jpg",
    fallbackDuration: 126.62,
    accent: "#bcd0ff",
    glow:
      "linear-gradient(120deg, rgba(80,122,154,.34), transparent 48%), linear-gradient(295deg, rgba(172,118,115,.32), transparent 54%)",
  },
  {
    title: "\u80fd\u5904\u5904\u4e0d\u80fd\u5904\u5206",
    artist: "\u59dc\u96e8\u6db5",
    album: "\u59dc\u96e8\u6db5 - \u80fd\u5904\u5904\u4e0d\u80fd\u5904\u5206",
    folder: "\u59dc\u96e8\u6db5 - \u80fd\u5904\u5904\u4e0d\u80fd\u5904\u5206",
    coverFile: "cover.png",
    fallbackDuration: 176.3,
    accent: "#ff9bbd",
    glow:
      "linear-gradient(125deg, rgba(255,155,189,.32), transparent 45%), linear-gradient(305deg, rgba(255,196,91,.25), transparent 56%)",
  },
  {
    title: "better off",
    artist: "\u6df1\u6c3429",
    album: "My Pretty Little Feelings",
    folder: "\u6df1\u6c3429 - better off",
    coverFile: "cover.jpg",
    fallbackDuration: 133.82,
    accent: "#c8d8e5",
    glow:
      "linear-gradient(116deg, rgba(144,180,194,.32), transparent 48%), linear-gradient(292deg, rgba(204,164,139,.24), transparent 55%)",
  },
  {
    title: "Fragments",
    artist: "Aiobahn / Kocho",
    album: "Aiobahn,Kocho - Fragments",
    folder: "Aiobahn,Kocho - Fragments",
    coverFile: "cover.jpg",
    blobAudio: true,
    fallbackDuration: 312,
    accent: "#d7e9ff",
    glow:
      "linear-gradient(120deg, rgba(130,184,255,.3), transparent 47%), linear-gradient(300deg, rgba(255,179,206,.26), transparent 56%)",
  },
  {
    title: "Sonata in Darkness",
    artist: "Michael Giacchino",
    album: "Michael Giacchino - Sonata in Darkness",
    folder: "Michael Giacchino - Sonata in Darkness",
    coverFile: "cover.jpg",
    blobAudio: true,
    fallbackDuration: 731,
    accent: "#aeb8c8",
    glow:
      "linear-gradient(118deg, rgba(120,136,158,.34), transparent 48%), linear-gradient(305deg, rgba(215,205,184,.2), transparent 58%)",
  },
  {
    title: "\u30a4\u30b0\u30cb\u30c3\u30b7\u30e7\u30f3",
    artist: "\uff0aLuna / \u3086\u3042\u308b / \u306d\u3093\u306d",
    album: "\uff0aLuna,\u3086\u3042\u308b,\u306d\u3093\u306d - \u30a4\u30b0\u30cb\u30c3\u30b7\u30e7\u30f3",
    folder: "\uff0aLuna,\u3086\u3042\u308b,\u306d\u3093\u306d - \u30a4\u30b0\u30cb\u30c3\u30b7\u30e7\u30f3",
    coverFile: "cover.jpg",
    fallbackDuration: 215,
    accent: "#ffc4da",
    glow:
      "linear-gradient(122deg, rgba(255,160,205,.34), transparent 46%), linear-gradient(300deg, rgba(132,198,255,.24), transparent 58%)",
  },
  {
    title: "\u30e1\u30bf\u30d5\u30a3\u30af\u30b7\u30e7\u30f3",
    artist: "\uff0aLuna / \u306d\u3093\u306d",
    album: "\uff0aLuna,\u306d\u3093\u306d - \u30e1\u30bf\u30d5\u30a3\u30af\u30b7\u30e7\u30f3",
    folder: "\uff0aLuna,\u306d\u3093\u306d - \u30e1\u30bf\u30d5\u30a3\u30af\u30b7\u30e7\u30f3",
    coverFile: "cover.jpg",
    fallbackDuration: 259.16,
    accent: "#d7cbff",
    glow:
      "linear-gradient(122deg, rgba(178,152,255,.34), transparent 46%), linear-gradient(300deg, rgba(118,222,255,.24), transparent 58%)",
  },
  {
    title: "Selfish",
    artist: "556Kurumi",
    album: "556Kurumi - Selfish",
    folder: "556Kurumi - Selfish",
    coverFile: "cover.jpg",
    fallbackDuration: 130.95,
    accent: "#bcd0ff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "\uba5c\ub85c\ub514 (MELODY)",
    artist: "ASH ISLAND",
    album: "ASH ISLAND - \uba5c\ub85c\ub514 (MELODY)",
    folder: "ASH ISLAND - \uba5c\ub85c\ub514 (MELODY)",
    coverFile: "cover.jpg",
    fallbackDuration: 180.45,
    accent: "#ff9bbd",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "2AM Somewhere",
    artist: "Bankrol Hayden / charlieonnafriday",
    album: "Bankrol Hayden,charlieonnafriday - 2AM Somewhere",
    folder: "Bankrol Hayden,charlieonnafriday - 2AM Somewhere",
    coverFile: "cover.jpg",
    fallbackDuration: 107.59,
    accent: "#c8d8e5",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "After Hours",
    artist: "charlieonnafriday",
    album: "charlieonnafriday - After Hours",
    folder: "charlieonnafriday - After Hours",
    coverFile: "cover.jpg",
    fallbackDuration: 157.7,
    accent: "#d7cbff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "I'm Not Crazy",
    artist: "charlieonnafriday",
    album: "charlieonnafriday - I'm Not Crazy",
    folder: "charlieonnafriday - I'm Not Crazy",
    coverFile: "cover.jpg",
    fallbackDuration: 161.75,
    accent: "#8ee6ff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "Undefeated",
    artist: "charlieonnafriday",
    album: "charlieonnafriday - Undefeated",
    folder: "charlieonnafriday - Undefeated",
    coverFile: "cover.jpg",
    fallbackDuration: 175.93,
    accent: "#ffd18c",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "Pop Out",
    artist: "charlieonnafriday / Bankrol Hayden",
    album: "charlieonnafriday,Bankrol Hayden - Pop Out",
    folder: "charlieonnafriday,Bankrol Hayden - Pop Out",
    coverFile: "cover.jpg",
    fallbackDuration: 138.11,
    accent: "#b7f7d4",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "Low Flying\uff08Ft.Amara\uff09",
    artist: "Clear Sky",
    album: "Clear Sky - Low Flying\uff08Ft.Amara\uff09",
    folder: "Clear Sky - Low Flying\uff08Ft.Amara\uff09",
    coverFile: "cover.jpg",
    fallbackDuration: 205.32,
    accent: "#f2b8ff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "Extraordinary",
    artist: "Connor Price",
    album: "Connor Price - Extraordinary",
    folder: "Connor Price - Extraordinary",
    coverFile: "cover.jpg",
    fallbackDuration: 156.47,
    accent: "#d8dde8",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "f_ck you",
    artist: "Eliminate",
    album: "Eliminate - f_ck you",
    folder: "Eliminate - f_ck you",
    coverFile: "cover.jpg",
    fallbackDuration: 209.5,
    accent: "#9dc5ff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "VEMPA",
    artist: "FOURTY / Bausa / Chekaa",
    album: "FOURTY,Bausa,Chekaa - VEMPA",
    folder: "FOURTY,Bausa,Chekaa - VEMPA",
    coverFile: "cover.jpg",
    fallbackDuration: 134.56,
    accent: "#bcd0ff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "Fresh Air",
    artist: "Future",
    album: "Future - Fresh Air",
    folder: "Future - Fresh Air",
    coverFile: "cover.jpg",
    fallbackDuration: 270.92,
    accent: "#ff9bbd",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "Someone To Forget (BUSTED by Herobust)",
    artist: "Herobust / ARMNHMR / Lights",
    album: "Herobust,ARMNHMR,Lights - Someone To Forget (BUSTED by Herobust)",
    folder: "Herobust,ARMNHMR,Lights - Someone To Forget (BUSTED by Herobust)",
    coverFile: "cover.png",
    fallbackDuration: 281.63,
    accent: "#c8d8e5",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "ROADKILL",
    artist: "heyzuko!",
    album: "heyzuko! - ROADKILL",
    folder: "heyzuko! - ROADKILL",
    coverFile: "cover.jpg",
    fallbackDuration: 121.16,
    accent: "#d7cbff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "DRIFT",
    artist: "Josh A",
    album: "Josh A - DRIFT",
    folder: "Josh A - DRIFT",
    coverFile: "cover.jpg",
    fallbackDuration: 122.98,
    accent: "#8ee6ff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "Memories",
    artist: "Juggernaut.",
    album: "Juggernaut. - Memories",
    folder: "Juggernaut. - Memories",
    coverFile: "cover.png",
    fallbackDuration: 279.56,
    accent: "#ffd18c",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "Icarus",
    artist: "Mazare / Skybreak",
    album: "Mazare,Skybreak - Icarus",
    folder: "Mazare,Skybreak - Icarus",
    coverFile: "cover.jpg",
    fallbackDuration: 181.39,
    accent: "#b7f7d4",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "lights (4444)",
    artist: "nothing,nowhere.",
    album: "nothing,nowhere. - lights (4444)",
    folder: "nothing,nowhere. - lights (4444)",
    coverFile: "cover.jpg",
    fallbackDuration: 160.44,
    accent: "#f2b8ff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "Sound of You",
    artist: "Pendulum / Armin van Buuren / Rob Swire",
    album: "Pendulum,Armin van Buuren,Rob Swire - Sound of You",
    folder: "Pendulum,Armin van Buuren,Rob Swire - Sound of You",
    coverFile: "cover.jpg",
    fallbackDuration: 204.28,
    accent: "#d8dde8",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "now that",
    artist: "sapientdream",
    album: "sapientdream - now that",
    folder: "sapientdream - now that",
    coverFile: "cover.jpg",
    fallbackDuration: 150.54,
    accent: "#9dc5ff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "\u3010\u93e1\u97f3\u30ec\u30f3\u3011\u30a2\u30c8\u30e9\u30af\u30c8\u30e9\u30a4\u30c8 \uff0f Attract Light\u3010\uff0aLuna\u3011",
    artist: "＊Luna",
    album: "SenaRinka - \u3010\u93e1\u97f3\u30ec\u30f3\u3011\u30a2\u30c8\u30e9\u30af\u30c8\u30e9\u30a4\u30c8 \uff0f Attract Light\u3010\uff0aLuna\u3011",
    folder: "SenaRinka - \u3010\u93e1\u97f3\u30ec\u30f3\u3011\u30a2\u30c8\u30e9\u30af\u30c8\u30e9\u30a4\u30c8 \uff0f Attract Light\u3010\uff0aLuna\u3011",
    coverFile: "cover.jpg",
    fallbackDuration: 273.26,
    accent: "#bcd0ff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "BUrun",
    artist: "Sivan / \u4f0a\u751fEshen",
    album: "Sivan,\u4f0a\u751fEshen - BUrun",
    folder: "Sivan,\u4f0a\u751fEshen - BUrun",
    coverFile: "cover.jpg",
    fallbackDuration: 149.45,
    accent: "#ff9bbd",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "Lose me",
    artist: "Skyte",
    album: "Skyte - Lose me",
    folder: "Skyte - Lose me",
    coverFile: "cover.jpg",
    fallbackDuration: 116.35,
    accent: "#c8d8e5",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "Good Grief",
    artist: "Solomon France",
    album: "Solomon France - Good Grief",
    folder: "Solomon France - Good Grief",
    coverFile: "cover.jpg",
    fallbackDuration: 191.76,
    accent: "#d7cbff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "I GO",
    artist: "Super Amy",
    album: "Super Amy - I GO",
    folder: "Super Amy - I GO",
    coverFile: "cover.jpg",
    fallbackDuration: 132.38,
    accent: "#8ee6ff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "HOW I FELT (feat. Reo Cragun)",
    artist: "Whethan / Reo Cragun",
    album: "Whethan,Reo Cragun - HOW I FELT (feat. Reo Cragun)",
    folder: "Whethan,Reo Cragun - HOW I FELT (feat. Reo Cragun)",
    coverFile: "cover.jpg",
    fallbackDuration: 168.46,
    accent: "#ffd18c",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "\u8749\u6642\u96e8",
    artist: "\u30ca\u30c4\u30ce\u30bb",
    album: "\u30ca\u30c4\u30ce\u30bb - \u8749\u6642\u96e8",
    folder: "\u30ca\u30c4\u30ce\u30bb - \u8749\u6642\u96e8",
    coverFile: "cover.jpg",
    fallbackDuration: 202.06,
    accent: "#b7f7d4",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "Heart''s Home",
    artist: "\u30d8\u3058\u30d8",
    album: "\u30d8\u3058\u30d8 - Heart''s Home",
    folder: "\u30d8\u3058\u30d8 - Heart''s Home",
    coverFile: "cover.jpg",
    fallbackDuration: 277.08,
    accent: "#f2b8ff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "\u6211\u4e0d\u50cf\u611b\u4f60\u53bb\u611b\u5225\u4eba\u4e86",
    artist: "\u59dc\u96e8\u6db5",
    album: "\u59dc\u96e8\u6db5 - \u6211\u4e0d\u50cf\u611b\u4f60\u53bb\u611b\u5225\u4eba\u4e86",
    folder: "\u59dc\u96e8\u6db5 - \u6211\u4e0d\u50cf\u611b\u4f60\u53bb\u611b\u5225\u4eba\u4e86",
    coverFile: "cover.jpg",
    fallbackDuration: 111.41,
    accent: "#d8dde8",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "\u4e3b\u89d2(Main Character)",
    artist: "\u6df1\u6c3429",
    album: "\u6df1\u6c3429 - \u4e3b\u89d2(Main Character)",
    folder: "\u6df1\u6c3429 - \u4e3b\u89d2(Main Character)",
    coverFile: "cover.jpg",
    fallbackDuration: 126.77,
    accent: "#9dc5ff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
  {
    title: "\u8776",
    artist: "\u7389\u6dcb\u8eab / \u79d1\u79d1\u7206",
    album: "\u7389\u6dcb\u8eab,\u79d1\u79d1\u7206 - \u8776",
    folder: "\u7389\u6dcb\u8eab,\u79d1\u79d1\u7206 - \u8776",
    coverFile: "cover.png",
    fallbackDuration: 162.12,
    accent: "#bcd0ff",
    glow:
      "linear-gradient(122deg, rgba(188,208,255,.3), transparent 46%), linear-gradient(300deg, rgba(255,155,189,.22), transparent 58%)",
  },
].map((track) => ({
  ...track,
  audioSrc: musicPath(track.folder, `${track.folder}.mp3`),
  cover: track.coverFile ? musicPath(track.folder, track.coverFile) : track.cover,
  audioBlobPromise: null,
  audioObjectUrl: null,
  themePromise: null,
  theme: null,
  duration: track.fallbackDuration,
}));

const importedTracks = [];
const trackGrid = document.querySelector("#trackGrid");
const trackSearchInput = document.querySelector("#trackSearchInput");
const trackSearchClear = document.querySelector("#trackSearchClear");
const trackSearchStatus = document.querySelector("#trackSearchStatus");
const glassPlayer = document.querySelector("#glassPlayer");
const selectorView = document.querySelector("#selectorView");
const detailView = document.querySelector("#detailView");
const wheelStage = document.querySelector(".wheel-stage");
const previewIndex = document.querySelector("#previewIndex");
const previewTitle = document.querySelector("#previewTitle");
const previewArtist = document.querySelector("#previewArtist");
const enterTrack = document.querySelector("#enterTrack");
const wheelPrev = document.querySelector("#wheelPrev");
const wheelNext = document.querySelector("#wheelNext");
const backToSelector = document.querySelector("#backToSelector");
const musicImportInput = document.querySelector("#musicImportInput");
const playerArt = document.querySelector("#playerArt");
const playerArtist = document.querySelector("#playerArtist");
const playerAlbum = document.querySelector("#playerAlbum");
const playerTitle = document.querySelector("#playerTitle");
const visualizerTrackName = document.querySelector("#visualizerTrackName");
const visualizerTrackArtist = document.querySelector("#visualizerTrackArtist");
const musicSection = document.querySelector("#music");
const consequenceHero = document.querySelector("#consequenceHero");
const consequenceCanvas = document.querySelector("#consequenceCanvas");
const importedMusicPanels = document.querySelector("#importedMusicPanels");
const importedTrackListLeft = document.querySelector("#importedTrackListLeft");
const importedTrackListRight = document.querySelector("#importedTrackListRight");
const jumpToImportedMusic = document.querySelector("#jumpToImportedMusic");
const visualizerToggle = document.querySelector("#visualizerToggle");
const visualizerModeToggle = document.querySelector("#visualizerModeToggle");
let audioVisualizerCanvas = document.querySelector("#audioVisualizerCanvas");
const progressTrack = document.querySelector("#progressTrack");
const progressFill = document.querySelector("#progressFill");
const timeReadout = document.querySelector("#timeReadout");
const durationReadout = document.querySelector("#durationReadout");
const playToggle = document.querySelector("#playToggle");
const prevTrack = document.querySelector("#prevTrack");
const nextTrack = document.querySelector("#nextTrack");

const audio = new Audio();
audio.preload = "auto";
const importedMusicDbName = "glass-music-imports";
const importedMusicStoreName = "tracks";
const importedMusicDbVersion = 1;
const importedTrackAccents = ["#ffc4da", "#bcd0ff", "#d8dde8", "#c8d8e5", "#ff9bbd", "#b9f3e4"];
const audioVisualizerModes = ["光环", "液波", "星轨", "镜像", "晶格", "环波"];
const importedAlbumLabel = "\u672c\u5730\u5bfc\u5165";
let activeTrackIndex = 0;
let activeTrack = null;
let activeTrackList = tracks;
let isPlaying = false;
let loadToken = 0;
let wheelLockedUntil = 0;
let trackSearchQuery = "";
let trackSearchResults = tracks.map((_, index) => index);
let progressDrag = null;
let pendingSeekTime = null;
let displaySeekTime = null;
let deferredBlobSeekTime = null;
let trackGridWired = false;
let trackSwitchTimer = null;
let importedMusicDbPromise = null;
let importedWheelLockedUntil = 0;
let importedMusicPanelsUnlocked = false;
let isAudioVisualizerActive = false;
let audioContext = null;
let audioSourceNode = null;
let audioAnalyserNode = null;
let audioVisualizerData = null;
let audioVisualizerLevels = [];
let audioVisualizerFrame = 0;
let audioVisualizerTransitionTimer = 0;
let audioVisualizerExitTimer = 0;
let audioVisualizerModeIndex = 0;
let isAudioVisualizerExiting = false;
let fitSongTitleFrame = 0;
const importedPanelCenters = [0, 0];

initializeApp();

async function initializeApp() {
  wirePlayer();
  setDetailMode(false);
  await restoreImportedTracks();
  renderTrackCards();
  renderImportedTrackPanels();
  loadTrack(0);
  renderFallbackDurations();
  preloadDurations();
  setupWorld();
  setupPetals();
  setupTitleFade();
  setupConsequenceSequence();
}

function renderTrackCards() {
  if (!trackSearchResults.length) {
    trackGrid.innerHTML = `
      <div class="track-search-empty" role="status">
        <strong>没有找到歌曲</strong>
        <small>换一个关键词试试</small>
      </div>
    `;
    updateWheel();
    updateTrackSearchUi();
    return;
  }

  trackGrid.innerHTML = trackSearchResults
    .map(
      (trackIndex, visibleIndex) => {
        const track = tracks[trackIndex];
        return `
        <button class="track-card" type="button" data-track="${trackIndex}" style="--track-accent: ${track.accent}; --track-glow: ${track.glow}">
          <span class="track-number">${String(visibleIndex + 1).padStart(2, "0")}</span>
          <span class="track-disc"><img src="${track.cover}" alt="${escapeHtml(track.title)} cover" /></span>
          <span class="track-copy">
            <strong>${escapeHtml(track.title)}</strong>
            <small>${escapeHtml(track.artist)}</small>
          </span>
          <span class="track-duration" data-duration="${trackIndex}">--:--</span>
        </button>
      `;
      },
    )
    .join("");

  if (!trackGridWired) {
    trackGrid.addEventListener("click", (event) => {
      const card = event.target.closest(".track-card");
      if (!card) return;
      enterTrackDetail(Number(card.dataset.track), tracks);
    });
    trackGridWired = true;
  }

  refreshIcons();
  updateWheel();
  updateTrackSearchUi();
}

function applyTrackSearch(query) {
  trackSearchQuery = query.trim();
  const normalizedQuery = normalizeSearchValue(trackSearchQuery);

  trackSearchResults = normalizedQuery
    ? tracks
        .map((track, index) => ({ track, index }))
        .filter(({ track }) => getTrackSearchText(track).includes(normalizedQuery))
        .map(({ index }) => index)
    : tracks.map((_, index) => index);

  renderTrackCards();
  renderFallbackDurations();

  if (!trackSearchResults.length) {
    previewIndex.textContent = "0 / 0";
    previewTitle.textContent = "\u6ca1\u6709\u627e\u5230\u6b4c\u66f2";
    previewArtist.textContent = "\u6362\u4e00\u4e2a\u5173\u952e\u8bcd\u8bd5\u8bd5";
    scheduleFitSongTitles();
    enterTrack.disabled = true;
    wheelPrev.disabled = true;
    wheelNext.disabled = true;
    return;
  }

  enterTrack.disabled = false;
  wheelPrev.disabled = false;
  wheelNext.disabled = false;

  if (activeTrackList === tracks && trackSearchResults.includes(activeTrackIndex)) {
    updateSearchAwarePreviewIndex(tracks);
    updateWheel();
    return;
  }

  loadTrack(trackSearchResults[0], { sourceTracks: tracks });
}

function updateTrackSearchUi() {
  const isSearching = Boolean(trackSearchQuery);
  if (trackSearchClear) trackSearchClear.hidden = !isSearching;
  if (trackSearchStatus) {
    trackSearchStatus.textContent = isSearching
      ? `${trackSearchResults.length} / ${tracks.length}`
      : `${tracks.length} \u9996`;
  }
}

function getTrackSearchText(track) {
  return normalizeSearchValue(`${track.title} ${track.artist} ${track.album} ${track.folder}`);
}

function normalizeSearchValue(value) {
  return String(value)
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function isTrackSearchActive() {
  return Boolean(trackSearchQuery);
}

function navigateTrackSearch(direction) {
  if (!isTrackSearchActive()) {
    loadTrack(activeTrackIndex + direction, { sourceTracks: tracks });
    return;
  }

  if (!trackSearchResults.length) return;

  const currentPosition = trackSearchResults.indexOf(activeTrackIndex);
  const fallbackPosition = direction > 0 ? -1 : 0;
  const nextPosition = wrapIndex((currentPosition >= 0 ? currentPosition : fallbackPosition) + direction, trackSearchResults);
  loadTrack(trackSearchResults[nextPosition], { sourceTracks: tracks });
}

function updateSearchAwarePreviewIndex(sourceTracks) {
  if (sourceTracks !== tracks || !isTrackSearchActive()) return;

  const searchPosition = trackSearchResults.indexOf(activeTrackIndex);
  previewIndex.textContent = searchPosition >= 0
    ? `${String(searchPosition + 1).padStart(2, "0")} / ${String(trackSearchResults.length).padStart(2, "0")}`
    : `-- / ${String(trackSearchResults.length).padStart(2, "0")}`;
}

function renderImportedTrackPanels() {
  if (!importedTrackListLeft || !importedTrackListRight) return;

  normalizeImportedPanelCenters();
  const leftTracks = importedTracks.filter((_, index) => index % 2 === 0);
  const rightTracks = importedTracks.filter((_, index) => index % 2 === 1);

  importedTrackListLeft.dataset.importParity = "0";
  importedTrackListRight.dataset.importParity = "1";
  importedTrackListLeft.innerHTML = renderImportedTrackList(leftTracks, 0);
  importedTrackListRight.innerHTML = renderImportedTrackList(rightTracks, 1);
  refreshImportedTrackState();
  refreshIcons();
}

function renderImportedTrackList(trackList, parity) {
  if (!trackList.length) {
    return `<div class="imported-empty">\u8fd8\u6ca1\u6709\u5bfc\u5165\u97f3\u4e50</div>`;
  }

  const center = clamp(importedPanelCenters[parity] || 0, 0, trackList.length - 1);
  return trackList
    .map((track, localIndex) => {
      const index = localIndex * 2 + parity;
      const offset = getImportedWheelOffset(localIndex, center, trackList.length);
      const abs = Math.abs(offset);
      const isVisible = abs <= 3;
      const isCenter = offset === 0;
      const y = offset * 5.45;
      const rotate = offset * -5.5;
      const scale = clamp(1 - abs * 0.1, 0.68, 1);
      const opacity = isVisible ? clamp(1 - abs * 0.24, 0.16, 1) : 0;
      const blur = abs * 1.6;
      const layer = Math.max(1, 10 - abs);
      return `
        <div
          class="imported-track-card ${isCenter ? "is-center" : ""} ${isVisible ? "is-visible" : ""}"
          data-import-track="${index}"
          style="--track-accent: ${track.accent}; --import-y: ${y.toFixed(2)}rem; --import-rotate: ${rotate.toFixed(2)}deg; --import-scale: ${scale.toFixed(3)}; --import-opacity: ${opacity.toFixed(3)}; --import-blur: ${blur.toFixed(2)}px; --import-layer: ${layer};"
        >
          <button class="imported-track-open" type="button" data-open-import-track="${index}" data-import-parity="${parity}" data-import-local="${localIndex}">
            <span class="imported-number">${String(index + 1).padStart(2, "0")}</span>
            <span class="imported-disc"><img src="${track.cover}" alt="${escapeHtml(track.title)} cover" /></span>
            <span class="imported-copy">
              <strong>${escapeHtml(track.title)}</strong>
              <small>${escapeHtml(track.artist)}</small>
            </span>
            <span class="imported-duration" data-import-duration="${index}">${formatTime(track.duration || track.fallbackDuration)}</span>
          </button>
          <button class="imported-delete-button" type="button" data-delete-import-track="${index}" aria-label="\u5220\u9664 ${escapeHtml(track.title)}">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      `;
    })
    .join("");
}

function openImportedTrackFromPanel(event) {
  const deleteButton = event.target.closest("[data-delete-import-track]");
  if (deleteButton) {
    deleteImportedTrack(Number(deleteButton.dataset.deleteImportTrack));
    return;
  }

  const openButton = event.target.closest("[data-open-import-track]");
  if (!openButton) return;

  const index = Number(openButton.dataset.openImportTrack);
  const parity = Number(openButton.dataset.importParity);
  const localIndex = Number(openButton.dataset.importLocal);
  if (!importedTracks[index]) return;
  importedPanelCenters[parity] = localIndex;
  renderImportedTrackPanels();
  enterTrackDetail(index, importedTracks);
  document.querySelector("#music")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleImportedPanelWheel(event) {
  const list = event.target.closest(".imported-track-list");
  if (!list) return;

  const parity = Number(list.dataset.importParity);
  const length = getImportedPanelLength(parity);
  if (length <= 1 || Math.abs(event.deltaY) < 6) return;

  event.preventDefault();
  const now = performance.now();
  if (now < importedWheelLockedUntil) return;
  importedWheelLockedUntil = now + 230;
  importedPanelCenters[parity] = wrapImportedLocalIndex(importedPanelCenters[parity] + (event.deltaY > 0 ? 1 : -1), length);
  renderImportedTrackPanels();
}

async function deleteImportedTrack(index) {
  const track = importedTracks[index];
  if (!track) return;

  const wasActiveImported = activeTrackList === importedTracks;
  const wasDeletedTrackActive = wasActiveImported && index === activeTrackIndex;
  const shouldResume = wasDeletedTrackActive && isPlaying && !audio.paused;

  try {
    await deleteStoredImportedTrack(track);
  } catch (error) {
    console.warn("Imported track could not be deleted locally.", error);
  }

  cleanupImportedTrackUrls(track);
  importedTracks.splice(index, 1);
  normalizeImportedPanelCenters();
  renderImportedTrackPanels();

  if (!wasActiveImported) return;
  if (wasDeletedTrackActive) {
    if (importedTracks.length) {
      loadTrack(Math.min(index, importedTracks.length - 1), { sourceTracks: importedTracks, autoplay: shouldResume });
    } else {
      setDetailMode(false);
      loadTrack(0, { sourceTracks: tracks });
    }
    return;
  }

  if (index < activeTrackIndex) {
    activeTrackIndex -= 1;
    activeTrack = importedTracks[activeTrackIndex] || activeTrack;
    refreshImportedTrackState();
  }
}

function normalizeImportedPanelCenters() {
  [0, 1].forEach((parity) => {
    const length = getImportedPanelLength(parity);
    importedPanelCenters[parity] = length ? clamp(importedPanelCenters[parity] || 0, 0, length - 1) : 0;
  });
}

function syncImportedPanelCenter(index) {
  const parity = index % 2;
  importedPanelCenters[parity] = Math.floor(index / 2);
  normalizeImportedPanelCenters();
}

function getImportedPanelLength(parity) {
  return importedTracks.filter((_, index) => index % 2 === parity).length;
}

function getImportedWheelOffset(index, center, length) {
  let offset = index - center;
  const half = length / 2;
  if (offset > half) offset -= length;
  if (offset < -half) offset += length;
  return offset;
}

function wrapImportedLocalIndex(index, length) {
  return (index + length) % length;
}

function cleanupImportedTrackUrls(track) {
  [track.audioSrc, track.audioObjectUrl, track.coverObjectUrl].forEach((url) => {
    if (typeof url === "string" && url.startsWith("blob:")) {
      URL.revokeObjectURL(url);
    }
  });
}

function scrollToImportedMusicPanels() {
  if (!consequenceHero) return;

  const targetY = window.scrollY + consequenceHero.getBoundingClientRect().top + consequenceHero.offsetHeight - window.innerHeight * 1.08;
  window.scrollTo({
    top: Math.max(0, targetY),
    behavior: "smooth",
  });
}

function revealImportedMusicPanels({ scroll = true } = {}) {
  importedMusicPanelsUnlocked = true;
  consequenceHero?.classList.add("is-import-panels-unlocked", "is-import-panels-live");
  consequenceHero?.style.setProperty("--sequence-panels-opacity", "1");
  consequenceHero?.style.setProperty("--sequence-panels-y", "0rem");
  consequenceHero?.style.setProperty("--sequence-panels-blur", "0px");
  importedMusicPanels?.setAttribute("aria-hidden", "false");
  jumpToImportedMusic?.setAttribute("aria-expanded", "true");
  if (scroll) scrollToImportedMusicPanels();
}

function refreshImportedTrackState() {
  document.querySelectorAll(".imported-track-card").forEach((card) => {
    const index = Number(card.dataset.importTrack);
    card.classList.toggle("is-active", activeTrackList === importedTracks && index === activeTrackIndex);
  });
}

function wirePlayer() {
  document.querySelectorAll("[data-import-music-trigger]").forEach((button) => {
    button.addEventListener("click", () => musicImportInput?.click());
  });
  musicImportInput?.addEventListener("change", importAudioFiles);
  importedMusicPanels?.addEventListener("click", openImportedTrackFromPanel);
  importedMusicPanels?.addEventListener("wheel", handleImportedPanelWheel, { passive: false });
  jumpToImportedMusic?.addEventListener("click", () => revealImportedMusicPanels());
  visualizerToggle?.addEventListener("click", toggleAudioVisualizer);
  visualizerModeToggle?.addEventListener("click", cycleAudioVisualizerMode);
  trackSearchInput?.addEventListener("input", (event) => applyTrackSearch(event.target.value));
  trackSearchInput?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || !trackSearchResults.length) return;
    event.preventDefault();
    enterTrackDetail(activeTrackIndex, tracks);
  });
  trackSearchClear?.addEventListener("click", () => {
    trackSearchInput.value = "";
    applyTrackSearch("");
    trackSearchInput.focus();
  });
  enterTrack.addEventListener("click", () => enterTrackDetail(activeTrackIndex, tracks));
  wheelPrev.addEventListener("click", () => navigateTrackSearch(-1));
  wheelNext.addEventListener("click", () => navigateTrackSearch(1));
  backToSelector.addEventListener("click", () => {
    setDetailMode(false);
    if (activeTrackList !== tracks) {
      loadTrack(0, { sourceTracks: tracks });
    }
  });
  playToggle.addEventListener("click", () => {
    if (isPlaying) {
      pausePlayback();
    } else {
      playPlayback();
    }
  });

  prevTrack.addEventListener("click", () => {
    loadTrack(activeTrackIndex - 1, { autoplay: isPlaying, sourceTracks: activeTrackList });
  });

  nextTrack.addEventListener("click", () => {
    loadTrack(activeTrackIndex + 1, { autoplay: isPlaying, sourceTracks: activeTrackList });
  });

  progressTrack.addEventListener("pointerdown", startProgressSeek);
  progressTrack.addEventListener("pointermove", moveProgressSeek);
  progressTrack.addEventListener("pointerup", endProgressSeek);
  progressTrack.addEventListener("pointercancel", endProgressSeek);
  progressTrack.addEventListener("click", seekFromPointer);
  progressTrack.addEventListener("keydown", seekFromKeyboard);
  window.addEventListener("resize", scheduleFitSongTitles);
  document.fonts?.ready?.then(scheduleFitSongTitles);

  wheelStage.addEventListener(
    "wheel",
    (event) => {
      if (glassPlayer.classList.contains("is-detail")) return;
      event.preventDefault();
      const now = performance.now();
      if (now < wheelLockedUntil || Math.abs(event.deltaY) < 8) return;
      wheelLockedUntil = now + 360;
      navigateTrackSearch(event.deltaY > 0 ? 1 : -1);
    },
    { passive: false },
  );

  glassPlayer.addEventListener("pointermove", (event) => {
    const rect = glassPlayer.getBoundingClientRect();
    glassPlayer.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    glassPlayer.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && glassPlayer.classList.contains("is-detail")) {
      setDetailMode(false);
    }
    if (glassPlayer.classList.contains("is-detail")) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      navigateTrackSearch(1);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      navigateTrackSearch(-1);
    }
    if (event.key === "Enter") {
      event.preventDefault();
      if (isTrackSearchActive() && !trackSearchResults.length) return;
      enterTrackDetail(activeTrackIndex, tracks);
    }
  });

  document.addEventListener("fullscreenchange", () => {
    if (isAudioVisualizerActive && document.fullscreenElement !== glassPlayer) {
      exitAudioVisualizer({ exitFullscreen: false });
    }
  });

  audio.addEventListener("loadedmetadata", () => {
    if (!activeTrack) return;
    const duration = getMediaDuration(audio.duration, activeTrack);
    if (!duration) return;
    activeTrack.duration = duration;
    updateDurationLabel(activeTrackIndex);
    applyPendingSeek();
    syncPlaybackUi(true);
  });

  audio.addEventListener("durationchange", () => {
    if (!activeTrack) return;
    const duration = getMediaDuration(audio.duration, activeTrack);
    if (!duration) return;
    activeTrack.duration = duration;
    updateDurationLabel(activeTrackIndex);
    syncPlaybackUi(true);
  });

  audio.addEventListener("canplay", applyPendingSeek);
  audio.addEventListener("loadeddata", applyPendingSeek);
  audio.addEventListener("seeked", () => {
    pendingSeekTime = null;
    displaySeekTime = null;
    progressTrack.classList.remove("is-seeking");
    syncPlaybackUi(true);
  });
  audio.addEventListener("timeupdate", () => {
    if (displaySeekTime === null) return;
    if (Math.abs((audio.currentTime || 0) - displaySeekTime) < 0.45) {
      pendingSeekTime = null;
      displaySeekTime = null;
      if (!progressDrag) progressTrack.classList.remove("is-seeking");
    }
  });

  audio.addEventListener("play", () => {
    isPlaying = true;
    updatePlayState();
  });

  audio.addEventListener("pause", () => {
    isPlaying = false;
    updatePlayState();
  });

  audio.addEventListener("ended", () => {
    loadTrack(activeTrackIndex + 1, { autoplay: true, sourceTracks: activeTrackList });
  });

  updateAudioVisualizerModeButton();
  requestAnimationFrame(tick);
}

async function importAudioFiles(event) {
  const sourceFiles = [...(event.target.files || [])].filter(isAudioFile);
  event.target.value = "";
  if (!sourceFiles.length) return;

  const preparedImports = (await Promise.all(sourceFiles.map(prepareImportedAudioFile))).filter(Boolean);
  if (!preparedImports.length) return;

  const firstImportedIndex = importedTracks.length;
  preparedImports.forEach(({ file, options }, offset) => {
    const trackIndex = firstImportedIndex + offset;
    const track = createImportedTrack(file, trackIndex, options);
    importedTracks.push(track);
    saveStoredImportedTrack(track, file).catch((error) => {
      console.warn("Imported track could not be saved locally.", error);
    });
    applyImportedEmbeddedCover(file, track, trackIndex, { imported: true });
  });

  renderImportedTrackPanels();
  preparedImports.forEach((_, offset) =>
    preloadImportedTrackDuration(importedTracks[firstImportedIndex + offset], firstImportedIndex + offset),
  );
  revealImportedMusicPanels({ scroll: true });
}

const supportedAudioFilePattern = /\.(mp3|wav|wave|ogg|oga|opus|m4a|mp4|aac|flac|webm|weba|aif|aiff|alac|ncm)$/i;

function isAudioFile(file) {
  const mimeType = (file.type || "").toLowerCase();
  return (
    mimeType.startsWith("audio/") ||
    mimeType === "application/ogg" ||
    mimeType === "video/mp4" ||
    supportedAudioFilePattern.test(file.name || "")
  );
}

function isNcmFile(file) {
  return /\.ncm$/i.test(file?.name || "");
}

async function prepareImportedAudioFile(file) {
  if (!isNcmFile(file)) return { file, options: {} };

  try {
    const converted = await convertNcmFile(file);
    return {
      file: converted.file,
      options: {
        fileName: file.name,
        convertedFromNcm: true,
        convertedFileName: converted.file.name,
        title: converted.metadata?.title,
        artist: converted.metadata?.artist,
        album: converted.metadata?.album,
        coverBlob: converted.coverBlob,
        coverMimeType: converted.coverMimeType,
      },
    };
  } catch (error) {
    console.warn("NCM import failed.", error);
    return null;
  }
}

async function convertNcmFile(file) {
  try {
    return await convertNcmFileInBrowser(file);
  } catch (error) {
    console.warn("Browser NCM decoding failed; trying the local converter.", error);
    return convertNcmFileOnServer(file);
  }
}

async function convertNcmFileInBrowser(file) {
  const decoded = await decodeNcmFile(file);
  const extension = extensionForAudioMime(decoded.mimeType);
  const convertedFileName = replaceFileExtension(file.name || decoded.metadata?.title || "imported.ncm", extension);
  const convertedFile = new File([decoded.audioBytes], convertedFileName, {
    type: decoded.mimeType,
    lastModified: file.lastModified || Date.now(),
  });

  return {
    file: convertedFile,
    metadata: normalizeNcmMetadata(decoded.metadata),
    coverBlob: decoded.coverBlob,
    coverMimeType: decoded.coverMimeType,
  };
}

async function convertNcmFileOnServer(file) {
  const response = await fetch("/api/convert-ncm", {
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
      "X-NCM-Filename": encodeURIComponent(file.name || "imported.ncm"),
    },
    body: file,
  });

  if (!response.ok) {
    const message = await response.text().catch(() => "");
    throw new Error(message || `NCM conversion failed: ${response.status}`);
  }

  const blob = await response.blob();
  const convertedFileName =
    decodeHeaderFilename(response.headers.get("X-Converted-Filename")) ||
    replaceFileExtension(file.name || "imported.ncm", extensionForAudioMime(blob.type));

  const convertedFile = new File([blob], convertedFileName, {
    type: blob.type || audioMimeForFileName(convertedFileName),
    lastModified: file.lastModified || Date.now(),
  });

  return {
    file: convertedFile,
    metadata: null,
    coverBlob: null,
    coverMimeType: "",
  };
}

const ncmCoreKey = hexToBytes("687a4852416d736f356b496e62617857");
const ncmMetaKey = hexToBytes("2331346c6a6b5f215c5d2630553c2728");
const ncmMetaPrefix = "163 key(Don't modify):";

async function decodeNcmFile(file) {
  if (!window.crypto?.subtle) {
    throw new Error("Browser NCM decoding requires Web Crypto. Serve the site over HTTPS or localhost.");
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  if (readAscii(bytes, 0, 8) !== "CTENFDAM") {
    throw new Error("Invalid NCM file header.");
  }

  let offset = 10;
  const keyLength = readUint32LE(bytes, offset);
  offset += 4;
  const encryptedKey = xorBytes(bytes.slice(offset, offset + keyLength), 0x64);
  offset += keyLength;

  const decryptedKey = await aesEcbDecryptPkcs7(encryptedKey, ncmCoreKey);
  const audioKey = decryptedKey.slice(17);
  if (!audioKey.length) throw new Error("NCM audio key is empty.");
  const keyBox = buildNcmKeyBox(audioKey);

  const metadataLength = readUint32LE(bytes, offset);
  offset += 4;
  const metadata = await readNcmMetadata(bytes.slice(offset, offset + metadataLength));
  offset += metadataLength;

  offset += 4;
  offset += 5;

  let coverBlob = null;
  let coverMimeType = "";
  if (offset + 4 <= bytes.length) {
    const coverLength = readUint32LE(bytes, offset);
    offset += 4;
    if (coverLength > 0 && offset + coverLength <= bytes.length) {
      const coverBytes = bytes.slice(offset, offset + coverLength);
      coverMimeType = detectImageMime(coverBytes);
      coverBlob = new Blob([coverBytes], { type: coverMimeType });
      offset += coverLength;
    }
  }

  const audioBytes = bytes.slice(offset);
  decryptNcmAudio(audioBytes, keyBox);

  return {
    audioBytes,
    mimeType: detectDecodedAudioMime(audioBytes, metadata?.format),
    metadata,
    coverBlob,
    coverMimeType,
  };
}

async function readNcmMetadata(encryptedBytes) {
  if (!encryptedBytes.length) return null;

  try {
    const encodedText = readUtf8(xorBytes(encryptedBytes, 0x63), 0, encryptedBytes.length);
    const payload = encodedText.startsWith(ncmMetaPrefix)
      ? encodedText.slice(ncmMetaPrefix.length)
      : encodedText.slice(encodedText.indexOf(":") + 1);
    const decrypted = await aesEcbDecryptPkcs7(decodeBase64Bytes(payload), ncmMetaKey);
    const jsonText = readUtf8(decrypted, 6, decrypted.length);
    return JSON.parse(jsonText);
  } catch (error) {
    console.warn("NCM metadata could not be decoded.", error);
    return null;
  }
}

function normalizeNcmMetadata(metadata) {
  if (!metadata) return null;

  const artist = Array.isArray(metadata.artist)
    ? metadata.artist
        .map((item) => (Array.isArray(item) ? item[0] : item?.name || item))
        .filter(Boolean)
        .join(" / ")
    : metadata.artist || metadata.artists || "";

  const album = Array.isArray(metadata.album) ? metadata.album[0] : metadata.album;

  return {
    title: metadata.musicName || metadata.name || "",
    artist,
    album: album || "",
  };
}

function buildNcmKeyBox(key) {
  const box = new Uint8Array(256);
  for (let index = 0; index < box.length; index += 1) {
    box[index] = index;
  }

  let last = 0;
  for (let index = 0; index < box.length; index += 1) {
    last = (last + box[index] + key[index % key.length]) & 0xff;
    const value = box[index];
    box[index] = box[last];
    box[last] = value;
  }

  return box;
}

function decryptNcmAudio(audioBytes, box) {
  for (let index = 0; index < audioBytes.length; index += 1) {
    const j = (index + 1) & 0xff;
    audioBytes[index] ^= box[(box[j] + box[(box[j] + j) & 0xff]) & 0xff];
  }
}

async function aesEcbDecryptPkcs7(encryptedBytes, keyBytes) {
  const cryptoKey = await crypto.subtle.importKey("raw", keyBytes, "AES-CBC", false, ["encrypt", "decrypt"]);
  const decrypted = await aesEcbDecryptBlocks(encryptedBytes, cryptoKey);
  return stripPkcs7Padding(decrypted);
}

async function aesEcbDecryptBlocks(encryptedBytes, cryptoKey) {
  if (!encryptedBytes.length || encryptedBytes.length % 16 !== 0) {
    throw new Error("AES-ECB ciphertext must be a non-empty multiple of 16 bytes.");
  }

  const decrypted = new Uint8Array(encryptedBytes.length);
  for (let offset = 0; offset < encryptedBytes.length; offset += 16) {
    decrypted.set(await aesDecryptBlock(encryptedBytes.slice(offset, offset + 16), cryptoKey), offset);
  }
  return decrypted;
}

async function aesDecryptBlock(cipherBlock, cryptoKey) {
  const iv = new Uint8Array(16);
  const paddingPlain = xorBlock(cipherBlock, 0x10);
  const paddingCipher = await aesEncryptBlock(paddingPlain, cryptoKey);
  const paddedCiphertext = new Uint8Array(32);
  paddedCiphertext.set(cipherBlock, 0);
  paddedCiphertext.set(paddingCipher, 16);
  const decrypted = new Uint8Array(await crypto.subtle.decrypt({ name: "AES-CBC", iv }, cryptoKey, paddedCiphertext));
  return decrypted.slice(0, 16);
}

async function aesEncryptBlock(plainBlock, cryptoKey) {
  const encrypted = new Uint8Array(
    await crypto.subtle.encrypt({ name: "AES-CBC", iv: new Uint8Array(16) }, cryptoKey, plainBlock),
  );
  return encrypted.slice(0, 16);
}

function stripPkcs7Padding(bytes) {
  const padding = bytes[bytes.length - 1];
  if (!padding || padding > 16 || padding > bytes.length) return bytes;
  for (let index = bytes.length - padding; index < bytes.length; index += 1) {
    if (bytes[index] !== padding) return bytes;
  }
  return bytes.slice(0, bytes.length - padding);
}

function xorBytes(bytes, value) {
  const result = new Uint8Array(bytes.length);
  for (let index = 0; index < bytes.length; index += 1) {
    result[index] = bytes[index] ^ value;
  }
  return result;
}

function xorBlock(bytes, value) {
  const result = new Uint8Array(16);
  for (let index = 0; index < result.length; index += 1) {
    result[index] = bytes[index] ^ value;
  }
  return result;
}

function hexToBytes(value) {
  const bytes = new Uint8Array(value.length / 2);
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = parseInt(value.slice(index * 2, index * 2 + 2), 16);
  }
  return bytes;
}

function detectDecodedAudioMime(bytes, format = "") {
  const normalizedFormat = String(format || "").toLowerCase();
  if (normalizedFormat.includes("flac")) return "audio/flac";
  if (normalizedFormat.includes("mp3") || normalizedFormat.includes("mpeg")) return "audio/mpeg";
  if (readAscii(bytes, 0, 4) === "fLaC") return "audio/flac";
  if (readAscii(bytes, 0, 3) === "ID3" || (bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0)) return "audio/mpeg";
  if (readAscii(bytes, 0, 4) === "OggS") return "audio/ogg";
  if (readAscii(bytes, 0, 4) === "RIFF" && readAscii(bytes, 8, 4) === "WAVE") return "audio/wav";
  return "audio/mpeg";
}

function decodeHeaderFilename(value) {
  if (!value) return "";
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return "";
  }
}

function replaceFileExtension(fileName, extension) {
  const normalizedExtension = extension.startsWith(".") ? extension : `.${extension}`;
  return String(fileName || "imported").replace(/\.[^.]+$/, "") + normalizedExtension;
}

function extensionForAudioMime(mimeType) {
  const normalized = String(mimeType || "").toLowerCase().split(";", 1)[0];
  if (normalized === "audio/flac") return ".flac";
  if (normalized === "audio/mp4" || normalized === "audio/aac") return ".m4a";
  if (normalized === "audio/ogg") return ".ogg";
  if (normalized === "audio/wav" || normalized === "audio/wave") return ".wav";
  if (normalized === "audio/webm") return ".webm";
  return ".mp3";
}

function audioMimeForFileName(fileName) {
  const extension = (String(fileName || "").match(/\.([^.]+)$/)?.[1] || "").toLowerCase();
  if (extension === "flac") return "audio/flac";
  if (extension === "m4a" || extension === "mp4") return "audio/mp4";
  if (extension === "aac") return "audio/aac";
  if (extension === "ogg" || extension === "oga" || extension === "opus") return "audio/ogg";
  if (extension === "wav" || extension === "wave") return "audio/wav";
  if (extension === "webm" || extension === "weba") return "audio/webm";
  return "audio/mpeg";
}

function createImportedTrack(file, index, options = {}) {
  const sourceName = options.fileName || file.name || "Imported track";
  const parsed = parseImportedTrackName(sourceName);
  const title = options.title || parsed.title;
  const artist = options.artist || parsed.artist;
  const accent = options.accent || importedTrackAccents[index % importedTrackAccents.length];
  const secondary = options.secondaryAccent || options.secondary || importedTrackAccents[(index + 2) % importedTrackAccents.length];
  const cover = createImportedCover(title, accent, secondary);
  const ncmCoverUrl = options.coverBlob instanceof Blob ? URL.createObjectURL(options.coverBlob) : "";
  const track = {
    title,
    artist,
    album: options.album || importedAlbumLabel,
    cover: options.cover || ncmCoverUrl || cover,
    audioSrc: URL.createObjectURL(file),
    audioBlobPromise: null,
    audioObjectUrl: null,
    themePromise: null,
    theme: null,
    fallbackDuration: 0,
    duration: 0,
    accent,
    secondaryAccent: secondary,
    glow:
      `radial-gradient(circle at 22% 18%, ${hexToRgba(accent, 0.38)}, transparent 34%), ` +
      `radial-gradient(circle at 78% 72%, ${hexToRgba(secondary, 0.26)}, transparent 42%), ` +
      "linear-gradient(125deg, rgba(255,255,255,.08), transparent 58%)",
    imported: true,
    importId: options.id || createImportId(),
    importedAt: options.importedAt || Date.now(),
    fileName: sourceName,
    convertedFromNcm: Boolean(options.convertedFromNcm),
    convertedFileName: options.convertedFileName || "",
    coverObjectUrl: ncmCoverUrl,
    coverBlob: options.coverBlob || null,
    coverMimeType: options.coverMimeType || "",
    audioFile: file,
  };

  return track;
}

async function restoreImportedTracks() {
  if (!supportsImportedMusicStorage()) return;

  try {
    const records = await readStoredImportedTracks();
    records
      .filter((record) => record?.file instanceof Blob)
      .sort((a, b) => (a.importedAt || 0) - (b.importedAt || 0))
      .forEach((record) => {
        const trackIndex = importedTracks.length;
        const track = createImportedTrack(record.file, trackIndex, record);
        importedTracks.push(track);
        applyImportedEmbeddedCover(record.file, track, trackIndex, { imported: true });
        preloadImportedTrackDuration(track, trackIndex);
      });
  } catch (error) {
    console.warn("Imported tracks could not be restored.", error);
  }
}

function supportsImportedMusicStorage() {
  return Boolean(window.indexedDB);
}

function openImportedMusicDb() {
  if (!supportsImportedMusicStorage()) return Promise.resolve(null);
  if (importedMusicDbPromise) return importedMusicDbPromise;

  importedMusicDbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(importedMusicDbName, importedMusicDbVersion);

    request.onupgradeneeded = () => {
      const db = request.result;
      const store = db.objectStoreNames.contains(importedMusicStoreName)
        ? request.transaction.objectStore(importedMusicStoreName)
        : db.createObjectStore(importedMusicStoreName, { keyPath: "id" });

      if (!store.indexNames.contains("importedAt")) {
        store.createIndex("importedAt", "importedAt");
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => {
      importedMusicDbPromise = null;
      reject(request.error);
    };
    request.onblocked = () => {
      console.warn("Imported music database is blocked by another open tab.");
    };
  });

  return importedMusicDbPromise;
}

async function readStoredImportedTracks() {
  const db = await openImportedMusicDb();
  if (!db) return [];

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(importedMusicStoreName, "readonly");
    const request = transaction.objectStore(importedMusicStoreName).getAll();

    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
    transaction.onerror = () => reject(transaction.error);
  });
}

async function saveStoredImportedTrack(track, file) {
  if (!file || !track.imported) return;
  await putStoredImportedTrack(createStoredImportedTrackRecord(track, file));
}

async function deleteStoredImportedTrack(track) {
  if (!track?.importId) return;
  const db = await openImportedMusicDb();
  if (!db) return;

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(importedMusicStoreName, "readwrite");
    transaction.objectStore(importedMusicStoreName).delete(track.importId);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

async function putStoredImportedTrack(record) {
  const db = await openImportedMusicDb();
  if (!db) return;

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(importedMusicStoreName, "readwrite");
    transaction.objectStore(importedMusicStoreName).put(record);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

function createStoredImportedTrackRecord(track, file) {
  return {
    id: track.importId,
    importedAt: track.importedAt || Date.now(),
    updatedAt: Date.now(),
    title: track.title,
    artist: track.artist,
    album: track.album,
    fileName: track.fileName || file.name,
    fileType: file.type || "",
    fileSize: file.size || 0,
    fileLastModified: file.lastModified || 0,
    accent: track.accent,
    secondaryAccent: track.secondaryAccent,
    coverBlob: track.coverBlob || null,
    coverMimeType: track.coverMimeType || "",
    file,
  };
}

function createImportId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `local-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

async function applyImportedEmbeddedCover(file, track, index, options = {}) {
  try {
    const cover = await readEmbeddedAudioCover(file);
    if (!cover) return;

    if (track.coverObjectUrl && track.coverObjectUrl !== cover.url && track.coverObjectUrl.startsWith("blob:")) {
      URL.revokeObjectURL(track.coverObjectUrl);
    }
    track.cover = cover.url;
    track.coverObjectUrl = cover.url;
    track.coverBlob = null;
    track.coverMimeType = cover.mimeType || "";
    track.theme = null;
    track.themePromise = null;
    if (options.imported) {
      refreshImportedTrackCover(index);
    } else {
      refreshTrackCover(index);
    }
  } catch (error) {
    console.warn("Embedded audio cover could not be read.", error);
  }
}

async function readEmbeddedAudioCover(file) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const parsed =
    readId3EmbeddedCover(bytes) ||
    readFlacEmbeddedCover(bytes) ||
    readMp4EmbeddedCover(bytes) ||
    readOggEmbeddedCover(bytes) ||
    readRiffEmbeddedCover(bytes) ||
    readAiffEmbeddedCover(bytes);

  return parsed ? createEmbeddedCoverObjectUrl(parsed) : null;
}

function readId3EmbeddedCover(bytes) {
  if (readAscii(bytes, 0, 3) !== "ID3") return null;

  const version = bytes[3];
  const flags = bytes[5];
  const tagEnd = Math.min(bytes.length, 10 + readSyncSafeInteger(bytes, 6));
  let offset = 10;

  if (flags & 0x40) {
    offset = skipId3ExtendedHeader(bytes, offset, version);
  }

  while (offset < tagEnd) {
    const frame = readId3Frame(bytes, offset, version);
    if (!frame || !frame.size) break;

    if (frame.id === "APIC" || frame.id === "PIC") {
      const parsed = frame.id === "APIC" ? parseApicFrame(frame.data) : parsePicFrame(frame.data);
      if (parsed?.imageBytes?.length) {
        return parsed;
      }
    }

    offset = frame.nextOffset;
  }

  return null;
}

function readFlacEmbeddedCover(bytes) {
  if (readAscii(bytes, 0, 4) !== "fLaC") return null;

  let offset = 4;
  while (offset + 4 <= bytes.length) {
    const isLastBlock = Boolean(bytes[offset] & 0x80);
    const blockType = bytes[offset] & 0x7f;
    const blockLength = readUint24(bytes, offset + 1);
    const blockStart = offset + 4;
    const blockEnd = blockStart + blockLength;
    if (blockEnd > bytes.length) break;

    if (blockType === 6) {
      const cover = parseFlacPictureBlock(bytes, blockStart, blockEnd);
      if (cover) return cover;
    }

    if (blockType === 4) {
      const cover = parseVorbisCommentCover(bytes, blockStart, blockEnd);
      if (cover) return cover;
    }

    offset = blockEnd;
    if (isLastBlock) break;
  }

  return null;
}

const mp4ContainerBoxTypes = new Set(["moov", "udta", "meta", "ilst", "trak", "mdia", "minf", "stbl", "edts"]);

function readMp4EmbeddedCover(bytes) {
  if (!isLikelyMp4File(bytes)) return null;
  return findMp4CoverBox(bytes, 0, bytes.length, 0);
}

function findMp4CoverBox(bytes, start, end, depth) {
  if (depth > 10) return null;

  let offset = start;
  while (offset + 8 <= end) {
    const box = readMp4BoxHeader(bytes, offset, end);
    if (!box) break;

    if (box.type === "covr") {
      const cover = readMp4CoverBox(bytes, box.contentStart, box.end);
      if (cover) return cover;
    }

    const childStart = box.type === "meta" ? box.contentStart + 4 : box.contentStart;
    if (childStart < box.end && mp4ContainerBoxTypes.has(box.type)) {
      const cover = findMp4CoverBox(bytes, childStart, box.end, depth + 1);
      if (cover) return cover;
    }

    offset = box.end;
  }

  return null;
}

function readMp4CoverBox(bytes, start, end) {
  let offset = start;
  while (offset + 8 <= end) {
    const box = readMp4BoxHeader(bytes, offset, end);
    if (!box) break;

    if (box.type === "data" && box.contentStart + 8 <= box.end) {
      const dataType = readUint32(bytes, box.contentStart) % 0x1000000;
      const imageBytes = bytes.slice(box.contentStart + 8, box.end);
      return {
        mimeType: dataType === 14 ? "image/png" : dataType === 13 ? "image/jpeg" : detectImageMime(imageBytes),
        imageBytes,
      };
    }

    offset = box.end;
  }

  return null;
}

function readOggEmbeddedCover(bytes) {
  if (readAscii(bytes, 0, 4) !== "OggS") return null;

  let offset = 0;
  let pageCount = 0;
  let packetChunks = [];
  let packetLength = 0;

  while (offset + 27 <= bytes.length && pageCount < 80) {
    if (readAscii(bytes, offset, 4) !== "OggS") break;

    const segmentCount = bytes[offset + 26];
    const segmentTableStart = offset + 27;
    const dataStart = segmentTableStart + segmentCount;
    if (dataStart > bytes.length) break;

    let pageDataLength = 0;
    for (let segmentIndex = 0; segmentIndex < segmentCount; segmentIndex += 1) {
      pageDataLength += bytes[segmentTableStart + segmentIndex];
    }

    const pageEnd = dataStart + pageDataLength;
    if (pageEnd > bytes.length) break;

    let cursor = dataStart;
    for (let segmentIndex = 0; segmentIndex < segmentCount; segmentIndex += 1) {
      const segmentLength = bytes[segmentTableStart + segmentIndex];
      packetChunks.push(bytes.slice(cursor, cursor + segmentLength));
      packetLength += segmentLength;
      cursor += segmentLength;

      if (segmentLength < 255) {
        const packet = concatByteChunks(packetChunks, packetLength);
        const cover = readOggCommentPacketCover(packet);
        if (cover) return cover;
        packetChunks = [];
        packetLength = 0;
      }
    }

    offset = pageEnd;
    pageCount += 1;
  }

  return null;
}

function readOggCommentPacketCover(packet) {
  if (packet.length > 7 && packet[0] === 3 && readAscii(packet, 1, 6) === "vorbis") {
    return parseVorbisCommentCover(packet, 7, packet.length);
  }

  if (packet.length > 8 && readAscii(packet, 0, 8) === "OpusTags") {
    return parseVorbisCommentCover(packet, 8, packet.length);
  }

  return null;
}

function readRiffEmbeddedCover(bytes) {
  const riffType = readAscii(bytes, 0, 4);
  if ((riffType !== "RIFF" && riffType !== "RF64") || readAscii(bytes, 8, 4) !== "WAVE") return null;

  let offset = 12;
  while (offset + 8 <= bytes.length) {
    const chunkId = readAscii(bytes, offset, 4).trim().toUpperCase();
    const chunkSize = readUint32LE(bytes, offset + 4);
    const chunkStart = offset + 8;
    const chunkEnd = chunkStart + chunkSize;
    if (chunkEnd > bytes.length) break;

    if (chunkId === "ID3") {
      const cover = readId3EmbeddedCover(bytes.slice(chunkStart, chunkEnd));
      if (cover) return cover;
    }

    offset = chunkEnd + (chunkSize % 2);
  }

  return null;
}

function readAiffEmbeddedCover(bytes) {
  if (readAscii(bytes, 0, 4) !== "FORM" || !/^AIF[FC]$/.test(readAscii(bytes, 8, 4))) return null;

  let offset = 12;
  while (offset + 8 <= bytes.length) {
    const chunkId = readAscii(bytes, offset, 4).trim().toUpperCase();
    const chunkSize = readUint32(bytes, offset + 4);
    const chunkStart = offset + 8;
    const chunkEnd = chunkStart + chunkSize;
    if (chunkEnd > bytes.length) break;

    if (chunkId === "ID3") {
      const cover = readId3EmbeddedCover(bytes.slice(chunkStart, chunkEnd));
      if (cover) return cover;
    }

    offset = chunkEnd + (chunkSize % 2);
  }

  return null;
}

function parseFlacPictureBlock(bytes, start = 0, end = bytes.length) {
  let cursor = start;
  if (cursor + 8 > end) return null;

  cursor += 4;
  const mimeLength = readUint32(bytes, cursor);
  cursor += 4;
  if (cursor + mimeLength > end) return null;

  const rawMimeType = readLatin1(bytes, cursor, cursor + mimeLength);
  if (rawMimeType === "-->") return null;
  const mimeType = normalizeImageMime(rawMimeType);
  cursor += mimeLength;

  if (cursor + 4 > end) return null;
  const descriptionLength = readUint32(bytes, cursor);
  cursor += 4 + descriptionLength;
  if (cursor + 20 > end) return null;

  cursor += 16;
  const imageLength = readUint32(bytes, cursor);
  cursor += 4;
  if (cursor + imageLength > end) return null;

  return {
    mimeType,
    imageBytes: bytes.slice(cursor, cursor + imageLength),
  };
}

function parseVorbisCommentCover(bytes, start, end) {
  let cursor = start;
  if (cursor + 4 > end) return null;

  const vendorLength = readUint32LE(bytes, cursor);
  cursor += 4 + vendorLength;
  if (cursor + 4 > end) return null;

  const commentCount = Math.min(readUint32LE(bytes, cursor), 512);
  cursor += 4;
  let pictureBlock = "";
  let coverArt = "";
  let coverArtMime = "";

  for (let index = 0; index < commentCount && cursor + 4 <= end; index += 1) {
    const commentLength = readUint32LE(bytes, cursor);
    cursor += 4;
    if (cursor + commentLength > end) break;

    const comment = readUtf8(bytes, cursor, cursor + commentLength);
    cursor += commentLength;
    const separatorIndex = comment.indexOf("=");
    if (separatorIndex < 0) continue;

    const key = comment.slice(0, separatorIndex).trim().toUpperCase();
    const value = comment.slice(separatorIndex + 1).trim();
    if (key === "METADATA_BLOCK_PICTURE" && !pictureBlock) pictureBlock = value;
    if (key === "COVERART" && !coverArt) coverArt = value;
    if (key === "COVERARTMIME" && !coverArtMime) coverArtMime = value;
  }

  if (pictureBlock) {
    const pictureBytes = decodeBase64Bytes(pictureBlock);
    const cover = pictureBytes ? parseFlacPictureBlock(pictureBytes) : null;
    if (cover) return cover;
  }

  if (coverArt) {
    const imageBytes = decodeBase64Bytes(coverArt);
    if (imageBytes?.length) {
      return {
        mimeType: normalizeImageMime(coverArtMime || detectImageMime(imageBytes)),
        imageBytes,
      };
    }
  }

  return null;
}

function createEmbeddedCoverObjectUrl(cover) {
  if (!cover?.imageBytes?.length) return null;
  const mimeType = normalizeImageMime(cover.mimeType || detectImageMime(cover.imageBytes));
  return {
    url: URL.createObjectURL(new Blob([cover.imageBytes], { type: mimeType })),
    mimeType,
  };
}

function skipId3ExtendedHeader(bytes, offset, version) {
  if (offset + 4 > bytes.length) return offset;
  if (version === 4) {
    return offset + readSyncSafeInteger(bytes, offset);
  }
  if (version === 3) {
    return offset + 4 + readUint32(bytes, offset);
  }
  return offset;
}

function readId3Frame(bytes, offset, version) {
  if (version === 2) {
    if (offset + 6 > bytes.length) return null;
    const id = readAscii(bytes, offset, 3);
    if (!/^[A-Z0-9]{3}$/.test(id)) return null;
    const size = readUint24(bytes, offset + 3);
    return {
      id,
      size,
      data: bytes.slice(offset + 6, offset + 6 + size),
      nextOffset: offset + 6 + size,
    };
  }

  if (offset + 10 > bytes.length) return null;
  const id = readAscii(bytes, offset, 4);
  if (!/^[A-Z0-9]{4}$/.test(id)) return null;
  const size = version === 4 ? readSyncSafeInteger(bytes, offset + 4) : readUint32(bytes, offset + 4);
  return {
    id,
    size,
    data: bytes.slice(offset + 10, offset + 10 + size),
    nextOffset: offset + 10 + size,
  };
}

function parseApicFrame(frame) {
  if (frame.length < 6) return null;
  const encoding = frame[0];
  const mimeEnd = findFrameTerminator(frame, 1, 1);
  if (mimeEnd < 0) return null;

  const mimeType = normalizeImageMime(readLatin1(frame, 1, mimeEnd));
  let cursor = mimeEnd + 1;
  cursor += 1;

  const terminatorSize = encoding === 1 || encoding === 2 ? 2 : 1;
  const descriptionEnd = findFrameTerminator(frame, cursor, terminatorSize);
  if (descriptionEnd < 0) return null;
  cursor = descriptionEnd + terminatorSize;

  return {
    mimeType,
    imageBytes: frame.slice(cursor),
  };
}

function parsePicFrame(frame) {
  if (frame.length < 6) return null;
  const encoding = frame[0];
  const format = readAscii(frame, 1, 3).toUpperCase();
  let cursor = 5;
  const terminatorSize = encoding === 1 || encoding === 2 ? 2 : 1;
  const descriptionEnd = findFrameTerminator(frame, cursor, terminatorSize);
  if (descriptionEnd < 0) return null;
  cursor = descriptionEnd + terminatorSize;

  return {
    mimeType: normalizeImageMime(format === "PNG" ? "image/png" : "image/jpeg"),
    imageBytes: frame.slice(cursor),
  };
}

function refreshTrackCover(index) {
  const track = tracks[index];
  const cardImage = document.querySelector(`[data-track="${index}"] .track-disc img`);
  if (cardImage) cardImage.src = track.cover;

  if (index !== activeTrackIndex) return;
  playerArt.src = track.cover;
  applyTrackTheme(track);
  extractCoverTheme(track).then((theme) => {
    if (activeTrack !== track || !theme) return;
    applyTrackTheme(track);
  });
}

function refreshImportedTrackCover(index) {
  const track = importedTracks[index];
  const cardImage = document.querySelector(`[data-import-track="${index}"] img`);
  if (cardImage) cardImage.src = track.cover;

  if (activeTrackList !== importedTracks || index !== activeTrackIndex) return;
  playerArt.src = track.cover;
  applyTrackTheme(track);
  extractCoverTheme(track).then((theme) => {
    if (activeTrack !== track || !theme) return;
    applyTrackTheme(track);
  });
}

function findFrameTerminator(bytes, start, size) {
  for (let index = start; index <= bytes.length - size; index += 1) {
    if (size === 1 && bytes[index] === 0) return index;
    if (size === 2 && bytes[index] === 0 && bytes[index + 1] === 0) return index;
  }
  return -1;
}

function normalizeImageMime(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (normalized === "image/jpg" || normalized === "jpg" || normalized === "jpeg") return "image/jpeg";
  if (normalized === "png") return "image/png";
  if (normalized === "webp") return "image/webp";
  if (normalized === "gif") return "image/gif";
  if (normalized.startsWith("image/")) return normalized;
  return "image/jpeg";
}

function detectImageMime(bytes) {
  if (!bytes?.length) return "image/jpeg";
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "image/jpeg";
  if (
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return "image/png";
  }
  if (readAscii(bytes, 0, 4) === "RIFF" && readAscii(bytes, 8, 4) === "WEBP") return "image/webp";
  if (readAscii(bytes, 0, 3) === "GIF") return "image/gif";
  return "image/jpeg";
}

function parseImportedTrackName(fileName) {
  const baseName = fileName.replace(/\.[^.]+$/, "").trim() || "Imported track";
  const separatorMatch = baseName.match(/\s+-\s+/);
  if (!separatorMatch) {
    return { title: baseName, artist: importedAlbumLabel };
  }

  const [artist, ...titleParts] = baseName.split(/\s+-\s+/);
  return {
    title: titleParts.join(" - ").trim() || baseName,
    artist: artist.trim() || importedAlbumLabel,
  };
}

function createImportedCover(title, accent, secondary) {
  const safeTitle = escapeSvgText(title).slice(0, 26);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <defs>
        <radialGradient id="glow" cx="34%" cy="24%" r="76%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.95"/>
          <stop offset="52%" stop-color="${secondary}" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#05070c" stop-opacity="1"/>
        </radialGradient>
      </defs>
      <rect width="512" height="512" fill="url(#glow)"/>
      <circle cx="256" cy="256" r="154" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="2"/>
      <circle cx="256" cy="256" r="45" fill="rgba(255,255,255,0.18)"/>
      <path d="M318 141v188c0 38-33 62-69 51-25-8-42-31-35-52 7-22 35-33 63-23V177l104-24v45l-63 14z" fill="rgba(255,255,255,0.74)"/>
      <text x="256" y="438" text-anchor="middle" fill="rgba(255,255,255,0.78)" font-family="Arial, sans-serif" font-size="28" font-weight="700">${safeTitle}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function escapeSvgText(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
    };
    return entities[character];
  });
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const red = parseInt(normalized.slice(0, 2), 16);
  const green = parseInt(normalized.slice(2, 4), 16);
  const blue = parseInt(normalized.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function readAscii(bytes, start, length) {
  return String.fromCharCode(...bytes.slice(start, start + length));
}

function readLatin1(bytes, start, end) {
  return String.fromCharCode(...bytes.slice(start, end));
}

function readUtf8(bytes, start, end) {
  return new TextDecoder("utf-8").decode(bytes.slice(start, end));
}

function readUint24(bytes, start) {
  return (bytes[start] << 16) | (bytes[start + 1] << 8) | bytes[start + 2];
}

function readUint32(bytes, start) {
  return bytes[start] * 0x1000000 + bytes[start + 1] * 0x10000 + bytes[start + 2] * 0x100 + bytes[start + 3];
}

function readUint32LE(bytes, start) {
  return bytes[start] + bytes[start + 1] * 0x100 + bytes[start + 2] * 0x10000 + bytes[start + 3] * 0x1000000;
}

function readUint64(bytes, start) {
  return readUint32(bytes, start) * 0x100000000 + readUint32(bytes, start + 4);
}

function readSyncSafeInteger(bytes, start) {
  return (bytes[start] << 21) | (bytes[start + 1] << 14) | (bytes[start + 2] << 7) | bytes[start + 3];
}

function isLikelyMp4File(bytes) {
  return bytes.length >= 12 && readAscii(bytes, 4, 4) === "ftyp";
}

function readMp4BoxHeader(bytes, offset, limit) {
  if (offset + 8 > limit) return null;

  let size = readUint32(bytes, offset);
  const type = readAscii(bytes, offset + 4, 4);
  let headerSize = 8;

  if (size === 1) {
    if (offset + 16 > limit) return null;
    size = readUint64(bytes, offset + 8);
    headerSize = 16;
  } else if (size === 0) {
    size = limit - offset;
  }

  if (!Number.isFinite(size) || size < headerSize) return null;

  const end = offset + size;
  if (end > limit) return null;

  return {
    type,
    contentStart: offset + headerSize,
    end,
  };
}

function concatByteChunks(chunks, totalLength) {
  const result = new Uint8Array(totalLength);
  let offset = 0;
  chunks.forEach((chunk) => {
    result.set(chunk, offset);
    offset += chunk.length;
  });
  return result;
}

function decodeBase64Bytes(value) {
  try {
    const binary = atob(String(value || "").replace(/\s+/g, ""));
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
  } catch (error) {
    return null;
  }
}

async function loadTrack(index, options = {}) {
  const sourceTracks = options.sourceTracks || tracks;
  if (!sourceTracks.length) return;
  const nextIndex = wrapIndex(index, sourceTracks);
  const shouldAutoplay = options.autoplay ?? false;
  const token = ++loadToken;
  const shouldAnimateSwitch = Boolean(activeTrack);

  if (shouldAnimateSwitch) startTrackSwitchAnimation();
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
  resetProgressSeekState();
  activeTrackIndex = nextIndex;
  activeTrackList = sourceTracks;
  activeTrack = sourceTracks[nextIndex];

  applyTrackTheme(activeTrack);
  extractCoverTheme(activeTrack).then((theme) => {
    if (token !== loadToken || activeTrack !== sourceTracks[nextIndex] || !theme) return;
    applyTrackTheme(activeTrack);
  });
  playerArt.src = activeTrack.cover;
  playerArt.alt = `${activeTrack.title} cover`;
  playerTitle.textContent = activeTrack.title;
  if (visualizerTrackName) visualizerTrackName.textContent = activeTrack.title;
  if (visualizerTrackArtist) visualizerTrackArtist.textContent = activeTrack.artist;
  playerArtist.textContent = activeTrack.artist;
  playerAlbum.textContent = activeTrack.album;
  previewIndex.textContent = `${String(activeTrackIndex + 1).padStart(2, "0")} / ${String(sourceTracks.length).padStart(2, "0")}`;
  previewTitle.textContent = activeTrack.title;
  previewArtist.textContent = activeTrack.artist;
  updateSearchAwarePreviewIndex(sourceTracks);
  scheduleFitSongTitles();

  if (sourceTracks === tracks) {
    updateWheel();
    refreshImportedTrackState();
  } else {
    syncImportedPanelCenter(nextIndex);
    renderImportedTrackPanels();
  }
  syncPlaybackUi(true);
  updatePlayState();
  if (shouldAnimateSwitch) finishTrackSwitchAnimation();

  audio.src = activeTrack.audioSrc;
  audio.currentTime = 0;
  audio.load();
  prepareBlobAudioForActiveTrack(activeTrack, token);

  if (shouldAutoplay) {
    await playPlayback();
  }
}

function startTrackSwitchAnimation() {
  clearTimeout(trackSwitchTimer);
  glassPlayer.classList.remove("is-track-switching");
  void glassPlayer.offsetWidth;
  glassPlayer.classList.add("is-track-switching");
}

function finishTrackSwitchAnimation() {
  clearTimeout(trackSwitchTimer);
  requestAnimationFrame(() => {
    glassPlayer.classList.remove("is-track-switching");
  });
  trackSwitchTimer = setTimeout(() => {
    glassPlayer.classList.remove("is-track-switching");
  }, 720);
}

function scheduleFitSongTitles() {
  if (fitSongTitleFrame) cancelAnimationFrame(fitSongTitleFrame);
  fitSongTitleFrame = requestAnimationFrame(() => {
    fitSongTitleFrame = 0;
    fitSingleLineTitle(previewTitle);
    fitSingleLineTitle(playerTitle);
  });
}

function fitSingleLineTitle(element) {
  if (!element) return;

  element.style.removeProperty("font-size");
  const computed = getComputedStyle(element);
  const maxSize = parseFloat(computed.fontSize);
  const minSize = parseFloat(computed.getPropertyValue("--fit-title-min-size")) || maxSize * 0.45;
  const availableWidth = element.clientWidth;
  if (!availableWidth || !maxSize) return;

  if (element.scrollWidth <= availableWidth + 1) return;

  let low = minSize;
  let high = maxSize;
  for (let step = 0; step < 9; step += 1) {
    const middle = (low + high) / 2;
    element.style.fontSize = `${middle}px`;
    if (element.scrollWidth <= availableWidth + 1) {
      low = middle;
    } else {
      high = middle;
    }
  }

  element.style.fontSize = `${low}px`;
}

function applyTrackTheme(track) {
  const theme = track.theme || getFallbackTheme(track);
  glassPlayer.style.setProperty("--active-accent", theme.accent);
  glassPlayer.style.setProperty("--accent-2", theme.secondary);
  glassPlayer.style.setProperty("--accent-3", theme.tertiary);
  glassPlayer.style.setProperty("--active-glow", theme.glow);
}

function getFallbackTheme(track) {
  return {
    accent: track.accent,
    secondary: "#ff9bbd",
    tertiary: "#c8d8e5",
    glow: track.glow,
  };
}

async function extractCoverTheme(track) {
  if (track.theme) return track.theme;
  if (track.themePromise) return track.themePromise;

  track.themePromise = loadImage(track.cover)
    .then((image) => {
      const palette = readImagePalette(image);
      if (!palette.length) return getFallbackTheme(track);

      const primary = palette[0];
      const secondary = findDistinctColor(palette, primary, 20) || shiftHue(primary, 34);
      const tertiary = findDistinctColor(palette, primary, 70) || shiftHue(primary, -42);
      const theme = {
        accent: rgbToHex(primary),
        secondary: rgbToHex(secondary),
        tertiary: rgbToHex(tertiary),
        glow:
          `radial-gradient(circle at 18% 12%, ${rgbToRgba(primary, 0.38)}, transparent 34%), ` +
          `radial-gradient(circle at 82% 72%, ${rgbToRgba(secondary, 0.3)}, transparent 42%), ` +
          `linear-gradient(125deg, ${rgbToRgba(tertiary, 0.18)}, transparent 58%)`,
      };
      track.theme = theme;
      return theme;
    })
    .catch((error) => {
      console.warn("Cover theme could not be extracted.", error);
      return getFallbackTheme(track);
    });

  return track.themePromise;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function readImagePalette(image) {
  const size = 54;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return [];

  canvas.width = size;
  canvas.height = size;
  context.drawImage(image, 0, 0, size, size);

  const pixels = context.getImageData(0, 0, size, size).data;
  const buckets = new Map();

  for (let index = 0; index < pixels.length; index += 4) {
    const alpha = pixels[index + 3];
    if (alpha < 150) continue;

    const red = pixels[index];
    const green = pixels[index + 1];
    const blue = pixels[index + 2];
    const hsl = rgbToHsl(red, green, blue);
    if (hsl.l < 0.06 || hsl.l > 0.94 || hsl.s < 0.08) continue;

    const key = `${Math.round(red / 18)}-${Math.round(green / 18)}-${Math.round(blue / 18)}`;
    const bucket = buckets.get(key) || { red: 0, green: 0, blue: 0, count: 0, score: 0 };
    bucket.red += red;
    bucket.green += green;
    bucket.blue += blue;
    bucket.count += 1;
    bucket.score += (0.7 + hsl.s * 1.8) * (1 - Math.abs(hsl.l - 0.56) * 0.65);
    buckets.set(key, bucket);
  }

  return [...buckets.values()]
    .map((bucket) => normalizeThemeColor({
      red: bucket.red / bucket.count,
      green: bucket.green / bucket.count,
      blue: bucket.blue / bucket.count,
      score: bucket.count * bucket.score,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

function normalizeThemeColor(color) {
  const hsl = rgbToHsl(color.red, color.green, color.blue);
  hsl.s = clamp(hsl.s, 0.34, 0.86);
  hsl.l = clamp(hsl.l, 0.5, 0.72);
  return {
    ...hslToRgb(hsl.h, hsl.s, hsl.l),
    h: hsl.h,
    s: hsl.s,
    l: hsl.l,
    score: color.score,
  };
}

function findDistinctColor(colors, base, minHueGap) {
  return colors.find((color) => hueDistance(color.h, base.h) >= minHueGap);
}

function shiftHue(color, degrees) {
  const shifted = hslToRgb((color.h + degrees + 360) % 360, color.s, color.l);
  return { ...shifted, h: (color.h + degrees + 360) % 360, s: color.s, l: color.l, score: color.score };
}

function hueDistance(first, second) {
  const distance = Math.abs(first - second) % 360;
  return Math.min(distance, 360 - distance);
}

function rgbToHex(color) {
  const hex = [color.red, color.green, color.blue]
    .map((value) => Math.round(value).toString(16).padStart(2, "0"))
    .join("");
  return `#${hex}`;
}

function rgbToRgba(color, alpha) {
  return `rgba(${Math.round(color.red)}, ${Math.round(color.green)}, ${Math.round(color.blue)}, ${alpha})`;
}

function rgbToHsl(red, green, blue) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const delta = max - min;
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    if (max === r) h = (g - b) / delta + (g < b ? 6 : 0);
    if (max === g) h = (b - r) / delta + 2;
    if (max === b) h = (r - g) / delta + 4;
    h *= 60;
  }

  return { h, s, l };
}

function hslToRgb(hue, saturation, lightness) {
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));
  const match = lightness - chroma / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (hue < 60) [r, g, b] = [chroma, x, 0];
  else if (hue < 120) [r, g, b] = [x, chroma, 0];
  else if (hue < 180) [r, g, b] = [0, chroma, x];
  else if (hue < 240) [r, g, b] = [0, x, chroma];
  else if (hue < 300) [r, g, b] = [x, 0, chroma];
  else [r, g, b] = [chroma, 0, x];

  return {
    red: (r + match) * 255,
    green: (g + match) * 255,
    blue: (b + match) * 255,
  };
}

async function getPlayableAudioSrc(track) {
  if (!track.blobAudio) return track.audioSrc;
  if (track.audioObjectUrl) return track.audioObjectUrl;

  if (!track.audioBlobPromise) {
    track.audioBlobPromise = fetch(track.audioSrc)
      .then((response) => {
        if (!response.ok) throw new Error(`Audio request failed: ${response.status}`);
        return response.blob();
      })
      .then((blob) => {
        track.audioObjectUrl = URL.createObjectURL(blob);
        return track.audioObjectUrl;
      })
      .catch((error) => {
        console.warn("Blob audio preload failed; falling back to direct media URL.", error);
        track.audioBlobPromise = null;
        return track.audioSrc;
      });
  }

  return track.audioBlobPromise;
}

async function prepareBlobAudioForActiveTrack(track, token) {
  if (!track.blobAudio) return;

  const objectUrl = await getPlayableAudioSrc(track);
  if (token !== loadToken || activeTrack !== track || objectUrl === audio.src) return;

  swapActiveAudioToBlob(track, objectUrl);
}

async function swapActiveAudioToBlob(track, objectUrl) {
  if (activeTrack !== track || !objectUrl || audio.src === objectUrl) return;

  const resumeTime = deferredBlobSeekTime ?? pendingSeekTime ?? displaySeekTime ?? audio.currentTime ?? 0;
  const shouldResume = isPlaying && !audio.paused;

  audio.src = objectUrl;
  audio.load();
  pendingSeekTime = clamp(resumeTime, 0, Math.max(0, getMediaDuration(track.duration, track) - 0.05));
  displaySeekTime = pendingSeekTime;
  deferredBlobSeekTime = null;
  applyPendingSeek();

  if (shouldResume) {
    await playPlayback();
  }
}

async function enterTrackDetail(index, sourceTracks = tracks) {
  setDetailMode(true);
  await loadTrack(index, { autoplay: true, sourceTracks });
}

async function toggleAudioVisualizer() {
  if (isAudioVisualizerExiting) return;

  if (isAudioVisualizerActive) {
    exitAudioVisualizer();
    return;
  }

  await enterAudioVisualizer();
}

async function enterAudioVisualizer() {
  if (!glassPlayer.classList.contains("is-detail")) return;
  if (isAudioVisualizerExiting) return;

  glassPlayer.classList.remove("is-visualizer-exiting");
  recreateAudioVisualizerCanvas();
  resetAudioVisualizerCanvasState();
  void audioVisualizerCanvas?.offsetWidth;
  const transitionSnapshot = captureAudioVisualizerTransition();
  isAudioVisualizerActive = true;
  document.body.classList.add("is-audio-visualizing");
  glassPlayer.classList.add("is-visualizing");
  playAudioVisualizerTransition(transitionSnapshot);
  updateAudioVisualizerButton();
  startAudioVisualizer();

  try {
    await ensureAudioVisualizerGraph();
    await audioContext?.resume?.();
  } catch (error) {
    console.warn("Audio visualizer will use idle motion.", error);
  }
}

function exitAudioVisualizer({ exitFullscreen = true, animate = true } = {}) {
  const finishExit = () => {
    isAudioVisualizerExiting = false;
    isAudioVisualizerActive = false;
    audioVisualizerExitTimer = 0;
    document.body.classList.remove("is-audio-visualizing");
    glassPlayer.classList.remove("is-visualizing");
    glassPlayer.classList.remove("is-visualizer-entering");
    glassPlayer.classList.remove("is-visualizer-exiting");
    glassPlayer.classList.remove("has-audio-visualizer-canvas");
    if (visualizerToggle) visualizerToggle.disabled = false;
    if (visualizerModeToggle) visualizerModeToggle.disabled = false;
    updateAudioVisualizerButton();
    stopAudioVisualizer();
    resetAudioVisualizerCanvasState();

    if (exitFullscreen && document.fullscreenElement === glassPlayer) {
      document.exitFullscreen().catch((error) => {
        console.warn("Fullscreen visualizer could not close.", error);
      });
    }
  };

  if (isAudioVisualizerExiting) {
    if (animate) return;
    if (audioVisualizerExitTimer) {
      window.clearTimeout(audioVisualizerExitTimer);
      audioVisualizerExitTimer = 0;
    }
    finishExit();
    return;
  }

  if (audioVisualizerTransitionTimer) {
    window.clearTimeout(audioVisualizerTransitionTimer);
    audioVisualizerTransitionTimer = 0;
  }

  if (!animate || !glassPlayer.classList.contains("is-visualizing")) {
    finishExit();
    return;
  }

  isAudioVisualizerExiting = true;
  glassPlayer.classList.remove("is-visualizer-entering");
  glassPlayer.classList.add("is-visualizer-exiting");
  if (visualizerToggle) visualizerToggle.disabled = true;
  if (visualizerModeToggle) visualizerModeToggle.disabled = true;
  audioVisualizerExitTimer = window.setTimeout(finishExit, 920);
}

function captureAudioVisualizerTransition() {
  const artWrap = playerArt?.closest(".player-art-wrap");
  const artRect = artWrap?.getBoundingClientRect();
  if (!artRect) return null;

  return {
    artCenterX: artRect.left + artRect.width / 2,
    artCenterY: artRect.top + artRect.height / 2,
    artWidth: artRect.width,
  };
}

function playAudioVisualizerTransition(snapshot) {
  const artWrap = playerArt?.closest(".player-art-wrap");
  if (!snapshot || !artWrap) return;

  const targetRect = artWrap.getBoundingClientRect();
  if (!targetRect.width) return;

  const targetCenterX = targetRect.left + targetRect.width / 2;
  const targetCenterY = targetRect.top + targetRect.height / 2;
  glassPlayer.style.setProperty("--visualizer-art-start-x", `${snapshot.artCenterX - targetCenterX}px`);
  glassPlayer.style.setProperty("--visualizer-art-start-y", `${snapshot.artCenterY - targetCenterY}px`);
  glassPlayer.style.setProperty("--visualizer-art-start-scale", `${snapshot.artWidth / targetRect.width}`);

  if (audioVisualizerTransitionTimer) {
    window.clearTimeout(audioVisualizerTransitionTimer);
    audioVisualizerTransitionTimer = 0;
  }

  glassPlayer.classList.remove("is-visualizer-entering");
  void glassPlayer.offsetWidth;
  glassPlayer.classList.add("is-visualizer-entering");
  audioVisualizerTransitionTimer = window.setTimeout(() => {
    glassPlayer.classList.remove("is-visualizer-entering");
    audioVisualizerTransitionTimer = 0;
  }, 1120);
}

function updateAudioVisualizerButton() {
  if (!visualizerToggle) return;

  visualizerToggle.setAttribute("aria-pressed", isAudioVisualizerActive ? "true" : "false");
  visualizerToggle.setAttribute("aria-label", isAudioVisualizerActive ? "Exit audio visualizer" : "Enter audio visualizer");
  visualizerToggle.innerHTML = `
    <span>${isAudioVisualizerActive ? "退出音频可视化" : "进入音频可视化"}</span>
    <i data-lucide="${isAudioVisualizerActive ? "arrow-left" : "activity"}"></i>
  `;
  refreshIcons();
}

function cycleAudioVisualizerMode() {
  audioVisualizerModeIndex = (audioVisualizerModeIndex + 1) % audioVisualizerModes.length;
  audioVisualizerLevels = [];
  updateAudioVisualizerModeButton();
}

function updateAudioVisualizerModeButton() {
  if (!visualizerModeToggle) return;

  const modeName = audioVisualizerModes[audioVisualizerModeIndex] || audioVisualizerModes[0];
  visualizerModeToggle.setAttribute("aria-label", `更改可视化动画，当前：${modeName}`);
  visualizerModeToggle.title = `更改可视化动画：${modeName}`;
  visualizerModeToggle.innerHTML = `
    <span>${modeName}</span>
    <i data-lucide="shuffle"></i>
  `;
  refreshIcons();
}

async function ensureAudioVisualizerGraph() {
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) return false;

  if (!audioContext) {
    audioContext = new AudioContextConstructor();
  }

  if (!audioAnalyserNode) {
    audioAnalyserNode = audioContext.createAnalyser();
    audioAnalyserNode.fftSize = 512;
    audioAnalyserNode.smoothingTimeConstant = 0.68;
    audioVisualizerData = new Uint8Array(audioAnalyserNode.frequencyBinCount);
  }

  if (!audioSourceNode) {
    audioSourceNode = audioContext.createMediaElementSource(audio);
    audioSourceNode.connect(audioAnalyserNode);
    audioAnalyserNode.connect(audioContext.destination);
  }

  return true;
}

function startAudioVisualizer() {
  if (!audioVisualizerCanvas) return;

  if (audioVisualizerFrame) {
    cancelAnimationFrame(audioVisualizerFrame);
    audioVisualizerFrame = 0;
  }

  resetAudioVisualizerCanvasState();
  audioVisualizerLevels = [];
  glassPlayer.classList.remove("has-audio-visualizer-canvas");
  resizeAudioVisualizerCanvas();
  audioVisualizerFrame = requestAnimationFrame(drawAudioVisualizer);
}

function stopAudioVisualizer() {
  if (audioVisualizerFrame) {
    cancelAnimationFrame(audioVisualizerFrame);
    audioVisualizerFrame = 0;
  }

  audioVisualizerLevels = [];
  const context = audioVisualizerCanvas?.getContext("2d");
  if (context) {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.globalAlpha = 1;
    context.globalCompositeOperation = "source-over";
    context.shadowBlur = 0;
    context.setLineDash([]);
    context.lineDashOffset = 0;
    context.clearRect(0, 0, audioVisualizerCanvas.width, audioVisualizerCanvas.height);
  }
}

function resetAudioVisualizerCanvasState() {
  audioVisualizerCanvas?.style.removeProperty("animation");
  audioVisualizerCanvas?.style.removeProperty("filter");
  audioVisualizerCanvas?.style.removeProperty("transform");
}

function recreateAudioVisualizerCanvas() {
  if (!audioVisualizerCanvas?.parentNode) {
    audioVisualizerCanvas = document.querySelector("#audioVisualizerCanvas");
    return;
  }

  const replacement = audioVisualizerCanvas.cloneNode(false);
  replacement.width = 1;
  replacement.height = 1;
  replacement.style.width = "";
  replacement.style.height = "";
  replacement.style.animation = "";
  replacement.style.filter = "";
  replacement.style.transform = "";
  audioVisualizerCanvas.replaceWith(replacement);
  audioVisualizerCanvas = replacement;
}

function resizeAudioVisualizerCanvas() {
  if (!audioVisualizerCanvas) return 1;

  const rect = audioVisualizerCanvas.getBoundingClientRect();
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.round(rect.width * pixelRatio));
  const height = Math.max(1, Math.round(rect.height * pixelRatio));

  if (audioVisualizerCanvas.width !== width || audioVisualizerCanvas.height !== height) {
    audioVisualizerCanvas.width = width;
    audioVisualizerCanvas.height = height;
  }

  audioVisualizerCanvas.style.width = `${rect.width}px`;
  audioVisualizerCanvas.style.height = `${rect.height}px`;
  return pixelRatio;
}

function drawAudioVisualizer(now) {
  if (!isAudioVisualizerActive || !audioVisualizerCanvas) {
    audioVisualizerFrame = 0;
    return;
  }

  const context = audioVisualizerCanvas.getContext("2d");
  if (!context) {
    audioVisualizerFrame = 0;
    return;
  }

  const pixelRatio = resizeAudioVisualizerCanvas();
  const width = audioVisualizerCanvas.width / pixelRatio;
  const height = audioVisualizerCanvas.height / pixelRatio;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.globalAlpha = 1;
  context.globalCompositeOperation = "source-over";
  context.shadowBlur = 0;
  context.setLineDash([]);
  context.lineDashOffset = 0;
  context.clearRect(0, 0, width, height);

  if (audioAnalyserNode && audioVisualizerData) {
    audioAnalyserNode.getByteFrequencyData(audioVisualizerData);
  }

  const canvasRect = audioVisualizerCanvas.getBoundingClientRect();
  const artWrap = playerArt?.closest(".player-art-wrap");
  const artRect = artWrap?.getBoundingClientRect();
  const centerX = artRect ? artRect.left - canvasRect.left + artRect.width / 2 : width / 2;
  const centerY = artRect ? artRect.top - canvasRect.top + artRect.height / 2 : height / 2;
  const visibleWidth = window.innerWidth || width;
  const visibleHeight = window.innerHeight || height;
  const coverRadius = artRect ? Math.max(artRect.width, artRect.height) / 2 : Math.min(width, height) * 0.18;
  const minDimension = Math.min(visibleWidth, visibleHeight);
  const style = getComputedStyle(glassPlayer);
  const accent = parseHexColor(style.getPropertyValue("--active-accent") || activeTrack?.accent || "#bcd0ff");
  const secondary = parseHexColor(style.getPropertyValue("--accent-2") || "#ff9bbd");
  const tertiary = parseHexColor(style.getPropertyValue("--accent-3") || "#c8d8e5");
  const time = now * 0.001;
  const signalAverage = audioVisualizerData?.length
    ? audioVisualizerData.reduce((total, value) => total + value, 0) / (audioVisualizerData.length * 255)
    : 0;
  const hasSignal = signalAverage > 0.025;
  const tau = Math.PI * 2;
  const ringGap = clamp(coverRadius * 0.12, 16, 34);
  const orbitRadius = coverRadius + clamp(minDimension * 0.04, 26, 54);
  const maxReach = Math.min(visibleWidth, visibleHeight) * 0.47;
  const spectrumCount = Math.round(clamp(minDimension / 5.2, 84, 136));

  if (audioVisualizerLevels.length !== spectrumCount) {
    audioVisualizerLevels = Array.from(
      { length: spectrumCount },
      (_, index) => 0.052 + Math.sin(index * 1.37) * 0.012 + Math.sin(index * 0.41) * 0.008,
    );
  }

  const colorFor = (index, alpha = 1) => {
    const color = index % 3 === 0 ? accent : index % 3 === 1 ? secondary : tertiary;
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
  };

  const frequencyLevel = (index) => {
    const idle = 0.31
      + Math.sin(index * 1.73 + time * 1.18) * 0.07
      + Math.sin(index * 0.47 - time * 0.82) * 0.045
      + Math.sin(index * 0.13 + time * 1.7) * 0.035;
    if (!audioVisualizerData || !hasSignal) return clamp(idle * (isPlaying ? 0.68 : 0.56), 0.074, 0.28);

    const percent = index / Math.max(1, spectrumCount - 1);
    const dataIndex = Math.min(
      audioVisualizerData.length - 1,
      Math.floor(Math.pow(percent, 1.72) * audioVisualizerData.length),
    );
    const raw = audioVisualizerData[dataIndex] / 255;
    const excited = Math.pow(raw, 0.72) * 1.24;
    return clamp(Math.max(excited, idle * 0.08), 0.018, 1);
  };

  context.save();
  context.globalCompositeOperation = "screen";

  context.lineCap = "round";
  context.lineJoin = "round";
  for (let index = 0; index < spectrumCount; index += 1) {
    const target = frequencyLevel(index);
    const previous = audioVisualizerLevels[index] || 0;
    const response = target > previous ? 0.78 : 0.18;
    const level = previous + (target - previous) * response;
    audioVisualizerLevels[index] = level;
  }

  context.shadowBlur = 0;

  const averageRange = (start, end) => {
    const from = Math.max(0, Math.floor(spectrumCount * start));
    const to = Math.min(spectrumCount, Math.ceil(spectrumCount * end));
    let total = 0;
    let count = 0;

    for (let index = from; index < to; index += 1) {
      total += audioVisualizerLevels[index] || 0;
      count += 1;
    }

    return count ? total / count : 0;
  };

  const bassPulse = averageRange(0, 0.18);
  const midPulse = averageRange(0.18, 0.58);
  const treblePulse = averageRange(0.58, 1);
  const pulseRadius = clamp(coverRadius * (1.6 + bassPulse * 0.8), coverRadius * 1.52, Math.max(coverRadius * 1.8, maxReach));

  const drawSoftHalo = () => {
    const halo = context.createRadialGradient(centerX, centerY, coverRadius * 0.55, centerX, centerY, pulseRadius);
    halo.addColorStop(0, colorFor(0, 0.18 + bassPulse * 0.12));
    halo.addColorStop(0.48, colorFor(1, 0.06 + midPulse * 0.08));
    halo.addColorStop(1, "rgba(0, 0, 0, 0)");
    context.save();
    context.globalCompositeOperation = "screen";
    context.fillStyle = halo;
    context.beginPath();
    context.arc(centerX, centerY, pulseRadius, 0, tau);
    context.fill();
    context.restore();
  };

  const drawOrbitRibbon = ({ radius, colorShift, phase, speed, alpha, lineWidth, scale, points = 132 }) => {
    const rotation = time * speed * (isPlaying ? 1 : 0.16);

    context.save();
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = colorFor(colorShift, alpha);
    context.shadowColor = colorFor(colorShift + 1, alpha * 0.95);
    context.shadowBlur = 10 + lineWidth * 3.6;
    context.lineWidth = lineWidth;
    context.beginPath();

    for (let point = 0; point <= points; point += 1) {
      const percent = point / points;
      const angle = percent * tau + rotation + phase;
      const levelIndex = Math.floor(percent * (spectrumCount - 1));
      const level = audioVisualizerLevels[levelIndex] || frequencyLevel(levelIndex);
      const noise =
        Math.sin(percent * tau * 4 + phase + time * 0.72) * ringGap * 0.2 +
        Math.sin(percent * tau * 9 - phase + time * 0.38) * ringGap * 0.1;
      const signal = Math.pow(level, 0.72) * ringGap * (hasSignal ? 1.45 : 0.46) * scale;
      const currentRadius = Math.min(maxReach, radius + noise + signal);
      const x = centerX + Math.cos(angle) * currentRadius;
      const y = centerY + Math.sin(angle) * currentRadius;

      if (point === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }

    context.stroke();
    context.restore();
  };

  const drawSpectrumSpokes = () => {
    context.save();
    context.globalCompositeOperation = "screen";

    for (let index = 0; index < spectrumCount; index += 2) {
      const percent = index / Math.max(1, spectrumCount);
      const angle = percent * tau - Math.PI / 2 + time * (isPlaying ? 0.18 : 0.035);
      const level = audioVisualizerLevels[index] || frequencyLevel(index);
      const lift = Math.pow(level, 0.68);
      const pulse = 0.72 + Math.sin(time * 2.1 + index * 0.19) * 0.28;
      const startRadius = orbitRadius + ringGap * (0.22 + midPulse * 0.55);
      const spike = ringGap * (0.58 + pulse * 0.24) + lift * coverRadius * (hasSignal ? 0.72 : 0.24);
      const endRadius = Math.min(maxReach, startRadius + spike);
      const x1 = centerX + Math.cos(angle) * startRadius;
      const y1 = centerY + Math.sin(angle) * startRadius;
      const x2 = centerX + Math.cos(angle) * endRadius;
      const y2 = centerY + Math.sin(angle) * endRadius;

      context.strokeStyle = colorFor(index, 0.2 + lift * 0.62);
      context.shadowColor = colorFor(index + 1, 0.5 + lift * 0.34);
      context.shadowBlur = 5 + lift * 16;
      context.lineWidth = 1 + lift * 4.5;
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
    }

    context.restore();
  };

  const drawOrbitDots = () => {
    const dotCount = 40;

    context.save();
    context.globalCompositeOperation = "screen";

    for (let index = 0; index < dotCount; index += 1) {
      const percent = index / dotCount;
      const levelIndex = Math.floor(percent * (spectrumCount - 1));
      const level = audioVisualizerLevels[levelIndex] || frequencyLevel(levelIndex);
      if (level < 0.13 && index % 5 !== 0) continue;

      const orbit = orbitRadius + ringGap * (0.45 + (index % 4) * 0.42) + Math.pow(level, 0.72) * ringGap * 1.05;
      const angle =
        percent * tau
        + time * (isPlaying ? 0.34 + (index % 3) * 0.08 : 0.06)
        + Math.sin(time * 0.5 + index) * 0.06;
      const x = centerX + Math.cos(angle) * Math.min(maxReach, orbit);
      const y = centerY + Math.sin(angle) * Math.min(maxReach, orbit);
      const size = 1.15 + Math.pow(level, 0.74) * 5.2 + (index % 3) * 0.35;

      context.fillStyle = colorFor(index, 0.16 + level * 0.56);
      context.shadowColor = colorFor(index + 2, 0.7);
      context.shadowBlur = 6 + level * 12;
      context.beginPath();
      context.arc(x, y, size, 0, tau);
      context.fill();
    }

    context.restore();
  };

  const drawIdlePulseFloor = () => {
    context.save();
    context.globalCompositeOperation = "screen";
    context.lineCap = "round";

    for (let ring = 0; ring < 4; ring += 1) {
      const radius = orbitRadius + ringGap * (0.45 + ring * 0.72);
      const pulse = 0.5 + Math.sin(time * 1.25 + ring * 1.4) * 0.5;
      context.setLineDash([ringGap * (0.55 + ring * 0.14), ringGap * (0.34 + ring * 0.08)]);
      context.lineDashOffset = -time * (16 + ring * 8);
      context.strokeStyle = colorFor(ring, 0.18 + pulse * 0.16);
      context.shadowColor = colorFor(ring + 1, 0.52);
      context.shadowBlur = 8 + pulse * 8;
      context.lineWidth = ring === 0 ? 2.1 : 1.35;
      context.beginPath();
      context.arc(centerX, centerY, Math.min(maxReach, radius), 0, tau);
      context.stroke();
    }

    context.setLineDash([]);
    context.restore();
  };

  const drawHaloMode = () => {
    drawSoftHalo();
    drawOrbitRibbon({ radius: orbitRadius + ringGap * 0.32 + bassPulse * ringGap, colorShift: 0, phase: 0.2, speed: 0.3, alpha: 0.5 + bassPulse * 0.18, lineWidth: 2.45, scale: 1.18 });
    drawOrbitRibbon({ radius: orbitRadius + ringGap * 1.32 + midPulse * ringGap, colorShift: 1, phase: 1.8, speed: -0.22, alpha: 0.42 + midPulse * 0.18, lineWidth: 1.85, scale: 0.94 });
    drawSpectrumSpokes();
    drawOrbitRibbon({ radius: orbitRadius + ringGap * 2.22 + treblePulse * ringGap * 0.72, colorShift: 2, phase: 3.1, speed: 0.18, alpha: 0.32 + treblePulse * 0.16, lineWidth: 1.28, scale: 0.72 });
    drawOrbitDots();
  };

  const drawLiquidMode = () => {
    const visibleLeft = -canvasRect.left;
    const visibleRight = visibleLeft + visibleWidth;
    const edgePadding = clamp(minDimension * 0.045, 24, 54);
    const waveLeft = Math.max(visibleLeft + edgePadding, centerX - visibleWidth * 0.48);
    const waveRight = Math.min(visibleRight - edgePadding, centerX + visibleWidth * 0.48);
    const waveSpan = Math.max(1, waveRight - waveLeft);
    const bandSpace = clamp(coverRadius * 0.21, 34, 72);
    const maxAmplitude = clamp(minDimension * 0.062, 34, 70);

    const drawLiquidWave = ({ yOffset, amplitude, alpha, lineWidth, colorShift, phase, speed }) => {
      const points = 120;
      const baseY = centerY + yOffset;

      context.save();
      context.lineCap = "round";
      context.lineJoin = "round";
      context.strokeStyle = colorFor(colorShift, alpha);
      context.shadowColor = colorFor(colorShift + 1, alpha * 0.95);
      context.shadowBlur = 18 + lineWidth * 4;
      context.lineWidth = lineWidth;
      context.beginPath();

      for (let point = 0; point <= points; point += 1) {
        const percent = point / points;
        const x = waveLeft + waveSpan * percent;
        const levelIndex = Math.floor(percent * (spectrumCount - 1));
        const level = audioVisualizerLevels[levelIndex] || frequencyLevel(levelIndex);
        const envelope = Math.sin(percent * Math.PI);
        const drift = isPlaying ? time * speed : 0;
        const texture =
          Math.sin(percent * Math.PI * 3.8 + phase + drift) * amplitude * 0.2 +
          Math.sin(percent * Math.PI * 9.5 + phase * 0.6 - drift * 0.72) * amplitude * 0.08;
        const signalLift = (Math.pow(level, 0.68) - 0.12) * amplitude * (hasSignal ? 2.25 : 0.58) * envelope;
        const coverPush = Math.exp(-Math.pow((x - centerX) / Math.max(coverRadius * 1.5, 1), 2)) * yOffset * -0.18;
        const y = baseY + texture + signalLift + coverPush;

        if (point === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }

      context.stroke();
      context.restore();
    };

    const drawWaveDots = () => {
      const dotCount = 42;
      context.save();
      context.globalCompositeOperation = "screen";

      for (let index = 0; index < dotCount; index += 1) {
        const percent = index / Math.max(1, dotCount - 1);
        const levelIndex = Math.floor(percent * (spectrumCount - 1));
        const level = audioVisualizerLevels[levelIndex] || frequencyLevel(levelIndex);
        if (level < 0.16 && index % 4 !== 0) continue;

        const lane = index % 5 - 2;
        const x = waveLeft + waveSpan * percent;
        const drift = isPlaying ? time * (0.48 + (index % 3) * 0.08) : 0;
        const y =
          centerY
          + lane * bandSpace * 0.58
          + Math.sin(percent * Math.PI * 5.2 + index * 0.37 + drift) * maxAmplitude * 0.34
          + (level - 0.16) * maxAmplitude * 1.45;
        const size = 1.1 + Math.pow(level, 0.72) * 5.8;

        context.fillStyle = colorFor(index + lane, 0.2 + level * 0.52);
        context.shadowColor = colorFor(index + 1, 0.72);
        context.shadowBlur = 8 + level * 20;
        context.beginPath();
        context.arc(x, y, size, 0, tau);
        context.fill();
      }

      context.restore();
    };

    drawSoftHalo();
    drawLiquidWave({ yOffset: -bandSpace * 1.48, amplitude: maxAmplitude * 0.9, alpha: 0.34, lineWidth: 1.8, colorShift: 2, phase: 0.4, speed: 0.58 });
    drawLiquidWave({ yOffset: -bandSpace * 0.72, amplitude: maxAmplitude * 1.08, alpha: 0.56, lineWidth: 3.8, colorShift: 0, phase: 1.1, speed: 0.72 });
    drawLiquidWave({ yOffset: 0, amplitude: maxAmplitude * 1.2, alpha: 0.7, lineWidth: 5.2, colorShift: 1, phase: 2.0, speed: 0.84 });
    drawLiquidWave({ yOffset: bandSpace * 0.76, amplitude: maxAmplitude * 1.02, alpha: 0.52, lineWidth: 3.2, colorShift: 2, phase: 2.75, speed: 0.64 });
    drawLiquidWave({ yOffset: bandSpace * 1.46, amplitude: maxAmplitude * 0.78, alpha: 0.3, lineWidth: 1.55, colorShift: 0, phase: 3.5, speed: 0.5 });
    drawWaveDots();
  };

  const drawSurgeMode = () => {
    const waveCount = 8;
    const points = 118;
    const waveGap = clamp(coverRadius * 0.095, 13, 27);
    const waveAmplitude = clamp(coverRadius * 0.058, 10, 24);
    const baseRadius = coverRadius + clamp(coverRadius * 0.19, 24, 48);

    const drawCircularWave = ({ ring, colorShift, alpha, lineWidth, phase, speed, liftScale }) => {
      const ringRadius = baseRadius + ring * waveGap;
      const drift = time * speed * (isPlaying ? 1 : 0.16);

      context.save();
      context.lineCap = "round";
      context.lineJoin = "round";
      context.strokeStyle = colorFor(colorShift, alpha);
      context.shadowColor = colorFor(colorShift + 1, alpha * 0.72);
      context.shadowBlur = 5 + lineWidth * 3.2;
      context.lineWidth = lineWidth;
      context.beginPath();

      for (let point = 0; point <= points; point += 1) {
        const percent = point / points;
        const angle = percent * tau + drift;
        const levelIndex = Math.floor(percent * (spectrumCount - 1));
        const level = audioVisualizerLevels[levelIndex] || frequencyLevel(levelIndex);
        const texture =
          Math.sin(percent * tau * (4.4 + ring * 0.38) + phase + time * 0.68) * waveAmplitude +
          Math.sin(percent * tau * (9.2 + ring * 0.5) - phase * 0.7 - time * 0.42) * waveAmplitude * 0.42;
        const signalLift = Math.pow(level, 0.52) * waveGap * liftScale * 1.62;
        const radius = Math.min(maxReach, ringRadius + texture + signalLift);
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        if (point === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }

      context.stroke();
      context.restore();
    };

    const drawOuterBrokenRing = () => {
      const radius = Math.min(maxReach, baseRadius + waveGap * (waveCount + 0.58));

      context.save();
      context.globalCompositeOperation = "screen";
      context.setLineDash([waveGap * 0.8, waveGap * 0.5, waveGap * 0.22, waveGap * 0.52]);
      context.lineDashOffset = -time * (isPlaying ? 34 : 6);
      context.strokeStyle = colorFor(2, 0.34 + bassPulse * 0.16);
      context.shadowColor = colorFor(0, 0.54);
      context.shadowBlur = 8;
      context.lineWidth = 3;
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, tau);
      context.stroke();
      context.restore();
    };

    drawSoftHalo();
    for (let ring = 0; ring < waveCount; ring += 1) {
      drawCircularWave({
        ring,
        colorShift: ring,
        alpha: 0.44 - ring * 0.018 + (ring % 2 === 0 ? bassPulse : midPulse) * 0.16,
        lineWidth: ring < 2 ? 3.25 - ring * 0.35 : 1.75,
        phase: ring * 0.84,
        speed: (ring % 2 === 0 ? 0.11 : -0.075) + ring * 0.006,
        liftScale: (hasSignal ? 1.18 : 0.42) * (1 - ring * 0.035),
      });
    }
    drawOuterBrokenRing();
  };

  const drawCometMode = () => {
    drawSoftHalo();
    context.save();
    context.globalCompositeOperation = "screen";

    const cometCount = 42;

    for (let index = 0; index < cometCount; index += 1) {
      const percent = index / cometCount;
      const levelIndex = Math.floor(percent * (spectrumCount - 1));
      const level = audioVisualizerLevels[levelIndex] || frequencyLevel(levelIndex);
      if (level < 0.14 && index % 4 !== 0) continue;

      const lift = Math.pow(level, 0.7);
      const radius = Math.min(maxReach, orbitRadius + ringGap * (0.7 + (index % 5) * 0.46) + lift * ringGap * 1.6);
      const speed = isPlaying ? 0.28 + (index % 4) * 0.055 : 0.045;
      const angle = percent * tau + time * speed + Math.sin(time * 0.34 + index) * 0.08;
      const tail = 0.035 + lift * 0.12;

      context.strokeStyle = colorFor(index, 0.12 + lift * 0.38);
      context.shadowColor = colorFor(index + 1, 0.58);
      context.shadowBlur = 7 + lift * 16;
      context.lineWidth = 0.9 + lift * 4.4;
      context.beginPath();
      context.arc(centerX, centerY, radius, angle - tail, angle + tail);
      context.stroke();

      const x = centerX + Math.cos(angle + tail) * radius;
      const y = centerY + Math.sin(angle + tail) * radius;
      context.fillStyle = colorFor(index + 2, 0.2 + lift * 0.52);
      context.beginPath();
      context.arc(x, y, 1.05 + lift * 4.8, 0, tau);
      context.fill();
    }

    context.restore();
  };

  const drawMirrorMode = () => {
    const barCount = Math.round(clamp(visibleWidth / 12, 56, 104));
    const span = Math.min(visibleWidth * 0.88, maxReach * 4.2);
    const left = centerX - span / 2;
    const gap = span / Math.max(1, barCount - 1);
    const baseGap = coverRadius * 1.08;
    const maxBar = clamp(minDimension * 0.18, 88, 180);

    drawSoftHalo();
    context.save();
    context.globalCompositeOperation = "screen";
    context.lineCap = "round";

    for (let index = 0; index < barCount; index += 1) {
      const percent = index / Math.max(1, barCount - 1);
      const levelIndex = Math.floor(percent * (spectrumCount - 1));
      const level = audioVisualizerLevels[levelIndex] || frequencyLevel(levelIndex);
      const lift = Math.pow(level, 0.72);
      const x = left + gap * index;
      const centerDistance = Math.abs(x - centerX);
      if (centerDistance < coverRadius * 0.9) continue;

      const sway = Math.sin(time * 1.2 + index * 0.17) * ringGap * 0.22;
      const barHeight = ringGap * 0.64 + lift * maxBar;
      const alpha = 0.1 + lift * 0.54;
      context.strokeStyle = colorFor(index, alpha);
      context.shadowColor = colorFor(index + 1, 0.46);
      context.shadowBlur = 5 + lift * 11;
      context.lineWidth = clamp(gap * 0.32, 1.1, 4.5);
      context.beginPath();
      context.moveTo(x, centerY - baseGap - sway);
      context.lineTo(x, centerY - baseGap - barHeight - sway);
      context.moveTo(x, centerY + baseGap + sway);
      context.lineTo(x, centerY + baseGap + barHeight + sway);
      context.stroke();
    }

    drawOrbitRibbon({ radius: orbitRadius + ringGap * 0.65, colorShift: 1, phase: 0.9, speed: 0.2, alpha: 0.2 + midPulse * 0.16, lineWidth: 1.2, scale: 0.72 });
    context.restore();
  };

  const drawLatticeMode = () => {
    drawSoftHalo();
    context.save();
    context.globalCompositeOperation = "screen";

    for (let ring = 0; ring < 4; ring += 1) {
      const points = 72;
      const baseRadius = orbitRadius + ringGap * (0.32 + ring * 0.72);
      context.strokeStyle = colorFor(ring, 0.18 + (3 - ring) * 0.035 + bassPulse * 0.08);
      context.shadowColor = colorFor(ring + 1, 0.42);
      context.shadowBlur = 10 + ring * 3;
      context.lineWidth = 0.9 + ring * 0.25;
      context.beginPath();

      for (let point = 0; point <= points; point += 1) {
        const percent = point / points;
        const levelIndex = Math.floor(percent * (spectrumCount - 1));
        const level = audioVisualizerLevels[levelIndex] || frequencyLevel(levelIndex);
        const angle = percent * tau + time * (isPlaying ? 0.08 * (ring + 1) : 0.018);
        const pulse = Math.sin(time * 1.45 + point * 0.32 + ring) * ringGap * 0.16;
        const radius = Math.min(maxReach, baseRadius + pulse + Math.pow(level, 0.66) * ringGap * (0.55 + ring * 0.24));
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        if (point === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }

      context.stroke();
    }

    for (let index = 0; index < 36; index += 1) {
      const percent = index / 36;
      const levelIndex = Math.floor(percent * (spectrumCount - 1));
      const level = audioVisualizerLevels[levelIndex] || frequencyLevel(levelIndex);
      const lift = Math.pow(level, 0.7);
      const angle = percent * tau + time * (isPlaying ? 0.12 : 0.02);
      const inner = orbitRadius + ringGap * 0.34;
      const outer = Math.min(maxReach, orbitRadius + ringGap * (2.7 + lift * 1.35));

      context.strokeStyle = colorFor(index, 0.08 + lift * 0.24);
      context.lineWidth = 0.8 + lift * 1.8;
      context.beginPath();
      context.moveTo(centerX + Math.cos(angle) * inner, centerY + Math.sin(angle) * inner);
      context.lineTo(centerX + Math.cos(angle) * outer, centerY + Math.sin(angle) * outer);
      context.stroke();
    }

    context.restore();
  };

  const drawMode = [
    drawHaloMode,
    drawLiquidMode,
    drawCometMode,
    drawMirrorMode,
    drawLatticeMode,
    drawSurgeMode,
  ][audioVisualizerModeIndex] || drawHaloMode;
  if (!hasSignal) drawIdlePulseFloor();
  drawMode();
  glassPlayer.classList.add("has-audio-visualizer-canvas");

  context.restore();

  audioVisualizerFrame = requestAnimationFrame(drawAudioVisualizer);
}

function parseHexColor(value) {
  const normalized = String(value).trim();
  const match = normalized.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!match) return { r: 188, g: 208, b: 255 };

  return {
    r: parseInt(match[1], 16),
    g: parseInt(match[2], 16),
    b: parseInt(match[3], 16),
  };
}

function setDetailMode(isDetail) {
  if (!isDetail && isAudioVisualizerActive) {
    exitAudioVisualizer({ animate: false });
  }

  glassPlayer.classList.toggle("is-detail", isDetail);
  selectorView.setAttribute("aria-hidden", isDetail ? "true" : "false");
  detailView.setAttribute("aria-hidden", isDetail ? "false" : "true");
}

async function playPlayback() {
  if (!activeTrack) return;

  try {
    await audio.play();
  } catch (error) {
    console.warn("Audio playback could not start.", error);
    isPlaying = false;
    updatePlayState();
  }
}

function pausePlayback() {
  audio.pause();
  updatePlayState();
}

function resetProgressSeekState() {
  progressDrag = null;
  pendingSeekTime = null;
  displaySeekTime = null;
  deferredBlobSeekTime = null;
  progressTrack.classList.remove("is-seeking");
}

function startProgressSeek(event) {
  if (!activeTrack || event.button !== 0) return;
  event.preventDefault();
  progressDrag = { pointerId: event.pointerId };
  progressTrack.classList.add("is-seeking");
  if (progressTrack.setPointerCapture) progressTrack.setPointerCapture(event.pointerId);
  seekFromPointer(event);
}

function moveProgressSeek(event) {
  if (!progressDrag || progressDrag.pointerId !== event.pointerId) return;
  event.preventDefault();
  seekFromPointer(event);
}

function endProgressSeek(event) {
  if (!progressDrag || progressDrag.pointerId !== event.pointerId) return;
  progressDrag = null;
  if (progressTrack.hasPointerCapture?.(event.pointerId)) {
    progressTrack.releasePointerCapture(event.pointerId);
  }
  if (displaySeekTime === null && pendingSeekTime === null) {
    progressTrack.classList.remove("is-seeking");
  }
}

function seekFromPointer(event) {
  if (!activeTrack) return;
  event.preventDefault();
  const duration = getDuration();
  if (!duration) return;

  const rect = progressTrack.getBoundingClientRect();
  const percent = clamp((event.clientX - rect.left) / rect.width, 0, 1);
  seekToTime(percent * duration);
}

function seekFromKeyboard(event) {
  if (!activeTrack) return;
  const duration = getDuration();
  if (!duration) return;

  const step = event.shiftKey ? 15 : 5;
  let target = null;

  if (event.key === "ArrowLeft") target = (displaySeekTime ?? audio.currentTime ?? 0) - step;
  if (event.key === "ArrowRight") target = (displaySeekTime ?? audio.currentTime ?? 0) + step;
  if (event.key === "Home") target = 0;
  if (event.key === "End") target = duration;
  if (target === null) return;

  event.preventDefault();
  seekToTime(target);
}

function seekToTime(time) {
  const duration = getDuration();
  if (!duration) return;

  const target = clamp(time, 0, Math.max(0, duration - 0.05));
  pendingSeekTime = target;
  displaySeekTime = target;
  progressTrack.classList.add("is-seeking");

  if (activeTrack?.blobAudio && !activeTrack.audioObjectUrl) {
    deferredBlobSeekTime = target;
    prepareBlobAudioForActiveTrack(activeTrack, loadToken);
    syncPlaybackUi(true);
    return;
  }

  try {
    if (audio.readyState === 0) audio.load();
    audio.currentTime = target;
  } catch (error) {
    console.warn("Audio seek is waiting for media readiness.", error);
  }

  syncPlaybackUi(true);
}

function applyPendingSeek() {
  if (pendingSeekTime === null) return;
  if (activeTrack?.blobAudio && !activeTrack.audioObjectUrl) {
    prepareBlobAudioForActiveTrack(activeTrack, loadToken);
    return;
  }

  try {
    audio.currentTime = pendingSeekTime;
  } catch (error) {
    console.warn("Pending audio seek could not be applied yet.", error);
    return;
  }

  syncPlaybackUi(true);
}

function tick() {
  syncPlaybackUi();
  requestAnimationFrame(tick);
}

function syncPlaybackUi() {
  if (!activeTrack) return;

  const duration = getDuration();
  const displayedTime = displaySeekTime ?? audio.currentTime ?? 0;
  const elapsed = Math.min(displayedTime, duration || displayedTime);
  const percent = duration ? (elapsed / duration) * 100 : 0;

  progressFill.style.width = `${clamp(percent, 0, 100)}%`;
  progressTrack.style.setProperty("--progress-percent", `${clamp(percent, 0, 100)}%`);
  progressTrack.setAttribute("aria-valuemax", String(Math.round(duration || 0)));
  progressTrack.setAttribute("aria-valuenow", String(Math.round(elapsed || 0)));
  progressTrack.setAttribute("aria-valuetext", `${formatTime(elapsed)} / ${duration ? formatTime(duration) : "--:--"}`);
  timeReadout.textContent = formatTime(elapsed);
  durationReadout.textContent = duration ? formatTime(duration) : "--:--";
}

function updateWheel() {
  const cards = [...document.querySelectorAll(".track-card")];
  cards.forEach((card) => {
    const index = Number(card.dataset.track);
    const offset = getWheelOffset(index);
    const abs = Math.abs(offset);
    const far = abs === 2;
    const direction = offset < 0 ? -1 : 1;
    const y = far ? direction * 18 : offset * 9.4;
    const z = far ? -20 : 6 - abs * 10;
    const scale = far ? 0.58 : 1 - abs * 0.18;
    const rotateX = far ? direction * -44 : offset * -15;
    const rotateZ = far ? direction * 7 : offset * -4;
    const opacity = far ? 0.26 : 1 - abs * 0.32;
    const blur = far ? 3.2 : abs * 0.7;

    card.classList.toggle("is-active", index === activeTrackIndex);
    card.setAttribute("aria-pressed", index === activeTrackIndex ? "true" : "false");
    card.style.setProperty("--card-y", `${y}rem`);
    card.style.setProperty("--card-z", `${z}rem`);
    card.style.setProperty("--card-scale", String(scale));
    card.style.setProperty("--card-rotate-x", `${rotateX}deg`);
    card.style.setProperty("--card-rotate-z", `${rotateZ}deg`);
    card.style.setProperty("--card-opacity", String(opacity));
    card.style.setProperty("--card-blur", `${blur}px`);
    card.style.zIndex = String(10 - abs);
  });
}

function getWheelOffset(index) {
  const wheelIndices = isTrackSearchActive() ? trackSearchResults : tracks.map((_, trackIndex) => trackIndex);
  const currentPosition = wheelIndices.indexOf(index);
  const activePosition = wheelIndices.indexOf(activeTrackIndex);

  if (currentPosition < 0) return 0;
  if (activePosition < 0) return currentPosition;

  let offset = currentPosition - activePosition;
  const half = wheelIndices.length / 2;
  if (offset > half) offset -= wheelIndices.length;
  if (offset < -half) offset += wheelIndices.length;
  return offset;
}

function updatePlayState() {
  glassPlayer.classList.toggle("is-playing", isPlaying);
  playToggle.innerHTML = `<i data-lucide="${isPlaying ? "pause" : "play"}"></i>`;
  playToggle.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
  refreshIcons();
}

function preloadDurations() {
  tracks.forEach(preloadTrackDuration);
}

function preloadTrackDuration(track, index) {
  const probe = new Audio();
  probe.preload = "metadata";
  probe.src = track.audioSrc;
  probe.addEventListener(
    "loadedmetadata",
    () => {
      const duration = getMediaDuration(probe.duration, track);
      if (!duration) return;
      track.duration = duration;
      updateDurationLabel(index);
      if (index === activeTrackIndex) syncPlaybackUi(true);
    },
    { once: true },
  );
}

function preloadImportedTrackDuration(track, index) {
  const probe = new Audio();
  probe.preload = "metadata";
  probe.src = track.audioSrc;
  probe.addEventListener(
    "loadedmetadata",
    () => {
      const duration = getMediaDuration(probe.duration, track);
      if (!duration) return;
      track.duration = duration;
      updateImportedDurationLabel(index);
      if (activeTrackList === importedTracks && index === activeTrackIndex) syncPlaybackUi(true);
    },
    { once: true },
  );
}

function preloadBlobAudioTracks() {
  tracks.filter((track) => track.blobAudio).forEach((track) => {
    getPlayableAudioSrc(track);
  });
}

function renderFallbackDurations() {
  tracks.forEach((_, index) => updateDurationLabel(index));
}

function updateDurationLabel(index) {
  const label = document.querySelector(`[data-duration="${index}"]`);
  if (!label) return;
  const duration = getMediaDuration(tracks[index].duration, tracks[index]);
  label.textContent = duration ? formatTime(duration) : "--:--";
}

function updateImportedDurationLabel(index) {
  const label = document.querySelector(`[data-import-duration="${index}"]`);
  if (!label || !importedTracks[index]) return;
  const duration = getMediaDuration(importedTracks[index].duration, importedTracks[index]);
  label.textContent = duration ? formatTime(duration) : "--:--";
}

function getDuration() {
  return getMediaDuration(audio.duration, activeTrack);
}

function getMediaDuration(value, track) {
  const fallback = Number.isFinite(track?.fallbackDuration) && track.fallbackDuration > 0 ? track.fallbackDuration : 0;
  const saved = Number.isFinite(track?.duration) && track.duration > 0 ? track.duration : 0;

  if (Number.isFinite(value) && value > 0 && isReliableDuration(value, fallback)) return value;
  if (saved) return saved;
  return fallback;
}

function isReliableDuration(value, fallback) {
  if (!fallback) return true;
  return Math.abs(value - fallback) <= Math.max(3, fallback * 0.08);
}

function wrapIndex(index, trackList = activeTrackList) {
  return (index + trackList.length) % trackList.length;
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "--:--";
  const safeSeconds = Math.floor(seconds);
  const minutes = Math.floor(safeSeconds / 60);
  const remaining = String(safeSeconds % 60).padStart(2, "0");
  return `${minutes}:${remaining}`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function smoothStep(value) {
  const safeValue = clamp(value, 0, 1);
  return safeValue * safeValue * (3 - 2 * safeValue);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

function refreshIcons() {
  document.querySelectorAll("[data-lucide]").forEach((icon) => {
    const name = icon.dataset.lucide;
    const svg = createIconSvg(name);
    if (!svg) return;
    icon.replaceWith(svg);
  });
}

function createIconSvg(name) {
  const iconPaths = {
    "arrow-up": '<path d="M12 19V5"></path><path d="m5 12 7-7 7 7"></path>',
    "arrow-down": '<path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path>',
    "arrow-left": '<path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path>',
    "arrow-right": '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
    play: '<path d="M8 5v14l11-7Z"></path>',
    pause: '<path d="M8 5h4v14H8z"></path><path d="M16 5h4v14h-4z"></path>',
    plus: '<path d="M12 5v14"></path><path d="M5 12h14"></path>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
    search: '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>',
    shuffle:
      '<path d="m18 14 4 4-4 4"></path><path d="m18 2 4 4-4 4"></path><path d="M2 18h1.93c1.28 0 2.48-.62 3.22-1.66L16.85 4.66A3.9 3.9 0 0 1 20.07 3H22"></path><path d="M2 6h1.93c1.28 0 2.48.62 3.22 1.66l1.86 2.34"></path><path d="M14.99 14 16.85 16.34A3.9 3.9 0 0 0 20.07 18H22"></path>',
    x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>',
    "skip-back": '<path d="M19 20 9 12l10-8v16Z"></path><path d="M5 19V5"></path>',
    "skip-forward": '<path d="m5 4 10 8-10 8V4Z"></path><path d="M19 5v14"></path>',
    "trash-2":
      '<path d="M3 6h18"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><path d="M19 6l-1 14c0 1-1 2-2 2H8c-1 0-2-1-2-2L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path>',
  };

  const paths = iconPaths[name];
  if (!paths) return null;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1.8");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.innerHTML = paths;

  if (name === "play" || name === "pause" || name.startsWith("skip")) {
    svg.classList.add("media-icon");
  }

  return svg;
}

function setupConsequenceSequence() {
  if (!consequenceHero || !consequenceCanvas) return;

  const context = consequenceCanvas.getContext("2d", { alpha: false });
  if (!context) return;

  const frameCount = Number(consequenceHero.dataset.frameCount) || 193;
  const frameImages = new Map();
  const framePromises = new Map();
  let renderedFrame = -1;
  let renderedSourceFrame = -1;
  let targetFrame = 0;
  let currentFrame = 0;
  let rafId = null;
  let preloadCursor = 0;

  function getFrameSrc(index) {
    return `./consequence/frame_${String(index).padStart(3, "0")}_delay-0.04s.webp`;
  }

  function loadFrame(index) {
    const safeIndex = Math.round(clamp(index, 0, frameCount - 1));
    if (frameImages.has(safeIndex)) return Promise.resolve(frameImages.get(safeIndex));
    if (framePromises.has(safeIndex)) return framePromises.get(safeIndex);

    const promise = new Promise((resolve, reject) => {
      const image = new Image();
      image.decoding = "async";
      image.onload = () => {
        frameImages.set(safeIndex, image);
        framePromises.delete(safeIndex);
        if (Math.abs(safeIndex - targetFrame) < 3) requestSequenceFrame();
        resolve(image);
      };
      image.onerror = () => {
        framePromises.delete(safeIndex);
        reject(new Error(`Sequence frame failed: ${safeIndex}`));
      };
      image.src = getFrameSrc(safeIndex);
    });

    framePromises.set(safeIndex, promise);
    return promise;
  }

  function resizeCanvas() {
    const width = consequenceCanvas.clientWidth || window.innerWidth;
    const height = consequenceCanvas.clientHeight || window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const nextWidth = Math.max(1, Math.round(width * ratio));
    const nextHeight = Math.max(1, Math.round(height * ratio));

    if (consequenceCanvas.width !== nextWidth || consequenceCanvas.height !== nextHeight) {
      consequenceCanvas.width = nextWidth;
      consequenceCanvas.height = nextHeight;
      renderedFrame = -1;
      renderedSourceFrame = -1;
    }
  }

  function drawFrame(index) {
    const safeIndex = Math.round(clamp(index, 0, frameCount - 1));
    const frame = findNearestLoadedFrame(safeIndex);
    if (!frame || (renderedFrame === safeIndex && renderedSourceFrame === frame.index)) return;
    const image = frame.image;

    resizeCanvas();
    const canvasWidth = consequenceCanvas.width;
    const canvasHeight = consequenceCanvas.height;
    const imageWidth = image.naturalWidth || image.width;
    const imageHeight = image.naturalHeight || image.height;
    const scale = Math.max(canvasWidth / imageWidth, canvasHeight / imageHeight);
    const width = imageWidth * scale;
    const height = imageHeight * scale;
    const left = (canvasWidth - width) / 2;
    const top = (canvasHeight - height) / 2;

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(image, left, top, width, height);
    renderedFrame = safeIndex;
    renderedSourceFrame = frame.index;
  }

  function findNearestLoadedFrame(index) {
    if (frameImages.has(index)) return { image: frameImages.get(index), index };

    for (let distance = 1; distance < frameCount; distance += 1) {
      const previous = index - distance;
      const next = index + distance;
      if (frameImages.has(previous)) return { image: frameImages.get(previous), index: previous };
      if (frameImages.has(next)) return { image: frameImages.get(next), index: next };
    }

    return null;
  }

  function getScrollProgress() {
    const rect = consequenceHero.getBoundingClientRect();
    const travel = Math.max(1, consequenceHero.offsetHeight - window.innerHeight);
    return clamp(-rect.top / travel, 0, 1);
  }

  function updateTargetFrame() {
    const rawProgress = getScrollProgress();
    const progress = smoothStep(rawProgress);
    const backdropOpacity = smoothStep(clamp(rawProgress / 0.18, 0, 1));
    const entryOpacity = smoothStep(clamp((rawProgress - 0.03) / 0.15, 0, 1));
    const panelsOpacity = smoothStep(clamp((rawProgress - 0.76) / 0.16, 0, 1));
    const musicOutroOpacity = getMusicOutroOpacity();
    targetFrame = progress * (frameCount - 1);
    consequenceHero.style.setProperty("--sequence-progress", progress.toFixed(4));
    consequenceHero.style.setProperty("--sequence-backdrop-opacity", backdropOpacity.toFixed(3));
    consequenceHero.style.setProperty("--sequence-entry-opacity", entryOpacity.toFixed(3));
    consequenceHero.style.setProperty("--sequence-panels-opacity", panelsOpacity.toFixed(3));
    consequenceHero.style.setProperty("--sequence-panels-y", `${((1 - panelsOpacity) * 1.6).toFixed(2)}rem`);
    consequenceHero.style.setProperty("--sequence-panels-blur", `${((1 - panelsOpacity) * 14).toFixed(2)}px`);
    consequenceHero.classList.toggle("is-import-panels-live", importedMusicPanelsUnlocked && panelsOpacity > 0.45);
    consequenceHero.style.setProperty("--sequence-scale", (1.035 - progress * 0.018).toFixed(4));
    consequenceHero.style.setProperty("--sequence-y", `${(-progress * 1.4).toFixed(2)}rem`);
    musicSection?.style.setProperty("--music-outro-opacity", musicOutroOpacity.toFixed(3));
    preloadFrameWindow(Math.round(targetFrame));
    requestSequenceFrame();
  }

  function getMusicOutroOpacity() {
    if (!musicSection) return 0;

    const rect = musicSection.getBoundingClientRect();
    const fadeStart = window.innerHeight * 0.78;
    const fadeEnd = -window.innerHeight * 0.12;
    return smoothStep(clamp((fadeStart - rect.bottom) / (fadeStart - fadeEnd), 0, 1));
  }

  function requestSequenceFrame() {
    if (rafId) return;
    rafId = requestAnimationFrame(animateSequence);
  }

  function animateSequence() {
    rafId = null;
    currentFrame += (targetFrame - currentFrame) * 0.22;

    if (Math.abs(targetFrame - currentFrame) < 0.08) {
      currentFrame = targetFrame;
    }

    drawFrame(currentFrame);

    if (Math.abs(targetFrame - currentFrame) >= 0.08) {
      requestSequenceFrame();
    }
  }

  function preloadFrameWindow(center) {
    const direction = targetFrame >= currentFrame ? 1 : -1;
    for (let offset = -8; offset <= 14; offset += 1) {
      loadFrame(center + offset * direction).catch(() => {});
    }
  }

  function idlePreloadFrames(deadline) {
    const hasTime = () => !deadline || deadline.timeRemaining() > 3;
    let loaded = 0;

    while (preloadCursor < frameCount && hasTime() && loaded < 10) {
      loadFrame(preloadCursor).catch(() => {});
      preloadCursor += 1;
      loaded += 1;
    }

    if (preloadCursor >= frameCount) return;
    const idleCallback = window.requestIdleCallback || ((callback) => setTimeout(callback, 120));
    idleCallback(idlePreloadFrames, { timeout: 700 });
  }

  resizeCanvas();
  loadFrame(0)
    .then(() => {
      consequenceHero.classList.add("is-sequence-ready");
      drawFrame(0);
      updateTargetFrame();
    })
    .catch((error) => console.warn("Consequence sequence could not start.", error));

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("scroll", updateTargetFrame, { passive: true });
  }

  window.addEventListener("resize", () => {
    resizeCanvas();
    updateTargetFrame();
  });

  preloadFrameWindow(0);
  idlePreloadFrames();
}

function setupTitleFade() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const root = document.documentElement;
  const titleVisual = document.querySelector(".site-title-visual");
  if (!titleVisual) return;

  let ticking = false;

  function update() {
    ticking = false;
    const fadeDistance = Math.max(window.innerHeight * 0.62, titleVisual.offsetHeight * 0.74);
    const progress = smoothStep(clamp(window.scrollY / fadeDistance, 0, 1));

    root.style.setProperty("--title-scroll-opacity", (1 - progress).toFixed(3));
    root.style.setProperty("--title-scroll-blur", `${(progress * 7).toFixed(2)}px`);
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();
}

function setupPetals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.querySelector("#petals");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const petals = [];
  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let lastSpawnedAt = 0;
  let animationId = 0;
  let lastFrameTime = performance.now();

  function resize() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * pixelRatio);
    canvas.height = Math.floor(window.innerHeight * pixelRatio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function spawnPetal(x, y) {
    if (petals.length > 120) petals.splice(0, petals.length - 120);

    const size = 7 + Math.random() * 11;
    petals.push({
      x: x + (Math.random() - 0.5) * 28,
      y: y + (Math.random() - 0.5) * 20,
      size,
      vx: (Math.random() - 0.5) * 72,
      vy: 28 + Math.random() * 70,
      drift: (Math.random() - 0.5) * 32,
      rotation: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 4.4,
      age: 0,
      life: 1.15 + Math.random() * 0.9,
      hue: 334 + Math.random() * 18,
    });
  }

  function drawPetal(petal) {
    const fadeIn = Math.min(1, petal.age / 0.18);
    const fadeOut = Math.max(0, 1 - petal.age / petal.life);
    const alpha = fadeIn * fadeOut;

    context.save();
    context.translate(petal.x, petal.y);
    context.rotate(petal.rotation);
    context.scale(1, 0.72 + Math.sin(petal.age * 8) * 0.12);
    context.globalAlpha = alpha;
    context.fillStyle = `hsla(${petal.hue}, 92%, 82%, 0.92)`;
    context.strokeStyle = "rgba(255, 255, 255, 0.48)";
    context.lineWidth = 0.8;

    context.beginPath();
    context.moveTo(0, -petal.size * 0.72);
    context.bezierCurveTo(petal.size * 0.78, -petal.size * 0.46, petal.size * 0.82, petal.size * 0.34, 0, petal.size * 0.8);
    context.bezierCurveTo(-petal.size * 0.82, petal.size * 0.34, -petal.size * 0.78, -petal.size * 0.46, 0, -petal.size * 0.72);
    context.fill();
    context.stroke();

    context.globalAlpha = alpha * 0.5;
    context.beginPath();
    context.moveTo(0, -petal.size * 0.48);
    context.quadraticCurveTo(petal.size * 0.16, 0, 0, petal.size * 0.56);
    context.stroke();
    context.restore();
  }

  function animate(now) {
    const delta = Math.min(0.033, (now - lastFrameTime) / 1000);
    lastFrameTime = now;
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let index = petals.length - 1; index >= 0; index -= 1) {
      const petal = petals[index];
      petal.age += delta;
      petal.x += (petal.vx + Math.sin(petal.age * 5.2) * petal.drift) * delta;
      petal.y += petal.vy * delta;
      petal.rotation += petal.spin * delta;

      if (petal.age >= petal.life || petal.y > window.innerHeight + 40) {
        petals.splice(index, 1);
        continue;
      }

      drawPetal(petal);
    }

    animationId = requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;

    const now = performance.now();
    if (now - lastSpawnedAt < 22) return;
    lastSpawnedAt = now;

    spawnPetal(pointer.x, pointer.y);
    if (Math.random() > 0.55) spawnPetal(pointer.x, pointer.y);
  });

  window.addEventListener("pointerdown", (event) => {
    for (let index = 0; index < 10; index += 1) {
      spawnPetal(event.clientX, event.clientY);
    }
  });

  resize();
  animationId = requestAnimationFrame(animate);

  window.addEventListener("beforeunload", () => {
    cancelAnimationFrame(animationId);
  });
}

function setupWorld() {
  const canvas = document.querySelector("#world");
  const context = canvas?.getContext("2d", { alpha: true });
  if (!canvas || !context) return;

  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointer = {
    x: 0.5,
    y: 0.5,
    targetX: 0.5,
    targetY: 0.5,
  };
  const palette = [
    { r: 188, g: 208, b: 255 },
    { r: 111, g: 231, b: 255 },
    { r: 159, g: 125, b: 255 },
    { r: 244, g: 247, b: 255 },
  ];

  let width = 0;
  let height = 0;
  let particles = [];
  let noisePattern = null;
  let animationId = 0;
  let lastTime = performance.now();
  let scrollProgress = 0;
  let scrollTarget = 0;

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function makeParticle() {
    const color = palette[Math.floor(Math.random() * palette.length)];
    return {
      x: Math.random(),
      y: Math.random(),
      z: randomBetween(0.18, 1),
      vx: randomBetween(-0.0018, 0.0018),
      vy: randomBetween(-0.0012, 0.0012),
      radius: randomBetween(0.75, 2.6),
      phase: randomBetween(0, Math.PI * 2),
      pulse: randomBetween(0.35, 1.2),
      color,
    };
  }

  function makeNoisePattern() {
    const size = 128;
    const noiseCanvas = document.createElement("canvas");
    const noiseContext = noiseCanvas.getContext("2d");
    if (!noiseContext) return null;

    noiseCanvas.width = size;
    noiseCanvas.height = size;
    const image = noiseContext.createImageData(size, size);

    for (let index = 0; index < image.data.length; index += 4) {
      const value = 185 + Math.random() * 70;
      image.data[index] = value;
      image.data[index + 1] = value;
      image.data[index + 2] = value;
      image.data[index + 3] = Math.random() * 18;
    }

    noiseContext.putImageData(image, 0, 0);
    return context.createPattern(noiseCanvas, "repeat");
  }

  function rebuildParticles() {
    const viewportArea = Math.max(1, width * height);
    const count = reducedMotionQuery.matches
      ? 46
      : clamp(Math.round(viewportArea / 15500), 78, 142);
    particles = Array.from({ length: count }, makeParticle);
  }

  function resize() {
    width = Math.max(1, window.innerWidth);
    height = Math.max(1, window.innerHeight);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    noisePattern = makeNoisePattern();
    rebuildParticles();
    requestFrame();
  }

  function updateScrollTarget() {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    scrollTarget = clamp(window.scrollY / maxScroll, 0, 1);
    if (reducedMotionQuery.matches) requestFrame();
  }

  function drawGlow(x, y, radius, color) {
    const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.42, color.replace(/[\d.]+\)$/u, "0.045)"));
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
  }

  function drawMistBand(y, rotation, alpha) {
    context.save();
    context.translate(width / 2, y);
    context.rotate(rotation);
    const band = context.createLinearGradient(-width * 0.7, 0, width * 0.7, 0);
    band.addColorStop(0, "rgba(0, 0, 0, 0)");
    band.addColorStop(0.34, `rgba(105, 179, 255, ${alpha})`);
    band.addColorStop(0.54, `rgba(244, 247, 255, ${alpha * 0.5})`);
    band.addColorStop(1, "rgba(0, 0, 0, 0)");
    context.fillStyle = band;
    context.fillRect(-width, -height * 0.075, width * 2, height * 0.15);
    context.restore();
  }

  function resolveParticlePoint(particle, time, motionStrength) {
    const depth = particle.z;
    const pointerX = (pointer.x - 0.5) * (28 + depth * 70) * motionStrength;
    const pointerY = (pointer.y - 0.5) * (18 + depth * 44) * motionStrength;
    const scrollY = (scrollProgress - 0.5) * depth * 70 * motionStrength;
    const driftX = Math.sin(time * particle.pulse + particle.phase) * depth * 11 * motionStrength;
    const driftY = Math.cos(time * (particle.pulse * 0.72) + particle.phase) * depth * 7 * motionStrength;

    return {
      x: particle.x * width + pointerX + driftX,
      y: particle.y * height + pointerY + scrollY + driftY,
      z: depth,
      radius: particle.radius * (0.75 + depth * 1.2),
      color: particle.color,
      alpha: (0.055 + depth * 0.3) * (reducedMotionQuery.matches ? 0.48 : 1),
    };
  }

  function drawParticles(time, delta, motionStrength) {
    const points = particles.map((particle) => {
      if (!reducedMotionQuery.matches) {
        particle.x += particle.vx * delta * (22 + particle.z * 28);
        particle.y += particle.vy * delta * (18 + particle.z * 22);

        if (particle.x < -0.08) particle.x = 1.08;
        if (particle.x > 1.08) particle.x = -0.08;
        if (particle.y < -0.08) particle.y = 1.08;
        if (particle.y > 1.08) particle.y = -0.08;
      }

      return resolveParticlePoint(particle, time, motionStrength);
    });

    context.save();
    context.globalCompositeOperation = "lighter";

    for (let i = 0; i < points.length; i += 1) {
      const point = points[i];
      for (let j = i + 1; j < Math.min(points.length, i + 7); j += 1) {
        const nextPoint = points[j];
        const distance = Math.hypot(point.x - nextPoint.x, point.y - nextPoint.y);
        const limit = 82 + (point.z + nextPoint.z) * 34;
        if (distance >= limit) continue;

        const lineAlpha = (1 - distance / limit) * 0.08 * (point.z + nextPoint.z);
        context.strokeStyle = `rgba(188, 208, 255, ${lineAlpha})`;
        context.lineWidth = 0.55;
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(nextPoint.x, nextPoint.y);
        context.stroke();
      }
    }

    for (const point of points) {
      const { r, g, b } = point.color;
      context.fillStyle = `rgba(${r}, ${g}, ${b}, ${point.alpha})`;
      context.beginPath();
      context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      context.fill();

      if (point.z > 0.68) {
        const glow = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius * 7.5);
        glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${point.alpha * 0.22})`);
        glow.addColorStop(1, "rgba(0, 0, 0, 0)");
        context.fillStyle = glow;
        context.beginPath();
        context.arc(point.x, point.y, point.radius * 7.5, 0, Math.PI * 2);
        context.fill();
      }
    }

    context.restore();
  }

  function render(now) {
    animationId = 0;
    const delta = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
    const time = now * 0.001;
    const reduced = reducedMotionQuery.matches;
    const motionStrength = reduced ? 0.22 : 1;
    lastTime = now;

    pointer.x += (pointer.targetX - pointer.x) * (reduced ? 0.18 : 0.055);
    pointer.y += (pointer.targetY - pointer.y) * (reduced ? 0.18 : 0.055);
    scrollProgress += (scrollTarget - scrollProgress) * (reduced ? 0.2 : 0.07);

    context.globalCompositeOperation = "source-over";
    context.clearRect(0, 0, width, height);

    const base = context.createLinearGradient(0, 0, width, height);
    base.addColorStop(0, "#02040a");
    base.addColorStop(0.42, "#070b14");
    base.addColorStop(1, "#010207");
    context.fillStyle = base;
    context.fillRect(0, 0, width, height);

    context.globalCompositeOperation = "screen";
    drawGlow(
      width * (0.18 + (pointer.x - 0.5) * 0.055),
      height * (0.18 + (pointer.y - 0.5) * 0.045 - scrollProgress * 0.04),
      Math.max(width, height) * 0.72,
      "rgba(74, 112, 255, 0.13)",
    );
    drawGlow(
      width * (0.82 + (pointer.x - 0.5) * 0.035),
      height * (0.34 + (pointer.y - 0.5) * 0.035 + scrollProgress * 0.035),
      Math.max(width, height) * 0.62,
      "rgba(95, 234, 255, 0.085)",
    );
    drawGlow(
      width * 0.54,
      height * (0.82 - scrollProgress * 0.05),
      Math.max(width, height) * 0.68,
      "rgba(152, 99, 255, 0.072)",
    );
    drawMistBand(height * (0.38 + Math.sin(time * 0.08) * 0.025), -0.28, 0.034);
    drawMistBand(height * (0.7 + Math.cos(time * 0.07) * 0.018), 0.22, 0.024);

    drawParticles(time, delta, motionStrength);

    context.globalCompositeOperation = "source-over";
    const vignette = context.createRadialGradient(width / 2, height / 2, Math.min(width, height) * 0.22, width / 2, height / 2, Math.max(width, height) * 0.72);
    vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
    vignette.addColorStop(1, "rgba(0, 0, 0, 0.54)");
    context.fillStyle = vignette;
    context.fillRect(0, 0, width, height);

    if (noisePattern) {
      context.globalAlpha = reduced ? 0.035 : 0.052;
      context.fillStyle = noisePattern;
      context.fillRect(0, 0, width, height);
      context.globalAlpha = 1;
    }

    if (!reduced) {
      animationId = requestAnimationFrame(render);
    }
  }

  function requestFrame() {
    if (!animationId) animationId = requestAnimationFrame(render);
  }

  function handlePointerMove(event) {
    pointer.targetX = clamp(event.clientX / Math.max(1, window.innerWidth), 0, 1);
    pointer.targetY = clamp(event.clientY / Math.max(1, window.innerHeight), 0, 1);
    if (reducedMotionQuery.matches) requestFrame();
  }

  function handleMotionPreferenceChange() {
    rebuildParticles();
    lastTime = performance.now();
    requestFrame();
  }

  window.addEventListener("pointermove", handlePointerMove, { passive: true });
  window.addEventListener("scroll", updateScrollTarget, { passive: true });
  window.addEventListener("resize", resize);
  if (reducedMotionQuery.addEventListener) {
    reducedMotionQuery.addEventListener("change", handleMotionPreferenceChange);
  } else {
    reducedMotionQuery.addListener(handleMotionPreferenceChange);
  }

  resize();
  updateScrollTarget();
  requestFrame();
}
