console.log(document.cookie);
      const cookie = name =>`;${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
      console.log(cookie('_ga'));

     

     