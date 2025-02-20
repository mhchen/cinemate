import Image from "next/image";
import { ReactNode } from "react";

export default function EmptyState({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center py-12 gap-12">
      <div className="w-full max-w-60 aspect-square relative">
        <Image src="/empty-state.svg" alt="" fill />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
