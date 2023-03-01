import {useAppDispatch} from "@/store/hook";
import {selectedLanguage} from "@/slice/surahDetailText";

const Languages = () => {
    const dispatch=useAppDispatch()
    return(
        <>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5  outline-none"
                    onChange={(e) => dispatch(selectedLanguage(e.target.value))}
            >
                <option value="uz.sodik">Uz</option>
                <option value="ru.kuliev">Ru</option>
                <option value="en.ahmedali">Eng</option>
            </select>
        </>
    )
}

export default Languages