//Gia Nuccio
//lab that gets appi
//11/30/24

// Replace "DEMO_KEY" with your actual NASA API key
const apiKey = "DEMO_KEY"; 

// API URL with the API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

// Fetch data from the NASA APOD API
$.ajax({
    url: apiUrl,
    type: "GET",
    dataType: "json",
    success: function(data) {
        // Log the data to the console
        console.log("NASA APOD Data:", data);

        // Build HTML to display the APOD data
        const apodHTML = `
            <h3>${data.title}</h3>
            <p>${data.date}</p>
            <p>${data.explanation}</p>
            ${
                data.media_type === "image"
                    ? `<img src="${data.url}" alt="${data.title}" style="max-width: 100%; height: auto;">`
                    : `<iframe src="${data.url}" frameborder="0" style="width: 100%; height: 400px;" allowfullscreen></iframe>`
            }
        `;

        // Inject the APOD data into the #output div
        $("#output").html(apodHTML);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        // Log the error details
        console.error("Error fetching NASA APOD data:", textStatus, errorThrown);

        // Display an error message on the webpage
        $("#output").html("<p>Sorry, an error occurred while fetching the NASA APOD data.</p>");
    }
});
