const count = document.getElementById("count");
      document
        .getElementById("increase-button")
        .addEventListener("click", () => {
          let currentCount = Number(count.innerText);
          const randomColor = Math.floor(Math.random()*16777215).toString(16);
          count.style.color = "#" + randomColor;
          currentCount++;

          count.innerText = currentCount;
          
        });

      document
        .getElementById("decrease-button")
        .addEventListener("click", () => {
          let currentCount = Number(count.innerText);
          const randomColor = Math.floor(Math.random()*16777215).toString(16);
          count.style.color = "#" + randomColor;
          currentCount--;
          count.innerText = currentCount;
        });