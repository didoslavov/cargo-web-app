import { BiEnvelope } from "react-icons/bi";

function Form() {
  return (
    <form
      action="POST"
      className="mt-10 flex w-full items-center justify-center md:mt-[48px]"
    >
      <div className="rounded-l-md bg-white px-4 py-3 md:px-[20px] md:py-[24px]">
        <BiEnvelope
          width={16}
          height={16}
          className="text-2xl text-dark-blue-400"
        />
      </div>
      <label htmlFor="phone" className="relative text-dark-blue-400">
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Мобилен телефон"
          className="px-4 py-3 outline-none -outline-offset-2 focus:outline-cta-green md:px-[20px] md:py-[24px]"
        />
      </label>
      <input
        type="submit"
        value="Изпрати"
        className="rounded-r-md bg-cta-green px-4 py-3 text-[16px] font-semibold leading-[24px] -tracking-[0.3px] text-dark-blue-900 hover:cursor-pointer md:px-[36px] md:py-[24px]"
      />
    </form>
  );
}

export default Form;
