export function LinkButton({ title, width, children, link }) {
  if (link) {
    return (
      <a
        className={`menu-button ${
          width > 600 && 'plus-padding'
        } flex-container gap-5`}
        href='#'
      >
        <span>{children}</span>
        {width > 1120 && <span>{title}</span>}
      </a>
    );
  } else {
    return (
      <button
        className={`menu-button ${
          width > 600 && 'plus-padding'
        } flex-container gap-5`}
      >
        <span>{children}</span>
        {width > 1120 && <span>{title}</span>}
      </button>
    );
  }
}
