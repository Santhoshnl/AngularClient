 
 
   var Commenval;
   function CheckPhonenumber(inputtext)
    {
    	var pattern=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    	if(inputtext.value.match(pattern))
		{SetBackground('phone');}
	    else
		{loadPopUp('#phonemsg');document.getElementById('phone').value='';}
    }
    function CheckPanNo(id)
    {
    	var PanVal=document.getElementById(id).value;
    	var regpan=/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;;
    	console.log('check pan');
    	if(regpan.test(PanVal))
    		{console.log('valid panno:'+PanVal);SetBackground(id);}
    	else
    		{console.log('invalid pan no'+PanVal);loadPopUp('#panmsg');document.getElementById(id).value='';}
    }
	function SetBackground(id) {
		var inputVal = document.getElementById(id).value;
		if (inputVal != "") {
			document.getElementById(id).style.backgroundColor = "lightgreen";
		} else {
			document.getElementById(id).style.backgroundColor = "white";
		}
	}
	function ShowMessage(Valueid,Displayid) {
		var message = document.getElementById(Valueid).value;
		if (message == 'file uploaded successfully') {
			document.getElementById(Displayid).style.color = "green";
		} 
		else if (message == "file uploaded faild") {
			document.getElementById(Displayid).style.color = "red";
		}
		else if(message=='Saved successfully'){
			document.getElementById(Displayid).style.color = "green";
		}
		else if(message=='Updated successfully'){
			document.getElementById(Displayid).style.color='green';
		}
		else if(message=='Updated failed'){
			document.getElementById(Displayid).style.color='red';
		}
		else if(message=='Saved failed'){
			document.getElementById(Displayid).style.color = "red";
		}
		else if(message=='Deleted successfully'){
			console.log('get in show message:'+message);
			document.getElementById(Displayid).style.color="green";
		}
		else if(message=='Deleted failed'){
			document.getElementById(Displayid).style.color='red';
		}
	}
	
	function loadPopUp(id) {
        $(id).fadeIn("slow", function() {
            $("#main").css({
                "opacity" : "0.3",
                "z-index" : "1"
            });
            $("#disabledLink").show();
        });

    }
    function unLoadPopUp(id) {
        $(id).fadeOut("slow", function() {
            $("#main").css({
                "opacity" : "1"
            });
            $("#disabledLink").hide();
        });
    }
    function isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }

        return JSON.stringify(obj) === JSON.stringify({});
    }
