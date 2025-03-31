
const RightAndLeftArrowButtons = ({
  scrollabelContainerRef,
  scrollSpeed,
}: any) => {
  const onLeftIconClick = () => {
    scrollabelContainerRef.current.scrollLeft -= scrollSpeed;
  };

  const onRightIconClick = () => {
    scrollabelContainerRef.current.scrollLeft += scrollSpeed;
  };

  return (
    <div className="flex justify-between gap-4">
      <span onClick={onLeftIconClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </span>

      <span onClick={onRightIconClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
    </div>
  );
};

export default RightAndLeftArrowButtons;
