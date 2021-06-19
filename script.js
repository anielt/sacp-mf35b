function random_image() {
  var imageA = "https://i.imgur.com/gtsySrP.jpeg";
  var imageB = "https://i.imgur.com/h38S5Ym.jpeg"; 
  var imageC = "https://i.imgur.com/tiztSdE.jpeg"; 
  var imageD = "https://i.imgur.com/XiD2vU5.jpeg"; 
  var imageE = "https://i.imgur.com/JqlnCMm.jpeg"; 
  var imageF = "https://i.imgur.com/sobJ0ID.jpeg"; 
  var imageG = "https://i.imgur.com/RJmrXRi.jpeg"; 

  var array_of_images = new Array ();
  console.log(array_of_images);
  array_of_images.push(imageA);
  array_of_images.push(imageB);
  array_of_images.push(imageC);
  array_of_images.push(imageD);
  array_of_images.push(imageE);
  array_of_images.push(imageF);
  array_of_images.push(imageG);
  var choice = Math.floor(Math.random() * array_of_images.length);
  document.getElementById("container").innerHTML = "<img src='" 
      + array_of_images[choice] + "'></img>";
}