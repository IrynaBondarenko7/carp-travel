"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type FormData = {
  fullname: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  checkbox: string;
};

export const CareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) =>
    toast.success("Thank you! We will contact you soon")
  );

  const phonePattern =
    /^(\(\d{3}\)\d{7}|\d{9}|\(\d{3}\)\s?\d{2}\s?\d{2}\s?\d{3})$/;

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  let emailLabelError;
  let phoneLabelError;
  let nameLabelError;
  let emailInput;
  let nameInput;
  let phoneInput;

  if (errors.email) {
    emailLabelError = "text-#FF5757";
    emailInput =
      "bg-inputBg pl-2 py-0.5 text-xl font-extralight placeholder:opacity-20 placeholder:text-xl focus:outline-white focus:outline-1 text-#FF5757";
  } else {
    emailInput =
      "bg-inputBg pl-2 py-0.5 text-xl font-extralight placeholder:opacity-20 placeholder:text-xl focus:outline-white focus:outline-1 text-white";
  }

  if (errors.phone) {
    phoneLabelError = "text-#FF5757";
    phoneInput =
      "bg-inputBg pl-14 py-0.5 text-xl font-extralight placeholder:opacity-20 placeholder:text-xl focus:outline-white focus:outline-1 text-#FF5757";
  } else {
    phoneInput =
      "bg-inputBg pl-14 py-0.5 text-xl font-extralight placeholder:opacity-20 placeholder:text-xl focus:outline-white focus:outline-1 text-white";
  }

  if (errors.fullname) {
    nameLabelError = "text-#FF5757";
    nameInput =
      "bg-inputBg pl-2 py-0.5 text-xl font-extralight placeholder:opacity-20 placeholder:text-xl focus:outline-white focus:outline-1 text-#FF5757";
  } else {
    nameInput =
      "bg-inputBg pl-2 py-0.5 text-xl font-extralight placeholder:opacity-20 placeholder:text-xl focus:outline-white focus:outline-1 text-white";
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-100% px-5 pt-6 pb-4 flex flex-col gap-y-4 md:pl-0"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <ul className="flex flex-col gap-1 md:flex-row md:gap-5">
        <li className="md:w-222">
          <label className="text-xs font-extralight leading-6 tracking-2.4 flex flex-col gap-1">
            <span className={nameLabelError}>Full name</span>
            <input
              className={nameInput}
              {...register("fullname", {
                required: "Name is required",
                validate: (value) => {
                  const namePattern = /^[A-Za-zА-Яа-яЁё\s']+$/;
                  if (!namePattern.test(value)) return "Incorrect name";
                },
              })}
              placeholder="John Smith"
            />
            {errors.fullname && (
              <div className="error text-#FF5757 text-xs font-extralight tracking-2.4 ml-auto">
                {errors.fullname.message}
              </div>
            )}
          </label>
          <label className="text-xs font-extralight leading-6 tracking-2.4 flex flex-col gap-1">
            <span className={emailLabelError}>E-mail</span>
            <input
              className={emailInput}
              {...register("email", {
                required: "Email is required",
                validate: (value) => {
                  if (!emailPattern.test(value)) return "Incorrect email";
                },
              })}
              placeholder="ohnsmith@email.com"
            />
          </label>
          {errors.email && (
            <div className="error text-#FF5757 text-xs font-extralight tracking-2.4 ml-auto">
              {errors.email.message}
            </div>
          )}
          <label className="text-xs font-extralight leading-6 tracking-2.4 flex flex-col gap-1">
            <span>Position</span>
            <input
              className="bg-inputBg pl-2 py-0.5 text-xl font-extralight placeholder:opacity-20 placeholder:text-xl focus:outline-white focus:outline-1"
              {...register("position")}
              placeholder="Movie maker"
            />
          </label>
          <label className="text-xs font-extralight leading-6 tracking-2.4 flex flex-col gap-1 phone-input">
            <span className={phoneLabelError}>Phone</span>
            <input
              className={phoneInput}
              {...register("phone", {
                required: "Phone is required",
                maxLength: {
                  value: 15,
                  message: "Incorrect phone",
                },
                validate: (value) => {
                  if (!phonePattern.test(value)) return "Incorrect phone";
                },
              })}
              placeholder="(097) 12 34 567"
            />
          </label>
          {errors.phone && (
            <div className="error text-#FF5757 text-xs font-extralight tracking-2.4 ml-auto">
              {errors.phone.message}
            </div>
          )}
        </li>
        <li>
          <label className="text-xs font-extralight leading-6 tracking-2.4 flex flex-col gap-1">
            <span>Message</span>
            <textarea
              className="bg-inputBg pl-2 py-0.5 text-xl font-extralight h-48 focus:outline-white focus:outline-1 resize-none"
              {...register("message")}
            />
          </label>
        </li>
      </ul>
      <ul className="flex flex-col gap-4 md:flex-row md:justify-between">
        <li>
          <div className="relative">
            <input
              type="checkbox"
              {...register("checkbox")}
              id="privacy"
              className="input-check visually-hidden"
            />
            <label
              htmlFor="privacy"
              className="check-text text-xs font-extralight leading-6 flex gap-4 md:w-48"
            >
              <span className="inline-block w-6 h-6 border border-white absolute"></span>
              <span>
                I confirm my consent to the processing of personal data.
              </span>
            </label>
          </div>
        </li>
        <li>
          <button
            className="text-3xl font-medium ml-auto block hover:underline"
            type="submit"
            onClick={() => {}}
          >
            SEND
          </button>
        </li>
      </ul>
    </form>
  );
};
