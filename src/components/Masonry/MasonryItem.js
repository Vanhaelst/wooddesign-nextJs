import React from "react";
import { handleViewport } from "react-in-viewport";
import Link from "@/components/Link";
import Heading from "@/components/Heading";
import { cx } from "@/utils/cx";

// Slides up and fades in the first time the card scrolls into view.
const Block = ({ item, enterCount, forwardedRef }) => (
  <div
    ref={forwardedRef}
    className={cx(
      "relative transition-all delay-[250ms] duration-500 lg:duration-1000",
      enterCount
        ? "top-0 opacity-100"
        : "top-[100px] opacity-0 lg:top-[300px]",
    )}
  >
    <div className="item" key={item.title}>
      <div className="content">
        <div>
          <Link
            href={`/realisaties/${encodeURIComponent(item.slug)}`}
            type="hidden"
          >
            <div
              className="h-[400px] w-full bg-cover rounded-lg"
              style={{ backgroundImage: `url("${item.images[0]?.url}")` }}
            >
              <div className="h-full w-full bg-black/75 p-[50px] opacity-0 transition-all duration-500 hover:opacity-100">
                <div className="border-l border-solid border-white pl-[25px]">
                  {item.title && (
                    <Heading level={3} color="#ffffff">
                      {item.title}
                    </Heading>
                  )}
                  {item.customer && (
                    <>
                      <Heading
                        level={4}
                        fontFamily="secondary"
                        fontWeight="regular"
                        color="#ffffff"
                        pt={7}
                      >
                        Klant
                      </Heading>
                      <Heading
                        level={4}
                        fontFamily="secondary"
                        fontWeight="light"
                        textTransform="uppercase"
                        color="#ffffff"
                        className="m-0 text-[12px] tracking-[2px]"
                      >
                        {item.customer}
                      </Heading>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

const MasonryItem = ({ item }) => <ViewportBlock item={item} />;

export default MasonryItem;
