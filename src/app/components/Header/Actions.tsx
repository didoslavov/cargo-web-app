function Actions({ className }: { className: string }) {
    return (
        <div className={`text-[16px] tracking-[0px] leading-[170%] ${className}`}>
            <a href="#" className="font-medium hover:underline ">
                Профил
            </a>
            <button className="font-semibold border-[2px] hover:text-white hover:bg-dark-blue border-dark-blue text-dark-blue rounded-lg py-[12px] px-[14px] transition-colors">
                Заявка за пратка
            </button>
        </div>
    );
}

export default Actions;
