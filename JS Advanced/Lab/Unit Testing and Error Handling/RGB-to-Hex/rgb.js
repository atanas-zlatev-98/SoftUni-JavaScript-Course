import { expect } from "chai";
function rgbToHexColor(red, green, blue) {
  if (!Number.isInteger(red) || red < 0 || red > 255) {
    return undefined; // Red value is invalid
  }

  if (!Number.isInteger(green) || green < 0 || green > 255) {
    return undefined; // Green value is invalid
  }
  if (!Number.isInteger(blue) || blue < 0 || blue > 255) {
    return undefined; // Blue value is invalid
  }
  return (
    "#" +
    ("0" + red.toString(16).toUpperCase()).slice(-2) +
    ("0" + green.toString(16).toUpperCase()).slice(-2) +
    ("0" + blue.toString(16).toUpperCase()).slice(-2)
  );
}

describe("Test Group 1", function () {

  it("should return undefined with no input", () => {
    expect(rgbToHexColor()).to.equal(undefined);
  });

  it("should redut undefined for floating point number", () => {
    let red = 9.54;
    let green = 123;
    let blue = 255;
    expect(rgbToHexColor(red, green, blue)).to.equal(undefined);
  });

  it("should return undefined for (123,123,256)", () => {
    let red = 123;
    let green = 123;
    let blue = 256;
    expect(rgbToHexColor(red, green, blue)).to.equal(undefined);
  });

  it("should return #000000 with zeros", () => {
    let red = 0;
    let green = 0;
    let blue = 0;
    expect(rgbToHexColor(red, green, blue)).to.equal("#000000");
  });

  it("should return #FFFFFF with 255", function () {
    let red = 255;
    let green = 255;
    let blue = 255;
    expect(rgbToHexColor(red, green, blue)).to.equal("#FFFFFF");
  });

  it("should return undefined for (-123,123,256)", () => {
    let red = -123;
    let green = 123;
    let blue = 256;
    expect(rgbToHexColor(red, green, blue)).to.equal(undefined);
  });

  it("should return undefined for (123,-123,255)", () => {
    let red = 123;
    let green = -123;
    let blue = 255;
    expect(rgbToHexColor(red, green, blue)).to.equal(undefined);
  });


  it("should return undefined for (123,123,-255)", () => {
    let red = 123;
    let green = 123;
    let blue = -255;
    expect(rgbToHexColor(red, green, blue)).to.equal(undefined);
  });


  it("should return undefined for string", () => {
    let red = "123";
    let green = "123";
    let blue = "256";
    expect(rgbToHexColor(red, green, blue)).to.equal(undefined);
  });

  it("should return #FF9EAA for 255,158,170", () => {
    let red = 255;
    let green = 158;
    let blue = 170;
    expect(rgbToHexColor(red, green, blue)).to.equal("#FF9EAA");
  });
});
