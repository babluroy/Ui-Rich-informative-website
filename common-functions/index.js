export const setCursor = (value, color) => {
    const data = {
        width: 10,
        height: 10,
        color: "#000"
    }

    if(value == "color_change"){
        data.color = color ? color : "#fff"
        return data;
    }

    if(value == "size_change"){
        data.color = color ? color : "#000";
        data.width = 50;
        data.height = 50;
        return data;
    }

    if(value == "color_size_change"){
        data.color = color ? color : "#000";
        data.width = 50;
        data.height = 50;
        return data;
    }
    return data;
}