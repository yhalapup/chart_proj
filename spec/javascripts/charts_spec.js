describe("Charts", function(){
  beforeEach(function () {
    loadFixtures("index.html");
  });

  it("msgbox should be hidden", function(){
    expect($("#msgbox")).toBeHidden();
  });

  it("should trigger click event", function(){
  	var spyEvent = spyOnEvent('#msgbox button', 'click')
	$('#msgbox button').click()

	expect('click').toHaveBeenTriggeredOn('#msgbox button')
	expect(spyEvent).toHaveBeenTriggered()
  });

  it("msgbox should not be hidden when we click on item bar", function(){
  	var event = getJSONFixture("data.json");
  	handleClick(event);
  	expect($("#msgbox")).not.toBeHidden();
  });
});