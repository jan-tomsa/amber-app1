define("amber-myfirstamberapp/MyFirstAmberApp", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('MyFirstAmberApp');
smalltalk.packages["MyFirstAmberApp"].transport = {"type":"amd","amdNamespace":"amber-myfirstamberapp"};

smalltalk.addClass('MyFirstAmberApp', globals.Object, [], 'MyFirstAmberApp');
smalltalk.addMethod(
smalltalk.method({
selector: "doSomething",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
_st($Transcript())._show_("Hello World!");
return self}, function($ctx1) {$ctx1.fill(self,"doSomething",{},globals.MyFirstAmberApp)})},
args: [],
source: "doSomething\x0a\x09\x22comment stating purpose of message\x22\x0a\x0a\x09Transcript show: 'Hello World!'.",
messageSends: ["show:"],
referencedClasses: ["Transcript"]
}),
globals.MyFirstAmberApp);


});
