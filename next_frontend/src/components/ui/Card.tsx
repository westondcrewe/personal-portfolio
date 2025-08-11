"use client";

import { FC, ReactNode } from "react";
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
  const content = (
    <article
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 flex ${
        horizontal ? "flex-row gap-6 h-48" : "flex-col h-full"
      }`}
    >
      {/* Content first (title, desc, tags) */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-stone-700 font-semibold text-2xl mb-2">{title}</h3>
        <p className="text-gray-700 flex-grow">{description}</p>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">{/* tags here */}</div>
        )}
      </div>

      {/* Image last */}
      {image && (
        <img
          src={image}
          alt={`${title} screenshot`}
          className={`rounded object-cover ${
            horizontal ? "w-48 h-full flex-shrink-0 ml-6" : "h-48 w-full mb-4 ml-6"
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
