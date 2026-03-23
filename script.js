$("#submit").click(function(){
				let a = $("#A1").val();
				let b = $("#B1").val();
				let c = $("#C1").val();
				let d1 =$("#D1").is(":checked") ? $("#D1").val() : ""; 
                let d2 =$("#D2").is(":checked") ? $("#D2").val() : "";   
                let d3 =$("#D3").is(":checked") ? $("#D3").val() : "";
				let e = $("#E1").val();
				let f = $("#F1").val();
				let g = $("#G1").val();
				let h = $("#H1").val();
				
				
				
				if(a =="" || b =="" || c ==""  || f =="" || g =="" || h ==""){
					alert("Please, Fill all fields...");
					return false;
				}
				
				
				else if(a ==""){
					alert("Please, enter your First name...");
					return false;
				}
				
				else if(b ==""){
					alert("Please, enter your Last name...");
					return false;
				}
				
				
				else if(a == b){
					alert("First name and last name cannot be the same");
					return false;
				}

				
				else if(c.length != 10){
					alert("Please, Enter mobile number only 10 digits...");
					return false;
				}
				
				 else if(d1 == "" && d2 == "" && d3== ""){
                    alert("Please Enter your gender");
					return false;
                 } 
				
				else if(e ==""){
					alert("Please, enter Your D.O.B");
					return false;
				}
				
				else if(!f.endsWith("@gmail.com")){
					alert("Please enter '@gmail.com' in end in G-mail.");
					return false;
				}
				
				
				else if(g !== h){
					alert("Your password is not matching...");
					return false;
				}
				
				else{
					alert("Successfuly Form Fill");
					return true;
				}
			});
