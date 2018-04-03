$(document).ready(function(){
 
  $('#search').click(function(){
    
   var search= $('#searchTerm').val();
    
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ search +"&format=json&callback=?";
   
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType: "json",
      success: function(data){
       
      $('#output').html('');
     for(var i=0;i<data[1].length;i++){
        $('#output').prepend("<li><a href= "+data[3][i]+">"+data[1][i] +"</a><p>"+data[2][i]+"</p></li>");
     }
      },
     
      error: function(errorMessage){
        alert("Error");
      }    
    });
    document.getElementById("searchTerm").value = "";
  });
  $('#Clear').click(function(){
    $('#output').html('');
    document.getElementById("searchTerm").value = "";
  });
 
  $('#searchTerm').keypress(function(e){
    if(e.which==13){$('#search').click();
                   }
  });
});