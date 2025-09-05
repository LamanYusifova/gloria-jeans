import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { getData } from "../../services";
import { Link } from "react-router";

function AccordionItemSearch({setSearchBurgerMenu, searchBurgerMenu, openSubCategories, cancelClick}) {

    const [open, setOpen] = useState(null);
    const [data, setData] = useState([])

    useEffect(() => {
        getData().then(res => setData(res))
    }, [])

    const closeAll = () => {
        openSubCategories()
        cancelClick()
    }

    return (
        <div className="mt-8">
            {console.log(data)
            }
            {data?.slice(0, 4).map((item, index) => (
                <div key={index} className="p-4">
                    <h2
                        onClick={() => setOpen(open === index ? null : index)}
                        className="flex justify-between items-center cursor-pointer"
                    >
                        <span className="text-left text-xl">{item.name}</span>
                        <AiOutlinePlus
                            className={`transition-transform duration-300 text-2xl ${open === index ? "rotate-45" : ""}`}
                        />
                    </h2>

                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${open === index ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
                            }`}
                    >
                        <ul className="p-3 rounded-2xl text-black">
                            {item?.Subcategory?.map((option, pIndex) => {

                                return (
                                    <Link onClick={closeAll} key={pIndex} to={`/subcategory/${option.id}?slug=${item.name}`}>
                                        <li className={`flex items-center py-3 rounded-[10px] border-b border-black`}>
                                            {option.name}
                                        </li>
                                    </Link>
                                );
                            }
                            )}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AccordionItemSearch;
