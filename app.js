/* jshint browser: true */
/* globals PDFJS */

(function(){

  'use strict';

  PDFJS.getDocument('example.pdf').then(function(pdf) {

    for (var i = 1; i < pdf.numPages; i++) {
      pdf.getPage(i).then(renderPage);
    }

  });

  var renderPage = function(page) {

    var scale = 0.2;
    var viewport = page.getViewport(scale);

    var canvas = document.createElement('canvas');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    canvas.classList.add('pdf');
    canvas.dataset.page = page.pageNumber;

    var context = canvas.getContext('2d');

    page.render({
      canvasContext: context,
      viewport: viewport
    });

    document.body.appendChild(canvas);

  };

})();
