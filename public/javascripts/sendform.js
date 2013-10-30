$('#savetv').click(function(){  

	var nametitle=$("#title").val();
	var year=$("#year").val();
	var country=$("#country").val();
	var poster=$("#poster").val();
	var seasons=$("#seasons").val();
	var genre=$("#genre").val();
	var summary=$("#summary").val();
	
     $.ajax({ 
           url: '/tvshow',
           type: 'POST',
			  contentType: "application/json",
			  dataType: "json",
			  data: '{"title": "' + nametitle + '", "year" : "' + year + '", "country" : "' + country + '", "poster" : "' + poster + '", "seasons" : "' + seasons + '", "genre" : "' + genre + '", "summary" : "' + summary + '"}', 
           success: function(data){
              alert('Se ha añadido una nueva Serie de TV!');
				  //alert(data._id);
				  console.log(data);
				  $('#entrada').html('<a href="/tvshow/'+ data._id +'">Ver '+data.nametitle+' en el API >></a> ');
				  $('#panel-entrada').show();
           }
           , error: function(jqXHR, textStatus, err){
               alert('text status '+textStatus+', err '+err)
           }
        })
		  return false;
     }); 