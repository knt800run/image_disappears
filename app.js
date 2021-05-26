const $button = document.getElementsByTagName('button')[0];
const $img =  document.getElementsByTagName('img')[0];

$img.style.display =  "none";
console.log($img.style);

$button.addEventListener('click',() => {
  if ($img.style.display === "block") {
    $img.style.display =  "none";
    $button.textContent = "表示";
  } else {
    $img.style.display = "block";
    $button.textContent = "非表示";
  }
});

