export const theme = {
    mediaMobile: (css: any) => `@media screen and (max-width: 727px){${css}}`,
    mediaTablet: (css: any) =>
        `@media screen and (min-width: 728px) and (max-width: 1023px){${css}}`,
    mediaDesktop: (css: any) => `@media screen and (min-width: 1024px){${css}}`,
    headerTitleFont: 'font-family: "Actor", sans-serif; font-style: normal;',
    mainFont: 'font-family: "Abhaya Libre SemiBold", sans-serif; font-style: normal;',
    fontWeight: {
        standardFontWeight: 'font-weight: 400',
        boldFontWeight: 'font-weight: 600'
    },
    fontSize: {
        largeFontSize: "font-size: 36px; line-height: 43px;",
        standardFontSize: "font-size: 24px; line-height: 28px;",
        smallFontSize: "font-size: 14px; line-height: 17px;",
    },
    colors: {
        mainColor: "#F4F4F4",
        spanColor: {
            first:'#FF0000',
            second: '#366EFF',
            third: '#FFEB33',
            default: '#A9A9A9'
        },
        backgroundColor: "#121212",
        backgroundAppColor: "#222222",
        backgroundContentColor: "#282828",
    },


    firstScreenBackground: "/images/new_firstScreen.png",



};
