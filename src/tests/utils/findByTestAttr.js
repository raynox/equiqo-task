const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    
    return wrapper;
};

export default findByTestAtrr;