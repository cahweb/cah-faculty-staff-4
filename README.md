# UCF CAH Faculty/Staff Plugin v4.0.0

A WordPress plugin designed to flexibly display faculty and staff entries for departments in the UCF College of Arts and Humanities, built using VueJS.

## How to Use the Plugin

The plugin is activated using the shortcode `[faculty-staff-4]` and presumes that it will be activated on a page with the slug `faculty-staff`. There are several additional options you can pass to the shortcode to control the content and look & feel of the resulting display:

* `dept`\*: (Integer) The department you want to get faculty and staff entries for.
* `multi_dept`: (Boolean) Whether the department code encompasses multiple departments, *e.g.* the School of Performing Arts. *Default: false*
* `include_interests`: (Boolean) Whether to include listed faculty interests on the main listing pages. Interests will always be shown on individual profile pages, if available. *Default: true*
* `has_advising`: (Boolean) Whether to include a subsection for Advising (distinct from Administration). *Default: true*
* `filterable`: (Boolean) Whether to include a list of subdepartments to allow users to filter the results. *Default: true*
* `vertical`: (Boolean) Whether to display the filter as a dropdown menu on the top or a sidebar on the left-hand side of the page. Has no effect if `filterable` is false. *Default: false*
* `img_shape`: (String) The shape of the faculty profile images. Options are `circle` for a circular portrait, `round-square` for a rounded square, or `square` for a normal square. *Default: `circle`*
* `format`: (String) The format of the main landing page. `a-z` displays an A-to-Z List of names (without portraits); `picture` displays the names with portraits. *Default: `a-z`*
* `prog_title_only`: (Boolean) Whether to only use the newer "Program Title" fields for displaying faculty and staff titles. *Default: false*

*\* Required*

***TODO:* Implement a tiered display option, *e.g.* the way things look on the current English or Philosophy faculty-staff pages.**