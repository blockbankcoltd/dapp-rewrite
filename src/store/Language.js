import {observable, action, toJS } from 'mobx';
import kr from '../static/lang/kr';
import en from '../static/lang/en';

class Language {
    @observable lang;

    getLang() {
        return toJS(this.lang);
    }

    @action.bound
    async setLang(type){
        const language = type || (localStorage && localStorage.getItem('lang') || 'en');
        localStorage.setItem('lang', language);
        this.lang = language === 'en' ? en : kr;
    }
}

export default new Language();