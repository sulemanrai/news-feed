


// Retrieve the template data from the HTML (jQuery is used here).
var template = $('#handlebars-demo').html();


// Compile the template data into a function
var templateScript = Handlebars.compile(template);


fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ce5f1f9730a8416baae53b894b531a3a')
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
       var context = data.articles;
       var html = templateScript(context);


        // Insert the HTML code into the page
        $('#template-to-render').append(html);
        if (typeof custom_init !== 'undefined' && $.isFunction(custom_init)) {
            custom_init();
        }

    })
    .catch(err => {
        // Do something for an error here
    })

Handlebars.registerHelper('_if', function(v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);

    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    } [operator];
});

HandlebarsIntl.registerWith(Handlebars);

// A $( document ).ready() block.
$( document ).ready(function() {
    $('#demo-country-picker').flagStrap();
});


