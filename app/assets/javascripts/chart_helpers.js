// It handled when we clicked on graph bar
function handleClick(event){
  var item = event.item.dataContext
  if (item.abnormal == true){
    $("#msgbox").show()
    $("#msgbox button").click({item: item}, addMsgToItem)
  }
}

// Get message from input and
// add it to new attribute called "message"
function addMsgToItem(event){
  var msg = $("#msgbox input").val()
  event.data.item.message = msg
  $("#msgbox").hide()
}

// Customized content in tooltip
function customTooltip(item, graph){
  var item_data = item.dataContext;
  var tooltip_msg = "<div><b>tests count:</b> " +
                    item.values.value +
                    "</div>"

  // when item has a message it displayed in tooltip
  if(item_data.message != null){
    tooltip_msg += "<div><b>message:</b> " +
                   item_data.message +
                   "</div>"
  }

  return tooltip_msg
}
