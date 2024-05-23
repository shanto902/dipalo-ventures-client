'use client';
import { FormEvent, useRef, useState } from 'react';
import { FaCaretRight, FaCheck } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const NewsLetter = () => {
  const [input, setInput] = useState('');
  const [successMessage, setSuccessMessage] =
    useState<MembersSuccessResponse>();
  const [errorMessage, setErrorMessage] = useState('');
  const [active, setActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = input;
    const button = buttonRef.current;

    console.log(input);
    if (!email || !button) return;

    const res = await fetch('/api/addSubscription', {
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    const data = await res.json();

    if (data.error) {
      setErrorMessage('Hey, you are already subscribed!');
      setSuccessMessage(undefined);
      return;
    }

    setSuccessMessage(data.res);
    setErrorMessage('');
  };

  const dismissMessages = () => {
    setSuccessMessage(undefined);
    setErrorMessage('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative mt-5 ">
          <input
            type="email"
            id="email"
            onChange={(e) => setInput(e.target.value)}
            className="border-b py-1 w-full md:w-auto focus:outline-none text-white bg-zinc-900 focus:border-dipalo focus:border-b-2 transition-colors peer"
            autoComplete="true"
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-1 text-white text-base cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-dipalo transition-all"
          >
            Email
          </label>
        </div>
        <button
          ref={buttonRef}
          className=" flex items-center  gap-2 mt-5 uppercase text-center border rounded  text-sm shadow-md border-white border-opacity-30 py-2 px-4 hover:bg-dipalo z-20 text-white transition-all duration-500"
          disabled={!input}
          type="submit"
        >
          Subscribe <FaCaretRight />
        </button>
      </form>

      {(successMessage || errorMessage) && (
        <div className="flex items-start space-x-2 bg-[#0A0E12] shadow-outline-gray text-white rounded-[9px] py-4 px-6 animate-fade-bottom absolute">
          <div className="h-6 w-6 bg-[#1B2926] flex items-center justify-center rounded-full border border-[#273130] flex-shrink-0">
            <FaCheck className="h-4 w-4 text-[#81A89A]" />
          </div>
          <div className="text-xs sm:text-sm text-[#4B4C52]">
            {successMessage ? (
              <p>
                We&apos;ve added{' '}
                <span className="text-[#ADB0B1]">
                  {successMessage.email_address}
                </span>{' '}
                to our waitlist. We&apos;ll let you know when we launch!
              </p>
            ) : (
              <p>
                You are already added to our waitlist. We&apos;ll let you know
                when we launch!
              </p>
            )}
          </div>
          <FaX
            className="h-5 w-5 cursor-pointer flex-shrink-0 text-[#4A4B55]"
            onClick={dismissMessages}
          />
        </div>
      )}
    </>
  );
};

export default NewsLetter;
