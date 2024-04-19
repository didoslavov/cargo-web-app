"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import Notification from "../Notification/Notification";

function Form() {
  const [phone, setPhone] = useState("");
  const [notification, setNotification] = useState({ type: "", text: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const phoneRegex = /^\+?[0-9]+(?:[ \-()]?[0-9]+)*$/g;

    if (!phone.trim()) {
      setNotification({
        type: "error",
        text: "Моля, въведете валиден телефонен номер!",
      });
      return;
    }

    if (!phoneRegex.test(phone)) {
      setNotification({
        type: "error",
        text: "Моля въведете валиден телефонен номер.",
      });
      return;
    }
    setPhone("");

    setNotification({
      type: "success",
      text: "Благодарим за доверието, ще се свържем с вас!",
    });
  };

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const closeNotification = () => {
    setNotification({ type: "", text: "" });
  };

  useEffect(() => {
    if (notification.type) {
      const timeoutId = setTimeout(() => {
        setNotification({ type: "", text: "" });
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [notification]);

  return (
    <>
      {notification.type && (
        <Notification
          type={notification.type}
          text={notification.text}
          closeNotification={closeNotification}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex w-full items-center justify-center md:mt-[48px]"
      >
        <div className="rounded-l-md bg-white px-4 py-4 md:px-[20px] md:py-[21px] md:pe-3">
          <BiEnvelope className="h-[16px] w-[20px] text-2xl text-dark-blue-400 md:h-[30px] md:w-[27px]" />
        </div>
        <label
          htmlFor="phone"
          className="relative w-[50%] text-dark-blue-400 md:w-[35%]"
        >
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Мобилен телефон"
            className="w-full px-1 py-3 outline-none -outline-offset-2 placeholder:text-xs placeholder:text-dark-blue-400 focus:outline-2 focus:outline-cta-green md:px-[20px] md:py-[24px] md:ps-1 md:placeholder:ml-10 md:placeholder:text-base md:placeholder:leading-6 md:placeholder:-tracking-[0.3px]"
            onChange={onPhoneChange}
            value={phone}
          />
        </label>
        <input
          type="submit"
          value="Изпрати"
          className="rounded-r-md bg-cta-green px-4 py-3 text-[16px] font-semibold leading-[24px] -tracking-[0.3px] text-dark-blue-900 hover:cursor-pointer md:px-[36px] md:py-[24px]"
        />
      </form>
    </>
  );
}

export default Form;
