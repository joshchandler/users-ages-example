var expect = require('chai').expect;
var filereader = require('../filereader');

describe('File', function () {
  describe('format', function () {
    it('can be .txt', function () {
      var txtfile = filereader.file_extension('./data.txt');
      expect(txtfile).to.equal(true);
    });

    it('can be .csv', function () {
      var csvfile = filereader.file_extension('./data.csv');
      expect(csvfile).to.equal(true);
    });

    it('cannot be .docx', function () {
      var docxfile = filereader.file_extension('./data.docx');
      expect(docxfile).to.equal(false);
    });
  });
});
