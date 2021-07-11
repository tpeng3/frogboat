import relationships from "@components/Relationships/content.yaml";

export const breakpoints = {
  mobile: 370,
  tablet: 600,
  laptop: 800,
  desktop: 1024,
  desktopLarge: 1280,
};

export const COLORS = {
  GREY_DEFAULT: "#29282C",
  GREY_HOVER: "#3B3A3C",
  GREY_1000: "#1A1A1A",
  GREY_800: "#1D1D1D",
  GREY_300: "##555555",
  GREY_200: "#55535A",
  GREY_100: "#696969",
  GREY_50: "#F3F3F3",
  white: "#FFFFFF",
  black: "#000000",
  shadow: "#29282C",
  TEAL_500: "#73DFCB",
  LINK: "#73DFCB",
  LINK_ACTIVE: "#73DFCB",
};

export const TAG_COLORS = {
  SORTED: "rgba(208, 255, 191, 1)",
  UTIL: "rgba(191, 230, 255, 1)",
  PERSONAL: "rgba(255, 207, 207, 1)",
  DEV: "rgba(255, 217, 196, 1)",
  ART: "rgba(255, 249, 178, 1)",
  PROJECT: "rgba(219, 247, 188, 1)",
  CHARACTER: "rgba(178, 255, 232, 1)",
  MEDIA: "rgba(226, 191, 255, 1)",
  OTHER: "rgba(227, 227, 227, 1)",
};

export const TAG_TYPE = {
  SORTED: 0,
  UTIL: 1,
  PERSONAL: 2,
  DEV: 3,
  ART: 4,
  PROJECT: 5,
  CHARACTER: 6,
  MEDIA: 7,
  OTHER: 8,
};

export const TYPE_NAMES = {
  0: "SORTED",
  1: "UTIL",
  2: "PERSONAL",
  3: "DEV",
  4: "ART",
  5: "PROJECT",
  6: "CHARACTER",
  7: "MEDIA",
  8: "OTHER",
};

export const GET_TAG_LINK = (tag) => {
  switch (tag.type) {
    case TAG_TYPE.PROJECT:
      return `/oc/${tag.key}`;
    case TAG_TYPE.CHARACTER:
      if (tag.key in relationships) {
        return relationships[tag.key].link;
      } else {
        return "/tina";
      }
    default:
      // damn I think I need to add params in tina test gallery
      return "/tina";
  }
};

