# Unit Converter App

Allow user to add, remove and define new unit conversion factors. Simultaneously display multiple conversion factors that keep in sync with input.

Start with basic unit conversions like length, mass, time, etc. Later add in API calls for currency conversion. Maybe also cryptocurrency conversion.

## State management

Store conversion factors inside an array of objects. Each object stores factor name and conversion rate, tied to a base unit for each dimension type. For example:

```javascript
lengthFactors = [
  { name: "meter", abbrev: "m", rate: 1 },
  { name: "kilometer", abbrev: "km", rate: 0.001 },
];
```

Additional dimensions like area, currency, temperature can have their factors stored in separate arrays. areaFactors, currencyFactors, etc.

## UI

Select dimension from a horizontal list of options on top row. Can scroll horizontally to access or add more more dimensions.

Conversion factors appear below this in a flexbox list that wraps around. Each factor is a small box with unit name and number value. Click/tap a factor to highlight it and it becomes the active input factor. As you change its value, the other displayed factors dynamically match their values to the correct converted value.

Below factor list is a numpad for entering values.

Factor list may initially be empty or have only a few factors visible. The last element in the list will be an 'add new unit' button. Tapping it brings up a larger list of potential factors you can add. The final element in this list is an option to add new conversion factor. Here user can define a new factor that will be appended to the conversion factor array. User will need to define factor name, abbreviation, conversion rate.

Investigate drag & drop interface to rearrange existing factors as well as to delete them.
