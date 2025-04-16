function calculateArea(width, height) {
    while (typeof width !== 'number' || width <= 0) {
        width = parseFloat(prompt("Enter a positive number for width:"));
    }

    while (typeof height !== 'number' || height <= 0) {
        height = parseFloat(prompt("Enter a positive number for height:"));
    }

    const area = width * height;
    console.log("Area of the rectangle:", area);
    return area;
}

// Example usage
calculateArea(5, 3); 

