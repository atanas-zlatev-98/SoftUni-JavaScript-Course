import { mathEnforcer } from "../MathEnforcer.js";
import { expect } from "chai";

describe("Test MathEnforcer(addFive)", () => {
  it("should 10 for addFive(5)", () => {
    expect(mathEnforcer.addFive(5)).to.equal(10);
  });
  it("should return undefined for addFive({props: 123})", () => {
    expect(mathEnforcer.addFive({ props: 123 })).to.equal(undefined);
  });
  it("should return undefined for addFive([123])", () => {
    expect(mathEnforcer.addFive([123])).to.equal(undefined);
  });
  it('should return undefined for addFive("5")', () => {
    expect(mathEnforcer.addFive("5")).to.equal(undefined);
  });
  it("should 10.5 for addFive(5.5)", () => {
    expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
  });
  it("should return 0 for addFive(-5)", () => {
    expect(mathEnforcer.addFive(-5)).to.equal(0);
  });
  it("should return 0 for addFive(-5.5)", () => {
    expect(mathEnforcer.addFive(-5.5)).to.equal(-0.5);
  });

  describe("Test MathEnforcer(subtractTen)", () => {
    it("should return undefined for sting", () => {
      expect(mathEnforcer.subtractTen("10")).to.equal(undefined);
    });
    it("should return undefined for object", () => {
      expect(mathEnforcer.subtractTen({ props: "10" })).to.equal(undefined);
    });
    it("should return undefined for array", () => {
      expect(mathEnforcer.subtractTen(["10"])).to.equal(undefined);
    });
    it("should return 10 for subtractTen(20)", () => {
      expect(mathEnforcer.subtractTen(20)).to.equal(10);
    });
    it("should return -20 for subtractTen(-10)", () => {
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });
    it("should return 20.5 for subtractTen(30.5)", () => {
      expect(mathEnforcer.subtractTen(30.5)).to.equal(20.5);
    });
    it("should return -20.5 for subtractTen(30.5)", () => {
      expect(mathEnforcer.subtractTen(-30.5)).to.equal(-40.5);
    });
  });

  describe("Test MathEnforcer(sum)", () => {
    it("should return 10 for sum(5.5)", () => {
      expect(mathEnforcer.sum(5, 5)).to.equal(10);
    });
    it("should return 10 for sum('5',5)", () => {
      expect(mathEnforcer.sum("5", 5)).to.equal(undefined);
    });
    it("should return 10 for sum(5,'5')", () => {
        expect(mathEnforcer.sum(5, '5')).to.equal(undefined);
    });
    it('should return 11 for sum(5.5, 5.5)',()=>{
        expect(mathEnforcer.sum(5.5,5.5)).to.equal(11);
    })
    it('should return -11 for sum(-5.5, -5.5)',()=>{
        expect(mathEnforcer.sum(-5.5,-5.5)).to.equal(-11);
    })
    it('should return 0 for sum(5.5, -5.5)',()=>{
        expect(mathEnforcer.sum(5.5,-5.5)).to.equal(0);
    })
    it('should return 0 for sum(-6, 5.5)',()=>{
        expect(mathEnforcer.sum(-6,5.5)).to.equal(-0.5);
    })
  });
});
