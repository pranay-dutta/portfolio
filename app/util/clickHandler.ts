const clickHandler = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, fn?: () => void) => {
  const target = e.currentTarget;
  target.style.setProperty("pointer-events", "none");

  setTimeout(() => {
    target.style.setProperty("pointer-events", "auto");
  }, 100);

  fn?.(); // Call the provided function if it exists
};
export default clickHandler;
