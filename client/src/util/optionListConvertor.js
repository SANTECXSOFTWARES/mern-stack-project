const optionListConvertor = (referenceData) =>{
    const options = [];
    for(const key in referenceData){
        const value = referenceData[key];
        options.push({
            label: value,
            value: key
        });
    }
    return options
}
export default optionListConvertor;
