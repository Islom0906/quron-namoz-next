export interface SurahI {

        number:number
        numberOfAyahs:number
        name:string
        englishName:string
        englishNameTranslation:string
        revelationType:string
}

export interface Response{
        code:number
        status:string
}
export interface SurahRes extends Response{

        data:SurahI[]
}
export interface AyahsI{
         number:number
        audio:string
        audioSecondary:string[]
        text:string
        numberInSurah:number
        juz:number
        manzil:number
        page:number
        ruku:number
        hizbQuarter:number
        sajda:boolean
}

export interface EditionI{
        identifier: string
        language: string
        name: string
        englishName: string
        format: string
        type: string
        direction: null

}
export interface DetailSurahI{
        name:string
        englishName:string
        englishNameTranslation:string
        revelationType:string
        numberOfAyahs:number
        ayahs:AyahsI[]
        edition:EditionI
}

export interface DetailSurahRes extends Response{
        data:DetailSurahI
}

export interface surahObj{
        isLoading: boolean
        search: string
        error: string
}

export interface AyahsText{
        number: number
        text: string
        numberInSurah: number
        juz: number
        manzil: number
        page: number
        ruku: number
        hizbQuarter: number
        sajda: boolean
}

export interface AyahsTextData{
        number: number
        name: string
        englishName: string
        englishNameTranslation: string
        revelationType: string
        numberOfAyahs: number
        ayahs:AyahsText[]
        edition:EditionI
}

export interface AyahsTextRes extends Response{
        data:AyahsTextData
}

export interface TimesI{
        tong_saharlik: string
        quyosh: string
        peshin: string
        asr: string
        shom_iftor: string
        huftonstring:string
}

export interface TimesRes{
        region: string
        date: string
        weekday: string
        times: TimesI
}

