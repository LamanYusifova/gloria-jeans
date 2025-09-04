import { useEffect, useState } from 'react'
import { BsEmojiFrownFill } from 'react-icons/bs';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';

function Emoji({ setEmojiPopUp, emojiPopUp }) {
    const [phone, setPhone] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);

    useEffect(() => {
        document.body.style.overflow = (emojiPopUp) ? 'hidden' : 'auto'
    
      }, [ emojiPopUp])

    const validateEmail = (value) => {
        setEmail(value);

        // if (value && !/\.(com|ru)$/i.test(value)) {
        //     setError(
        //         "Please check that the email address you entered is correct. Only those ending in .ru or .com are supported."
        //     );
        //     return;
        // }

        if (!value) {
            setError("");
            return;
        }

        if (value.includes(".") && !/\.(com|ru)$/i.test(value)) {
        setError(
            "Please check that the email address you entered is correct. Only those ending in .ru or .com are supported."
        );
        return;
    }
        const basicFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!basicFormat.test(value)) {
            setError("Incorrect email address");
            return;
        }


        setError("");
    };

    const handlePhoneChange = (e) => {
        const input = e.target.value;
        setPhone(formatPhoneNumber(input));
    };

    const handleLoginClick = () => {
        setIsLogin(!isLogin)
    }

    const handleClose = () => {
        setEmojiPopUp(false);
        setIsLogin(false);
    }

    const onlyDigits = phone.replace(/\D/g, "");
    const isValidPhone = onlyDigits.length === 9;

    const formatPhoneNumber = (value) => {
        const digits = value.replace(/\D/g, "");
        const part1 = digits.substring(0, 2);
        const part2 = digits.substring(2, 5);
        const part3 = digits.substring(5, 7);
        const part4 = digits.substring(7, 9);

        let formatted = "";
        if (part1) formatted += `(${part1})`;
        if (part2) formatted += ` ${part2}`;
        if (part3) formatted += `-${part3}`;
        if (part4) formatted += `-${part4}`;

        return formatted;
    };

    if (!emojiPopUp) {
        return null;
    }

    return (
        <>
            {!isLogin ? (
                <div className='bg-[#0009] fixed top-0 left-0 w-full h-full z-[1022] flex justify-center items-center' onClick={handleClose}>
                    <div
                        className='animate-slide-in bg-white w-[472px] max-smm:w-full smm:right-[10px] h-[635px] lg:h-[715px] fixed top-2   z-[1022] rounded-[20px]'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='px-[32px] pt-[24px] pb-[48px] flex flex-col gap-5 justify-between h-full'>
                            <div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[26px]'>Login or register</p>
                                    <IoCloseSharp className='text-[28px] cursor-pointer' onClick={handleClose} />
                                </div>
                                <div className='pt-5 mt-5'>
                                    <label className='text-[#a6a6a6]'>Telephone</label>
                                    <div className="flex items-center border-b rounded-b-md w-full">
                                        <span className="px-3 select-none">+994</span>
                                        <input
                                            type="tel"
                                            placeholder=""
                                            className="flex-1 outline-none bg-transparent text-black py-1"
                                            value={phone}
                                            onChange={handlePhoneChange}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => {
                                                if (!phone.trim()) setIsFocused(false);
                                            }}
                                        />
                                    </div>
                                    {(isFocused || phone.trim()) && (
                                        <button
                                            disabled={!isValidPhone}
                                            className={`px-4 py-2 my-4 w-full rounded-[10px] ${isValidPhone
                                                    ? "bg-black text-white cursor-pointer"
                                                    : "bg-[#f9f9f9] text-[#a6a6a6] cursor-not-allowed"
                                                }`}
                                        >
                                            Get Code
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-4'>
                                <p onClick={handleLoginClick} className='cursor-pointer'>Login by email</p>
                                <FaArrowRightLong onClick={handleLoginClick} className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (

                <div className='bg-[#0009] fixed top-0 left-0 w-full h-full z-[1000] flex justify-center items-center' onClick={handleClose}>
                    <div className='animate-slide-in bg-white w-[472px]  max-smm:w-full smm:right-[10px] h-[635px] lg:h-[715px] fixed top-2  z-50 rounded-[20px]'
                        onClick={(e) => e.stopPropagation()}>

                        <div className='px-[32px] pt-[24px] pb-[48px] h-full flex flex-col'>

                            <div className='flex items-center justify-between mb-4'>
                                <div onClick={handleLoginClick} className='flex items-center gap-2 text-[14px] cursor-pointer'>
                                    <FaArrowLeftLong />
                                    <p>Login and registration</p>
                                </div>
                                <IoCloseSharp className='text-[28px] cursor-pointer' onClick={handleClose} />
                            </div>

                            <h2 className='text-[26px] mb-2'>Enter email</h2>
                            <p className='mb-6'>For registered users only</p>

                            <div className="relative w-full mb-4">
                                <input
                                    type="email"
                                    id="email-input"
                                    placeholder=" "
                                    className="peer w-full px-3 pt-6 pb-2 border-b rounded-b-md bg-transparent text-sm text-gray-900 outline-none transition-colors"
                                    value={email}
                                    onChange={(e) => validateEmail(e.target.value)}
                                    onFocus={() => setIsFocusedEmail(true)}
                                    onBlur={() => {
                                        if (!email.trim()) setIsFocusedEmail(false);
                                    }}
                                />
                                <label
                                    htmlFor="email-input"
                                    className="absolute left-3 top-2 text-[#a6a6a6] text-sm transition-all duration-200 
                                             peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                                             peer-focus:top-1 peer-focus:text-[12px]"
                                >
                                    Email
                                </label>
                            </div>

                            {error && (
                                <div className="bg-[#f7ffae] text-sm p-4 flex items-center gap-2 rounded-t-[5px] rounded-b-[20px] mb-4">
                                    <BsEmojiFrownFill className="flex-shrink-0" />
                                    <span>{error}</span>
                                </div>
                            )}

                            {(isFocusedEmail || email.trim()) && (
                                <button
                                    disabled={!!error || !email.trim()}
                                    className={`w-full px-4 py-3 rounded-[10px] font-medium transition-colors ${!error && email.trim()
                                            ? "bg-black text-white hover:bg-gray-800"
                                            : "bg-[#f9f9f9] text-[#a6a6a6] cursor-not-allowed"
                                        }`}
                                >
                                    Continue
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Emoji