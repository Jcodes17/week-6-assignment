

  describe("My Function", function() {
    describe("finalTally", function() {
        it('finalTally should succeed if both player objects are valid and game has been set up', function() {
            let Adam = new Player('Adam');
            let lauren = new Player('lauren');
            setupGame(Adam, lauren);
            expect(function() {
                finalTally(Adam, lauren);
            }).to.not.throw();
        });
        it('finalTally should not succeed if player objects are not valid', function() {
          let Adam = new Player('Adam');
          let lauren = new Player('lauren');
         
          setupGame(Adam, lauren);
          expect(function() {
              finalTally(Adam, null, 1);
          }).to.throw(Error);
      });
  });
});