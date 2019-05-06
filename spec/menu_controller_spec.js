const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {

  beforeEach(() => {
        this.menu = new MenuController();
      });

   describe("remindMe()", () => {
//fail case
     it("should not return a string containing the text 'Learning is a life-long pursuit'/", () => {
       expect(this.menu.remindMe()).toBe("Learning is a life-long huh?");
     });
//pass case
     it("should return a string containing the text 'Learning is a life-long pursuit'/", () => {
       expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit.");
   });
  });
});
// describe("MenuController", () => {
//
//   beforeEach(() => {
//       this.menu = new MenuController();
//     });
//
//    describe("#getContactCount()", () => {
//
// // #2
//      it("should return 0 when no contacts are in the book", () => {
//        expect(this.menu.getContactCount()).toBe(0);
//      });
//
//      it("should return 1 when there is exactly one contact in the book", () => {
//      this.menu.contacts.push("Bob");
//      expect(this.menu.getContactCount()).toBe(1)
//    });
//    });
//
//
//
