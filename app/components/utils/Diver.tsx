"use client";

interface Diver {
  my: number;
}

export const Diver: React.FC<Diver> = ({ my }) => {
  return (
    <div className={`my-[${my}px]`}>
      <hr className="h-px my-8 bg-muted border-0" />
    </div>
  );
};
