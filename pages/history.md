## Founded in 2016

Remember that group of theater kids that took things a little too seriously? You couldn't talk to them before the show because they were ‘getting in the zone’, they were ‘in character’ at lunch…you were afraid they would literally hiss at you the opening night of Cats? Well that’s us, but add a little...kink. In short, we’re spankos that take roleplay very seriously.

## Meet The Organizers

Bri: Adventurous, troublemaking (but always with a smile!)

Em: Fearless and strong

Mr. Hayes: Probably busy lecturing somebody

Mystery Organizer: New description

## More Lore

Here is where more Cheeky lore will go.
        
{% assign image_files = site.static_files | where_exp: "item", "item.path contains '/assets/images/history/'" %}
{% assign image_paths = image_files | map: 'path' | sort %}


<div class="history-gallery" data-images='{{ image_paths | jsonify }}'>
    <div class="gallery-image-container">
        <img class="gallery-image" src="" alt="History gallery image">
    </div>
    <button class="gallery-nav prev" aria-label="Previous image">&#10094;</button>
    <button class="gallery-nav next" aria-label="Next image">&#10095;</button>
    <div class="gallery-counter"></div>
</div>
