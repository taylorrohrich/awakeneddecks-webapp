export const API_ROUTES = {
  deckListGet: "/deck/list",
  deckCodeGet: "/deck/code",
  deckGet: (deckId: number) => `/deck/${deckId}`,
  deckPost: "/deck",
  deckPut: (deckId: number) => `/deck/${deckId}`,
  deckDelete: (deckId: number) => `/deck/${deckId}`,
  deckCardPost: (deckId: number) => `/deck/${deckId}/card`,
  deckCardPut: (deckCardId: number) => `/deck/card/${deckCardId}`,
  deckCardDelete: (deckCardId: number) => `/deck/card/${deckCardId}`,
  deckVotePost: (deckId: number) => `/deck/${deckId}/vote`,
  deckVoteDelete: (deckId: number) => `/deck/${deckId}/vote`,
  cardListGet: "/card/list",
  cardGet: (cardId: number) => `/card/${cardId}`,
  categoryListGet: "/category/list",
  categoryGet: (categoryId: number) => `/category/${categoryId}`,
  echoListGet: "/echo/list",
  echoGet: (echoId: number) => `/echo/${echoId}`,
  tagyListGet: "/tag/list",
  tagGet: (tagId: number) => `/tag/${tagId}`,
  deckProfileListGet: "/deck/profile/list",
  deckUserListGet: (userId: number) => `/deck/user/${userId}/list`,
  userGet: (userId: number) => `/user/${userId}`,
  profileUpdate: `/profile`,
  profileGet: `/profile`,
  postGet: (postId: number) => `/post/${postId}`,
  postLatestGet: "/post/latest",
} as const;

export const ROUTES = {
  home: "/",
  user: (userId: number) => `/user/${userId}`,
  decks: "/deck",
  deck: (deckId: number) => `/deck/${deckId}`,
  deckBuilder: "/deck/builder",
  profileSettings: "/profile/settings",
  profileDeck: "/profile/deck",
  profileDeckAdd: "/profile/deck/add",
  profileDeckEdit: (deckId: number) => `/profile/deck/${deckId}`,
  cards: "/database/card",
  echoes: "/database/echo",
  card: (cardId: number) => `/database/card/${cardId}`,
  echo: (echoId: number) => `/database/echo/${echoId}`,
  login: "/api/auth/login",
  logout: "/api/auth/logout",
};
