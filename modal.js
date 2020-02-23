showmodal = function(text,footer,title,header){
	header = (header)?header:'message';
	footer = (footer)?footer:'';
	title = (title)?title:'';
	if (document.modalwindow){
		
		
		
	}else{

		document.modalwindow = document.createElement("div");
		document.modalwindow.innerHTML=`
		
			<div id="myModal" class="modal">
			  <div class="modal-content">
				<div class="modal-header">
				  <span class="close">&times;</span>
				  <h2>${header}</h2>
				</div>
				<div class="modal-body">
				  <p>${title}</p>
				  <p>${text}</p>
				</div>
				<div class="modal-footer">
				  <h3>${footer}</h3>
				</div>
			  </div>

			</div>
		`;
		document.modalwindow.style='color:red;background:yellow';
		document.body.appendChild(document.modalwindow);
		
		
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = `
		/* The Modal (background) */
		.modal {
		  display: none; /* Hidden by default */
		  position: fixed; /* Stay in place */
		  z-index: 1; /* Sit on top */
		  padding-top: 100px; /* Location of the box */
		  left: 0;
		  top: 0;
		  width: 100%; /* Full width */
		  height: 100%; /* Full height */
		  overflow: auto; /* Enable scroll if needed */
		  background-color: rgb(0,0,0); /* Fallback color */
		  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
		}

		/* Modal Content */
		.modal-content {
		  position: relative;
		  background-color: #fefefe;
		  margin: auto;
		  padding: 0;
		  border: 1px solid #888;
		  width: 80%;
		  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
		  -webkit-animation-name: animatetop;
		  -webkit-animation-duration: 0.4s;
		  animation-name: animatetop;
		  animation-duration: 0.4s
		}

		/* Add Animation */
		@-webkit-keyframes animatetop {
		  from {top:-300px; opacity:0} 
		  to {top:0; opacity:1}
		}

		@keyframes animatetop {
		  from {top:-300px; opacity:0}
		  to {top:0; opacity:1}
		}

		/* The Close Button */
		.close {
		  color: white;
		  float: right;
		  font-size: 28px;
		  font-weight: bold;
		}

		.close:hover,
		.close:focus {
		  color: #000;
		  text-decoration: none;
		  cursor: pointer;
		}

		.modal-header {
		  padding: 2px 16px;
		  background-color: #5cb85c;
		  color: white;
		}

		.modal-body {padding: 2px 16px;}

		.modal-footer {
		  padding: 2px 16px;
		  background-color: #5cb85c;
		  color: white;
		}
		`;
		document.getElementsByTagName('head')[0].appendChild(style);
		
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			var modal = document.getElementById("myModal");
		  modal.style.display = "none";
		}

		
		}/*endif block*/
		
		// Get the modal
		var modal = document.getElementById("myModal");

		// Get the button that opens the modal
		var btn = document.getElementById("myBtn");
		modal.style.display = "block";
		
		window.addEventListener("click",(e)=>{
			modal = document.getElementById("myModal");
			if (event.target == modal) {
				modal.style.display = "none";
			}
			
		});		
		
		
	};
