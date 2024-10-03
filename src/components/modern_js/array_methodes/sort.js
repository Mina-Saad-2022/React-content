const createNumberList = () => {
    return [1, 3, 5, 8, 7, 9, 0, 2];
};

// دالة لترتيب الأرقام بترتيب تصاعدي
const sortNumbersAscending = () => {
    return createNumberList().sort((start, end) => start - end);
};

const sortNumbersDescending = () => {
    return createNumberList().sort((start, end) => end - start);
};
export { createNumberList, sortNumbersAscending ,sortNumbersDescending};
