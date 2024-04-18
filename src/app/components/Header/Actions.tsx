function Actions({ className }: { className: string }) {
  return (
    <div className={`text-[16px] leading-[170%] tracking-[0px] ${className}`}>
      <a href="#" className="font-medium hover:underline ">
        Профил
      </a>
      <button className="rounded-lg border-[2px] border-dark-blue px-[14px] py-[12px] font-semibold text-dark-blue transition-colors hover:bg-dark-blue hover:text-white">
        Заявка за пратка
      </button>
    </div>
  );
}

export default Actions;
