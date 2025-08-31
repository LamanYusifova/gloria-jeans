import React, { useEffect, useRef, useState } from 'react';

function Newsletter() {
    const [email, setEmail] = useState("");
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);

    const validateEmail = (value) => {
        setEmail(value);

        // ✅ Email düzgün formatda və sonunda .com, .ru və .s olmalıdır
        const regex = /^[^\s@]+@[^\s@]+\.(com|ru|s)$/i;

        setIsValidEmail(regex.test(value));
    };
    const marqueeRef = useRef(null);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (marqueeRef.current) {
            marqueeRef.current.style.animationPlayState = paused ? 'paused' : 'running';
        }
    }, [paused]);

    const text = 'Subscribe to the newsletter';

    return (


        <div className='flex flex-col items-center justify-between gap-12 px-10 pt-10 pb-16 bg-gray-100 rounded-lg overflow-hidden'
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="marquee" ref={marqueeRef}>
                {[...Array(20)].map((_, index) => (
                    <span key={index} className="marquee-item1">
                        {text}
                    </span>
                ))}
            </div>

            <div className="flex lg:flex-row md:flex-col max-md:flex-col items-center">
                <div className="lg:col-span-1 lg:w-1/2 w-full ">
                    <p className="text-sm lg:text-base max-lg:text-center">
                        Be the first to know about trends, promotions and discounts
                    </p>
                </div>

                <div className="lg:col-span-2 md:flex md:flex-col md:items-start  w-full gap-8">
                    <div className="flex flex-col md:flex-row md:items-center w-full gap-8 relative">
                        <input
                            type="email"
                            id="email-input"
                            placeholder=" "
                            className="peer px-3 pt-6 pb-2 mb-6 border-b rounded-b-md bg-transparent text-sm text-gray-900 outline-none transition-colors flex-1"
                            value={email}
                            onChange={(e) => validateEmail(e.target.value)}
                            onBlur={() => {
                                if (!email.trim()) setIsFocusedEmail(false);
                            }}
                        />
                        <label
                            htmlFor="email-input"
                            className="absolute left-3 top-2 text-[#a6a6a6] text-sm transition-all duration-200 
                   peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                   peer-focus:top-1 peer-focus:text-sm"
                        >
                            Email
                        </label>
                        <button
                            disabled={!isValidEmail}
                            className={`px-8 py-2 rounded-[10px] font-medium transition-colors md:ml-6 ${isValidEmail
                                ? "border-2  border-black text-black hover:bg-black hover:text-white cursor-pointer"
                                : "border border-[#a6a6a6]  text-[#a6a6a6] cursor-not-allowed"
                                }`}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Newsletter;
