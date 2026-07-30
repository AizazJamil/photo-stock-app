import type { ReactNode } from "react";

export const icons = {
  home: <path d="M3 10L12 3L21 10V20H15V14H9V20H3V10Z" />,
  search: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
    />
  ),
  user: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0" />,
  logos: (
    <>
      <defs>
        <mask id="starMask">
          <rect width="200" height="200" fill="currentColor" />
          <path
            d="M 100 30 Q 100 100 30 100 Q 100 100 100 170 Q 100 100 170 100 Q 100 100 100 30 Z"
            fill="#000000"
          />
        </mask>
      </defs>
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="currentColor"
        mask="url(#starMask)"
      />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof icons;
