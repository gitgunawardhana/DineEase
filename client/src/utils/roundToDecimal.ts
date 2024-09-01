function roundToDecimal(value: any) {
  if (typeof value === "number") {
    return value.toFixed(1);
  } else if (value != null) {
    if (!isNaN(value)) {
      let parsedValue = parseFloat(value);
      return parsedValue.toFixed(1);
    } else {
      console.error("Value is not a valid number:", value);
      return null;
    }
  } else {
    console.error("Value is null or undefined:", value);
    return null;
  }
}

export { roundToDecimal };
