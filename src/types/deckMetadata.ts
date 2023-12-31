import { CardInfo } from "./cardInfo";
import { Category } from "./category";
import { Tier } from "./tier";

export interface DeckMetadata {
  name: string;
  id: number;
  code: string;
  avgCost: number;
  tagId: number;
  tagName: string;
  categoryId: number;
  createdAt: string;
  categoryName: Category;
  echoId: number;
  echoName: string;
  score: number;
  userVote: boolean;
  isUserDeck: boolean;
  authorId: number;
  authorNickname: string;
  magicCardOne: CardInfo;
  magicCardTwo: CardInfo;
  magicCardThree: CardInfo;
  magicCardFour: CardInfo;
  magicCardFive: CardInfo;
  magicCardSix: CardInfo;
  magicCardSeven: CardInfo;
  magicCardEight: CardInfo;
  companionCardOne: CardInfo;
  companionCardTwo: CardInfo;
  companionCardThree: CardInfo;
  tierName?: Tier;
}
