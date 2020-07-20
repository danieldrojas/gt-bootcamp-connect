$( document ).ready(function() {
    $(".inline-editable").hover(
         function() {$(this).addClass("editHover"); }, 
         function() { $(this).removeClass("editHover"); }
     );
   
   var oldText,
       newText;
  
   $(".inline-editable").bind("click", replaceHTML)
   
   function replaceHTML() {
       // console.log($(".editing"))
       if(! $(".editing").length){
         oldText = $(this).html()
         $(this).addClass("editing");
         var form = createForm(oldText);
         $(this).html("")
                  .html(form);
         $(this).unbind('click', replaceHTML);
        }
     }
   
   function createForm(text) {
     var form = "<form class=\"inline-editor\">";
     form += "<input type=\"text\" class=\"editBox\" value=\"";
     form += oldText;
     form += "\" /> </form>";
     form += "<a href=\"#\" class=\"btnSave white-text btn \">Save</a>";
     form += "<a href=\"#\" class=\"btnDiscard\">Cancel</a>";
     return form
   }
   
   $(document.body).on("click", ".btnDiscard", function() {
         $(this).parent().html(oldText);
         $(".inline-editable").removeClass("editing");
         $(".inline-editable").bind('click', replaceHTML);
         $(".inline-editable").removeClass("editHover");
   });
   
   $(document.body).on("click", ".btnSave", function() {
        newText = $(this).parent() 
                          .find(".editBox")
                          .val();
        saveChanges(this, newText)
   });
   
   // use enter button
   $(document.body).on("submit", ".inline-editor", function(e) {
      e.preventDefault();
      var newText = $(div).find(".editBox").val()
      saveChanges(this, newText)
   })
 
   function saveChanges(div, newText) {
     
     // get data for DB
     var id =  $(div).parent().attr("id");
     var dataToUpdate = { id : id, text : newText };
     console.log(dataToUpdate)
    
     $(".inline-editable").removeClass("editing");
     $(div).parent().html(newText);
     $(".inline-editable").bind('click', replaceHTML);
     $(".inline-editable").removeClass("editHover");
     
   }
   