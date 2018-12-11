import { put, takeLatest, all } from 'redux-saga/effects';
import englishJson from "../lang/en.json";
import koreanJson from "../lang/kr.json";

const languages = {
    en: englishJson,
    kr: koreanJson
};

const setLang = async (type) => {
    const language = type;
    localStorage && localStorage.setItem('lang', language);
    return localStorage.getItem('lang');
};

const getLang = () => {
    return localStorage && localStorage.getItem("lang");
};

// setLang("en");

function* switchLanguage(params) {
    const language = setLang(params.langType);

    // localStorage && localStorage.setItem('lang', language);
    yield put({ type: "LANGUAGE_CHANGED", activeLang: language, languageConfig: languages[language] });
}

function* getActiveLanguage() {
    console.log("INSIDE SAGA ---->>> returning ", localStorage.getItem("lang") );
    let language = getLang();
    yield put({ type: "ACTIVE_LANGUAGE", activeLang: language, languageConfig: languages[language] });
    // yield put({ type: "ACTIVE_LANGUAGE", activeLang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" });
}

function* actionWatcher() {
    yield takeLatest('FETCH_ACTIVE_LANGUAGE', getActiveLanguage)
    yield takeLatest('SWITCH_LANGUAGE', switchLanguage)
}

export default function* languageSaga() {
    yield all([
        actionWatcher()
    ]);
}