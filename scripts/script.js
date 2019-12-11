function getScreenshot() {
  html2canvas($('svg')[0], function(canvas) {
    $('#result').html("");
    $('#result').append(canvas);
  })
}
