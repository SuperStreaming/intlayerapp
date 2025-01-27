export type ComponentKeyContent = {
    $schema:  string;
    content:  Content;
    filePath: string;
    key:      string;
}

export type Content = {
    myTranslatedContent: MyTranslatedContent;
}

export type MyTranslatedContent = {
    nodeType:    string;
    translation: Translation;
}

export type Translation = {
    en: string;
    es: string;
    fr: string;
}
