// Example of preventing default behavior
document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default behavior
      // Your radio button click handling code here
    });
  });
  


// function to validate class based on airline
document.addEventListener("DOMContentLoaded", function() {
    const airlineSelect = document.getElementById("airline");
    const businessRadio = document.getElementById("radio-class-2");
    
    // Function to enable/disable the business radio button based on the selected airline
    function updateBusinessRadio() {
        if (airlineSelect.value === "vistara" || airlineSelect.value === "air_india") {
            businessRadio.disabled = false;
             // Reset the selection
        } else {
            businessRadio.checked = false;
            businessRadio.disabled = true;
        }
    }
    
    // Event listener for airline selection
    airlineSelect.addEventListener("change", updateBusinessRadio);
    
    // Initialize the state of the business radio button
    updateBusinessRadio();
    
    // Event listener for business radio button selection
    businessRadio.addEventListener("change", function() {
        if (businessRadio.checked) {
            updateBusinessRadio();
        }
    });
  });
  
  
  
  // validate selected source and destination
  document.addEventListener("DOMContentLoaded", function() {
    const sourceSelect = document.getElementById("source");
    const destSelect = document.getElementById("Destination");
  
    // Disable the destination dropdown by default
    destSelect.disabled = true;
  
    // Function to update the options based on the selected source and destination
    function updateOptions() {
        const selectedSource = sourceSelect.value;
  
        // Enable or disable the destination dropdown based on whether a source is selected
        destSelect.disabled = !selectedSource;
  
        // Enable all options first
        const allOptions = document.querySelectorAll("select.airline option");
        allOptions.forEach(function(option) {
            option.disabled = false;
        });
  
        // Disable options that match the selected source in the destination dropdown
        const destOptions = destSelect.querySelectorAll("option");
        destOptions.forEach(function(option) {
          //  console.log((selectedSource.substring(0, selectedSource.length() - 1)+"d"))
            if (selectedSource && option.value === (selectedSource.substring(0, selectedSource.length - 1)+"d")){
                option.disabled = true;
            }
        });
    }
  
    // Event listener for source and destination selections
    sourceSelect.addEventListener("change", updateOptions);
    destSelect.addEventListener("change", updateOptions);
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  function get_days_left() {
      var days = document.getElementsByName("daysRemaining")[0].value;
  
            return parseInt(days);
        }
  function get_stops()
  {
    var uistops=document.getElementsByName("stop")
    for (var i=0;i<uistops.length;i++){
      if(uistops[i].checked){
        return uistops[i].value
      }
    }
  }
  
  function get_cls()
  {
    var uicls=document.getElementsByName("class")
    for (var i=0;i<uicls.length;i++){
      if(uicls[i].checked){
        return uicls[i].value
      }
    }
  }
  
    
    function onClickedEstimatePrice() {
      console.log("Estimate price button clicked");
      var airline = document.getElementById("airline");
      var days = get_days_left();
      var cls=get_cls();
      var stops=get_stops();
      var source=document.getElementById("source");
      var des=document.getElementById("Destination");
      var arri=document.getElementById("Arrival");
      var dep=document.getElementById("Departure");
      var estPrice = document.getElementById("uiEstimatedPrice");
  
  
  
    
      var url = "http://127.0.0.1:5000/predict_price"; //Use this if you are NOT using nginx which is first 7 tutorials
      // var url = "/api/predict_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
    
      $.post(url, {
        
          airline:airline.value,
          source_city:source.value,
          days_left:days,
          class:cls,
          stops:stops,
          destination_city:des.value,
          arrival_time:arri.value,
          departure_time:dep.value
      },function(data, status) {
          console.log(data.predicted_price);
          estPrice.innerHTML = "<h2> Rs." + data.predicted_price.toString() + "</h2>";
          console.log(status);
      });
    }
    
    