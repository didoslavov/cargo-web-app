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
