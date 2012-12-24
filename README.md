# Raphaeljs::Maps::Rails

Maps for Raphael JS

Available maps: US, Czech Republic

If you have some other maps please make pull request

## Installation

Add this line to your application's Gemfile:

    gem 'raphaeljs-maps-rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install raphaeljs-maps-rails

## Usage

Insert js files to your application.js

```coffeescript
#= require raphael/maps/map-name
```
United states: us
Czech republic: czech-republic

Add this to your javascript

```coffeescript
window.onload = ->
  # important - we need the original SVG's width and height
  svgWidth = 800
  svgHeight = 600

  R = Raphael("map", "100%", "100%")
  attr =
    fill: "#333"
    stroke: "#666"
    "stroke-opacity": "1"
    "stroke-linejoin": "round"
    "stroke-miterlimit": "4"
    "stroke-width": "0.75"
    "stroke-dasharray": "none"

  raphaelMap = {}

  R.setViewBox 0, 0, svgWidth, svgHeight, true

  # Replace with your Map
  for state of czechRepublicMap
    raphaelMap[state] = R.path(czechRepublicMap[state]).attr(attr)

  for state of raphaelMap
    raphaelMap[state].color = Raphael.getColor()
    ((st, state) ->
      st[0].style.cursor = "pointer"
      st[0].onmouseover = ->
        st.animate
          fill: st.color
        , 500
        st.toFront()
        R.safari()

      st[0].onmouseout = ->
        st.animate
          fill: "#333"
        , 500
        st.toFront()
        R.safari()

    ) raphaelMap[state], state
```

And show it in your app

```haml
#map
```

## Thanks

Map responsive : Gabriel Florit ( https://github.com/robflaherty/us-map-raphael )
US map: Rob Flaherty ( https://github.com/robflaherty/us-map-raphael )
Czech Rebublic map: Karmi ( http://data.karmi.cz/varia/czech-republic-regions-html/czech-republic-regions.html )

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
