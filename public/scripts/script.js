
function upload(){
  console.log("working correctly");

  const APIENDPOINT = "/upload"
  const img = document.getElementbyId("myFile").file[0]; // Access filelist
  var data = new FormData();   // Create formdata object

  data.append("img", img);

  fetch(APIENDPOINT, {
    method: "POST",
    body: data
  }).then((response => {
    if(response.status(200))
      console.log("successfully uploaded");
  }));


}