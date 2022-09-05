$(document).ready(function () {
    $(function () {
        $("#datepicker").datepicker({
            changeMonth: true,
            changeYear: true,
            maxDate: -6570,
            dateFormat: 'dd-mm-yy',
            showButtonPanel: true
        });
    });

    $("#submit").click(function () {

        $('.error').html('');
        var error = false;

        //Full Name
        var name = $("#name").val();
        var name1 = /^[a-zA-Z ]*$/;
        if (name == "") {
            $("#namecheck").text("Please Enter Your Full Name");
            error = true;
        } else if (!name1.test(name)) {
            $("#namecheck").text("Enter Alphabets Only");
            error = true;
        }

        // Father's Name
        var father = $("#father").val();
        if (father == "") {
            $("#fathercheck").text("Please Enter Your Father's Name");
            error = true;
        } else if (!name1.test(father)) {
            $("#fathercheck").text("Enter Alphabets Only");
            error = true;
        }

        // Mother's Name
        var mother = $("#mother").val();
        if (mother == "") {
            $("#mothercheck").text("Please Enter Your Mother's Name");
            error = true;
        } else if (!name1.test(mother)) {
            $("#mothercheck").text("Enter Alphabets Only");
            error = true;
        }

        // Age 
        var date = $('#datepicker').val();
        if (date == "") {
            $('#agecheck').text("Please Enter Your Age");
        } else {
            $('#agecheck').text("");
            error = false;
        }

        // Address
        var address = $('#address').val();
        if (address == "") {
            $('#addresscheck').text("Please Enter Your Address");
            error = true;
        } else {
            $('#addresscheck').text('');
            error = false
        }

        // Roll No.
        var roll = $('#roll').val();
        // var reg = /[^0-9]/g;
        if (roll == '') {
            $('#rollcheck').text("Please Enter Your Roll No.")
            error = true
        } else if (roll.match(/[^0-9]/g, '')) {
            $('#rollcheck').text("Please Enter Numbers Only")
            error = true
        }
        else {
            $('#rollcheck').text("")
            error = false
        }

        // Graduation Degree
        var graduation = $('#graduation option:selected').val();
        if (graduation == '') {
            $('#graduationcheck').text("Please Select");
            error = true;
        }
        else {
            $('#graduationcheck').text("");

            error = false;
        };

        // Master's Degree
        var master = $('#master option:selected').val();
        if (master == '') {
            $('#mastercheck').text("Please Select");
            error = true;
        }
        else {
            $('#mastercheck').text("");

            error = false;
        };

        // School Details
        var school = $("input[name=school]:checked").length;
        if (school == 0) {
            $("#schoolcheck").text("Please Select");
            error = true;
        } else if (school < 2) {
            $("#schoolcheck").text("Please Fill Both");
            error = true;
        } else {
            $('#schoolcheck').text("");
            error = false;
        };

        var School = ($('input[id=10th]:checked')).length
        if (School == 0) {
            $('#schoolcheck').text('Please Select');
            error = true
            if ($('#per').val() == "") {
                $('#percheck').text('Please fill')
                error = true
            } else if ($('#mark').val() == "") {
                $('#markcheck').text('Please fill')
                error = true
            } else if ($('#outOf').val() == "") {
                $('#outofcheck').text('Please fill')
                error = true
            }
        } else {
            $('#schoolcheck').text("")
            $('#percheck').text("")
            $('#markcheck').text("")
            $('#outofcheck').text("")

        } if ($("#per").val() == '') {
            $('#percheck').text("Please fill");
            error = true;
        }
        if ($("#mark").val() == '') {
            $('#markcheck').text("Please fill");
            error = true;
        } if ($("#outOf").val() == '') {
            $('#outofcheck').text("Please fill");
            error = true;
        }

        var School1 = ($('input[id=12th]:checked')).length
        if (School1 == 0) {
            $('#schoolcheck').text('Please Select');
            error = true
            if ($('#per1').val() == "") {
                $('#per1check').text('Please fill')
                error = true
            } else if ($('#mark1').val() == "") {
                $('#mark1check').text('Please fill')
                error = true
            } else if ($('#outOf1').val() == "") {
                $('#outof1check').text('Please fill')
                error = true
            }
        } else {
            $('#schoolcheck').text("")
            $('#per1check').text("")
            $('#mark1check').text("")
            $('#outof1check').text("")

        } if ($("#per1").val() == '') {
            $('#per1check').text("Please fill");
            error = true;
        }
        if ($("#mark1").val() == '') {
            $('#mark1check').text("Please fill");
            error = true;
        } if ($("#outOf1").val() == '') {
            $('#outof1check').text("Please fill");
            error = true;
        }

        //Image
        var image = $("#image").val();
        var reg = /(.*?)\.(jpg|bmp|jpeg|png|JPG|JPEG|PNG|BMP)$/;
        if (image == "") {
            $("#imagecheck").text("Please select image to upload here");
            error = true;
        }
        else if (!image.match(reg)) {
            $("#imagecheck").text("Please select proper file");
            error = true;
        } else {
            $('#imagecheck').text("");
            error = false;
        }

        // Other Degree Details
        var other = $("input[name=other]:checked").length;
        if (other == 0) {
            $("#othercheck").text("Please Select");
            error = true;
        } else {
            $('#othercheck').text("");
            error = false;
        }
    })

    $("#10th").on("click", function () {
        if (($("input[name=school1]:checked")).length == 1) {
            var html = '';
            html = `<div class="row"><div class="col-3">\
            <label>Percentage</label><input type="text" placeholder="%"
            class=" form-control policy" id="per">\
            <span class="text-danger error" id="percheck"></span></div>\
            <div class="col-3"><label>Marks</label>
            <input type="text" placeholder="marks" class="form-control policy" id="mark">
            <span class="text-danger error" id="markcheck"></span>\
            </div><div class="col-3"><label>Out Of</label>
            <input type="text" placeholder="out of" class="form-control policy" id="outOf">
            <span class="text-danger error" id="outofcheck"></span></div></div>`
            $("#school1").html(html);

        } else {
            $("#school1").html("");

        }
    });

    $("#12th").on("click", function () {
        if (($("input[name=school2]:checked")).length == 1) {
            var html2 = '';
            html2 = `<div class="row"><div class="col-3">\
            <label>Percentage</label><input type="text" placeholder="%"
            class=" form-control policy" id="per1">\
            <span class="text-danger error" id="per1check"></span></div>\
            <div class="col-3"><label>Marks</label>
            <input type="text" placeholder="marks" class="form-control policy" id="mark1">
            <span class="text-danger error" id="mark1check"></span>\
            </div> <div class="col-3"><label>Out Of</label>
            <input type="text" placeholder="out of" class="form-control policy" id="outOf1">
            <span class="text-danger error" id="outof1check"></span></div></div>`
            $("#school2").html(html2);

        } else {
            $("#school2").html("");

        }
    });

    // Other Details
    var html1 = ""
    $(document).on('click', '#other', function () {
        if (($('input[name=other]:checked')).length == 1) {
            html1 = `<button class="btn btn-dark" id="addbtn">Add</button>
			`;
            $('#otherNew').html(html1);
        } else {
            $('#otherNew').html("")
        }

        var html3 = ""
        var i = 1;

        $(document).on('click', '#addbtn', function () {
            html3 += `<div><div class="row student"><div class="col-lg-2">
        <label>Aggregate</label><input type="text" id="percentage_` + i + `" placeholder="%">
        <span class="text-danger error" id="agg_` + i + `check"></span></div>
		<div class="col-lg-2"><label>Marks</label>
			<input type="text" id="markk_` + i + `" placeholder="marks">
			<span class="text-danger error" id="markk_` + i + `check"></span></div>
		<div class="col-lg-2"><label>Out Of</label>
			<input type="text" id="out_` + i + `" placeholder="Out Of">
			<span class="text-danger error" id="out_` + i + `check"></span></div>
		<div><button class="btn btn-dark" id="remove">Remove</button></div></div>`;

            var other1 = $('.student').length;
            for (var j = 0; j <= other1; j++) {
                if ($('#percentage_' + j + '').val() == '') {
                    $('#agg_' + j + 'check').html("Please fill");
                    error = true;
                    // alert('dgdfg')
                }

                if ($('#markk_' + j + '').val() == '') {
                    $('#markk_' + j + 'check').html("Please fill");
                    error = true;
                }
                if ($('#out_' + j + '').val() == '') {
                    $('#out_' + j + 'check').html("Please fill");
                    error = true;
                } 
                else {
                    $('#agg_' + j + 'check').text('')
                    $('#markk_' + j + 'check').text('')
                    $('#out_' + j + 'check').text('')
                    error = false
                }
            }
            i++;
            j++;
          if(error == false){
             $('#addButton').html(html3);
          }        
            return false;
        })

        $('#contact').on("click", "#remove", function () {
            $(this).parent().parent().remove();
        });
    })
});