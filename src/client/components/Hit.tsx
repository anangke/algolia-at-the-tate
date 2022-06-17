import type { Hit } from "instantsearch.js";
import { Highlight } from "react-instantsearch-hooks-web";

export type HitProps = {
  hit: Hit;
};

export function Hit({ hit }: HitProps) {
  //console.log(hit);
  return (
    <article>
      <h1>
        <Highlight attribute="title" hit={hit} />
      </h1>
      {hit.thumbnailUrl && (
        <a href={hit.url} target="_blank">
          <img className="thumbimg" src={hit.thumbnailUrl} alt={hit.title} />
        </a>
      )}

      {!hit.thumbnailUrl && (
        <div className="nothumb">
          <a href={hit.url} target="_blank"></a>
        </div>
      )}
      <p>
        <Highlight attribute="artist" hit={hit} />
      </p>
    </article>
  );
}
