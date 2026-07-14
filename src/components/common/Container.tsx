import { ReactNode } from "react";
import { MAX_WIDTH, SECTION_PADDING } from "@/components/lib/design-system";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div
      style={{
        maxWidth: MAX_WIDTH,
        paddingInline: SECTION_PADDING,
      }}
      className="mx-auto w-full"
    >
      {children}
    </div>
  );
}
