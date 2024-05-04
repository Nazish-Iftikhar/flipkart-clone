let previewContainer = document.querySelector('.card');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.best-electronics .item1').forEach(product =>{
  product.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = product.getAttribute('data_name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data_target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});





   // JavaScript for toggling the dropdown

   function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }

  // Close the dropdown if the user clicks outside of it

  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  }                                             