export const TAG_LIST = [
  {
    key: "personal",
    name: "Personal",
    color: TAG_COLORS.PERSONAL,
    type: TAG_TYPE.PERSONAL,
  },
  {
    key: "private",
    name: "Private",
    color: TAG_COLORS.PERSONAL,
    type: TAG_TYPE.PERSONAL,
  },
  { key: "oc", name: "OC", color: TAG_COLORS.DEV, type: TAG_TYPE.DEV },
  { key: "dev", name: "Dev", color: TAG_COLORS.DEV, type: TAG_TYPE.DEV },
  { key: "notes", name: "Notes", color: TAG_COLORS.DEV, type: TAG_TYPE.DEV },
  {
    key: "gamedev",
    name: "GameDev",
    color: TAG_COLORS.DEV,
    type: TAG_TYPE.DEV,
  },
  { key: "art", name: "Art", color: TAG_COLORS.ART, type: TAG_TYPE.ART },
  { key: "wip", name: "WIP", color: TAG_COLORS.ART, type: TAG_TYPE.ART },
  {
    key: "warm",
    name: "Warm",
    color: TAG_COLORS.PERSONAL,
    type: TAG_TYPE.PERSONAL,
  },
  {
    key: "friendart",
    name: "FriendArt",
    color: TAG_COLORS.ART,
    type: TAG_TYPE.ART,
  },
  {
    key: "externalart",
    name: "ExternalArt",
    color: TAG_COLORS.ART,
    type: TAG_TYPE.ART,
  },
  {
    key: "commission",
    name: "Commission",
    color: TAG_COLORS.ART,
    type: TAG_TYPE.ART,
  },
  { key: "fanart", name: "Fanart", color: TAG_COLORS.ART, type: TAG_TYPE.ART },
  { key: "asset", name: "Asset", color: TAG_COLORS.ART, type: TAG_TYPE.ART },
  {
    key: "giftart",
    name: "GiftArt",
    color: TAG_COLORS.ART,
    type: TAG_TYPE.ART,
  },
  {
    key: "spoiler",
    name: "Spoiler",
    color: TAG_COLORS.DEV,
    type: TAG_TYPE.DEV,
  },
  { key: "memes", name: "Memes", color: TAG_COLORS.ART, type: TAG_TYPE.ART },
  {
    key: "writing",
    name: "Writing",
    color: TAG_COLORS.ART,
    type: TAG_TYPE.ART,
  },
  { key: "comic", name: "Comics", color: TAG_COLORS.ART, type: TAG_TYPE.ART },
  { key: "doodle", name: "Doodle", color: TAG_COLORS.ART, type: TAG_TYPE.ART },
  { key: "pixel", name: "Pixel", color: TAG_COLORS.ART, type: TAG_TYPE.ART },
  { key: "cringe", name: "Cringe", color: TAG_COLORS.ART, type: TAG_TYPE.ART },
  {
    key: "reference",
    name: "Reference",
    color: TAG_COLORS.ART,
    type: TAG_TYPE.ART,
  },

  {
    key: "oceptember",
    name: "OCeptember",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },
  {
    key: "telememe",
    name: "Telememe",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },
  {
    key: "ocss",
    name: "OC Secret Santa",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },

  {
    key: "onm",
    name: "ONM",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },
  {
    key: "oc hotaru",
    name: "Hotaru",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc marina",
    name: "Marina",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc kokoro",
    name: "Kokoro",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc tetsu",
    name: "Tetsu",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc jun",
    name: "Jun",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc sachiko",
    name: "Sachiko",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc aogi",
    name: "Aogi",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc chiyori",
    name: "Chiyori",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "horo",
    name: "HORO",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },
  {
    key: "oc fei",
    name: "Fei",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc kazu",
    name: "Kazuma",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc priya",
    name: "Priya",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc jonah",
    name: "Jonah",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc vivi",
    name: "Vivianne",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc tedd",
    name: "Tedd",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "dfc",
    name: "DFC",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },
  {
    key: "oc seven",
    name: "Seven",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc aster",
    name: "Aster",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc patti",
    name: "Patti",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc nova",
    name: "Nova",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc curry",
    name: "Curry",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "saq",
    name: "SAQ",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },
  {
    key: "oc seina",
    name: "Seina",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc quille",
    name: "Quille",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc heidi",
    name: "Heidi",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc kane",
    name: "Kane",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "harold",
    name: "HAROLD",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },
  {
    key: "oc sydney",
    name: "Sydney",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc ravenna",
    name: "Ravenna",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "svsb",
    name: "SVSB",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },
  {
    key: "oc soma",
    name: "Soma",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc mana",
    name: "Mana",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "nmd",
    name: "NMD",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },
  {
    key: "oc locke",
    name: "Locke",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc keyna",
    name: "Keyna",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc tai",
    name: "Tai",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc fedelynn",
    name: "Fedelynn",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "oc lori",
    name: "Lori",
    color: TAG_COLORS.CHARACTER,
    type: TAG_TYPE.CHARACTER,
  },
  {
    key: "typo",
    name: "TYPO",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },
  {
    key: "citc",
    name: "CITC",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },
  {
    key: "wetr",
    name: "WETR",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },
  {
    key: "roomba",
    name: "Escape Roomba",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },
  {
    key: "etc",
    name: "Etc.",
    color: TAG_COLORS.PROJECT,
    type: TAG_TYPE.PROJECT,
  },

  {
    key: "comment",
    name: "Comment",
    color: TAG_COLORS.UTIL,
    type: TAG_TYPE.UTIL,
  },
  { key: "todo", name: "TODO", color: TAG_COLORS.UTIL, type: TAG_TYPE.UTIL },
  {
    key: "hidden",
    name: "Hidden",
    color: TAG_COLORS.UTIL,
    type: TAG_TYPE.UTIL,
  },
  { key: "multi", name: "Multi", color: TAG_COLORS.UTIL, type: TAG_TYPE.UTIL },

  {
    key: "other",
    name: "Other",
    color: TAG_COLORS.OTHER,
    type: TAG_TYPE.OTHER,
  },
  {
    key: "sorted",
    name: "Sorted",
    color: TAG_COLORS.SORTED,
    type: TAG_TYPE.SORTED,
  },

  {
    key: "homestuck",
    name: "Homestuck",
    color: TAG_COLORS.MEDIA,
    type: TAG_TYPE.MEDIA,
  },
  {
    key: "heartbeat",
    name: "Heartbeat",
    color: TAG_COLORS.MEDIA,
    type: TAG_TYPE.MEDIA,
  },
  {
    key: "ze",
    name: "Escape Games",
    color: TAG_COLORS.MEDIA,
    type: TAG_TYPE.MEDIA,
  },
  {
    key: "lvl5",
    name: "Level 5",
    color: TAG_COLORS.MEDIA,
    type: TAG_TYPE.MEDIA,
  },
  {
    key: "mobage",
    name: "Mobage",
    color: TAG_COLORS.MEDIA,
    type: TAG_TYPE.MEDIA,
  },
  {
    key: "genshin",
    name: "Genshin Impact",
    color: TAG_COLORS.MEDIA,
    type: TAG_TYPE.MEDIA,
  },
  {
    key: "nintendo",
    name: "Nintendo",
    color: TAG_COLORS.MEDIA,
    type: TAG_TYPE.MEDIA,
  },
  {
    key: "fe",
    name: "Fire Emblem",
    color: TAG_COLORS.MEDIA,
    type: TAG_TYPE.MEDIA,
  },
  {
    key: "persona",
    name: "Atlus Games",
    color: TAG_COLORS.MEDIA,
    type: TAG_TYPE.MEDIA,
  },
  {
    key: "square",
    name: "Square Enix Games",
    color: TAG_COLORS.MEDIA,
    type: TAG_TYPE.MEDIA,
  },
  {
    key: "kr",
    name: "Kamen Rider",
    color: TAG_COLORS.MEDIA,
    type: TAG_TYPE.MEDIA,
  },
];
