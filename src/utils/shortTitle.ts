export const shortTitle = (title: string) => {
    let regex = /[^A-Za-z0-9ЁёА-я]/g;

    return title
        .replace("(Official Video)", "")
        .replace("(Official Music Video)", "")
        .replace(regex, "")
        .toLowerCase();
};
