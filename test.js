$(document).ready(function () {
  var i = 1;
  var roomCounter = i;
  $("#add").click(function () {
    i++;
    roomCounter++;
    $("#MainContent_MainContent_btnRoomDataCount").html(roomCounter);
    $("#dynamic_field").append(
      '<tbody class="inpu" id="row' +
        i +
        '"><tr><td><span style="background-color: #34665c; color: #fff; padding: 2px 5px; border-radius: 3px;">Room Name</span><input type="text" name="ctl00$ctl00$MainContent$MainContent$txtBoxRoomDimensionTitle[]" placeholder="Title" class="form-control name_list"/></td><td>Length(ft)<input type="text" name="ctl00$ctl00$MainContent$MainContent$txtBoxRoomDimensionLength[]" placeholder="length" class="form-control name_list" id="txtBoxRoomDimensionLength' +
        i +
        '" onkeyup="javascript:CalVolumePermeationLoad (\'txtBoxRoomDimensionLength' +
        i +
        "','txtBoxRoomDimensionWidth" +
        i +
        "','txtBoxRoomDimensionHeight" +
        i +
        "','dimensionroomvalue" +
        i +
        '\');"/></td><td>Width<input type="text" name="ctl00$ctl00$MainContent$MainContent$txtBoxRoomDimensionWidth[]" placeholder="Width" class="form-control name_list" id="txtBoxRoomDimensionWidth' +
        i +
        '" onkeyup="javascript:CalVolumePermeationLoad (\'txtBoxRoomDimensionLength' +
        i +
        "','txtBoxRoomDimensionWidth" +
        i +
        "','txtBoxRoomDimensionHeight" +
        i +
        "','dimensionroomvalue" +
        i +
        '\');" /></td><td>Height<input type="text" name="ctl00$ctl00$MainContent$MainContent$txtBoxRoomDimensionHeight[]" placeholder="Height" class="form-control name_list" id="txtBoxRoomDimensionHeight' +
        i +
        '" onkeyup="javascript:CalVolumePermeationLoad (\'txtBoxRoomDimensionLength' +
        i +
        "','txtBoxRoomDimensionWidth" +
        i +
        "','txtBoxRoomDimensionHeight" +
        i +
        "','dimensionroomvalue" +
        i +
        '\');" /></td><td>Volume (Cu.Ft)<input type="text" name="ctl00$ctl00$MainContent$MainContent$dimensionroomvalue[]" readonly placeholder="Volume" class="form-control name_list" id="dimensionroomvalue' +
        i +
        '" /></td></tr><tr><td>F3 (Factors of Construction)<select name="ctl00$ctl00$MainContent$MainContent$ddlFactorofConstruction[]" id="MainContent_MainContent_ddlFactorofConstruction" class="form-control name_list" onchange="javascript:setInputfieldsBasedOnParameter(\'f3Value' +
        i +
        "',this, f3ConstructionArray);CalF3ConstructionF4vapor ('f3Value" +
        i +
        "','f4Value" +
        i +
        "','F3andf4total" +
        i +
        "','f3andf4mutificationAlerts" +
        i +
        '\');"><option value="select" selected disabled>Select</option><option value="1">Masonry Or Frame Construction</option><option value="2">Sheet Metal Steel Welded</option><option value="3">Module Panel Or Caulked And Sealed</option></select></td><td>F4 (Factors for vapor barrier)<select name="ctl00$ctl00$MainContent$MainContent$ddlFactorofVapourBarrier[]" id="MainContent_MainContent_ddlFactorofVapourBarrier" class="form-control name_list"  onchange="javascript:setInputfieldsBasedOnParameter(\'f4Value' +
        i +
        "',this, f4ConstructionArray);CalF3ConstructionF4vapor ('f3Value" +
        i +
        "','f4Value" +
        i +
        "','F3andf4total" +
        i +
        "','f3andf4mutificationAlerts" +
        i +
        '\');"><option value="select" selected disabled>Select</option><option value="1">Laminar &amp; Mylar Metallic Polyethylene Film</option><option value="2">Two Layers Edge Sealed Moisture Paper</option><option value="3">Two Coats Vapour Proof Paint</option><option value="4">Single Coat Paint</option></select> <div class="alert alert-danger" role="alert" id="f3andf4mutificationAlerts' +
        i +
        '" style="display:none; padding:5px; margin-top:10px; font-size:12px;color: #721c24;background-color: #f8d7da;border-color: #f5c6cb;">F3 x F4 shuld not be less than .5</div></td><td>F3<input type="text" name="ctl00$ctl00$MainContent$MainContent$factorofconstructiondimensionroom[]" id="f3Value' +
        i +
        '" placeholder="F3 (Factor of Construction)" class="form-control name_list" onkeyup="javascript:CalF3ConstructionF4vapor (\'f3Value' +
        i +
        "','f4Value" +
        i +
        "','F3andf4total" +
        i +
        "','f3andf4mutificationAlerts" +
        i +
        '\');"/></td><td>F4<input type="text" name="ctl00$ctl00$MainContent$MainContent$factorsforvaporbarrierdimensionroom[]" id="f4Value' +
        i +
        '" placeholder="F4 (Factor of Vapour Barrier)" class="form-control name_list" onkeyup="javascript:CalF3ConstructionF4vapor (\'f3Value' +
        i +
        "','f4Value" +
        i +
        "','F3andf4total" +
        i +
        "','f3andf4mutificationAlerts" +
        i +
        '\');"/><input name="F3andf4total[]" type="hidden" id="F3andf4total' +
        i +
        '" value="" class="form-control w-75" required></td><td><button type="button" name="remove" id="' +
        i +
        '" class="btn btnwhiteh btn_remove roomRemove mx-2">X</button></td></tr></tbody>'
    );
  });

  $(document).on("click", ".roomRemove", function () {
    var button_id = $(this).attr("id");
    $("#row" + button_id + "").remove();
    setTotalValume();
    roomCounter--;
    $("#MainContent_MainContent_btnRoomDataCount").html(roomCounter);
  });

  $("#submit").on("click", function () {
    var formdata = $("#add_name").serialize();
    $.ajax({
      url: "action.php",
      type: "POST",
      data: formdata,
      cache: false,
      success: function (result) {
        alert(result);
        $("#add_name")[0].reset();
      },
    });
  });
});
