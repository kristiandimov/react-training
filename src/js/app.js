import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    //alert("💣");
    var ar1 = document.createElement('article');
      var ar2 = document.createElement('article');
      var ar3 = document.createElement('article');
      var ar4 = document.createElement('article');
      var ar5 = document.createElement('article');
      
      ar1.innerText = "Article 1";
      ar1.className = 'message';

      ar2.innerText = "Article 2";
      ar2.className = 'message';

      ar3.innerText = "Article 3";
      ar3.className = 'message';

      ar4.innerText = "Article 4";
      ar4.className = 'message';

      ar5.innerText = "Article 5";
      ar5.className = 'message';

      document.body.append(ar1);
      document.body.append(ar2);
      document.body.append(ar3);
      document.body.append(ar4);
      document.body.append(ar5);
  });
});
