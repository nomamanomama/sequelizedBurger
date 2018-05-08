$(document).ready(function () {

  $("#customerModal").modal('hide');


  $(document).on("click", "#addburger", function (event) {
    console.log("adding burger");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var burgername = $("#newburger [name=burgername]").val().trim();
    var newBurger = { name: burgername };
    console.log("new burger name: " + burgername);
    // Send the PUT request.
    $.ajax("/burger/create", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("added burger " + name);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(document).on("click", ".fav", function (event) {
    console.log("get customer favorite name");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log(this);
    var id = $(this).data("burgerid");
    console.log("ID: " + id);
    var name = $(this).data("burgerName");
    console.log("name: " + name);
    //set burger-id attribute on add button for the  modal
    $("#add-fav").data("burgerid", id);
    $("#fav-burger-name").text(name);
    $("#customerModal").modal('show');
    
  });

  $("#add-fav").on("click", function (e) {
    console.log(this);
    var burgerId = $(this).data("burgerid");
    var customer = $("#customerName").val().trim();
    var newCustomer = { customer_name: customer,
                        burger_id: burgerId };
                        console.log(newCustomer);
    $.ajax("/burger/favorite", {
      type: "POST",
      data: newCustomer
    }).then(
      function () {
        console.log("added customer " + name);
        // Reload the page to get the updated list
        location.reload();
      }
    );
    $("#customerName").val("");
    $("#fav-burger-name").text("");
    $("#add-fav").data("burgerid", "");
    $("#customerModal").modal("hide");
  });


  $(".devour-btn").on("click", function (event) {

    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/burger/update/" + id, {
      type: "PUT"
    }).then(
      function () {
        console.log("devoured burger " + id);
        // Reload the page to get the updated list
        location.reload();
      }
    );

  })
})