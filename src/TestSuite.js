/**
 * Created by tomer_c on 10/28/2016.
 */

function test(name, value){
    console.log("Testing:", name, "[", value, "]");
    if (value == false)
        throw new Error("Test failed");
}