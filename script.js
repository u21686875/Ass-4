$(document).ready(function() {
    // Function to handle the click event on the "submit" button
    $('.submit').on('click', function() {
        var messageText = $('#message').val().trim();

        // Check if the message text is not empty
        if (messageText !== '') {
            // Check if the message contains a YouTube link
            var youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
            var youtubeMatch = messageText.match(youtubeRegex);

            // Create a new div element for the message
            var newMessageDiv = $('<div></div>')
                .addClass('col-4 offset-4 rounded-bottom mb-3')
                .css('width', '33.33%')
                .css('margin-bottom', '15px')
                .html(messageText); // Use .html() to preserve any HTML content

            // If a YouTube link is detected, append an iframe
            if (youtubeMatch) {
                var videoId = youtubeMatch[1];
                var iframe = $('<iframe></iframe>')
                    .attr('width', '100%')
                    .attr('height', '315px')
                    .attr('src', 'https://www.youtube.com/embed/' + videoId)
                    .attr('frameborder', '0')
                    .attr('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
                    .attr('allowfullscreen', true);

                newMessageDiv.append(iframe);
            }

            // Append the new message div to the "messages" div
            $('.messages').prepend(newMessageDiv);

            // Clear the textarea
            $('#message').val('');
        }
    });
});
