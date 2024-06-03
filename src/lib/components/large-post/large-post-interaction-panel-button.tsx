export default function LargeInteractionPanelButton({
  children,
  interactionCount,
}: {
  children: React.ReactNode;
  interactionCount?: number;
}) {
  return (
    <button
      aria-label="Dummy button"
      className="min-h-[20px] flex gap-x-1 items-center leading-5"
    >
      <div className="relative">
        <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#1d9bf0] hover:bg-opacity-10 duration-200" />
        {children}
      </div>
      {interactionCount && interactionCount > 0 ? (
        <span className="text-[13px] leading-4 text-[#71767b]">
          {interactionCount}
        </span>
      ) : null}
    </button>
  );
}
