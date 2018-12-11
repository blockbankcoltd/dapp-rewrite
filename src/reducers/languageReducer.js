// import { FETCH_DATA, RECEIVED_DATA } from '../actions/types';
import englishJson from "../lang/en.json";
import koreanJson from "../lang/kr.json";

export default function (state = {}, action) {
    // let activeLang = "kr";
    const languages = {
        en: englishJson,
        kr: koreanJson
    };
    switch (action.type) {
        case "FETCH_ACTIVE_LANGUAGE":
            return {
                ...state
            }
        case "ACTIVE_LANGUAGE":
            return {
                ...state,
                activeLang: action.activeLang,
                languageConfig: action.languageConfig
            }
        case "SWITCH_LANGUAGE":
            return {
                ...state
            }
        case "LANGUAGE_CHANGED":
            return {
                ...state,
                activeLang: action.activeLang,
                languageConfig: action.languageConfig
            }
        default:
            return state;
    }
}