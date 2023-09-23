 // Delete a user
 //var url = 'https://jsonplaceholder.typicode.com/todos';

 var url = "https://65095ffef6553137159b4db8.mockapi.io/apiv1/phu";
 var xhr = new XMLHttpRequest();
 xhr.open("DELETE", url + '/11', true);
 xhr.onload = function() {
     var users = JSON.parse(xhr.responseText);
     if (xhr.readyState == 4 && xhr.status == "200") {
         console.table(users);
     } else {
         console.error(users);
     }
 }
 xhr.send(null);