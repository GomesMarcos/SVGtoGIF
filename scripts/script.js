// const svg = document.getElementsByTagName('svg');
// let img = svg.toDataURL('image/png');

// document.write('<img src="' + img + '"/>');

var svg = $('#source')[0];
var target = $('#target');
var getCanvas;
var imageData = getCanvas.toDataURL("image/png");
var newData = imageData.replace(/^data/image\/png/, "data:application/octet-stream");
$("#btnRender").attr('download', 'pic.png').attr("href", newData);

function renderImage() {
  console.log(svg, 'qqwe1');
  
  html2canvas(svg, {
    onrenreded: function (canvas) {
      $("#target").append(canvas);
      getCanvas = canvas;
      console.log('qwe2');
    }
  })
}
