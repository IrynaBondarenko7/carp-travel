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

export const ContactsForm = () => {
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
      className="w-100% px-5 pt-6 pb-4 flex flex-col gap-y-4 text-white md:p-0 md:pt-16 xl:pt-0"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col gap-1 md:flex-row md:gap-5 xl:flex-col xl:gap-10">
        <div className="flex flex-col md:gap-7 md:w-222 xl:flex-row xl:w-100%">
          <label className="text-xs font-extralight leading-6 tracking-2.4 flex flex-col gap-1 xl:w-100%">
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

          <label className="text-xs font-extralight leading-6 tracking-2.4 flex flex-col gap-1 xl:w-100%">
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
            {errors.email && (
              <div className="error text-#FF5757 text-xs font-extralight tracking-2.4 ml-auto">
                {errors.email.message}
              </div>
            )}
          </label>
        </div>
        <div className="flex flex-col gap-4 md:w-463 xl:w-100% xl:gap-6">
          <label className="text-xs font-extralight leading-6 tracking-2.4 flex flex-col gap-1">
            <span>Message</span>
            <textarea
              className="bg-inputBg pl-2 py-0.5 text-xl font-extralight h-48 focus:outline-white focus:outline-1 resize-none md:h-221"
              {...register("message")}
            />
          </label>

          <button
            className="text-3xl font-medium ml-auto block hover:underline"
            type="submit"
            onClick={() => {}}
          >
            SEND
          </button>
        </div>
      </div>
    </form>
  );
};
