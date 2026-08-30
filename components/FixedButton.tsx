import React, { ReactNode } from "react";

interface FixedButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function FixedButton({
  children,
  onClick,
}: FixedButtonProps): React.ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex h-10 w-10
        shrink-0
        items-center justify-center
        rounded-full
        transition
        hover:bg-gray-100
      "
    >
      {children}
    </button>
  );
}
