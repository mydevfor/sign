$(document).ready(function () {
    $("#email").on('focus', () => {
        $("#first").css({
            top: 0,
        })
    })
    $("#laste").on('focus', () => {
        $("#last").css({
            top: 0,
        })
    })
    $("#e-mail").on('focus', () => {
        $("#lemail").css({
            top: 0,
        })
    })
    let first_name = $("#email").val();
    let last_name = $("#laste").val();
    let email = $("#e-mail").val();
    let sign = $("#sign");
    let all_input = $("input");
    sign.on('click', (our_event) => {
        our_event.preventDefault();
        if (!all_input.children().length) {
            all_input.css({
                background: "",
                borderBottom: "2px solid red",
                transition: "none",
            })
        } else if (all_input.val().length > 0) {
            all_input.on('focus', () => {
                all_input.css("background", "none")
            })
        }
    })

    // sign.on('click', (event2) => { })
    // $(document).ready(function () {
    //     $('#userInfoForm').on('submit', function (event) {
    //         event.preventDefault(); // Prevent the form from submitting normally

    //         const firstName = $('#firstName').val().trim();
    //         firstName.css({ border: "2px solid red" })


    //         const lastName = $('#lastName').val().trim();
    //         const email = $('#email').val().trim();
    //         const outputDiv = $('#output');
    //         outputDiv.empty(); // Clear previous output
    //         if (!all_input.children().length) {
    //             all_input.css({
    //                 background: "",
    //                 borderBottom: "2px solid red",
    //                 transition: "none",
    //             })

    //             if (!firstName || !lastName || !email) {
    //                 alert('Please fill out all fields.');
    //             } else {
    //                 outputDiv.append(`
    //                 <h2>Submitted Information</h2>
    //                 <p>First Name: ${firstName}</p>
    //                 <p>Last Name: ${lastName}</p>
    //                 <p>Email: ${email}</p>
    //             `);

    //                 // Hide the form inputs after successful submission
    //                 $(this).hide();
    //             }
    //         });
    // });
});