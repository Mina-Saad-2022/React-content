const Origin = () => {
    return [
        1, 2, 3, 4,
    ];
}

const spread = () => {
    return [
        ...Origin(),
        5, 6, 7
    ];
};

export { spread, Origin };
