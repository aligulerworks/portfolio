const headTagHome = `
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Fonts - Google  -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inconsolata:wght@200;300;400;700;900&family=Ysabeau+Office:ital,wght@0,1;0,100;0,200;0,400;0,700;0,900;0,1000;1,1;1,100;1,200;1,400;1,700;1,900;1,1000&display=swap" rel="stylesheet">


  <!-- favicon  -->
  <link rel="icon" type="image/svg+xml" href="./images/favicon-alidelvento.svg" />

  <!-- Google Tag Manager -->
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-SCJSHQW09H"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-SCJSHQW09H');
  </script>
  <!-- End Google Tag Manager -->


  <!-- STYLES  -->
  <link rel="stylesheet" href="./style.css" />


  <title>Ali Güler Works</title>
`;

// document.getElementsByTagName("head")[0].appendChild(headTagHome);
document.head.innerHTML = document.head.innerHTML + headTagHome;

// document.head.appendChild(headTagHome.content);
