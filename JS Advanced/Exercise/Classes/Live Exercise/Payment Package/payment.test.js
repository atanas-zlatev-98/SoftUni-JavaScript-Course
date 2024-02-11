import { expect } from "chai";
import { PaymentPackage } from "./payment.js";
import { describe } from "mocha";

describe("Test Suite", function () {
  describe("Name Test", () => {
    it("Should throw error for non-string name", () => {
      expect(() => new PaymentPackage(123, 123)).to.throw(
        "Name must be a non-empty string"
      );
    });
      it("Should throw error for empty name", () => {
        expect(() => new PaymentPackage("", 123)).to.throw(
          "Name must be a non-empty string"
        );
      });
      it("Should not thow error for correct instance", () => {
        expect(() => new PaymentPackage("123", 12)).not.to.throw(
          `Name must be a non-empty string`
        );
      });
      it("Should throw error for arry", () => {
        expect(() => new PaymentPackage(['123'], 123)).to.throw(
          "Name must be a non-empty string");
      });
  });

  describe('Constructor', ()=>{
    it('test constructor', ()=>{
        let instance = new PaymentPackage('Name', 100);
        expect(instance._name).to.equal('Name');
        expect(instance._value).to.equal(100);
        expect(instance._VAT).to.equal(20);
        expect(instance._active).to.equal(true);
    })
  })

  describe("Value Test", () => {
    it("Should throw an error for string value", () => {
      expect(() => new PaymentPackage("12", "12")).to.throw(
        "Value must be a non-negative number"
      );
    });
    it("Should throw an error for Array", () => {
        expect(() => new PaymentPackage("12", [12])).to.throw(
          "Value must be a non-negative number"
        );
      });
    it("Should throw an error for negative value", () => {
      expect(() => new PaymentPackage("12", -12)).to.throw(
        "Value must be a non-negative number"
      );
    });
    it("Should not thow error for correct instance", () => {
      expect(() => new PaymentPackage("12", 12)).not.to.throw(
        "Value must be a non-negative number"
      );
    });

    it("Set value to null", () => {
      expect(() => new PaymentPackage("Name", null)).to.throw(
        "Value must be a non-negative number"
      );
    });
    it("Set value to 0", () => {
        expect(() => new PaymentPackage("Name", 0)).not.to.throw(
          "Value must be a non-negative number"
        );
      });
  });

  describe("VAT Test", () => {
    it("Should throw an error if active is string", () => {
      let flag = new PaymentPackage("asd", 12);
      expect(() => (flag.active = "asd")).to.throw(
        "Active status must be a boolean"
      );
    });
    it("Should throw an error if active is negative", () => {
      let flag = new PaymentPackage("asd", 12);
      expect(() => (flag.active = -12)).to.throw(
        "Active status must be a boolean"
      );
    });

    it("Should return the new Active if the input is correct", () => {
      let flag = new PaymentPackage("abc", 123);
      expect(() => (flag.active = true)).not.to.throw(
        "Active status must be a boolean"
      );
    });
  });

  describe("toString Method test", () => {
    it("Should return a string as all the input is correct - 1", () => {
      let flag = new PaymentPackage("abc", 123);
      let output = [
        `Package: abc`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 20%): 147.6`,
      ];
      expect(flag.toString()).to.equal(output.join("\n"));
    });

    it("Should return a string as all the input is correct - 2", () => {
      let flag = new PaymentPackage("abc", 123);
      flag.VAT = 30;
      let output = [
        `Package: abc`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 30%): 159.9`,
      ];
      expect(flag.toString()).to.equal(output.join("\n"));
    });
    it("Should return a string as all the input is correct - 3", () => {
      let flag = new PaymentPackage("abc", 123);
      flag.active = false;
      let output = [
        `Package: abc (inactive)`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 20%): 147.6`,
      ];
      expect(flag.toString()).to.equal(output.join("\n"));
    });

    it("Should return a string as all the input is correct - 4", () => {
      let flag = new PaymentPackage("abc", 123);
      flag.VAT = 30;
      flag.active = false;
      let output = [
        `Package: abc (inactive)`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 30%): 159.9`,
      ];
      expect(flag.toString()).to.equal(output.join("\n"));
    });
  });
});
