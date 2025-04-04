
var level = 2;

var hosts = [
    {'id':'A', 'type':'host', 'name':'Computer A', 'geometry':'160x160+200+680', 'img':'host.png', 'labelpos':'-10,170'},
    {'id':'B', 'type':'host', 'name':'Computer B', 'geometry':'160x160+200+280', 'img':'host.png', 'labelpos':'-10,-60'},
    {'id':'C', 'type':'host', 'name':'Computer C', 'geometry':'160x160+600+680', 'img':'host.png', 'labelpos':'-10,170'},
    {'id':'D', 'type':'host', 'name':'Computer D', 'geometry':'160x160+600+280', 'img':'host.png', 'labelpos':'-10,-60'}
];

// routes are processed in order, first match only is used => default must be last - KEEP routes before interfaces for random reference
var routes = [
];

var ifs = [
    {'if':'A1', 'hid':'A', 'ip':'192.168.[14-150]a.1', 'mask':'255.255.255.224', 'ip_edit':'true', 'mask_edit':'false', 'type':'std', 'pos':'-150,-100'},
    {'if':'B1', 'hid':'B', 'ip':'192.168.[a].222', 'mask':'255.255.255.32', 'ip_edit':'false', 'mask_edit':'true', 'type':'std', 'pos':'-150,160'},
    {'if':'C1', 'hid':'C', 'ip':'127.0.0.1', 'mask':'255.255.255.252', 'ip_edit':'true', 'mask_edit':'false', 'type':'std', 'pos':'98,-100'},
    {'if':'D1', 'hid':'D', 'ip':'127.0.0.4', 'mask':'/30', 'ip_edit':'true', 'mask_edit':'false', 'type':'std', 'pos':'98,160'}
];


var links = [
    {'if1':'A1', 'if2':'B1'},
    {'if1':'C1', 'if2':'D1'}
];

var goals = [
    {'id':'1', 'type':'reach', 'id1':'B', 'id2':'A'},
    {'id':'1', 'type':'reach', 'id1':'D', 'id2':'C'}
];
