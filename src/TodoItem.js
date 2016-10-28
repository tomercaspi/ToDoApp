/**
 * Created by tomer_c on 10/28/2016.
 */

function TodoItem(label){

    this.label = label;
}

TodoItem.prototype.setCompleted = function(isCompleted){
    this.isCompleted = isCompleted;
};



/* TDD - Test Driven Design */
var todoItem = new TodoItem("This is a test label");

test("Set label", todoItem.label == "This is a test label");

todoItem.setCompleted(true);
test("setCompleted to true", todoItem.isCompleted == true);

todoItem.setCompleted(false);
test("setCompleted to false", todoItem.isCompleted == false);