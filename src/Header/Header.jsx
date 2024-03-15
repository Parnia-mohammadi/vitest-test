import React from "react";

function Header({ title }) {
  return (
    <div>
      <h1 title="header">{title}</h1>
      <h2 data-testId="header-2">react</h2>
      <section>
        <button
          role="spinbutton"
          aria-valuenow={5}
          aria-valuemin={0}
          aria-valuemax={10}
        >
          volume
        </button>
        <button
          role="spinbutton"
          aria-valuenow={3}
          aria-valuemin={0}
          aria-valuemax={10}
        >
          volume2
        </button>
      </section>
    </div>
  );
}

export default Header;
