import React from 'react';
import { BiEnvelope } from 'react-icons/bi';

function Form() {
    return (
        <form action="POST" className="flex items-center justify-center mt-10 md:mt-[48px] w-full">
            <div className="py-3 md:py-[24px] bg-white px-4 md:px-[20px] rounded-l-md">
                <BiEnvelope width={16} height={16} className="text-2xl text-dark-blue-400" />
            </div>
            <label htmlFor="phone" className="text-dark-blue-400 relative">
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Мобилен телефон"
                    className="outline-none -outline-offset-2 focus:outline-cta-green py-3 md:py-[24px] px-4 md:px-[20px]"
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
