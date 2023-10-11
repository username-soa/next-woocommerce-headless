const ScrollLink = ({ children, href, ...props }) => {
  const handleScroll = () => {
    const offset = 71;

    if (!(typeof window === "undefined")) {
      const hash = href;

      const startWithHashRegex = /^#\w+/g;
      const targetElement = document?.querySelector(`${hash}`);

      if (!startWithHashRegex.test(hash) || !targetElement) {
        return;
      }

      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      const scroll = () => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      };

      requestAnimationFrame(scroll);
    }
  };
  return (
    <button {...props} onClick={handleScroll}>
      {children}
    </button>
  );
};

export default ScrollLink;
