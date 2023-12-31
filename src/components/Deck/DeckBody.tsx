import { CardType } from "@/types/cardType";
import { Card } from "../Card";
import { CardInfo } from "@/types/cardInfo";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  magicCards: (CardInfo | undefined)[];
  companionCards: (CardInfo | undefined)[];
  onClick?: (index: number, type: CardType.MAGIC | CardType.COMPANION) => void;
  activeIndex?: number;
  activeType?: CardType.MAGIC | CardType.COMPANION | unknown;
}

function CardButton({
  onClick,
  active,
  ...cardProps
}: ComponentProps<typeof Card> & {
  onClick?: () => void;
  active: boolean;
}) {
  if (onClick) {
    return (
      <button
        aria-label={cardProps.name}
        onClick={onClick}
        className={twMerge(active ? "animate-grow" : undefined)}
      >
        <Card {...cardProps} withLink={false} />
      </button>
    );
  }
  return <Card {...cardProps} />;
}
export function DeckBody({
  magicCards,
  companionCards,
  onClick,
  activeIndex,
  activeType,
}: Props) {
  return (
    <div className="flex flex-wrap flex-row gap-6 justify-center">
      <div className="flex items-end gap-1 flex-wrap justify-center">
        <div className="flex items-end gap-1">
          {magicCards.slice(0, 4).map((cardInfo, index) => (
            <CardButton
              key={cardInfo?.id ?? `magic-card-${index}`}
              withTooltip
              withAnimation
              {...cardInfo}
              withLink
              active={activeIndex === index && activeType === CardType.MAGIC}
              onClick={
                onClick
                  ? () => {
                      onClick(index, CardType.MAGIC);
                    }
                  : undefined
              }
              type={CardType.MAGIC}
            />
          ))}
        </div>
        <div className="flex items-end gap-1">
          {magicCards.slice(4, 8).map((cardInfo, index) => (
            <CardButton
              key={cardInfo?.id ?? `magic-card-${index + 4}`}
              withTooltip
              withAnimation
              {...cardInfo}
              withLink
              active={
                activeIndex === index + 4 && activeType === CardType.MAGIC
              }
              onClick={
                onClick
                  ? () => {
                      onClick(index + 4, CardType.MAGIC);
                    }
                  : undefined
              }
              type={CardType.MAGIC}
            />
          ))}
        </div>
      </div>

      <div className="flex items-end gap-1 flex-wrap">
        {companionCards.map((cardInfo, index) => (
          <CardButton
            withTooltip
            withAnimation
            key={cardInfo?.id ?? `companion-card-${index}`}
            {...cardInfo}
            withLink
            active={activeIndex === index && activeType === CardType.COMPANION}
            onClick={
              onClick
                ? () => {
                    onClick(index, CardType.COMPANION);
                  }
                : undefined
            }
            type={CardType.COMPANION}
          />
        ))}
      </div>
    </div>
  );
}
