import { useEffect, useRef } from "react";

const useInfiniteScroll = (onLoadMore, hasMore) => {
  const sentinelRef = useRef(null);
  const loadingRef = useRef(false);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!hasMore || !node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loadingRef.current) {
          loadingRef.current = true;
          Promise.resolve(onLoadMore()).finally(() => {
            loadingRef.current = false;
          });
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [onLoadMore, hasMore]);

  return sentinelRef;
};

export default useInfiniteScroll;
