import React from 'react';
import { BiEnvelope } from 'react-icons/bi';

function Form() {
    return (
        <form action="POST" className="mt-[48px] w-full">
            <label htmlFor="phone" className="text-dark-blue-400 relative">
                <div className="flex items-center gap-[10px] absolute top-[50%] -translate-y-[50%] left-[20px]">
                    <BiEnvelope width={16} height={16} />
                    <span className="text-[16px] leading-[24px] -tracking-[0.3px] ">Мобилен телефон</span>
                </div>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="outline-none focus:outline-cta-green py-3 md:py-[24px] px-4 md:px-[20px] rounded-l-md w-[40%]"
                />
            </label>
            <input
                type="submit"
                value="Изпрати"
                className="hover:cursor-pointer py-3 md:py-[24px] px-4 md:px-[36px] font-semibold text-[16px] leading-[24px] -tracking-[0.3px] text-dark-blue-900 bg-cta-green rounded-r-md"
            />
        </form>
    );
}

export default Form;
