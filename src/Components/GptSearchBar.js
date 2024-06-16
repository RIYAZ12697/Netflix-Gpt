import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
const GptSearchBar=()=>{
const langkey = useSelector((store)=> store.config.lang);

    return(
    <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
        <input type="text" className="p-2 m-2 col-span-9 " placeholder={lang[langkey].gptSearchPlaceHolder}></input>
        <button className="py-2 px-4 m-4  bg-red-700 text-white rounded-lg col-span-3 ">{lang[langkey].search}</button>
        </form>
    </div>
    );
};

export default GptSearchBar;