"use client";

import { FC, useState } from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
  horizontal?: boolean;
}

const Card: FC<CardProps> = ({
  title,
  description,
  image,
  link,
  tags = [],
  horizontal = false,
}) => {
  const [expanded, setExpanded] = useState(false);
  const visibleTagsCount = 2;

  const handleMouseEnter = () => setExpanded(true);
  const handleMouseLeave = () => setExpanded(false);

  const tagsToShow = expanded ? tags : tags.slice(0, visibleTagsCount);

  const content = (
    <article
      className={`bg-white px-6 sm:px-8 py-6 rounded-lg shadow-md hover:shadow-lg transition p-6 flex ${
        horizontal ? "flex-row gap-6 h-auto" : "flex-col h-full"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Content first (title, desc, tags) */}
      <div className="flex flex-col flex-grow min-w-0">
        <h3 className="text-stone-700 font-semibold text-2xl mb-2 ">{title}</h3>
        <p className="text-gray-700 mb-4 break-words flex-grow">{description}</p>

        {tags.length > 0 && (
          <div
            className={`flex flex-wrap gap-2 max-w-full overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
              expanded ? "max-h-96 opacity-100" : "max-h-[3.5rem] opacity-90"
            }`}
          >
            {tagsToShow.map((tag) => (
              <div
                key={tag}
                className="bg-emerald-700 text-emerald-100 rounded px-2 py-1 text-sm hover:bg-teal-500 hover:text-teal-950 transition whitespace-nowrap"
              >
                {tag}
              </div>
            ))}

            {!expanded && tags.length > visibleTagsCount && (
              <span
                className="bg-emerald-700 text-emerald-100 rounded px-2 py-1 text-sm whitespace-nowrap select-none"
                title={tags.slice(visibleTagsCount).join(", ")}
              >
                +{tags.length - visibleTagsCount} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Image last */}
      {image && (
        <img
          src={image}
          alt={`${title} screenshot`}
          className={`rounded object-cover ${
            horizontal
              ? "w-48 h-auto max-h-48 flex-shrink-0 ml-6"
              : "h-48 w-full mb-4 ml-6"
          }`}
          loading="lazy"
        />
      )}
    </article>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`View project: ${title}`}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default Card;
