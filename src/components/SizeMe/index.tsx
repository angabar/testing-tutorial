import React from "react";

type sizeType = {
    getSize: () => string;
};

type sizeMePropsType = {
    children: (size: sizeType) => JSX.Element;
};

const SizeMe = ({ children }: sizeMePropsType) => {
    return children({ getSize: () => "test" });
};

export default SizeMe;
