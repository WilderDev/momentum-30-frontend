interface IProps {
  text: string;
}

export default function LeftSidebarTooltip({ text }: IProps) {
  return (
    <div className="pointer-events-none absolute rounded-md opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-focus:opacity-100 left-14 group-hover:left-[72px] group-focus:left-[72px]">
      <span className="block whitespace-nowrap break-keep rounded-md bg-orange-50 px-2 py-1 text-sm font-medium text-orange-900 dark:bg-orange-400 dark:text-orange-100">
        {text}
      </span>

      <div className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 transform rounded-sm bg-orange-50/90 dark:bg-orange-400 -left-1" />
    </div>
  );
}
