var expect = require('chai').expect;
var filereader = require('../filereader');

process.env.NODE_ENV = 'testing';

describe('File', function () {
  describe('format', function () {
    it('can be a text file', function () {
      var txtfile = filereader.file_extension('./data.txt');
      expect(txtfile).to.equal(true);
    });

    it('can be a csv file', function () {
      var csvfile = filereader.file_extension('./data.csv');
      expect(csvfile).to.equal(true);
    });

    it('cannot be word doc file', function () {
      var docxfile = filereader.file_extension('./data.docx');
      expect(docxfile).to.equal(false);
    });
  });
});
